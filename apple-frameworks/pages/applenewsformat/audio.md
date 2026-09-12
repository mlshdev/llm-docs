> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/audio](https://developer.apple.com/documentation/applenewsformat/audio)

# Audio

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The component for adding a playable audio clip.

## Declaration

```
object Audio
```

## Properties

- `role` — `string` (required): Always `audio` for this component.
  **Allowed values:** `audio`
- `URL` — `uri` (required): The `URL` of an audio file (`http` or `https` only). This component supports all [AVPlayer](../avfoundation/avplayer.md) audio formats, including the following:

  - MP3: MPEG-1 audio layer 3
  - AAC: MPEG-4 Advanced Audio Coding
  - ALAC: Apple Lossless
  - HE-AAC: MPEG-4 High Efficiency AAC
- `accessibilityCaption` — `string`: A caption that describes the content of the audio file. The text is used for VoiceOver. For more information about VoiceOver, see the [Vision](https://www.apple.com/accessibility/vision/) page in Accessibility. If you don’t provide `accessibilityCaption`, VoiceOver uses the `caption` value.
- `anchor` — `Anchor`: An object that defines vertical alignment with another component.
- `animation` — `(ComponentAnimation | string("none"))`: An object that defines an animation you apply to the component.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentAnimation`, `string("none")`
- `behavior` — `(Behavior | string("none"))`: An object that defines behavior for a component, like [Parallax](parallax.md) or [Springy](springy.md).

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Behavior`, `string("none")`
- `caption` — `string`: A caption that describes the content of the audio file. This text is used by VoiceOver if `accessibilityCaption` is not provided, or it can be shown when the audio cannot be played.  For more information about VoiceOver, see the [Vision](https://www.apple.com/accessibility/vision/) page in Accessibility.
- `conditional` — `(ConditionalComponent | [ConditionalComponent])`: An instance or array of component properties that you can apply conditionally, and the conditions that cause Apple News Format to apply them.
  **Allowed types:** `ConditionalComponent`, `[ConditionalComponent]`
- `explicitContent` — `boolean`: A Boolean value that indicates the audio may contain explicit content.
- `hidden` — `boolean`: A Boolean value that determines whether the component is hidden.
  **Default:** `false`
- `identifier` — `string`: An optional unique identifier for this component. If you use `identifier`, it must be unique across the entire document. You need an `identifie`r for your component if you want to anchor other components to it.
- `imageURL` — `string`: The `URL` of an image file that represents the audio file, such as a cover image.

  Image URLs can begin with `http://`, `https://`, or `bundle://`. If the image URL begins with `bundle://`, the image file must be in the same directory as the document.

  Encode image filenames as `URLs`.

  See [Preparing Image, Video, Audio, Music, and ARKit Assets](../applenews/preparing-image-video-audio-music-and-arkit-assets.md).
- `layout` — `(ComponentLayout | string)`: An inline `ComponentLayout` object that contains layout information, or a string reference to a `ComponentLayout` object that you define at the top level of the document.

  If you don’t define `layout`, size and position are based on various factors, such as the device type, the length of the content, and the `role` of this component.  
  **Allowed types:** `ComponentLayout`, `string`
- `style` — `(ComponentStyle | string | string("none"))`: An inline `ComponentStyle` object that defines the appearance of this component, or a string reference to a `ComponentStyle` object that you define at the top level of the document.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentStyle`, `string`, `string("none")`

## Mentioned In

- [Preparing Image, Video, Audio, Music, and ARKit Assets](../applenews/preparing-image-video-audio-music-and-arkit-assets.md)
- [Using HTML with Apple News Format](../applenews/using-html-with-apple-news-format.md)

<a id="Discussion"></a>

## Discussion

`Audio` is the abstract definition for all audio components. You can also include an image that represents your audio file.

See [Preparing Image, Video, Audio, Music, and ARKit Assets](../applenews/preparing-image-video-audio-music-and-arkit-assets.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "audio",
      "URL": "http://example.com/files/sample.mp3",
      "caption": "Listen up!"
    }
  ]
}
```

## Relationships

### Inherits From

- [Component](component.md)

## See Also

### Audio and Video

- [Music](music.md): The component for adding a playable music file.
- [Podcast](podcast.md): The component for adding a Podcast show or episode.
- [Video](video.md): The component for adding a video.
- [EmbedWebVideo](embedwebvideo.md): The component for adding a web video from Dailymotion, Vimeo, or YouTube.
