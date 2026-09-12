> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo](https://developer.apple.com/documentation/mediaextension/metrackinfo)

# METrackInfo (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that includes track properties parsed from the media asset.

## Declaration

```swift
class METrackInfo
```

## Topics

### Inspecting track information

- [mediaType](metrackinfo/mediatype.md): The media type of the track.
- [trackID](metrackinfo/trackid.md): An integer that identifies the track within the media asset.
- [isEnabled](metrackinfo/isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [naturalTimescale](metrackinfo/naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](metrackinfo/extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](metrackinfo/naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](metrackinfo/preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](metrackinfo/nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](metrackinfo/requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Track readers

- [METrackReader](metrackreader.md): A protocol that defines the information to provide about a track within a media asset.

# METrackInfo (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that includes track properties parsed from the media asset.

## Declaration

```objectivec
@interface METrackInfo : NSObject
```

## Topics

### Creating track info objects

- [initWithMediaType:trackID:formatDescriptions:](metrackinfo/initwithmediatype_trackid_formatdescriptions_.md): Creates a new track info object with the media type, track ID, and format descriptions that you specify.

### Inspecting track information

- [mediaType](metrackinfo/mediatype.md): The media type of the track.
- [trackID](metrackinfo/trackid.md): An integer that identifies the track within the media asset.
- [enabled](metrackinfo/isenabled.md): A Boolean value that indicates whether the track is enabled by default.
- [formatDescriptions](metrackinfo/formatdescriptions.md): An array of format descriptions for the track.
- [naturalTimescale](metrackinfo/naturaltimescale.md): The natural timescale of the track.
- [extendedLanguageTag](metrackinfo/extendedlanguagetag.md): A string that indicates the language tag associated with the track, as an IETF BCP 47 (RFC 4646) language identifier.
- [naturalSize](metrackinfo/naturalsize.md): Indicates the natural dimensions of the media data referenced by the track.
- [preferredTransform](metrackinfo/preferredtransform.md): Indicates the preferred affine display transform of the track media for visual display.
- [nominalFrameRate](metrackinfo/nominalframerate.md): The frame rate of the track in frames per second, as a 32-bit floating point number.
- [requiresFrameReordering](metrackinfo/requiresframereordering.md): A Boolean value that indicates whether frame reordering occurs in the track.
- [trackEdits](metrackinfo/trackedits.md): An array of edit segments for the given track.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Track readers

- [METrackReader](metrackreader.md): A protocol that defines the information to provide about a track within a media asset.
