> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement)

# VZVirtioQueueElement (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A unit of work on a Virtio queue, also known as a descriptor chain.

## Declaration

```swift
class VZVirtioQueueElement
```

<a id="overview"></a>

## Overview

A `VZVirtioQueueElement` represents a unit of work from a [VZVirtioQueue](vzvirtioqueue.md) with which it’s associated, facilitating device operations specified by the [VZCustomVirtioDevice](vzcustomvirtiodevice.md) that the `VZVirtioQueue` belongs to. It exposes the scatter-gather memory to the guest’s dynamic random access memory (DRAM) that the Virtio queue references as read buffers and write buffers; this allows for read-only and write-only access, respectively, to this memory on the host. It’s strongly recommended to access the read buffers and write buffers only *once* using the [readBytes(withExactLength:)](vzvirtioqueueelement/readbytes%28withexactlength_%29.md), [readBytes(intoBuffer:exactLength:)](vzvirtioqueueelement/readbytes%28intobuffer_exactlength_%29.md), [write(\_:)](vzvirtioqueueelement/write%28__%29.md), and [writeBuffer(\_:exactLength:)](vzvirtioqueueelement/writebuffer%28__exactlength_%29.md) methods. Those methods enforce that you only access the memory once and changes the value of [readBuffersAvailableByteCount](vzvirtioqueueelement/readbuffersavailablebytecount.md) and [writeBuffersAvailableByteCount](vzvirtioqueueelement/writebuffersavailablebytecount.md) accordingly. The [peekIntoReadBuffers(withExactLength:)](vzvirtioqueueelement/peekintoreadbuffers%28withexactlength_%29.md) method allows for multiple read accesses if absolutely necessary and doesn’t change the value of [readBuffersAvailableByteCount](vzvirtioqueueelement/readbuffersavailablebytecount.md).

> **Important**

> Accessing this memory multiple times can introduce time-of-check time-of-use (TOCTOU) bugs which are prone to security attacks. Since the guest is free to modify its memory at any time, two consecutive reads may return different results, and malicious guests can take advantage of this to perform various attacks.

Don’t instantiate `VZVirtioQueueElement` objects directly, the framework provides them through the [nextElement()](vzvirtioqueue/nextelement%28%29.md) method when you handle any elements in the Virtio queue. When you are done with processing the element, you need to call [returnToQueue()](vzvirtioqueueelement/returntoqueue%28%29.md) to return the element back to the guest.

## Topics

### Instance Properties

- [readBuffersAvailableByteCount](vzvirtioqueueelement/readbuffersavailablebytecount.md): The size of the read buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for reading.
- [readBuffersByteCount](vzvirtioqueueelement/readbuffersbytecount.md): The total size of the read buffers memory (in bytes) exposed by the Virtio queue element.
- [writeBuffersAvailableByteCount](vzvirtioqueueelement/writebuffersavailablebytecount.md): The size of the write buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for writing.
- [writeBuffersByteCount](vzvirtioqueueelement/writebuffersbytecount.md): The total size of the write buffers memory (in bytes) exposed by the Virtio queue element.
- [writtenByteCount](vzvirtioqueueelement/writtenbytecount.md): The size of the write buffers memory exposed (in bytes) by the Virtio queue element that has already been written to.

### Instance Methods

- [peekIntoReadBuffers(withExactLength:)](vzvirtioqueueelement/peekintoreadbuffers%28withexactlength_%29.md): Peeks into the read buffers and copy exactLength bytes from the read buffer into the data object it returns.
- [readBuffers()](vzvirtioqueueelement/readbuffers%28%29.md): Gets the remaining read buffers memory represented as an array of data.
- [readBytes(intoBuffer:exactLength:)](vzvirtioqueueelement/readbytes%28intobuffer_exactlength_%29.md): Reads the number of bytes you specify from the read buffers into the memory pointed to by the pointer to the buffer you provide.
- [readBytes(withExactLength:)](vzvirtioqueueelement/readbytes%28withexactlength_%29.md): Reads the number of bytes you specify from the read buffers and return result as a data object.
- [returnToQueue()](vzvirtioqueueelement/returntoqueue%28%29.md): Returns this element back to the guest.
- [write(\_:)](vzvirtioqueueelement/write%28__%29.md): Writes the memory represented by the data object you provide into the write buffers.
- [writeBuffer(\_:exactLength:)](vzvirtioqueueelement/writebuffer%28__exactlength_%29.md): Writes to the memory represented by the pointer to the buffer you provide to the write buffers.

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

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioQueue](vzvirtioqueue.md): A Virtio queue.

### Working with VirtQueues

- [VZVirtioQueue](vzvirtioqueue.md): A Virtio queue.

# VZVirtioQueueElement (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A unit of work on a Virtio queue, also known as a descriptor chain.

## Declaration

```objectivec
@interface VZVirtioQueueElement : NSObject
```

<a id="overview"></a>

## Overview

A `VZVirtioQueueElement` represents a unit of work from a [VZVirtioQueue](vzvirtioqueue.md) with which it’s associated, facilitating device operations specified by the [VZCustomVirtioDevice](vzcustomvirtiodevice.md) that the `VZVirtioQueue` belongs to. It exposes the scatter-gather memory to the guest’s dynamic random access memory (DRAM) that the Virtio queue references as read buffers and write buffers; this allows for read-only and write-only access, respectively, to this memory on the host. It’s strongly recommended to access the read buffers and write buffers only *once* using the [readBytesWithExactLength:error:](vzvirtioqueueelement/readbytes%28withexactlength_%29.md), [readBytesIntoBuffer:exactLength:error:](vzvirtioqueueelement/readbytes%28intobuffer_exactlength_%29.md), [writeData:error:](vzvirtioqueueelement/write%28__%29.md), and [writeBuffer:exactLength:error:](vzvirtioqueueelement/writebuffer%28__exactlength_%29.md) methods. Those methods enforce that you only access the memory once and changes the value of [readBuffersAvailableByteCount](vzvirtioqueueelement/readbuffersavailablebytecount.md) and [writeBuffersAvailableByteCount](vzvirtioqueueelement/writebuffersavailablebytecount.md) accordingly. The [peekIntoReadBuffersWithExactLength:error:](vzvirtioqueueelement/peekintoreadbuffers%28withexactlength_%29.md) method allows for multiple read accesses if absolutely necessary and doesn’t change the value of [readBuffersAvailableByteCount](vzvirtioqueueelement/readbuffersavailablebytecount.md).

> **Important**

> Accessing this memory multiple times can introduce time-of-check time-of-use (TOCTOU) bugs which are prone to security attacks. Since the guest is free to modify its memory at any time, two consecutive reads may return different results, and malicious guests can take advantage of this to perform various attacks.

Don’t instantiate `VZVirtioQueueElement` objects directly, the framework provides them through the [nextElement](vzvirtioqueue/nextelement%28%29.md) method when you handle any elements in the Virtio queue. When you are done with processing the element, you need to call [returnToQueue](vzvirtioqueueelement/returntoqueue%28%29.md) to return the element back to the guest.

## Topics

### Instance Properties

- [readBuffersAvailableByteCount](vzvirtioqueueelement/readbuffersavailablebytecount.md): The size of the read buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for reading.
- [readBuffersByteCount](vzvirtioqueueelement/readbuffersbytecount.md): The total size of the read buffers memory (in bytes) exposed by the Virtio queue element.
- [writeBuffersAvailableByteCount](vzvirtioqueueelement/writebuffersavailablebytecount.md): The size of the write buffers memory (in bytes) exposed by the Virtio queue element that’s currently available for writing.
- [writeBuffersByteCount](vzvirtioqueueelement/writebuffersbytecount.md): The total size of the write buffers memory (in bytes) exposed by the Virtio queue element.
- [writtenByteCount](vzvirtioqueueelement/writtenbytecount.md): The size of the write buffers memory exposed (in bytes) by the Virtio queue element that has already been written to.

### Instance Methods

- [peekIntoReadBuffersWithExactLength:error:](vzvirtioqueueelement/peekintoreadbuffers%28withexactlength_%29.md): Peeks into the read buffers and copy exactLength bytes from the read buffer into the data object it returns.
- [readBuffers](vzvirtioqueueelement/readbuffers%28%29.md): Gets the remaining read buffers memory represented as an array of data.
- [readBytesIntoBuffer:exactLength:error:](vzvirtioqueueelement/readbytes%28intobuffer_exactlength_%29.md): Reads the number of bytes you specify from the read buffers into the memory pointed to by the pointer to the buffer you provide.
- [readBytesWithExactLength:error:](vzvirtioqueueelement/readbytes%28withexactlength_%29.md): Reads the number of bytes you specify from the read buffers and return result as a data object.
- [returnToQueue](vzvirtioqueueelement/returntoqueue%28%29.md): Returns this element back to the guest.
- [writeData:error:](vzvirtioqueueelement/write%28__%29.md): Writes the memory represented by the data object you provide into the write buffers.
- [writeBuffer:exactLength:error:](vzvirtioqueueelement/writebuffer%28__exactlength_%29.md): Writes to the memory represented by the pointer to the buffer you provide to the write buffers.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioQueue](vzvirtioqueue.md): A Virtio queue.

### Working with VirtQueues

- [VZVirtioQueue](vzvirtioqueue.md): A Virtio queue.
