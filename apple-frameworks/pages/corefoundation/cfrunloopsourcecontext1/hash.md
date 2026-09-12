> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecontext1/hash](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext1/hash)

# hash (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```swift
var hash: ((UnsafeRawPointer?) -> CFHashCode)!
```

## Parameters

- `info`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) or [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the run loop source.

<a id="return-value"></a>

## Return Value

A hash code value for `info`.

<a id="discussion"></a>

## Discussion

If a hash callback is not provided for a source, the `info` pointer is used.

# hash (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```objectivec
unsigned long (*)(const void *) hash;
```

## Parameters

- `info`: The `info` member of the [CFRunLoopSourceContext](../cfrunloopsourcecontext.md) or [CFRunLoopSourceContext1](../cfrunloopsourcecontext1.md) structure that was used when creating the run loop source.

<a id="return-value"></a>

## Return Value

A hash code value for `info`.

<a id="discussion"></a>

## Discussion

If a hash callback is not provided for a source, the `info` pointer is used.
