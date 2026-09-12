> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecontext/cancel](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext/cancel)

# cancel (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
var cancel: ((UnsafeMutableRawPointer?, CFRunLoop?, CFRunLoopMode?) -> Void)!
```

## Parameters

- `info`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) structure that was used when creating the run loop source.
- `rl`: The run loop from which the run loop source is being removed.
- `mode`: The run loop mode from which the run loop source is being removed.

<a id="discussion"></a>

## Discussion

A cancel callback for the run loop source. This callback is called when the source is removed from a run loop mode. Can be `NULL`.

## See Also

### Callbacks

- [equal](equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [perform](perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [schedule](schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.

# cancel (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
void (*)(void *, struct __CFRunLoop *, const struct __CFString *) cancel;
```

## Parameters

- `info`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) structure that was used when creating the run loop source.
- `rl`: The run loop from which the run loop source is being removed.
- `mode`: The run loop mode from which the run loop source is being removed.

<a id="discussion"></a>

## Discussion

A cancel callback for the run loop source. This callback is called when the source is removed from a run loop mode. Can be `NULL`.

## See Also

### Callbacks

- [equal](equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [perform](perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [schedule](schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.
