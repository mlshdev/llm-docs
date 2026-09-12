> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstencildescriptor/depthstencilpassoperation](https://developer.apple.com/documentation/metal/mtlstencildescriptor/depthstencilpassoperation)

# depthStencilPassOperation (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The operation that is performed to update the values in the stencil attachment when both the stencil test and the depth test pass.

## Declaration

```swift
var depthStencilPassOperation: MTLStencilOperation { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLStencilOperation.keep](../mtlstenciloperation/keep.md), which does not change the current stencil value. For more information on possible values, see [MTLStencilOperation](../mtlstenciloperation.md).

## See Also

### Related Documentation

- [depthCompareFunction](../mtldepthstencildescriptor/depthcomparefunction.md): The comparison that is performed between a fragment’s depth value and the depth value in the attachment, which determines whether to discard the fragment.

### Configuring stencil functions and operations

- [stencilFailureOperation](stencilfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test fails.
- [depthFailureOperation](depthfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test passes, but the depth test fails.
- [stencilCompareFunction](stencilcomparefunction.md): The comparison that is performed between the masked reference value and a masked value in the stencil attachment.
- [MTLStencilOperation](../mtlstenciloperation.md): The operation performed on a currently stored stencil value when a comparison test passes or fails.

# depthStencilPassOperation (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The operation that is performed to update the values in the stencil attachment when both the stencil test and the depth test pass.

## Declaration

```objectivec
@property (nonatomic) MTLStencilOperation depthStencilPassOperation;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLStencilOperationKeep](../mtlstenciloperation/keep.md), which does not change the current stencil value. For more information on possible values, see [MTLStencilOperation](../mtlstenciloperation.md).

## See Also

### Related Documentation

- [depthCompareFunction](../mtldepthstencildescriptor/depthcomparefunction.md): The comparison that is performed between a fragment’s depth value and the depth value in the attachment, which determines whether to discard the fragment.

### Configuring stencil functions and operations

- [stencilFailureOperation](stencilfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test fails.
- [depthFailureOperation](depthfailureoperation.md): The operation that is performed to update the values in the stencil attachment when the stencil test passes, but the depth test fails.
- [stencilCompareFunction](stencilcomparefunction.md): The comparison that is performed between the masked reference value and a masked value in the stencil attachment.
- [MTLStencilOperation](../mtlstenciloperation.md): The operation performed on a currently stored stencil value when a comparison test passes or fails.
