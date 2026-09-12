> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/artwork](https://developer.apple.com/documentation/applemusicapi/artwork)

# Artwork

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

An object that represents artwork.

## Declaration

```
object Artwork
```

## Properties

- `bgColor` — `string`: The average background color of the image.
- `height` — `number` (required): The maximum height available for the image.
- `width` — `number` (required): The maximum width available for the image.
- `textColor1` — `string`: The primary text color used if the background color gets displayed.
- `textColor2` — `string`: The secondary text color used if the background color gets displayed.
- `textColor3` — `string`: The tertiary text color used if the background color gets displayed.
- `textColor4` — `string`: The final post-tertiary text color used if the background color gets displayed.
- `url` — `string` (required): The URL to request the image asset. `{w}x{h}`must precede image filename, as placeholders for the `width` and `height` values as described above. For example, `{w}x{h}bb.jpeg`).
