> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursorchunk](https://developer.apple.com/documentation/mediaextension/mesamplecursorchunk)

# MESampleCursorChunk (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the chunk of media at the location of a sample.

## Declaration

```swift
class MESampleCursorChunk
```

<a id="overview"></a>

## Overview

The [chunkDetails()](mesamplecursor/chunkdetails%28%29.md) method returns an instance of this class.

## Topics

### Creating a sample cursor chunk

- [init(byteSource:chunkStorageRange:chunkInfo:sampleIndexWithinChunk:)](mesamplecursorchunk/init%28bytesource_chunkstoragerange_chunkinfo_sampleindexwithinchunk_%29.md): Creates a new sample cursor chunk with byte source and chunk data that you provide.

### Inspecting a chunk

- [byteSource](mesamplecursorchunk/bytesource.md): The byte source to use to read the data for the sample.
- [chunkStorageRange](mesamplecursorchunk/chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [chunkInfo](mesamplecursorchunk/chunkinfo.md): An object that provides details about the chunk in the media.
- [sampleIndexWithinChunk](mesamplecursorchunk/sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.

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
- [MEEstimatedSampleLocation](meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.
- [MEHEVCDependencyInfo](mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.

# MESampleCursorChunk (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that provides information about the chunk of media at the location of a sample.

## Declaration

```objectivec
@interface MESampleCursorChunk : NSObject
```

<a id="overview"></a>

## Overview

The [chunkDetailsReturningError:](mesamplecursor/chunkdetails%28%29.md) method returns an instance of this class.

## Topics

### Creating a sample cursor chunk

- [initWithByteSource:chunkStorageRange:chunkInfo:sampleIndexWithinChunk:](mesamplecursorchunk/init%28bytesource_chunkstoragerange_chunkinfo_sampleindexwithinchunk_%29.md): Creates a new sample cursor chunk with byte source and chunk data that you provide.

### Inspecting a chunk

- [byteSource](mesamplecursorchunk/bytesource.md): The byte source to use to read the data for the sample.
- [chunkStorageRange](mesamplecursorchunk/chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [chunkInfo](mesamplecursorchunk/chunkinfo.md): An object that provides details about the chunk in the media.
- [sampleIndexWithinChunk](mesamplecursorchunk/sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Sample cursors

- [MESampleCursor](mesamplecursor.md): A protocol that defines the information to provide about samples within a track of a media asset, and enables stepping through samples in the track in decode or presentation order.
- [MESampleLocation](mesamplelocation.md): An object that provides information about the sample location with the media.
- [MEEstimatedSampleLocation](meestimatedsamplelocation.md): An object that provides information about the estimated sample location with the media.
- [MEHEVCDependencyInfo](mehevcdependencyinfo.md): An object that provides information about the HEVC dependency attributes of a sample.
