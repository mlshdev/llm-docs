> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutsection/orthogonalscrollingbehavior](https://developer.apple.com/documentation/uikit/nscollectionlayoutsection/orthogonalscrollingbehavior)

# orthogonalScrollingBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The section’s scrolling behavior in relation to the main layout axis.

## Declaration

```swift
var orthogonalScrollingBehavior: UICollectionLayoutSectionOrthogonalScrollingBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UICollectionLayoutSectionOrthogonalScrollingBehavior.none](../uicollectionlayoutsectionorthogonalscrollingbehavior/none.md), which means the section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](../uicollectionviewcompositionallayoutconfiguration/scrolldirection.md) property. Set a different value for this property to get the section to lay out its content orthogonally to the main layout axis.

## See Also

### Specifying scrolling behavior

- [orthogonalScrollingProperties](orthogonalscrollingproperties.md): The section’s orthogonal scrolling properties.
- [UICollectionLayoutSectionOrthogonalScrollingProperties](../uicollectionlayoutsectionorthogonalscrollingproperties.md): An object that specifies properties for a layout section that scrolls orthogonally in relation to the main layout axis.

# orthogonalScrollingBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The section’s scrolling behavior in relation to the main layout axis.

## Declaration

```objectivec
@property (nonatomic) UICollectionLayoutSectionOrthogonalScrollingBehavior orthogonalScrollingBehavior;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UICollectionLayoutSectionOrthogonalScrollingBehaviorNone](../uicollectionlayoutsectionorthogonalscrollingbehavior/none.md), which means the section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](../uicollectionviewcompositionallayoutconfiguration/scrolldirection.md) property. Set a different value for this property to get the section to lay out its content orthogonally to the main layout axis.

## See Also

### Specifying scrolling behavior

- [orthogonalScrollingProperties](orthogonalscrollingproperties.md): The section’s orthogonal scrolling properties.
- [UICollectionLayoutSectionOrthogonalScrollingProperties](../uicollectionlayoutsectionorthogonalscrollingproperties.md): An object that specifies properties for a layout section that scrolls orthogonally in relation to the main layout axis.
