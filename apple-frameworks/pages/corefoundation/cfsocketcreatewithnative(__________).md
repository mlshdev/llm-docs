> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcreatewithnative(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketcreatewithnative(_:_:_:_:_:))

# CFSocketCreateWithNative(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFSocket object for a pre-existing native socket.

## Declaration

```swift
func CFSocketCreateWithNative(_ allocator: CFAllocator!, _ sock: CFSocketNativeHandle, _ callBackTypes: CFOptionFlags, _ callout: CFSocketCallBack!, _ context: UnsafePointer<CFSocketContext>!) -> CFSocket!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `sock`: The native socket for which to create a CFSocket object.
- `callBackTypes`: A bitwise-OR combination of the types of socket activity that should cause `callout` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for the possible activity values.
- `callout`: The function to call when one of the activities indicated by `callBackTypes` occurs.
- `context`: A structure holding contextual information for the CFSocket object. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFSocket object, or `NULL` if an error occurred. If a CFSocket object already exists for `sock`, the function returns the pre-existing object instead of creating a new object; the `context`, `callout`, and `callBackTypes` parameters are ignored in this case. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Sockets

- [CFSocketCreate(\_:\_:\_:\_:\_:\_:\_:)](cfsocketcreate%28______________%29.md): Creates a CFSocket object of a specified protocol and type.
- [CFSocketCreateConnectedToSocketSignature(\_:\_:\_:\_:\_:\_:)](cfsocketcreateconnectedtosocketsignature%28____________%29.md): Creates a CFSocket object and opens a connection to a remote socket.
- [CFSocketCreateWithSocketSignature(\_:\_:\_:\_:\_:)](cfsocketcreatewithsocketsignature%28__________%29.md): Creates a CFSocket object using information from a CFSocketSignature structure.

# CFSocketCreateWithNative (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFSocket object for a pre-existing native socket.

## Declaration

```objectivec
extern CFSocketRefCFSocketCreateWithNative(CFAllocatorRef allocator, CFSocketNativeHandle sock, CFOptionFlags callBackTypes, CFSocketCallBack callout, const CFSocketContext *context);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `sock`: The native socket for which to create a CFSocket object.
- `callBackTypes`: A bitwise-OR combination of the types of socket activity that should cause `callout` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for the possible activity values.
- `callout`: The function to call when one of the activities indicated by `callBackTypes` occurs.
- `context`: A structure holding contextual information for the CFSocket object. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The new CFSocket object, or `NULL` if an error occurred. If a CFSocket object already exists for `sock`, the function returns the pre-existing object instead of creating a new object; the `context`, `callout`, and `callBackTypes` parameters are ignored in this case. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Sockets

- [CFSocketCreate](cfsocketcreate%28______________%29.md): Creates a CFSocket object of a specified protocol and type.
- [CFSocketCreateConnectedToSocketSignature](cfsocketcreateconnectedtosocketsignature%28____________%29.md): Creates a CFSocket object and opens a connection to a remote socket.
- [CFSocketCreateWithSocketSignature](cfsocketcreatewithsocketsignature%28__________%29.md): Creates a CFSocket object using information from a CFSocketSignature structure.
