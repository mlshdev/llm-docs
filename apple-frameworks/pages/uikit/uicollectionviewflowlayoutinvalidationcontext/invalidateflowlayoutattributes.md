> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes)

# invalidateFlowLayoutAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean indicating whether to recompute the layout attributes for items and views in the layout.

## Declaration

```swift
var invalidateFlowLayoutAttributes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) if there are changes to the position of items on the screen. For example, the flow layout object sets this property to [true](https://developer.apple.com/documentation/swift/true) when the collection view’s bounds change in a way that affects the number of items in a column or row.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the flow layout object recomputes the layout attributes for its items and views. If the [invalidateFlowLayoutDelegateMetrics](invalidateflowlayoutdelegatemetrics.md) property is set to [false](https://developer.apple.com/documentation/swift/false) it recomputes this information without asking for new size information.

## See Also

### Specifying what to invalidate

- [invalidateFlowLayoutDelegateMetrics](invalidateflowlayoutdelegatemetrics.md): A Boolean indicating whether to recompute the size of items and views in the layout.

# invalidateFlowLayoutAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean indicating whether to recompute the layout attributes for items and views in the layout.

## Declaration

```objectivec
@property (nonatomic) BOOL invalidateFlowLayoutAttributes;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) if there are changes to the position of items on the screen. For example, the flow layout object sets this property to [true](https://developer.apple.com/documentation/swift/true) when the collection view’s bounds change in a way that affects the number of items in a column or row.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the flow layout object recomputes the layout attributes for its items and views. If the [invalidateFlowLayoutDelegateMetrics](invalidateflowlayoutdelegatemetrics.md) property is set to [false](https://developer.apple.com/documentation/swift/false) it recomputes this information without asking for new size information.

## See Also

### Specifying what to invalidate

- [invalidateFlowLayoutDelegateMetrics](invalidateflowlayoutdelegatemetrics.md): A Boolean indicating whether to recompute the size of items and views in the layout.
