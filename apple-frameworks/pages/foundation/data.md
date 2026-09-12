> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data](https://developer.apple.com/documentation/foundation/data)

# Data

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A byte buffer in memory.

## Declaration

```swift
@frozen struct Data
```

## Mentioned In

- [Processing URL session data task results with Combine](processing-url-session-data-task-results-with-combine.md)
- [Encoding and Decoding Custom Types](encoding-and-decoding-custom-types.md)

<a id="overview"></a>

## Overview

The [Data](data.md) value type allows simple byte buffers to take on the behavior of Foundation objects. You can create empty or pre-populated buffers from a variety of sources and later add or remove bytes. You can filter and sort the content, or compare against other buffers. You can manipulate subranges of bytes and iterate over some or all of them.

[Data](data.md) bridges to the [NSData](nsdata.md) class and its mutable subclass, [NSMutableData](nsmutabledata.md). You can use these interchangeably in code that interacts with Objective-C APIs.

## Topics

### Creating Empty Data

- [init()](data/init%28%29.md): Creates an empty data buffer.
- [init(capacity:)](data/init%28capacity_%29.md): Creates an empty data buffer of a specified size.
- [init(count:)](data/init%28count_%29.md): Creates a new data buffer with the specified count of zeroed bytes.
- [resetBytes(in:)](data/resetbytes%28in_%29.md): Sets a region of the data buffer to `0`.

### Creating Populated Data

- [init()](data/init%28%29.md): Creates an empty data buffer.
- [init(buffer:)](data/init%28buffer_%29-75sng.md): Creates a data buffer with copied memory content using a buffer pointer.
- [init(buffer:)](data/init%28buffer_%29-6xgv4.md): Creates a data buffer with copied memory content using a mutable buffer pointer.
- [init(bytes:count:)](data/init%28bytes_count_%29.md): Creates data with copied memory content.
- [init(bytesNoCopy:count:deallocator:)](data/init%28bytesnocopy_count_deallocator_%29.md): Creates a data buffer with memory content without copying the bytes.
- [init(capacity:)](data/init%28capacity_%29.md): Creates an empty data buffer of a specified size.
- [init(count:)](data/init%28count_%29.md): Creates a new data buffer with the specified count of zeroed bytes.

### Creating Data from Raw Memory

- [init(bytes:count:)](data/init%28bytes_count_%29.md): Creates data with copied memory content.
- [init(buffer:)](data/init%28buffer_%29-75sng.md): Creates a data buffer with copied memory content using a buffer pointer.
- [init(buffer:)](data/init%28buffer_%29-6xgv4.md): Creates a data buffer with copied memory content using a mutable buffer pointer.
- [init(bytesNoCopy:count:deallocator:)](data/init%28bytesnocopy_count_deallocator_%29.md): Creates a data buffer with memory content without copying the bytes.
- [Data.Deallocator](data/deallocator.md): A deallocator you use to customize how the backing store is deallocated for data created with the no-copy initializer.

### Reading and Writing Data

- [write(to:options:)](data/write%28to_options_%29.md): Writes the contents of the data buffer to a location.
- [Data.ReadingOptions](data/readingoptions.md): Options to control the reading of data from a URL.
- [Data.WritingOptions](data/writingoptions.md): Options to control the writing of data to a URL.

### Base-64 Encoding

- [base64EncodedData(options:)](data/base64encodeddata%28options_%29.md): Returns Base-64 encoded data.
- [base64EncodedString(options:)](data/base64encodedstring%28options_%29.md): Returns a Base-64 encoded string.
- [Data.Base64DecodingOptions](data/base64decodingoptions.md): Options to use when decoding data.
- [Data.Base64EncodingOptions](data/base64encodingoptions.md): Options to use when encoding data.

### Accessing Bytes

- [subscript(\_:)](data/subscript%28__%29-6lc96.md): Accesses the bytes at the specified range of indexes.
- [subscript(\_:)](data/subscript%28__%29-8kg64.md): Accesses the byte at the specified index.

### Accessing Underlying Memory

- [withUnsafeBytes(\_:)](data/withunsafebytes%28__%29.md): Deprecated. Accesses the raw bytes in the data’s buffer.
- [withUnsafeMutableBytes(\_:)](data/withunsafemutablebytes%28__%29-7ac1g.md): Deprecated. Mutates the raw bytes in the data’s buffer.
- [copyBytes(to:count:)](data/copybytes%28to_count_%29.md): Copies the contents of the data to memory.
- [copyBytes(to:from:)](data/copybytes%28to_from_%29-8qk4r.md): Copies a subset of the contents of the data to memory.
- [copyBytes(to:from:)](data/copybytes%28to_from_%29-4o6zj.md): Copies the bytes in a range from the data into a buffer.

### Adding Bytes

- [append(\_:)](data/append%28__%29-vjwy.md): Appends the specified data to the end of this data.
- [append(\_:)](data/append%28__%29-xtlw.md): Append a buffer of bytes to the data.
- [append(\_:count:)](data/append%28__count_%29.md): Appends the specified bytes from memory to the end of the data.
- [reserveCapacity(\_:)](data/reservecapacity%28__%29.md): Prepares the collection to store the specified number of elements, when doing so is appropriate for the underlying type.

### Replacing a Range of Bytes

- [replaceSubrange(\_:with:)](data/replacesubrange%28__with_%29-9u7ry.md): Replaces a region of bytes in the data with new bytes from a collection.
- [replaceSubrange(\_:with:)](data/replacesubrange%28__with_%29-9nzh.md): Replaces a region of bytes in the data with new bytes from a buffer.
- [replaceSubrange(\_:with:count:)](data/replacesubrange%28__with_count_%29.md): Replaces a region of bytes in the data with bytes from memory.

### Finding Bytes

- [range(of:options:in:)](data/range%28of_options_in_%29.md): Finds the range of the specified data as a subsequence of this data, if it exists.
- [Data.SearchOptions](data/searchoptions.md): Options that control a data search operation.

### Excluding Bytes

- [advanced(by:)](data/advanced%28by_%29.md): Returns a new data buffer created by removing the given number of bytes from the front of the original buffer.

### Iterating Over Bytes

- [makeIterator()](data/makeiterator%28%29.md): Returns an iterator over the contents of the data.
- [Data.Iterator](data/iterator.md): An iterator that operates over the contents of data.
- [enumerateBytes(\_:)](data/enumeratebytes%28__%29.md): Deprecated. Enumerates the contents of the data’s buffer.

### Splitting the Buffer

- [subdata(in:)](data/subdata%28in_%29.md): Returns a new copy of the data in a specified range.

### Comparing Data

- [==(\_:\_:)](data/==%28____%29.md): Returns `true` if the two `Data` arguments are equal.

### Manipulating Indexes

- [Data.Index](data/index.md): A type used to indicate a position in a data’s buffer.
- [startIndex](data/startindex.md): The beginning index into the data.
- [endIndex](data/endindex.md): The end index into the data.
- [index(after:)](data/index%28after_%29.md): Returns the index that immediately follows the specified index.
- [index(before:)](data/index%28before_%29.md): Returns the index that immediately precedes the specified index.

### Manipulating Index Ranges

- [Data.Indices](data/indices.md): A type used to indicate a range of positions in a data’s buffer.

### Describing Data

- [description](data/description.md): A human-readable description for the data.
- [debugDescription](data/debugdescription.md): A human-readable debug description for the data.

### Using Reference Types

- [NSData](nsdata.md): A static byte buffer in memory.
- [NSMutableData](nsmutabledata.md): An object representing a dynamic byte buffer in memory.

### Initializers

- [init(\_:)](data/init%28__%29-2r3sw.md)
- [init(\_:)](data/init%28__%29-53ewf.md)
- [init(base64Encoded:options:)](data/init%28base64encoded_options_%29-1g88z.md): Initialize a `Data` from a Base-64, UTF-8 encoded `Data`.
- [init(base64Encoded:options:)](data/init%28base64encoded_options_%29-654f.md): Initialize a `Data` from a Base-64 encoded String using the given options.
- [init(bytes:)](data/init%28bytes_%29-5krj4.md)
- [init(bytes:)](data/init%28bytes_%29-5s0rs.md): Deprecated.
- [init(bytes:)](data/init%28bytes_%29-9othw.md)
- [init(contentsOf:options:)](data/init%28contentsof_options_%29.md): Creates data by reading from the specified URL.
- [init(referencing:)](data/init%28referencing_%29.md): Initialize a `Data` by adopting a reference type.
- [init(repeating:count:)](data/init%28repeating_count_%29.md): Initialize a `Data` with a repeating byte pattern

### Instance Properties

- [bytes](data/bytes.md)
- [count](data/count.md): The number of bytes in the data.
- [mutableBytes](data/mutablebytes.md)
- [mutableSpan](data/mutablespan.md)
- [span](data/span.md)

### Instance Methods

- [append(contentsOf:)](data/append%28contentsof_%29-2ebzw.md)
- [append(contentsOf:)](data/append%28contentsof_%29-xeqk.md): Appends the bytes in the specified sequence to the end of the data.
- [replaceSubrange(\_:with:)](data/replacesubrange%28__with_%29-21ouz.md): Replaces a region of bytes in the data with new bytes from a collection.
- [withUnsafeMutableBytes(\_:)](data/withunsafemutablebytes%28__%29-79c12.md)

### Subscripts

- [subscript(\_:)](data/subscript%28__%29-59z5z.md): Accesses the bytes at the specified range of indexes.

### Default Implementations

- [Attachable Implementations](data/attachable-implementations.md)
- [Collection Implementations](data/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](data/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](data/customstringconvertible-implementations.md)
- [Equatable Implementations](data/equatable-implementations.md)
- [Hashable Implementations](data/hashable-implementations.md)

## Relationships

### Conforms To

- [Attachable](https://developer.apple.com/documentation/testing/attachable)
- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [ContiguousBytes](contiguousbytes.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProtocol](dataprotocol.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [MutableDataProtocol](mutabledataprotocol.md)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
- [Transferable](../coretransferable/transferable.md)

## See Also

### Binary Data

- [DataProtocol](dataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous data buffers.
- [MutableDataProtocol](mutabledataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous mutable data buffers.
- [ContiguousBytes](contiguousbytes.md): A protocol that declares the type offers direct access to the underlying raw bytes in a contiguous manner.
