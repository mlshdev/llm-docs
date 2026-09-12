> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmutablefiledatabuffer](https://developer.apple.com/documentation/fskit/fsmutablefiledatabuffer)

# FSMutableFileDataBuffer (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A wrapper object for a data buffer.

## Declaration

```swift
class FSMutableFileDataBuffer
```

<a id="overview"></a>

## Overview

This object provides a “zero-copy” buffer, for use when reading data from files. By not requiring additional buffer copying, this object reduces the extension’s memory footprint and improves performance. The `FSMutableFileDataBuffer` behaves similarly to a `uio` in the kernel.

## Topics

### Accessing buffer properties

- [withUnsafeMutableBytes(\_:)](fsmutablefiledatabuffer/withunsafemutablebytes%28__%29.md): Performs the given closure with an unsafe pointer to the underlying bytes of the data buffer.
- [length](fsmutablefiledatabuffer/length.md): The data length of the buffer.

### Instance Methods

- [createMutableRawSpan()](fsmutablefiledatabuffer/createmutablerawspan%28%29.md): Return a MutableRawSpan to the underlying bytes of the data buffer.

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

## See Also

### Reading and writing

- [read(from:at:length:into:replyHandler:)](fsvolume/readwritehandler/read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSReadFileResult](fsreadfileresult.md): The result of a read-file call.
- [write(contents:to:at:replyHandler:)](fsvolume/readwritehandler/write%28contents_to_at_replyhandler_%29.md): Writes contents to the given file item.
- [FSWriteFileResult](fswritefileresult.md): The result of a read-file call.

# FSMutableFileDataBuffer (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A wrapper object for a data buffer.

## Declaration

```objectivec
@interface FSMutableFileDataBuffer : NSObject
```

<a id="overview"></a>

## Overview

This object provides a “zero-copy” buffer, for use when reading data from files. By not requiring additional buffer copying, this object reduces the extension’s memory footprint and improves performance. The `FSMutableFileDataBuffer` behaves similarly to a `uio` in the kernel.

## Topics

### Accessing buffer properties

- [mutableBytes](fsmutablefiledatabuffer/mutablebytes.md): The byte data.
- [length](fsmutablefiledatabuffer/length.md): The data length of the buffer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Reading and writing

- [readFromFile:offset:length:intoBuffer:replyHandler:](fsvolume/readwritehandler/read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSReadFileResult](fsreadfileresult.md): The result of a read-file call.
- [writeContents:toFile:atOffset:replyHandler:](fsvolume/readwritehandler/write%28contents_to_at_replyhandler_%29.md): Writes contents to the given file item.
- [FSWriteFileResult](fswritefileresult.md): The result of a read-file call.
