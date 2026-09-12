> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplelocation](https://developer.apple.com/documentation/mediaextension/mesamplelocation)

# MESampleLocation (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the sample location with the media.

## Declaration

```swift
class MESampleLocation
```

## Topics

### Creating a sample location

- [init(byteSource:sampleLocation:)](mesamplelocation/init%28bytesource_samplelocation_%29.md): Creates a sample location object with the byte source and sample location that you specify.

### Inspecting a sample location

- [byteSource](mesamplelocation/bytesource.md): The byte source to use to read the data for the sample.
- [sampleLocation](mesamplelocation/samplelocation.md): The starting file offset and size in bytes of the sample.

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
- [MESampleCursorChunk](mesamplecursorchunk.md): An object that provides information about the chunk of media at the location of a sample.
- [MEEstimatedSampleLocation](meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.
- [MEHEVCDependencyInfo](mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.

# MESampleLocation (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the sample location with the media.

## Declaration

```objectivec
@interface MESampleLocation : NSObject
```

## Topics

### Creating a sample location

- [initWithByteSource:sampleLocation:](mesamplelocation/init%28bytesource_samplelocation_%29.md): Creates a sample location object with the byte source and sample location that you specify.

### Inspecting a sample location

- [byteSource](mesamplelocation/bytesource.md): The byte source to use to read the data for the sample.
- [sampleLocation](mesamplelocation/samplelocation.md): The starting file offset and size in bytes of the sample.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Sample cursors

- [MESampleCursor](mesamplecursor.md): A protocol that defines the information to provide about samples within a track of a media asset, and enables stepping through samples in the track in decode or presentation order.
- [MESampleCursorChunk](mesamplecursorchunk.md): An object that provides information about the chunk of media at the location of a sample.
- [MEEstimatedSampleLocation](meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.
- [MEHEVCDependencyInfo](mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.
