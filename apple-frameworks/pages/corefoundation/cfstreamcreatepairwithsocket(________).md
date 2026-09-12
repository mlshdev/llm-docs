> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamcreatepairwithsocket(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstreamcreatepairwithsocket(_:_:_:_:))

# CFStreamCreatePairWithSocket(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates readable and writable streams connected to a socket.

> Use nw_connection_t in Network framework instead

## Declaration

```swift
func CFStreamCreatePairWithSocket(_ alloc: CFAllocator!, _ sock: CFSocketNativeHandle, _ readStream: UnsafeMutablePointer<Unmanaged<CFReadStream>?>!, _ writeStream: UnsafeMutablePointer<Unmanaged<CFWriteStream>?>!)
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new objects. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `sock`: The pre-existing (and already connected) socket which the socket streams should use.

  > **Important**

  >  By default, your app is responsible for closing this socket after you close both streams. If you want CFNetwork to take ownership of the socket, set the [kCFStreamPropertyShouldCloseNativeSocket](kcfstreampropertyshouldclosenativesocket.md) property of the stream to [kCFBooleanTrue](kcfbooleantrue.md).
- `readStream`: Upon return, a readable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: Upon return, a writable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Most properties are shared by both streams. Setting a shared property for one stream automatically sets the property for the other.

## See Also

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature(\_:\_:\_:\_:)](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToHost(\_:\_:\_:\_:\_:)](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreateBoundPair(\_:\_:\_:\_:)](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost(\_:\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService(\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.

# CFStreamCreatePairWithSocket (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates readable and writable streams connected to a socket.

> Use nw_connection_t in Network framework instead

## Declaration

```objectivec
extern void CFStreamCreatePairWithSocket(CFAllocatorRef alloc, CFSocketNativeHandle sock, CFReadStreamRef*readStream, CFWriteStreamRef*writeStream);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new objects. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `sock`: The pre-existing (and already connected) socket which the socket streams should use.

  > **Important**

  >  By default, your app is responsible for closing this socket after you close both streams. If you want CFNetwork to take ownership of the socket, set the [kCFStreamPropertyShouldCloseNativeSocket](kcfstreampropertyshouldclosenativesocket.md) property of the stream to [kCFBooleanTrue](kcfbooleantrue.md).
- `readStream`: Upon return, a readable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a readable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
- `writeStream`: Upon return, a writable stream connected to the socket address in `signature`. If you pass `NULL`, this function will not create a writable stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Most properties are shared by both streams. Setting a shared property for one stream automatically sets the property for the other.

## See Also

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToHost](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreateBoundPair](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.
