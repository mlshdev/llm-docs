> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstenciloperation](https://developer.apple.com/documentation/metal/mtlstenciloperation)

# MTLStencilOperation (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The operation performed on a currently stored stencil value when a comparison test passes or fails.

## Declaration

```swift
enum MTLStencilOperation
```

## Topics

### Stencil operations

- [MTLStencilOperation.keep](mtlstenciloperation/keep.md): A stencil operation that doesn’t modify a stencil value.
- [MTLStencilOperation.zero](mtlstenciloperation/zero.md): A stencil operation that sets a stencil value to zero.
- [MTLStencilOperation.replace](mtlstenciloperation/replace.md): A stencil operation that replaces a stencil value with a reference value.
- [MTLStencilOperation.incrementClamp](mtlstenciloperation/incrementclamp.md): A stencil operation that increases a stencil value by one, but only when the current value isn’t the maximum representable value.
- [MTLStencilOperation.decrementClamp](mtlstenciloperation/decrementclamp.md): A stencil operation that decreases a nonzero stencil value by one.
- [MTLStencilOperation.invert](mtlstenciloperation/invert.md): A stencil operation that applies a logical bitwise NOT to a stencil value.
- [MTLStencilOperation.incrementWrap](mtlstenciloperation/incrementwrap.md): A stencil operation that decreases a nonzero stencil value by one, or when it’s the maximum representable value, resets it to zero.
- [MTLStencilOperation.decrementWrap](mtlstenciloperation/decrementwrap.md): A stencil operation that decreases a nonzero stencil value by one, or when it’s zero, resets it to the maximum representable value.

### Initializers

- [init(rawValue:)](mtlstenciloperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring stencil functions and operations

- [stencilFailureOperation](mtlstencildescriptor/stencilfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test fails.
- [depthFailureOperation](mtlstencildescriptor/depthfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test passes, but the depth test fails.
- [depthStencilPassOperation](mtlstencildescriptor/depthstencilpassoperation.md): The operation that is performed to update the values in the stencil attachment when both the stencil test and the depth test pass.
- [stencilCompareFunction](mtlstencildescriptor/stencilcomparefunction.md): The comparison that is performed between the masked reference value and a masked value in the stencil attachment.

# MTLStencilOperation (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The operation performed on a currently stored stencil value when a comparison test passes or fails.

## Declaration

```objectivec
enum MTLStencilOperation : NSUInteger;
```

## Topics

### Stencil operations

- [MTLStencilOperationKeep](mtlstenciloperation/keep.md): A stencil operation that doesn’t modify a stencil value.
- [MTLStencilOperationZero](mtlstenciloperation/zero.md): A stencil operation that sets a stencil value to zero.
- [MTLStencilOperationReplace](mtlstenciloperation/replace.md): A stencil operation that replaces a stencil value with a reference value.
- [MTLStencilOperationIncrementClamp](mtlstenciloperation/incrementclamp.md): A stencil operation that increases a stencil value by one, but only when the current value isn’t the maximum representable value.
- [MTLStencilOperationDecrementClamp](mtlstenciloperation/decrementclamp.md): A stencil operation that decreases a nonzero stencil value by one.
- [MTLStencilOperationInvert](mtlstenciloperation/invert.md): A stencil operation that applies a logical bitwise NOT to a stencil value.
- [MTLStencilOperationIncrementWrap](mtlstenciloperation/incrementwrap.md): A stencil operation that decreases a nonzero stencil value by one, or when it’s the maximum representable value, resets it to zero.
- [MTLStencilOperationDecrementWrap](mtlstenciloperation/decrementwrap.md): A stencil operation that decreases a nonzero stencil value by one, or when it’s zero, resets it to the maximum representable value.

## See Also

### Configuring stencil functions and operations

- [stencilFailureOperation](mtlstencildescriptor/stencilfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test fails.
- [depthFailureOperation](mtlstencildescriptor/depthfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test passes, but the depth test fails.
- [depthStencilPassOperation](mtlstencildescriptor/depthstencilpassoperation.md): The operation that is performed to update the values in the stencil attachment when both the stencil test and the depth test pass.
- [stencilCompareFunction](mtlstencildescriptor/stencilcomparefunction.md): The comparison that is performed between the masked reference value and a masked value in the stencil attachment.
