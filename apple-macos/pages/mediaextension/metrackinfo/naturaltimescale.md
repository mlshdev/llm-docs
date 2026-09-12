> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/naturaltimescale](https://developer.apple.com/documentation/mediaextension/metrackinfo/naturaltimescale)

# naturalTimescale (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The natural timescale of the track.

## Declaration

```swift
var naturalTimescale: CMTimeScale { get set }
```

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.

# naturalTimescale (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The natural timescale of the track.

## Declaration

```objectivec
@property (nonatomic) CMTimeScale naturalTimescale;
```

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [enabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [formatDescriptions](formatdescriptions.md): An array of format descriptions for the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
- [trackEdits](trackedits.md): An array of edit segments for the given track.
