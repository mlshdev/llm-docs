> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecontext/schedule](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext/schedule)

# schedule (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.

## Declaration

```swift
var schedule: ((UnsafeMutableRawPointer?, CFRunLoop?, CFRunLoopMode?) -> Void)!
```

## Parameters

- `info`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) structure that was used when creating the run loop source.
- `rl`: The run loop in which the source is being scheduled.
- `mode`: The run loop mode in which the source is being scheduled.

## See Also

### Callbacks

- [cancel](cancel.md)
- [equal](equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [perform](perform.md): A perform callback for the run loop source. This callback is called when the source has fired.

# schedule (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.

## Declaration

```objectivec
void (*)(void *, struct __CFRunLoop *, const struct __CFString *) schedule;
```

## Parameters

- `info`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) structure that was used when creating the run loop source.
- `rl`: The run loop in which the source is being scheduled.
- `mode`: The run loop mode in which the source is being scheduled.

## See Also

### Callbacks

- [cancel](cancel.md)
- [equal](equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [perform](perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
