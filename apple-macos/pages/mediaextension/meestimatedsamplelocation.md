> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meestimatedsamplelocation](https://developer.apple.com/documentation/mediaextension/meestimatedsamplelocation)

# MEEstimatedSampleLocation (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the estimated sample location with the media.

## Declaration

```swift
class MEEstimatedSampleLocation
```

## Topics

### Creating an estimated sample location

- [init(byteSource:estimatedSampleLocation:refinementDataLocation:)](meestimatedsamplelocation/init%28bytesource_estimatedsamplelocation_refinementdatalocation_%29.md): Creates an estimated sample location object with the byte source, sample location, and data location that you specify.

### Inspecting an estimated sample location

- [byteSource](meestimatedsamplelocation/bytesource.md): The byte source to use to read the data for the sample.
- [estimatedSampleLocation](meestimatedsamplelocation/estimatedsamplelocation.md): The estimated starting file offset and size in bytes of the sample.
- [refinementDataLocation](meestimatedsamplelocation/refinementdatalocation.md): The starting file offset and size in bytes of the data necessary to provide an accurate sample location.

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
- [MEHEVCDependencyInfo](mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.

# MEEstimatedSampleLocation (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the estimated sample location with the media.

## Declaration

```objectivec
@interface MEEstimatedSampleLocation : NSObject
```

## Topics

### Creating an estimated sample location

- [initWithByteSource:estimatedSampleLocation:refinementDataLocation:](meestimatedsamplelocation/init%28bytesource_estimatedsamplelocation_refinementdatalocation_%29.md): Creates an estimated sample location object with the byte source, sample location, and data location that you specify.

### Inspecting an estimated sample location

- [byteSource](meestimatedsamplelocation/bytesource.md): The byte source to use to read the data for the sample.
- [estimatedSampleLocation](meestimatedsamplelocation/estimatedsamplelocation.md): The estimated starting file offset and size in bytes of the sample.
- [refinementDataLocation](meestimatedsamplelocation/refinementdatalocation.md): The starting file offset and size in bytes of the data necessary to provide an accurate sample location.

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
- [MEHEVCDependencyInfo](mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.
