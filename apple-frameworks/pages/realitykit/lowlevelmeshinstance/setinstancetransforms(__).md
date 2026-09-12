> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshinstance/setinstancetransforms(_:)](https://developer.apple.com/documentation/realitykit/lowlevelmeshinstance/setinstancetransforms(_:))

# setInstanceTransforms(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Assigns or clears the transform buffer for GPU instancing.

## Declaration

```swift
final func setInstanceTransforms(_ instanceTransforms: LowLevelInstanceTransformResource?) throws(LowLevelRenderContextError)
```

## Parameters

- `instanceTransforms`: The transform buffer to assign, or `nil` to revert to single-instance rendering.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRenderContextError](../lowlevelrendercontexterror.md) if `instanceTransforms` is incompatible with this instance.

## See Also

### Positioning instances

- [instanceTransforms](instancetransforms.md): The transform buffer for GPU instancing, or `nil` for single-instance rendering.
