> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamcreatepairwithpeersocketsignature(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstreamcreatepairwithpeersocketsignature(_:_:_:_:))

# CFStreamCreatePairWithPeerSocketSignature(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates readable and writable streams connected to a socket.

> Use nw_connection_t in Network framework instead

## Declaration

```swift
func CFStreamCreatePairWithPeerSocketSignature(_ alloc: CFAllocator!, _ signature: UnsafePointer<CFSocketSignature>!, _ readStream: UnsafeMutablePointer<Unmanaged<CFReadStream>?>!, _ writeStream: UnsafeMutablePointer<Unmanaged<CFWriteStream>?>!)
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new objects. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `signature`: A [CFSocketSignature](cfsocketsignature.md) structure identifying the communication protocol and address to which the socket streams should connect.
- `readStream`: On return, a readable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: On return, a writable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The streams do not create a socket or connect to the remote host until you open one of the streams.

Most properties are shared by both streams. Setting a shared property for one stream automatically sets the property for the other.

## See Also

### Creating Streams

- [CFStreamCreatePairWithSocketToHost(\_:\_:\_:\_:\_:)](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreatePairWithSocket(\_:\_:\_:\_:)](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreateBoundPair(\_:\_:\_:\_:)](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost(\_:\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService(\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.

# CFStreamCreatePairWithPeerSocketSignature (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates readable and writable streams connected to a socket.

> Use nw_connection_t in Network framework instead

## Declaration

```objectivec
extern void CFStreamCreatePairWithPeerSocketSignature(CFAllocatorRef alloc, const CFSocketSignature *signature, CFReadStreamRef*readStream, CFWriteStreamRef*writeStream);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new objects. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `signature`: A [CFSocketSignature](cfsocketsignature.md) structure identifying the communication protocol and address to which the socket streams should connect.
- `readStream`: On return, a readable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: On return, a writable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The streams do not create a socket or connect to the remote host until you open one of the streams.

Most properties are shared by both streams. Setting a shared property for one stream automatically sets the property for the other.

## See Also

### Creating Streams

- [CFStreamCreatePairWithSocketToHost](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreatePairWithSocket](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreateBoundPair](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.
