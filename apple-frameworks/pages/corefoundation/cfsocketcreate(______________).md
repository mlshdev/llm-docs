> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcreate(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketcreate(_:_:_:_:_:_:_:))

# CFSocketCreate(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFSocket object of a specified protocol and type.

## Declaration

```swift
func CFSocketCreate(_ allocator: CFAllocator!, _ protocolFamily: Int32, _ socketType: Int32, _ protocol: Int32, _ callBackTypes: CFOptionFlags, _ callout: CFSocketCallBack!, _ context: UnsafePointer<CFSocketContext>!) -> CFSocket!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `protocolFamily`: The protocol family for the socket. If negative or 0 is passed, the socket defaults to `PF_INET`.
- `socketType`: The socket type to create. If `protocolFamily` is `PF_INET` and `socketType` is negative or 0, the socket type defaults to `SOCK_STREAM`.
- `protocol`: The protocol for the socket. If `protocolFamily` is `PF_INET` and `protocol` is negative or 0, the socket protocol defaults to `IPPROTO_TCP` if `socketType` is `SOCK_STREAM` or `IPPROTO_UDP` if `socketType` is `SOCK_DGRAM`.
- `callBackTypes`: A bitwise-OR combination of the types of socket activity that should cause `callout` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for the possible activity values.
- `callout`: The function to call when one of the activities indicated by `callBackTypes` occurs.
- `context`: A structure holding contextual information for the CFSocket object. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFSocket object, or `NULL` if an error occurred. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Sockets

- [CFSocketCreateConnectedToSocketSignature(\_:\_:\_:\_:\_:\_:)](cfsocketcreateconnectedtosocketsignature%28____________%29.md): Creates a CFSocket object and opens a connection to a remote socket.
- [CFSocketCreateWithNative(\_:\_:\_:\_:\_:)](cfsocketcreatewithnative%28__________%29.md): Creates a CFSocket object for a pre-existing native socket.
- [CFSocketCreateWithSocketSignature(\_:\_:\_:\_:\_:)](cfsocketcreatewithsocketsignature%28__________%29.md): Creates a CFSocket object using information from a CFSocketSignature structure.

# CFSocketCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFSocket object of a specified protocol and type.

## Declaration

```objectivec
extern CFSocketRefCFSocketCreate(CFAllocatorRef allocator, SInt32 protocolFamily, SInt32 socketType, SInt32 protocol, CFOptionFlags callBackTypes, CFSocketCallBack callout, const CFSocketContext *context);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `protocolFamily`: The protocol family for the socket. If negative or 0 is passed, the socket defaults to `PF_INET`.
- `socketType`: The socket type to create. If `protocolFamily` is `PF_INET` and `socketType` is negative or 0, the socket type defaults to `SOCK_STREAM`.
- `protocol`: The protocol for the socket. If `protocolFamily` is `PF_INET` and `protocol` is negative or 0, the socket protocol defaults to `IPPROTO_TCP` if `socketType` is `SOCK_STREAM` or `IPPROTO_UDP` if `socketType` is `SOCK_DGRAM`.
- `callBackTypes`: A bitwise-OR combination of the types of socket activity that should cause `callout` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for the possible activity values.
- `callout`: The function to call when one of the activities indicated by `callBackTypes` occurs.
- `context`: A structure holding contextual information for the CFSocket object. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFSocket object, or `NULL` if an error occurred. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Sockets

- [CFSocketCreateConnectedToSocketSignature](cfsocketcreateconnectedtosocketsignature%28____________%29.md): Creates a CFSocket object and opens a connection to a remote socket.
- [CFSocketCreateWithNative](cfsocketcreatewithnative%28__________%29.md): Creates a CFSocket object for a pre-existing native socket.
- [CFSocketCreateWithSocketSignature](cfsocketcreatewithsocketsignature%28__________%29.md): Creates a CFSocket object using information from a CFSocketSignature structure.
