> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstencildescriptor/stencilcomparefunction](https://developer.apple.com/documentation/metal/mtlstencildescriptor/stencilcomparefunction)

# stencilCompareFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The comparison that is performed between the masked reference value and a masked value in the stencil attachment.

## Declaration

```swift
var stencilCompareFunction: MTLCompareFunction { get set }
```

<a id="discussion"></a>

## Discussion

For example, if `stencilCompareFunction` is [MTLCompareFunction.less](../mtlcomparefunction/less.md), then the stencil test passes if the masked reference value is less than the masked stored stencil value. The default value is [MTLCompareFunction.always](../mtlcomparefunction/always.md), which indicates that the stencil test always passes.

The stored stencil value and the reference value are both *masked* by performing a logical AND operation with the [readMask](readmask.md) value before the comparison takes place. For more information on possible values, see [MTLCompareFunction](../mtlcomparefunction.md).

## See Also

### Related Documentation

- [setStencilReferenceValue(\_:)](../mtlrendercommandencoder/setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.

### Configuring stencil functions and operations

- [stencilFailureOperation](stencilfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test fails.
- [depthFailureOperation](depthfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test passes, but the depth test fails.
- [depthStencilPassOperation](depthstencilpassoperation.md): The operation that is performed to update the values in the stencil attachment when both the stencil test and the depth test pass.
- [MTLStencilOperation](../mtlstenciloperation.md): The operation performed on a currently stored stencil value when a comparison test passes or fails.

# stencilCompareFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The comparison that is performed between the masked reference value and a masked value in the stencil attachment.

## Declaration

```objectivec
@property (nonatomic) MTLCompareFunction stencilCompareFunction;
```

<a id="discussion"></a>

## Discussion

For example, if `stencilCompareFunction` is [MTLCompareFunctionLess](../mtlcomparefunction/less.md), then the stencil test passes if the masked reference value is less than the masked stored stencil value. The default value is [MTLCompareFunctionAlways](../mtlcomparefunction/always.md), which indicates that the stencil test always passes.

The stored stencil value and the reference value are both *masked* by performing a logical AND operation with the [readMask](readmask.md) value before the comparison takes place. For more information on possible values, see [MTLCompareFunction](../mtlcomparefunction.md).

## See Also

### Related Documentation

- [setStencilReferenceValue:](../mtlrendercommandencoder/setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.

### Configuring stencil functions and operations

- [stencilFailureOperation](stencilfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test fails.
- [depthFailureOperation](depthfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test passes, but the depth test fails.
- [depthStencilPassOperation](depthstencilpassoperation.md): The operation that is performed to update the values in the stencil attachment when both the stencil test and the depth test pass.
- [MTLStencilOperation](../mtlstenciloperation.md): The operation performed on a currently stored stencil value when a comparison test passes or fails.
