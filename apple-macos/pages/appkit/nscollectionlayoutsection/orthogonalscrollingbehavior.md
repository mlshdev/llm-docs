> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutsection/orthogonalscrollingbehavior](https://developer.apple.com/documentation/appkit/nscollectionlayoutsection/orthogonalscrollingbehavior)

# orthogonalScrollingBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The section’s scrolling behavior in relation to the main layout axis.

## Declaration

```swift
var orthogonalScrollingBehavior: NSCollectionLayoutSectionOrthogonalScrollingBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UICollectionLayoutSectionOrthogonalScrollingBehavior.none](https://developer.apple.com/documentation/uikit/uicollectionlayoutsectionorthogonalscrollingbehavior/none), which means the section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](https://developer.apple.com/documentation/uikit/uicollectionviewcompositionallayoutconfiguration/scrolldirection) property. Set a different value for this property to get the section to lay out its content orthogonally to the main layout axis.

# orthogonalScrollingBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The section’s scrolling behavior in relation to the main layout axis.

## Declaration

```objectivec
@property NSCollectionLayoutSectionOrthogonalScrollingBehavior orthogonalScrollingBehavior;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UICollectionLayoutSectionOrthogonalScrollingBehaviorNone](https://developer.apple.com/documentation/uikit/uicollectionlayoutsectionorthogonalscrollingbehavior/none), which means the section lays out its content along the main axis of its layout, defined by the layout configuration’s [scrollDirection](https://developer.apple.com/documentation/uikit/uicollectionviewcompositionallayoutconfiguration/scrolldirection) property. Set a different value for this property to get the section to lay out its content orthogonally to the main layout axis.
