> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeappleprotectedmpeg4video](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeappleprotectedmpeg4video)

# UTTypeAppleProtectedMPEG4Video

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents data in Apple-protected MPEG-4 format.

## Declaration

```objectivec
extern UTType * const UTTypeAppleProtectedMPEG4Video;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.apple.protected-mpeg-4-video`.

This type conforms to a base type identified by `com.apple.m4v-video`, which in turn conforms to [UTTypeMPEG4Movie](uttypempeg4movie.md).

## See Also

### Audio and video

- [UTTypeQuickTimeMovie](uttypequicktimemovie.md): A type that represents a QuickTime movie.
- [UTTypeMPEG](uttypempeg.md): A type that represents an MPEG-1 or MPEG-2 movie.
- [UTTypeMPEG2Video](uttypempeg2video.md): A type that represents an MPEG-2 video.
- [UTTypeMPEG2TransportStream](uttypempeg2transportstream.md): A type that represents data in MPEG-2 transport stream movie format.
- [UTTypeMPEG4Movie](uttypempeg4movie.md): A type that represents an MPEG-4 movie.
- [UTTypeMPEG4Audio](uttypempeg4audio.md): A type that represents an MPEG-4 audio layer file.
- [UTTypeAppleProtectedMPEG4Audio](uttypeappleprotectedmpeg4audio.md): A type that represents data in Apple-protected MPEG-4 format.
- [UTTypeAVI](uttypeavi.md): A type that represents data in AVI movie format.
