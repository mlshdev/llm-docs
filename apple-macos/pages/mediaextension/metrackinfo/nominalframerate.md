> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/nominalframerate](https://developer.apple.com/documentation/mediaextension/metrackinfo/nominalframerate)

# nominalFrameRate (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The frame rate of the track in frames per second, as a 32-bit floating point number.

## Declaration

```swift
var nominalFrameRate: Float32 { get set }
```

<a id="Discussion"></a>

## Discussion

For field-based video tracks that carry one field per media sample, the value of this property is the field rate, not the frame rate. `MediaToolbox` uses this property to calculate the maximum playback speed.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.

# nominalFrameRate (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The frame rate of the track in frames per second, as a 32-bit floating point number.

## Declaration

```objectivec
@property (nonatomic) Float32 nominalFrameRate;
```

<a id="Discussion"></a>

## Discussion

For field-based video tracks that carry one field per media sample, the value of this property is the field rate, not the frame rate. `MediaToolbox` uses this property to calculate the maximum playback speed.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [enabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [formatDescriptions](formatdescriptions.md): An array of format descriptions for the track.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
- [trackEdits](trackedits.md): An array of edit segments for the given track.
