> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/extendedlanguagetag](https://developer.apple.com/documentation/mediaextension/metrackinfo/extendedlanguagetag)

# extendedLanguageTag (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.

## Declaration

```swift
var extendedLanguageTag: String? { get set }
```

<a id="Discussion"></a>

## Discussion

`MediaToolbox` uses this property to group similar language tracks together or to match audio and caption tracks. Set this value to `nil` if the track doesn’t have a language tag.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.

# extendedLanguageTag (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * extendedLanguageTag;
```

<a id="Discussion"></a>

## Discussion

`MediaToolbox` uses this property to group similar language tracks together or to match audio and caption tracks. Set this value to `nil` if the track doesn’t have a language tag.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [enabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [formatDescriptions](formatdescriptions.md): An array of format descriptions for the track.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
- [trackEdits](trackedits.md): An array of edit segments for the given track.
