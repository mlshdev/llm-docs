> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcreaterunloopsource(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketcreaterunloopsource(_:_:_:))

# CFSocketCreateRunLoopSource(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object for a CFSocket object.

## Declaration

```swift
func CFSocketCreateRunLoopSource(_ allocator: CFAllocator!, _ s: CFSocket!, _ order: CFIndex) -> CFRunLoopSource!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `s`: The CFSocket object for which to create a run loop source.
- `order`: A priority index indicating the order in which run loop sources are processed. When multiple run loop sources are firing in a single pass through the run loop, the sources are processed in increasing order of this parameter. If the run loop is set to process only one source per loop, only the highest priority source, the one with the lowest `order` value, is processed.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object for `s`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. To add the source to a run loop, use [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md).

## See Also

### Using Sockets

- [CFSocketConnectToAddress(\_:\_:\_:)](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketGetTypeID()](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate(\_:)](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid(\_:)](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData(\_:\_:\_:\_:)](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.

# CFSocketCreateRunLoopSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object for a CFSocket object.

## Declaration

```objectivec
extern CFRunLoopSourceRefCFSocketCreateRunLoopSource(CFAllocatorRef allocator, CFSocketRef s, CFIndex order);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `s`: The CFSocket object for which to create a run loop source.
- `order`: A priority index indicating the order in which run loop sources are processed. When multiple run loop sources are firing in a single pass through the run loop, the sources are processed in increasing order of this parameter. If the run loop is set to process only one source per loop, only the highest priority source, the one with the lowest `order` value, is processed.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object for `s`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. To add the source to a run loop, use [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md).

## See Also

### Using Sockets

- [CFSocketConnectToAddress](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketGetTypeID](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.
