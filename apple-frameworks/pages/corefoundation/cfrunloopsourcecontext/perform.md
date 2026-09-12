> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecontext/perform](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext/perform)

# perform (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A perform callback for the run loop source. This callback is called when the source has fired.

## Declaration

```swift
var perform: ((UnsafeMutableRawPointer?) -> Void)!
```

## Parameters

- `msg`: The Mach message received on the Mach port. The pointer is to a `mach_msg_header_t` structure. A version 0 format trailer (`mach_msg_format_0_trailer_t`) is at the end of the Mach message.
- `size`: Size of the Mach message in `msg`, excluding the message trailer.
- `allocator`: The allocator object that should be used to allocate a reply message.
- `info`: The `info` member of the [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the run loop source.

<a id="return-value"></a>

## Return Value

An optional Mach message to be sent in response to the received message. The message must be allocated using `allocator`. Return `NULL` if you want an empty reply returned to the sender.

<a id="discussion"></a>

## Discussion

You only need to provide this callback if you create your own version 1 run loop source. CFMachPort and CFMessagePort run loop sources already implement this callback to forward the received message to the CFMachPort’s or CFMessagePort’s own callback function, which you do need to implement.

## See Also

### Callbacks

- [cancel](cancel.md)
- [equal](equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [schedule](schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.

# perform (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A perform callback for the run loop source. This callback is called when the source has fired.

## Declaration

```objectivec
void (*)(void *) perform;
```

## Parameters

- `msg`: The Mach message received on the Mach port. The pointer is to a `mach_msg_header_t` structure. A version 0 format trailer (`mach_msg_format_0_trailer_t`) is at the end of the Mach message.
- `size`: Size of the Mach message in `msg`, excluding the message trailer.
- `allocator`: The allocator object that should be used to allocate a reply message.
- `info`: The `info` member of the [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the run loop source.

<a id="return-value"></a>

## Return Value

An optional Mach message to be sent in response to the received message. The message must be allocated using `allocator`. Return `NULL` if you want an empty reply returned to the sender.

<a id="discussion"></a>

## Discussion

You only need to provide this callback if you create your own version 1 run loop source. CFMachPort and CFMessagePort run loop sources already implement this callback to forward the received message to the CFMachPort’s or CFMessagePort’s own callback function, which you do need to implement.

## See Also

### Callbacks

- [cancel](cancel.md)
- [equal](equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [schedule](schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.
