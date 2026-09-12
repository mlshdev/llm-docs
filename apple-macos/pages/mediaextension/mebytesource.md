> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource](https://developer.apple.com/documentation/mediaextension/mebytesource)

# MEByteSource (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

Provides read access to the data in a media asset file.

## Declaration

```swift
class MEByteSource
```

<a id="overview"></a>

## Overview

Media Toolbox passes an `MEByteSource` instance for the media asset’s primary file when it initializes an [MEFormatReader](meformatreader.md) object. The format reader may call [byteSourceForRelatedFileName(\_:)](mebytesource/bytesourceforrelatedfilename%28__%29.md) to request additional byte sources for related files in the same directory as the primary file.

## Topics

### Inspecting a byte source

- [fileName](mebytesource/filename.md): The name of the file for the byte source.
- [fileLength](mebytesource/filelength.md): The length of the byte source file.
- [contentType](mebytesource/contenttype.md): The format of the byte source file.
- [relatedFileNamesInSameDirectory](mebytesource/relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.

### Performing operations on a byte source

- [availableLength(at:)](mebytesource/availablelength%28at_%29.md): Gets the number of available bytes from the offset within the byte source.
- [byteSourceForRelatedFileName(\_:)](mebytesource/bytesourceforrelatedfilename%28__%29.md): Creates a new byte source for a related file.
- [read(length:from:completionHandler:)](mebytesource/read%28length_from_completionhandler_%29.md): Reads bytes from a byte source into a data object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MEByteSource (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

Provides read access to the data in a media asset file.

## Declaration

```objectivec
@interface MEByteSource : NSObject
```

<a id="overview"></a>

## Overview

Media Toolbox passes an `MEByteSource` instance for the media asset’s primary file when it initializes an [MEFormatReader](meformatreader.md) object. The format reader may call [byteSourceForRelatedFileName:error:](mebytesource/bytesourceforrelatedfilename%28__%29.md) to request additional byte sources for related files in the same directory as the primary file.

## Topics

### Inspecting a byte source

- [fileName](mebytesource/filename.md): The name of the file for the byte source.
- [fileLength](mebytesource/filelength.md): The length of the byte source file.
- [contentType](mebytesource/contenttype.md): The format of the byte source file.
- [relatedFileNamesInSameDirectory](mebytesource/relatedfilenamesinsamedirectory.md): An array of related file names in the parent directory of the byte source file.

### Performing operations on a byte source

- [availableLengthAtOffset:](mebytesource/availablelength%28at_%29.md): Gets the number of available bytes from the offset within the byte source.
- [byteSourceForRelatedFileName:error:](mebytesource/bytesourceforrelatedfilename%28__%29.md): Creates a new byte source for a related file.
- [readDataOfLength:fromOffset:completionHandler:](mebytesource/read%28length_from_completionhandler_%29.md): Reads bytes from a byte source into a data object.
- [readDataOfLength:fromOffset:toDestination:bytesRead:error:](mebytesource/readdataoflength_fromoffset_todestination_bytesread_error_.md): Reads bytes from a byte source into a buffer.
- [readDataOfLength:fromOffset:toDestination:completionHandler:](mebytesource/readdataoflength_fromoffset_todestination_completionhandler_.md): Reads bytes from a byte source into a buffer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
