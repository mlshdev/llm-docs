> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/naturalsize](https://developer.apple.com/documentation/mediaextension/metrackinfo/naturalsize)

# naturalSize (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Indicates the natural dimensions of the media data referenced by the track.

## Declaration

```swift
var naturalSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

This property is only valid for tracks with visual media types and is [zero](https://developer.apple.com/documentation/corefoundation/cgsize/zero) for other track types.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.

# naturalSize (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Indicates the natural dimensions of the media data referenced by the track.

## Declaration

```objectivec
@property (nonatomic) CGSize naturalSize;
```

<a id="Discussion"></a>

## Discussion

This property is only valid for tracks with visual media types and is [zero](https://developer.apple.com/documentation/corefoundation/cgsize/zero) for other track types.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [enabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [formatDescriptions](formatdescriptions.md): An array of format descriptions for the track.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
- [trackEdits](trackedits.md): An array of edit segments for the given track.
