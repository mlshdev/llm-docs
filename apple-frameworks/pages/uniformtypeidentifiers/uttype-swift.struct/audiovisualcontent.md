> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/audiovisualcontent](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/audiovisualcontent)

# audiovisualContent

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A base type that represents data that contains video content that may or may not also include audio.

## Declaration

```swift
static var audiovisualContent: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.audiovisual-content`.

This type conforms to [UTTypeContent](../uttypecontent.md) and [UTTypeData](../uttypedata.md).

## See Also

### Image, audio, and video base types

- [image](image.md): A base type that represents image data.
- [audio](audio.md): A type that represents audio that doesn’t contain video.
- [movie](movie.md): A base type representing media formats that may contain both video and audio.
- [video](video.md): A type that represents video that doesn’t contain audio.
