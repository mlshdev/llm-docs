> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportcallback](https://developer.apple.com/documentation/corefoundation/cfmachportcallback)

# CFMachPortCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked to process a message received on a CFMachPort object.

## Declaration

```swift
typealias CFMachPortCallBack = (CFMachPort?, UnsafeMutableRawPointer?, CFIndex, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `port`: The CFMachPort object on which the message `msg` was received.
- `msg`: The Mach message received on `port`. The pointer is to a `mach_msg_header_t` structure.
- `size`: Size of the Mach message `msg`, excluding the message trailer.
- `info`: The `info` member of the [CFMachPortContext](cfmachportcontext.md) structure used when creating `port`.

<a id="Discussion"></a>

## Discussion

You specify this callback when creating a CFMachPort object with either [CFMachPortCreate(\_:\_:\_:\_:)](cfmachportcreate%28________%29.md) or [CFMachPortCreateWithPort(\_:\_:\_:\_:\_:)](cfmachportcreatewithport%28__________%29.md). To receive messages on a CFMachPort object (and have this callback invoked), you must create a run loop source for the port and add it to a run loop.

## See Also

### Callbacks

- [CFMachPortInvalidationCallBack](cfmachportinvalidationcallback.md): Callback invoked when a CFMachPort object is invalidated.

# CFMachPortCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback invoked to process a message received on a CFMachPort object.

## Declaration

```objectivec
typedef void (*)(struct __CFMachPort *, void *, long, void *) CFMachPortCallBack;
```

## Parameters

- `port`: The CFMachPort object on which the message `msg` was received.
- `msg`: The Mach message received on `port`. The pointer is to a `mach_msg_header_t` structure.
- `size`: Size of the Mach message `msg`, excluding the message trailer.
- `info`: The `info` member of the [CFMachPortContext](cfmachportcontext.md) structure used when creating `port`.

<a id="Discussion"></a>

## Discussion

You specify this callback when creating a CFMachPort object with either [CFMachPortCreate](cfmachportcreate%28________%29.md) or [CFMachPortCreateWithPort](cfmachportcreatewithport%28__________%29.md). To receive messages on a CFMachPort object (and have this callback invoked), you must create a run loop source for the port and add it to a run loop.

## See Also

### Callbacks

- [CFMachPortInvalidationCallBack](cfmachportinvalidationcallback.md): Callback invoked when a CFMachPort object is invalidated.
