> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamcreatepairwithsockettohost(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstreamcreatepairwithsockettohost(_:_:_:_:_:))

# CFStreamCreatePairWithSocketToHost(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates readable and writable streams connected to a TCP/IP port of a particular host.

> Use nw_connection_t in Network framework instead

## Declaration

```swift
func CFStreamCreatePairWithSocketToHost(_ alloc: CFAllocator!, _ host: CFString!, _ port: UInt32, _ readStream: UnsafeMutablePointer<Unmanaged<CFReadStream>?>!, _ writeStream: UnsafeMutablePointer<Unmanaged<CFWriteStream>?>!)
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the `CFReadStream` and `CFWriteStream` objects. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `host`: The hostname to which the socket streams should connect. The host can be specified using an IPv4 or IPv6 address or a fully qualified DNS hostname.
- `port`: The TCP port number to which the socket streams should connect.
- `readStream`: Upon return, a readable stream connected to the socket address in `port`. If you pass `NULL`, this function will not create a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: Upon return, a writable stream connected to the socket address in `port`. If you pass `NULL`, this function will not create a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The streams do not create a socket, resolve the hostname, or connect to the remote host until you open one of the streams.

Most properties are shared by both streams. Setting a shared property for one stream automatically sets the property for the other.

## See Also

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature(\_:\_:\_:\_:)](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocket(\_:\_:\_:\_:)](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreateBoundPair(\_:\_:\_:\_:)](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost(\_:\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService(\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.

# CFStreamCreatePairWithSocketToHost (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates readable and writable streams connected to a TCP/IP port of a particular host.

> Use nw_connection_t in Network framework instead

## Declaration

```objectivec
extern void CFStreamCreatePairWithSocketToHost(CFAllocatorRef alloc, CFStringRef host, UInt32 port, CFReadStreamRef*readStream, CFWriteStreamRef*writeStream);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the `CFReadStream` and `CFWriteStream` objects. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `host`: The hostname to which the socket streams should connect. The host can be specified using an IPv4 or IPv6 address or a fully qualified DNS hostname.
- `port`: The TCP port number to which the socket streams should connect.
- `readStream`: Upon return, a readable stream connected to the socket address in `port`. If you pass `NULL`, this function will not create a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: Upon return, a writable stream connected to the socket address in `port`. If you pass `NULL`, this function will not create a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The streams do not create a socket, resolve the hostname, or connect to the remote host until you open one of the streams.

Most properties are shared by both streams. Setting a shared property for one stream automatically sets the property for the other.

## See Also

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocket](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreateBoundPair](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.
