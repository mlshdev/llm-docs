> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata](https://developer.apple.com/documentation/foundation/nsdata)

# NSData (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static byte buffer in memory.

## Declaration

```swift
class NSData
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

In Swift, the buffer bridges to [Data](data.md); use [NSData](nsdata.md) when you need reference semantics or other Foundation-specific behavior.

[NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) and its mutable subclass [NSMutableData](nsmutabledata.md) provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects.

The size of the data is subject to a theoretical limit of about 8 exabytes (1 EB = 10¹⁸ bytes; in practice, the limit should not be a factor).

[NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) is *toll-free bridged* with its Core Foundation counterpart, [CFData](../corefoundation/cfdata.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Data](data.md) structure, which bridges to the [NSData](nsdata.md) class and its mutable subclass [NSMutableData](nsmutabledata.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Writing-Data-Atomically"></a>

### Writing Data Atomically

[NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) provides methods for atomically saving their contents to a file, which guarantee that the data is either saved in its entirety, or it fails completely. An atomic write first writes the data to a temporary file and then, only if this write succeeds, moves the temporary file to its final location.

Although atomic write operations minimize the risk of data loss due to corrupt or partially written files, they may not be appropriate when writing to a temporary directory, the user’s home directory or other publicly accessible directories. When you work with a publicly accessible file, treat that file as an untrusted and potentially dangerous resource. An attacker may compromise or corrupt these files. The attacker can also replace the files with hard or symbolic links, causing your write operations to overwrite or corrupt other system resources.

Avoid using the [write(to:atomically:)](nsdata/write%28to_atomically_%29.md) method (and the related methods) when working inside a publicly accessible directory. Instead, use [FileHandle](filehandle.md) with an existing file descriptor to securely write the file.

For more information, see [Securing File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585-SW9) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## Topics

### Creating Data

- [init(bytes:length:)](nsdata/init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [init(bytesNoCopy:length:)](nsdata/init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [init(bytesNoCopy:length:deallocator:)](nsdata/init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [init(bytesNoCopy:length:freeWhenDone:)](nsdata/init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
- [init(data:)](nsdata/init%28data_%29.md): Initializes a data object with the contents of another data object.

### Reading Data from a File

- [init(contentsOfFile:)](nsdata/init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [init(contentsOfFile:options:)](nsdata/init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSData.ReadingOptions](nsdata/readingoptions.md): Options for methods used to read data objects.
- [init(contentsOfMappedFile:)](nsdata/init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile(\_:)](nsdata/datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.

### Writing Data to a File

- [write(toFile:atomically:)](nsdata/write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [write(toFile:options:)](nsdata/write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [write(to:atomically:)](nsdata/write%28to_atomically_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [write(to:options:)](nsdata/write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [NSData.WritingOptions](nsdata/writingoptions.md): Options for methods used to write data objects.

### Encoding and Decoding Base64 Representations

- [init(base64EncodedData:options:)](nsdata/init%28base64encodeddata_options_%29.md): Initializes a data object with the given Base64 encoded data.
- [init(base64Encoding:)](nsdata/init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [init(base64EncodedString:options:)](nsdata/init%28base64encodedstring_options_%29.md): Initializes a data object with the given Base64 encoded string.
- [base64EncodedData(options:)](nsdata/base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedString(options:)](nsdata/base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding()](nsdata/base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSData.Base64EncodingOptions](nsdata/base64encodingoptions.md): Options for methods used to Base64 encode data.
- [NSData.Base64DecodingOptions](nsdata/base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.

### Accessing Underlying Bytes

- [bytes](nsdata/bytes.md): A pointer to the data object’s contents.
- [enumerateBytes(\_:)](nsdata/enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes(\_:)](nsdata/getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes(\_:length:)](nsdata/getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes(\_:range:)](nsdata/getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

### Finding Data

- [subdata(with:)](nsdata/subdata%28with_%29.md): Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.
- [range(of:options:in:)](nsdata/range%28of_options_in_%29.md): Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.
- [NSData.SearchOptions](nsdata/searchoptions.md): Options for method used to search data objects.

### Testing Data

- [isEqual(to:)](nsdata/isequal%28to_%29.md): Returns a Boolean value indicating whether this data object is the same as another.
- [length](nsdata/length.md): The number of bytes contained by the data object.

### Describing Data

- [description](nsdata/description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Compressing and Decompressing Data

- [compressed(using:)](nsdata/compressed%28using_%29.md): Returns a new data object by compressing the data object’s bytes.
- [decompressed(using:)](nsdata/decompressed%28using_%29.md): Returns a new data object by decompressing data object’s bytes.
- [NSData.CompressionAlgorithm](nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](nscompressionerrorminimum-swift.var.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.

### Initializers

- [init(base64Encoded:options:)](nsdata/init%28base64encoded_options_%29-3ksry.md): Initializes a data object with the given Base64 encoded string.
- [init(base64Encoded:options:)](nsdata/init%28base64encoded_options_%29-4t5yq.md): Initializes a data object with the given Base64 encoded data.
- [init(coder:)](nsdata/init%28coder_%29.md)
- [init(contentsOf:)](nsdata/init%28contentsof_%29.md): Creates a data object from the data at the specified file URL, or returns `nil` if the system can’t create one.
- [init(contentsOf:options:)](nsdata/init%28contentsof_options_%29.md): Creates a data object from the data at the provided file URL using specific reading options.

### Default Implementations

- [NSData Implementations](nsdata/nsdata-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableData](nsmutabledata.md)

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProtocol](dataprotocol.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# NSData (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static byte buffer in memory.

## Declaration

```objectivec
@interface NSData : NSObject
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

In Swift, the buffer bridges to [Data](data.md); use [NSData](nsdata.md) when you need reference semantics or other Foundation-specific behavior.

[NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) and its mutable subclass [NSMutableData](nsmutabledata.md) provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects.

The size of the data is subject to a theoretical limit of about 8 exabytes (1 EB = 10¹⁸ bytes; in practice, the limit should not be a factor).

[NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) is *toll-free bridged* with its Core Foundation counterpart, [CFDataRef](../corefoundation/cfdata.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Data](data.md) structure, which bridges to the [NSData](nsdata.md) class and its mutable subclass [NSMutableData](nsmutabledata.md). For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Writing-Data-Atomically"></a>

### Writing Data Atomically

[NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) provides methods for atomically saving their contents to a file, which guarantee that the data is either saved in its entirety, or it fails completely. An atomic write first writes the data to a temporary file and then, only if this write succeeds, moves the temporary file to its final location.

Although atomic write operations minimize the risk of data loss due to corrupt or partially written files, they may not be appropriate when writing to a temporary directory, the user’s home directory or other publicly accessible directories. When you work with a publicly accessible file, treat that file as an untrusted and potentially dangerous resource. An attacker may compromise or corrupt these files. The attacker can also replace the files with hard or symbolic links, causing your write operations to overwrite or corrupt other system resources.

Avoid using the [writeToURL:atomically:](nsdata/write%28to_atomically_%29.md) method (and the related methods) when working inside a publicly accessible directory. Instead, use [NSFileHandle](filehandle.md) with an existing file descriptor to securely write the file.

For more information, see [Securing File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585-SW9) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## Topics

### Creating Data

- [data](nsdata/data.md): Creates an empty data object.
- [dataWithBytes:length:](nsdata/datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.
- [dataWithBytesNoCopy:length:](nsdata/datawithbytesnocopy_length_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithBytesNoCopy:length:freeWhenDone:](nsdata/datawithbytesnocopy_length_freewhendone_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithData:](nsdata/datawithdata_.md): Creates a data object containing the contents of another data object.
- [initWithBytes:length:](nsdata/init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [initWithBytesNoCopy:length:](nsdata/init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [initWithBytesNoCopy:length:deallocator:](nsdata/init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [initWithBytesNoCopy:length:freeWhenDone:](nsdata/init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
- [initWithData:](nsdata/init%28data_%29.md): Initializes a data object with the contents of another data object.

### Reading Data from a File

- [dataWithContentsOfFile:](nsdata/datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.
- [dataWithContentsOfFile:options:error:](nsdata/datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:](nsdata/init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [initWithContentsOfFile:options:error:](nsdata/init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSDataReadingOptions](nsdata/readingoptions.md): Options for methods used to read data objects.
- [initWithContentsOfMappedFile:](nsdata/init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile:](nsdata/datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.

### Writing Data to a File

- [writeToFile:atomically:](nsdata/write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [writeToFile:options:error:](nsdata/write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [writeToURL:atomically:](nsdata/write%28to_atomically_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [writeToURL:options:error:](nsdata/write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [NSDataWritingOptions](nsdata/writingoptions.md): Options for methods used to write data objects.

### Encoding and Decoding Base64 Representations

- [initWithBase64Encoding:](nsdata/init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [base64EncodedDataWithOptions:](nsdata/base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedStringWithOptions:](nsdata/base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding](nsdata/base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSDataBase64EncodingOptions](nsdata/base64encodingoptions.md): Options for methods used to Base64 encode data.
- [NSDataBase64DecodingOptions](nsdata/base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.

### Accessing Underlying Bytes

- [bytes](nsdata/bytes.md): A pointer to the data object’s contents.
- [enumerateByteRangesUsingBlock:](nsdata/enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes:](nsdata/getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes:length:](nsdata/getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes:range:](nsdata/getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

### Finding Data

- [subdataWithRange:](nsdata/subdata%28with_%29.md): Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.
- [rangeOfData:options:range:](nsdata/range%28of_options_in_%29.md): Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.
- [NSDataSearchOptions](nsdata/searchoptions.md): Options for method used to search data objects.

### Testing Data

- [isEqualToData:](nsdata/isequal%28to_%29.md): Returns a Boolean value indicating whether this data object is the same as another.
- [length](nsdata/length.md): The number of bytes contained by the data object.

### Describing Data

- [description](nsdata/description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Compressing and Decompressing Data

- [compressedDataUsingAlgorithm:error:](nsdata/compressed%28using_%29.md): Returns a new data object by compressing the data object’s bytes.
- [decompressedDataUsingAlgorithm:error:](nsdata/decompressed%28using_%29.md): Returns a new data object by decompressing data object’s bytes.
- [NSDataCompressionAlgorithm](nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.

### Instance Methods

- [initWithBase64EncodedString:options:](nsdata/init%28base64encoded_options_%29-3ksry.md): Initializes a data object with the given Base64 encoded string.
- [initWithBase64EncodedData:options:](nsdata/init%28base64encoded_options_%29-4t5yq.md): Initializes a data object with the given Base64 encoded data.
- [initWithContentsOfURL:](nsdata/init%28contentsof_%29.md): Creates a data object from the data at the specified file URL, or returns `nil` if the system can’t create one.
- [initWithContentsOfURL:options:error:](nsdata/init%28contentsof_options_%29.md): Creates a data object from the data at the provided file URL using specific reading options.

### Type Methods

- [dataWithContentsOfURL:](nsdata/datawithcontentsofurl_.md): Creates a data object from the data at the specified file URL.
- [dataWithContentsOfURL:options:error:](nsdata/datawithcontentsofurl_options_error_.md): Creates a data object from the data at the provided file URL using specific reading options.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableData](nsmutabledata.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Binary Data

- [NSMutableData](nsmutabledata.md): An object representing a dynamic byte buffer in memory.
