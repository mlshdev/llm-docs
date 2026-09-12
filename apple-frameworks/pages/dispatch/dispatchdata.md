> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchdata](https://developer.apple.com/documentation/dispatch/dispatchdata)

# DispatchData

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.

## Declaration

```swift
struct DispatchData
```

<a id="overview"></a>

## Overview

The memory buffer managed by this object may be a single contiguous block of memory, or it may consist of multiple discontiguous blocks. For the discontiguous case, the dispatch data object makes it appear as if the memory is contiguous.

## Topics

### Creating a Dispatch Data Structure

- [init(bytes:)](dispatchdata/init%28bytes_%29-9lrd.md): Creates a new dispatch data object from the specified memory buffer.
- [init(bytesNoCopy:deallocator:)](dispatchdata/init%28bytesnocopy_deallocator_%29-vfoe.md): Creates a new dispatch data object using the specified memory buffer and deallocator.
- [withUnsafeBytes(body:)](dispatchdata/withunsafebytes%28body_%29.md)
- [DispatchData.Deallocator](dispatchdata/deallocator.md): Memory deallocators for dispatch data objects.
- [empty](dispatchdata/empty.md): A dispatch data object representing a zero-length memory region.

### Appending Data to the Buffer

- [append(\_:)](dispatchdata/append%28__%29-3bvdr.md)
- [append(\_:)](dispatchdata/append%28__%29-9sgkq.md)
- [append(\_:)](dispatchdata/append%28__%29-1m94x.md)

### Copying Bytes

- [copyBytes(to:count:)](dispatchdata/copybytes%28to_count_%29-3j0qx.md)
- [copyBytes(to:from:)](dispatchdata/copybytes%28to_from_%29-7zz4y.md)
- [copyBytes(to:from:)](dispatchdata/copybytes%28to_from_%29-60yai.md)

### Accessing Buffer Data

- [subscript(\_:)](dispatchdata/subscript%28__%29.md)
- [region(location:)](dispatchdata/region%28location_%29.md)
- [DispatchData.Region](dispatchdata/region.md)

### Iterating Over the Buffer Contents

- [makeIterator()](dispatchdata/makeiterator%28%29.md)
- [enumerateBytes(\_:)](dispatchdata/enumeratebytes%28__%29.md)

### Retrieving Buffer Subsequences

- [subdata(in:)](dispatchdata/subdata%28in_%29.md)

### Combining Sequence Elements

- [append(\_:)](dispatchdata/append%28__%29-3bvdr.md)
- [append(\_:)](dispatchdata/append%28__%29-9sgkq.md)
- [append(\_:)](dispatchdata/append%28__%29-1m94x.md)
- [append(\_:count:)](dispatchdata/append%28__count_%29.md): Deprecated.
- [copyBytes(to:count:)](dispatchdata/copybytes%28to_count_%29-4ffyj.md): Deprecated.
- [copyBytes(to:count:)](dispatchdata/copybytes%28to_count_%29-3j0qx.md)
- [copyBytes(to:from:)](dispatchdata/copybytes%28to_from_%29-7zz4y.md)
- [copyBytes(to:from:)](dispatchdata/copybytes%28to_from_%29-6ztcb.md): Deprecated.
- [copyBytes(to:from:)](dispatchdata/copybytes%28to_from_%29-60yai.md)
- [enumerateBytes(\_:)](dispatchdata/enumeratebytes%28__%29.md)
- [makeIterator()](dispatchdata/makeiterator%28%29.md)
- [region(location:)](dispatchdata/region%28location_%29.md)
- [subdata(in:)](dispatchdata/subdata%28in_%29.md)
- [withUnsafeBytes(body:)](dispatchdata/withunsafebytes%28body_%29.md)

### Deprecated

- [init(bytes:)](dispatchdata/init%28bytes_%29-mkbp.md): Deprecated. Initialize a data object with copied memory content.
- [init(bytesNoCopy:deallocator:)](dispatchdata/init%28bytesnocopy_deallocator_%29-7h08w.md): Deprecated. Initialize a data object without copying the bytes.
- [append(\_:count:)](dispatchdata/append%28__count_%29.md): Deprecated.
- [copyBytes(to:count:)](dispatchdata/copybytes%28to_count_%29-4ffyj.md): Deprecated.
- [copyBytes(to:from:)](dispatchdata/copybytes%28to_from_%29-6ztcb.md): Deprecated.

### Instance Methods

- [enumerateBytes(block:)](dispatchdata/enumeratebytes%28block_%29.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DataProtocol](../foundation/dataprotocol.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### System Event Monitoring

- [DispatchSource](dispatchsource.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [DispatchIO](dispatchio.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [DispatchDataIterator](dispatchdataiterator.md): A byte-by-byte iterator over the contents of a dispatch data object.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchSourceProtocol](dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.
