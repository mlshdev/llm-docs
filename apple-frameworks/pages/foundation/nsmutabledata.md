> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata](https://developer.apple.com/documentation/foundation/nsmutabledata)

# NSMutableData (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a dynamic byte buffer in memory.

## Declaration

```swift
class NSMutableData
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [Data](data.md); use [NSMutableData](nsmutabledata.md) when you need reference semantics or other Foundation-specific behavior.

`NSMutableData` and its superclass `NSData` provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects. They are typically used for data storage and are also useful in Distributed Objects applications, where data contained in data objects can be copied or moved between applications. `NSData` creates static data objects, and `NSMutableData` creates dynamic data objects. You can easily convert one type of data object to the other with the initializer that takes an `NSData` object or an  `NSMutableData` object as an argument.

The following [NSData](nsdata.md) methods change when used on a mutable data object:

- [init(bytesNoCopy:length:freeWhenDone:)](nsdata/init%28bytesnocopy_length_freewhendone_%29.md)
- [init(bytesNoCopy:length:deallocator:)](nsdata/init%28bytesnocopy_length_deallocator_%29.md)
- [init(bytesNoCopy:length:)](nsdata/init%28bytesnocopy_length_%29.md)
- [dataWithBytesNoCopy:length:freeWhenDone:](nsdata/datawithbytesnocopy_length_freewhendone_.md)
- [dataWithBytesNoCopy:length:](nsdata/datawithbytesnocopy_length_.md)

When called, the bytes are immediately copied and then the buffer is freed.

`NSMutableData` is “toll-free bridged” with its Core Foundation counterpart, [CFData](../corefoundation/cfdata.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Data](data.md) structure, which bridges to the [NSMutableData](nsmutabledata.md) class and its immutable superclass [NSData](nsdata.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Mutable Data

- [init(capacity:)](nsmutabledata/init%28capacity_%29.md): Returns an initialized mutable data object capable of holding the specified number of bytes.
- [init(length:)](nsmutabledata/init%28length_%29.md): Initializes and returns a mutable data object containing a given number of zeroed bytes.

### Accessing Raw Bytes

- [mutableBytes](nsmutabledata/mutablebytes.md): A pointer to the data contained by the mutable data object.

### Counting Bytes

- [length](nsmutabledata/length.md): The number of bytes contained in the mutable data object.

### Adding Bytes

- [append(\_:length:)](nsmutabledata/append%28__length_%29.md): Appends to the receiver a given number of bytes from a given buffer.
- [append(\_:)](nsmutabledata/append%28__%29.md): Appends the content of another data object to the receiver.
- [increaseLength(by:)](nsmutabledata/increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.

### Modifying Bytes

- [replaceBytes(in:withBytes:)](nsmutabledata/replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [replaceBytes(in:withBytes:length:)](nsmutabledata/replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytes(in:)](nsmutabledata/resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.
- [setData(\_:)](nsmutabledata/setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.

### Compressing and Decompressing Data

- [compress(using:)](nsmutabledata/compress%28using_%29.md): Compresses the data object’s bytes using an algorithm that you specify.
- [decompress(using:)](nsmutabledata/decompress%28using_%29.md): Decompresses the data object’s bytes.
- [NSData.CompressionAlgorithm](nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](nscompressionerrorminimum-swift.var.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.

## Relationships

### Inherits From

- [NSData](nsdata.md)

### Inherited By

- [NSPurgeableData](nspurgeabledata.md)

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProtocol](dataprotocol.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# NSMutableData (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a dynamic byte buffer in memory.

## Declaration

```objectivec
@interface NSMutableData : NSData
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [Data](data.md); use [NSMutableData](nsmutabledata.md) when you need reference semantics or other Foundation-specific behavior.

`NSMutableData` and its superclass `NSData` provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects. They are typically used for data storage and are also useful in Distributed Objects applications, where data contained in data objects can be copied or moved between applications. `NSData` creates static data objects, and `NSMutableData` creates dynamic data objects. You can easily convert one type of data object to the other with the initializer that takes an `NSData` object or an  `NSMutableData` object as an argument.

The following [NSData](nsdata.md) methods change when used on a mutable data object:

- [initWithBytesNoCopy:length:freeWhenDone:](nsdata/init%28bytesnocopy_length_freewhendone_%29.md)
- [initWithBytesNoCopy:length:deallocator:](nsdata/init%28bytesnocopy_length_deallocator_%29.md)
- [initWithBytesNoCopy:length:](nsdata/init%28bytesnocopy_length_%29.md)
- [dataWithBytesNoCopy:length:freeWhenDone:](nsdata/datawithbytesnocopy_length_freewhendone_.md)
- [dataWithBytesNoCopy:length:](nsdata/datawithbytesnocopy_length_.md)

When called, the bytes are immediately copied and then the buffer is freed.

`NSMutableData` is “toll-free bridged” with its Core Foundation counterpart, [CFDataRef](../corefoundation/cfdata.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Data](data.md) structure, which bridges to the [NSMutableData](nsmutabledata.md) class and its immutable superclass [NSData](nsdata.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Mutable Data

- [dataWithCapacity:](nsmutabledata/datawithcapacity_.md): Creates and returns a mutable data object capable of holding the specified number of bytes.
- [dataWithLength:](nsmutabledata/datawithlength_.md): Creates and returns an mutable data object containing a given number of zeroed bytes.
- [initWithCapacity:](nsmutabledata/init%28capacity_%29.md): Returns an initialized mutable data object capable of holding the specified number of bytes.
- [initWithLength:](nsmutabledata/init%28length_%29.md): Initializes and returns a mutable data object containing a given number of zeroed bytes.

### Accessing Raw Bytes

- [mutableBytes](nsmutabledata/mutablebytes.md): A pointer to the data contained by the mutable data object.

### Counting Bytes

- [length](nsmutabledata/length.md): The number of bytes contained in the mutable data object.

### Adding Bytes

- [appendBytes:length:](nsmutabledata/append%28__length_%29.md): Appends to the receiver a given number of bytes from a given buffer.
- [appendData:](nsmutabledata/append%28__%29.md): Appends the content of another data object to the receiver.
- [increaseLengthBy:](nsmutabledata/increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.

### Modifying Bytes

- [replaceBytesInRange:withBytes:](nsmutabledata/replacebytes%28in_withbytes_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [replaceBytesInRange:withBytes:length:](nsmutabledata/replacebytes%28in_withbytes_length_%29.md): Replaces with a given set of bytes a given range within the contents of the receiver.
- [resetBytesInRange:](nsmutabledata/resetbytes%28in_%29.md): Replaces with zeroes the contents of the receiver in a given range.
- [setData:](nsmutabledata/setdata%28__%29.md): Replaces the entire contents of the receiver with the contents of another data object.

### Compressing and Decompressing Data

- [compressUsingAlgorithm:error:](nsmutabledata/compress%28using_%29.md): Compresses the data object’s bytes using an algorithm that you specify.
- [decompressUsingAlgorithm:error:](nsmutabledata/decompress%28using_%29.md): Decompresses the data object’s bytes.
- [NSDataCompressionAlgorithm](nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](nscompressionerrormaximum-c.enum.case.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](nscompressionerrorminimum-c.enum.case.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](nscompressionfailederror-c.enum.case.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](nsdecompressionfailederror-c.enum.case.md): An error code value that indicates a failure to decompress data using the provided algorithm.

## Relationships

### Inherits From

- [NSData](nsdata.md)

### Inherited By

- [NSPurgeableData](nspurgeabledata.md)

## See Also

### Binary Data

- [NSData](nsdata.md): A static byte buffer in memory.
