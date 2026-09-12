> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelsortgroupcomponent/order](https://developer.apple.com/documentation/realitykit/modelsortgroupcomponent/order)

# order

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

An integer value that represents when the renderer draws the model relative to other the models in its group.

## Declaration

```swift
var order: Int32 { get set }
```

<a id="discussion"></a>

## Discussion

The renderer draws models in ascending order, starting with the components with the smallest value. You can tell the renderer that it only needs to order entities by their depths by setting the component’s [order](order.md) property to the sam value for those entities.

> **Warning**

> Don’t set `order` to `Int32.max` or `Int32.min` because the framework reserves these as sentinel values, and assigning their values may trigger erratic behavior.
