> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutdelegatemetrics](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayoutinvalidationcontext/invalidateflowlayoutdelegatemetrics)

# invalidateFlowLayoutDelegateMetrics (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean indicating whether to recompute the size of items and views in the layout.

## Declaration

```swift
var invalidateFlowLayoutDelegateMetrics: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) if you’re invalidating the layout because of changes to the size of any items.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the flow layout object recomputes the size of its items and views, querying the delegate object as needed for that information.

## See Also

### Specifying what to invalidate

- [invalidateFlowLayoutAttributes](invalidateflowlayoutattributes.md): A Boolean indicating whether to recompute the layout attributes for items and views in the layout.

# invalidateFlowLayoutDelegateMetrics (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean indicating whether to recompute the size of items and views in the layout.

## Declaration

```objectivec
@property (nonatomic) BOOL invalidateFlowLayoutDelegateMetrics;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) if you’re invalidating the layout because of changes to the size of any items.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the flow layout object recomputes the size of its items and views, querying the delegate object as needed for that information.

## See Also

### Specifying what to invalidate

- [invalidateFlowLayoutAttributes](invalidateflowlayoutattributes.md): A Boolean indicating whether to recompute the layout attributes for items and views in the layout.
