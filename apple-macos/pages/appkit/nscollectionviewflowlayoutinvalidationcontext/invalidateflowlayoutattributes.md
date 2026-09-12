> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes](https://developer.apple.com/documentation/appkit/nscollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutattributes)

# invalidateFlowLayoutAttributes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value indicating whether the flow layout object should invalidate its current attributes.

## Declaration

```swift
var invalidateFlowLayoutAttributes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [false](https://developer.apple.com/documentation/swift/false) tells the flow layout object to keep its existing layout information, effectively stopping the invalidation process. Typically, you set this property to [false](https://developer.apple.com/documentation/swift/false) only if you subclass [NSCollectionViewFlowLayout](../nscollectionviewflowlayout.md) and update changed layout information directly.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the flow layout object to throw out its existing layout information and recompute it.

## See Also

### Invalidating the Flow Layout

- [invalidateFlowLayoutDelegateMetrics](invalidateflowlayoutdelegatemetrics.md): A Boolean value indicating whether the flow layout object should fetch new size information from its delegate.

# invalidateFlowLayoutAttributes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value indicating whether the flow layout object should invalidate its current attributes.

## Declaration

```objectivec
@property BOOL invalidateFlowLayoutAttributes;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [false](https://developer.apple.com/documentation/swift/false) tells the flow layout object to keep its existing layout information, effectively stopping the invalidation process. Typically, you set this property to [false](https://developer.apple.com/documentation/swift/false) only if you subclass [NSCollectionViewFlowLayout](../nscollectionviewflowlayout.md) and update changed layout information directly.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the flow layout object to throw out its existing layout information and recompute it.

## See Also

### Invalidating the Flow Layout

- [invalidateFlowLayoutDelegateMetrics](invalidateflowlayoutdelegatemetrics.md): A Boolean value indicating whether the flow layout object should fetch new size information from its delegate.
