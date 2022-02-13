import React from 'react'
import './meme.css';

export default function Meme() {
    console.log("Meme component rendered!")

    interface Form {
        firstSentence: string,
        secondSentence: string
    }

    interface MemeData {
        id: string,
        "name": string,
        "url": string,
        "width": number,
        "height": number,
        "box_count": number
    }

    interface Meme {
        firstSentence: string,
        secondSentence: string,
        imageUrl: string
    }

    const [formData, setFormData] = React.useState<Form>({
      firstSentence: "",
      secondSentence: ""
    })
    const [allMemeImages, setAllMemeImages] = React.useState<MemeData[]>([])
    const [meme, setMeme] = React.useState<Meme>({
      firstSentence: "",
      secondSentence: "",
      imageUrl: ""
    })

    React.useEffect(() => {
      console.log("Memes loaded from API!")
      const memeUrl = "https://api.imgflip.com/get_memes"

      fetch(memeUrl)
      .then(response => response.json())
      .then(data => {
        setAllMemeImages(data.data.memes)
        setMeme((prevMeme) => {
          const randomInt = Math.floor(Math.random() * 100)
          return {
            ...prevMeme,
            imageUrl: data.data.memes[randomInt].url
          }
        })
      })
    }, [])

    function clearForm(): void {
      setFormData(() => {
        return {
          firstSentence: "",
          secondSentence: ""
        }
      })
    }

    function clickHandler(): void {
      setMeme(() => {
        const randomInt = Math.floor(Math.random() * 100)
        return {
          firstSentence: formData.firstSentence,
          secondSentence: formData.secondSentence,
          imageUrl: allMemeImages[randomInt].url
        }
      })
      clearForm()
    }

    function textChange(event: React.ChangeEvent<HTMLInputElement>): void {
      setFormData(prevFormData => {
        const {name, value} = event.target
        return {
          ...prevFormData,
          [name]: value
        }
      })
    }

    return(
        <main>
          <div className="form">
            <input
              name="firstSentence"
              type="text"
              placeholder="Upper sentence"
              className="firstmeme"
              onChange={textChange}
              value={formData.firstSentence}
            />
            
            <input
              name="secondSentence"
              type="text"
              placeholder="Lower sentence"
              className="secondmeme"
              onChange={textChange}
              value={formData.secondSentence}
            />
            <button className="submitmeme" onClick={clickHandler}>
              Generate a new meme image!
            </button>
          </div>
          <div className="pictureDiv">
            <div className="memeTexts">
              <p className="upperMemeText">{meme.firstSentence}</p>
              <p className="lowerMemeText">{meme.secondSentence}</p>
            </div>
            <img src={meme.imageUrl} className="memeImage" alt="memepicture" />
          </div>
        </main>
    )
}