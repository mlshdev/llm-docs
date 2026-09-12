> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mehevcdependencyinfo](https://developer.apple.com/documentation/mediaextension/mehevcdependencyinfo)

# MEHEVCDependencyInfo (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the HEVC dependency attributes of a sample.

## Declaration

```swift
class MEHEVCDependencyInfo
```

## Topics

### Inspecting the HEVC dependency attributes of a sample

- [hasTemporalSubLayerAccess](mehevcdependencyinfo/hastemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC temporal sublayer access (TSA) picture.
- [hasStepwiseTemporalSubLayerAccess](mehevcdependencyinfo/hasstepwisetemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC stepwise temporal sublayer access (STSA) picture.
- [syncSampleNALUnitType](mehevcdependencyinfo/syncsamplenalunittype.md): The NAL unit type for HEVC sync sample groups.
- [temporalLevel](mehevcdependencyinfo/temporallevel.md): The HEVC temporal level, if available.
- [profileSpace](mehevcdependencyinfo/profilespace.md): The HEVC profile space, if available.
- [tierFlag](mehevcdependencyinfo/tierflag.md): The HEVC tier level flag, if available.
- [profileIndex](mehevcdependencyinfo/profileindex.md): The HEVC profile index, if available.
- [profileCompatibilityFlags](mehevcdependencyinfo/profilecompatibilityflags.md): The HEVC profile compatibility flags (4 bytes), if available.
- [constraintIndicatorFlags](mehevcdependencyinfo/constraintindicatorflags.md): The HEVC constraint indicator flags (6 bytes), if available.
- [levelIndex](mehevcdependencyinfo/levelindex.md): The HEVC level index, if available.

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

### Sample cursors

- [MESampleCursor](mesamplecursor.md): A protocol that defines the information to provide about samples within a track of a media asset, and enables stepping through samples in the track in decode or presentation order.
- [MESampleLocation](mesamplelocation.md): An object that provides information about the sample location with the media.
- [MESampleCursorChunk](mesamplecursorchunk.md): An object that provides information about the chunk of media at the location of a sample.
- [MEEstimatedSampleLocation](meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.

# MEHEVCDependencyInfo (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the HEVC dependency attributes of a sample.

## Declaration

```objectivec
@interface MEHEVCDependencyInfo : NSObject
```

## Topics

### Inspecting the HEVC dependency attributes of a sample

- [temporalSubLayerAccess](mehevcdependencyinfo/hastemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC temporal sublayer access (TSA) picture.
- [stepwiseTemporalSubLayerAccess](mehevcdependencyinfo/hasstepwisetemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC stepwise temporal sublayer access (STSA) picture.
- [syncSampleNALUnitType](mehevcdependencyinfo/syncsamplenalunittype.md): The NAL unit type for HEVC sync sample groups.
- [temporalLevel](mehevcdependencyinfo/temporallevel.md): The HEVC temporal level, if available.
- [profileSpace](mehevcdependencyinfo/profilespace.md): The HEVC profile space, if available.
- [tierFlag](mehevcdependencyinfo/tierflag.md): The HEVC tier level flag, if available.
- [profileIndex](mehevcdependencyinfo/profileindex.md): The HEVC profile index, if available.
- [profileCompatibilityFlags](mehevcdependencyinfo/profilecompatibilityflags.md): The HEVC profile compatibility flags (4 bytes), if available.
- [constraintIndicatorFlags](mehevcdependencyinfo/constraintindicatorflags.md): The HEVC constraint indicator flags (6 bytes), if available.
- [levelIndex](mehevcdependencyinfo/levelindex.md): The HEVC level index, if available.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Sample cursors

- [MESampleCursor](mesamplecursor.md): A protocol that defines the information to provide about samples within a track of a media asset, and enables stepping through samples in the track in decode or presentation order.
- [MESampleLocation](mesamplelocation.md): An object that provides information about the sample location with the media.
- [MESampleCursorChunk](mesamplecursorchunk.md): An object that provides information about the chunk of media at the location of a sample.
- [MEEstimatedSampleLocation](meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.
