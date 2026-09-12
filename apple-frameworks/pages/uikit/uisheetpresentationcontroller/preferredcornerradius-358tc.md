> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/preferredcornerradius-358tc](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/preferredcornerradius-358tc)

# preferredCornerRadius

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The corner radius that the sheet attempts to present with.

## Declaration

```objectivec
@property (nonatomic) CGFloat preferredCornerRadius;
```

<a id="Discussion"></a>

## Discussion

The default value is [UISheetPresentationControllerAutomaticDimension](../uisheetpresentationcontrollerautomaticdimension.md). This property only has an effect when the sheet is at the front of its sheet stack.

## See Also

### Managing the appearance

- [prefersGrabberVisible](prefersgrabbervisible.md): A Boolean value that determines whether the sheet shows a grabber at the top.
- [prefersPageSizing](preferspagesizing.md): A Boolean value that indicates whether the sheet sizes itself for readable content.
- [prefersEdgeAttachedInCompactHeight](prefersedgeattachedincompactheight.md): A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.
- [widthFollowsPreferredContentSizeWhenEdgeAttached](widthfollowspreferredcontentsizewhenedgeattached.md): A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size.
- [UISheetPresentationControllerAutomaticDimension](../uisheetpresentationcontrollerautomaticdimension.md): The default value to apply to a dimension.
