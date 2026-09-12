> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/trackid](https://developer.apple.com/documentation/mediaextension/metrackinfo/trackid)

# trackID (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An integer that identifies the track within the media asset.

## Declaration

```swift
var trackID: CMPersistentTrackID { get }
```

<a id="Discussion"></a>

## Discussion

The track ID uniquely identifes the track within a [MEFormatReader](../meformatreader.md) object. Track IDs must be unique within a media asset but don’t need to be unique across assets. If a media format doesn’t have a native concept of track IDs, track IDs can start from `1`. However, track ID `0` is a reserved value to indicate an invalid track ID.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.

# trackID (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An integer that identifies the track within the media asset.

## Declaration

```objectivec
@property (nonatomic, readonly) CMPersistentTrackID trackID;
```

<a id="Discussion"></a>

## Discussion

The track ID uniquely identifes the track within a [MEFormatReader](../meformatreader.md) object. Track IDs must be unique within a media asset but don’t need to be unique across assets. If a media format doesn’t have a native concept of track IDs, track IDs can start from `1`. However, track ID `0` is a reserved value to indicate an invalid track ID.

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [enabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [formatDescriptions](formatdescriptions.md): An array of format descriptions for the track.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
- [trackEdits](trackedits.md): An array of edit segments for the given track.
