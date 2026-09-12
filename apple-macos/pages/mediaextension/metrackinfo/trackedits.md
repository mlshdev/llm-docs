> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/trackedits](https://developer.apple.com/documentation/mediaextension/metrackinfo/trackedits)

# trackEdits

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An array of edit segments for the given track.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSValue *> * trackEdits;
```

<a id="Discussion"></a>

## Discussion

Each value in the array contains a [CMTimeMapping](https://developer.apple.com/documentation/coremedia/cmtimemapping) object that describes the track edit. The [target](https://developer.apple.com/documentation/coremedia/cmtimemapping/target) time ranges for successive edits need to partition the time range from `0` to the track’s duration. In other words, for the first edit at index `0`, the [start](https://developer.apple.com/documentation/coremedia/cmtimerange/start) needs to be [kCMTimeZero](https://developer.apple.com/documentation/coremedia/cmtime/zero), and for each additional edit (index \> 0), the [start](https://developer.apple.com/documentation/coremedia/cmtimerange/start) needs to match the value returned from [CMTimeRangeGetEnd](https://developer.apple.com/documentation/coremedia/cmtimerangegetend%28_:%29) for the edit.

A track can have an empty [trackEdits](trackedits.md) array, which means that there’s nothing in the track and the track duration is `0`. This property is `nil` for media asset formats that don’t support edit segments.

Each NSValue in the array contains a [CMTimeMapping](https://developer.apple.com/documentation/coremedia/cmtimemapping) object describing the track edit. The [target](https://developer.apple.com/documentation/coremedia/cmtimemapping/target) time ranges for successive edits must partition the time range from `0` to the track’s duration. In other words, for edit (index = 0) the [start](https://developer.apple.com/documentation/coremedia/cmtimerange/start) must be [kCMTimeZero](https://developer.apple.com/documentation/coremedia/cmtime/zero), while for edit (index \> 0), the [start](https://developer.apple.com/documentation/coremedia/cmtimerange/start) must match the [CMTimeRangeGetEnd](https://developer.apple.com/documentation/coremedia/cmtimerangegetend%28_:%29) for edit (index - 1). It is valid for a track to have an empty [trackEdits](trackedits.md) array; this means that there is nothing at all in the track and the track duration is zero. If this property is implemented for media asset formats that do not support edit segments, it can return nil.

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
- [nominalFrameRate](nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
