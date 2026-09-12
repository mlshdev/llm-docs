> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassattachmentdescriptor/loadaction](https://developer.apple.com/documentation/metal/mtlrenderpassattachmentdescriptor/loadaction)

# loadAction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The action performed by this attachment at the start of a rendering pass for a render command encoder.

## Declaration

```swift
var loadAction: MTLLoadAction { get set }
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

If your app renders all pixels of the render target for a given frame, use the [MTLLoadAction.dontCare](../mtlloadaction/dontcare.md) action, which allows the GPU to avoid loading the existing contents of the texture. Otherwise, use the [MTLLoadAction.clear](../mtlloadaction/clear.md) action to clear the previous contents of the render target or the [MTLLoadAction.load](../mtlloadaction/load.md) action to preserve them. The [MTLLoadAction.clear](../mtlloadaction/clear.md) action also avoids the cost of loading the existing texture contents, but it still incurs the cost of filling the destination with a clear color.

For color render targets, the default value is [MTLLoadAction.dontCare](../mtlloadaction/dontcare.md). For depth or stencil render targets, the default value is [MTLLoadAction.clear](../mtlloadaction/clear.md).

## See Also

### Specifying rendering pass actions

- [storeAction](storeaction.md): The action performed by this attachment at the end of a rendering pass for a render command encoder.
- [storeActionOptions](storeactionoptions.md): Deprecated. The options that modify the store action performed by this attachment.

# loadAction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The action performed by this attachment at the start of a rendering pass for a render command encoder.

## Declaration

```objectivec
@property (nonatomic) MTLLoadAction loadAction;
```

## Mentioned In

- [Setting load and store actions](../setting-load-and-store-actions.md)

<a id="discussion"></a>

## Discussion

If your app renders all pixels of the render target for a given frame, use the [MTLLoadActionDontCare](../mtlloadaction/dontcare.md) action, which allows the GPU to avoid loading the existing contents of the texture. Otherwise, use the [MTLLoadActionClear](../mtlloadaction/clear.md) action to clear the previous contents of the render target or the [MTLLoadActionLoad](../mtlloadaction/load.md) action to preserve them. The [MTLLoadActionClear](../mtlloadaction/clear.md) action also avoids the cost of loading the existing texture contents, but it still incurs the cost of filling the destination with a clear color.

For color render targets, the default value is [MTLLoadActionDontCare](../mtlloadaction/dontcare.md). For depth or stencil render targets, the default value is [MTLLoadActionClear](../mtlloadaction/clear.md).

## See Also

### Specifying rendering pass actions

- [storeAction](storeaction.md): The action performed by this attachment at the end of a rendering pass for a render command encoder.
- [storeActionOptions](storeactionoptions.md): Deprecated. The options that modify the store action performed by this attachment.
