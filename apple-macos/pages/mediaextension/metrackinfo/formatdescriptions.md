> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/formatdescriptions](https://developer.apple.com/documentation/mediaextension/metrackinfo/formatdescriptions)

# formatDescriptions

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An array of format descriptions for the track.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray * formatDescriptions;
```

## See Also

### Inspecting track information

- [mediaType](mediatype.md): The media type of the track.
- [trackID](trackid.md): An integer that identifies the track within the media asset.
- [enabled](isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [naturalTimescale](naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
- [trackEdits](trackedits.md): An array of edit segments for the given track.
