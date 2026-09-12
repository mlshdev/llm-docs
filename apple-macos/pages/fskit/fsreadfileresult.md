> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsreadfileresult](https://developer.apple.com/documentation/fskit/fsreadfileresult)

# FSReadFileResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a read-file call.

## Declaration

```swift
class FSReadFileResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [read(from:at:length:into:replyHandler:)](fsvolume/readwritehandler/read%28from_at_length_into_replyhandler_%29.md).

## Topics

### Creating a read-file result

- [init(bytesRead:itemAttributes:)](fsreadfileresult/init%28bytesread_itemattributes_%29.md): Creates a result for a file-reading operation.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Reading and writing

- [read(from:at:length:into:replyHandler:)](fsvolume/readwritehandler/read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSMutableFileDataBuffer](fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [write(contents:to:at:replyHandler:)](fsvolume/readwritehandler/write%28contents_to_at_replyhandler_%29.md): Writes contents to the given file item.
- [FSWriteFileResult](fswritefileresult.md): The result of a read-file call.

# FSReadFileResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a read-file call.

## Declaration

```objectivec
@interface FSReadFileResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [readFromFile:offset:length:intoBuffer:replyHandler:](fsvolume/readwritehandler/read%28from_at_length_into_replyhandler_%29.md).

## Topics

### Creating a read-file result

- [initWithBytesRead:itemAttributes:](fsreadfileresult/init%28bytesread_itemattributes_%29.md): Creates a result for a file-reading operation.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Reading and writing

- [readFromFile:offset:length:intoBuffer:replyHandler:](fsvolume/readwritehandler/read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSMutableFileDataBuffer](fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [writeContents:toFile:atOffset:replyHandler:](fsvolume/readwritehandler/write%28contents_to_at_replyhandler_%29.md): Writes contents to the given file item.
- [FSWriteFileResult](fswritefileresult.md): The result of a read-file call.
