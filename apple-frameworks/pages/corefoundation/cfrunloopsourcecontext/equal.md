> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecontext/equal](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext/equal)

# equal (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An equality test callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```swift
var equal: ((UnsafeRawPointer?, UnsafeRawPointer?) -> DarwinBoolean)!
```

## Parameters

- `info1`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) or [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the first run loop source to test.
- `info2`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) or [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the second run loop source to test.

<a id="return-value"></a>

## Return Value

`true` if `info1` and `info2` should be considered equal; otherwise `false`.

<a id="discussion"></a>

## Discussion

An equality test callback for your program-defined `info` pointer. Can be `NULL`.

## See Also

### Callbacks

- [cancel](cancel.md)
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [perform](perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [schedule](schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.

# equal (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An equality test callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```objectivec
unsigned char (*)(const void *, const void *) equal;
```

## Parameters

- `info1`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) or [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the first run loop source to test.
- `info2`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) or [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the second run loop source to test.

<a id="return-value"></a>

## Return Value

`true` if `info1` and `info2` should be considered equal; otherwise `false`.

<a id="discussion"></a>

## Discussion

An equality test callback for your program-defined `info` pointer. Can be `NULL`.

## See Also

### Callbacks

- [cancel](cancel.md)
- [hash](hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [perform](perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [schedule](schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.
