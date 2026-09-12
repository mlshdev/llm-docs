> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamcreateboundpair(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstreamcreateboundpair(_:_:_:_:))

# CFStreamCreateBoundPair(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a bound pair of read and write streams.

## Declaration

```swift
func CFStreamCreateBoundPair(_ alloc: CFAllocator!, _ readStream: UnsafeMutablePointer<Unmanaged<CFReadStream>?>!, _ writeStream: UnsafeMutablePointer<Unmanaged<CFWriteStream>?>!, _ transferBufferSize: CFIndex)
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new objects. Pass [kCFAllocatorDefault](kcfallocatordefault.md) or `NULL` to use the current default allocator.
- `readStream`: On return, contains a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: On return, contains a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `transferBufferSize`: The size of the buffer, in bytes, used to transfer data from `readStream` to `writeStream`.

<a id="Discussion"></a>

## Discussion

The created streams are bound to one another, such that any data written to `writeStream` is received by `readStream`.

## See Also

### Related Documentation

- [getBoundStreams(withBufferSize:inputStream:outputStream:)](../foundation/stream/getboundstreams%28withbuffersize_inputstream_outputstream_%29.md): Creates and returns by reference a bound pair of input and output streams.

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature(\_:\_:\_:\_:)](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToHost(\_:\_:\_:\_:\_:)](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreatePairWithSocket(\_:\_:\_:\_:)](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToCFHost(\_:\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService(\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.

# CFStreamCreateBoundPair (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a bound pair of read and write streams.

## Declaration

```objectivec
extern void CFStreamCreateBoundPair(CFAllocatorRef alloc, CFReadStreamRef*readStream, CFWriteStreamRef*writeStream, CFIndex transferBufferSize);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new objects. Pass [kCFAllocatorDefault](kcfallocatordefault.md) or `NULL` to use the current default allocator.
- `readStream`: On return, contains a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: On return, contains a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `transferBufferSize`: The size of the buffer, in bytes, used to transfer data from `readStream` to `writeStream`.

<a id="Discussion"></a>

## Discussion

The created streams are bound to one another, such that any data written to `writeStream` is received by `readStream`.

## See Also

### Related Documentation

- [getBoundStreamsWithBufferSize:inputStream:outputStream:](../foundation/stream/getboundstreams%28withbuffersize_inputstream_outputstream_%29.md): Creates and returns by reference a bound pair of input and output streams.

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToHost](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreatePairWithSocket](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToCFHost](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.
