> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstenciloperation/decrementwrap](https://developer.apple.com/documentation/metal/mtlstenciloperation/decrementwrap)

# MTLStencilOperation.decrementWrap (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A stencil operation that decreases a nonzero stencil value by one, or when it’s zero, resets it to the maximum representable value.

## Declaration

```swift
case decrementWrap
```

<a id="discussion"></a>

## Discussion

The operation sets a stencil value to the maximum representable value if its currently equal to `0`.

## See Also

### Stencil operations

- [MTLStencilOperation.keep](keep.md): A stencil operation that doesn’t modify a stencil value.
- [MTLStencilOperation.zero](zero.md): A stencil operation that sets a stencil value to zero.
- [MTLStencilOperation.replace](replace.md): A stencil operation that replaces a stencil value with a reference value.
- [MTLStencilOperation.incrementClamp](incrementclamp.md): A stencil operation that increases a stencil value by one, but only when the current value isn’t the maximum representable value.
- [MTLStencilOperation.decrementClamp](decrementclamp.md): A stencil operation that decreases a nonzero stencil value by one.
- [MTLStencilOperation.invert](invert.md): A stencil operation that applies a logical bitwise NOT to a stencil value.
- [MTLStencilOperation.incrementWrap](incrementwrap.md): A stencil operation that decreases a nonzero stencil value by one, or when it’s the maximum representable value, resets it to zero.

# MTLStencilOperationDecrementWrap (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A stencil operation that decreases a nonzero stencil value by one, or when it’s zero, resets it to the maximum representable value.

## Declaration

```objectivec
MTLStencilOperationDecrementWrap
```

<a id="discussion"></a>

## Discussion

The operation sets a stencil value to the maximum representable value if its currently equal to `0`.

## See Also

### Stencil operations

- [MTLStencilOperationKeep](keep.md): A stencil operation that doesn’t modify a stencil value.
- [MTLStencilOperationZero](zero.md): A stencil operation that sets a stencil value to zero.
- [MTLStencilOperationReplace](replace.md): A stencil operation that replaces a stencil value with a reference value.
- [MTLStencilOperationIncrementClamp](incrementclamp.md): A stencil operation that increases a stencil value by one, but only when the current value isn’t the maximum representable value.
- [MTLStencilOperationDecrementClamp](decrementclamp.md): A stencil operation that decreases a nonzero stencil value by one.
- [MTLStencilOperationInvert](invert.md): A stencil operation that applies a logical bitwise NOT to a stencil value.
- [MTLStencilOperationIncrementWrap](incrementwrap.md): A stencil operation that decreases a nonzero stencil value by one, or when it’s the maximum representable value, resets it to zero.
