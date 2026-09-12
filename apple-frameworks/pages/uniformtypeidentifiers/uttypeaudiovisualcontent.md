> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeaudiovisualcontent](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeaudiovisualcontent)

# UTTypeAudiovisualContent

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A base type that represents data that contains video content that may or may not also include audio.

## Declaration

```objectivec
extern UTType * const UTTypeAudiovisualContent;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.audiovisual-content`.

This type conforms to [UTTypeContent](uttypecontent.md) and [UTTypeData](uttypedata.md).

## See Also

### Image, audio, and video base types

- [UTTypeImage](uttypeimage.md): A base type that represents image data.
- [UTTypeAudio](uttypeaudio.md): A type that represents audio that doesn’t contain video.
- [UTTypeMovie](uttypemovie.md): A base type representing media formats that may contain both video and audio.
- [UTTypeVideo](uttypevideo.md): A type that represents video that doesn’t contain audio.
