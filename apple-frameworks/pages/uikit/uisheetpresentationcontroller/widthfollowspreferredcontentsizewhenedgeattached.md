> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/widthfollowspreferredcontentsizewhenedgeattached](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/widthfollowspreferredcontentsizewhenedgeattached)

# widthFollowsPreferredContentSizeWhenEdgeAttached (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size.

## Declaration

```swift
var widthFollowsPreferredContentSizeWhenEdgeAttached: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which means the sheet’s width equals the width of its container’s safe area. Set this value to [true](https://developer.apple.com/documentation/swift/true) to use your view controller’s [preferredContentSize](../uiviewcontroller/preferredcontentsize.md) to determine the width of the sheet instead.

This property doesn’t have an effect when the sheet is in a compact-width and regular-height size class, or when [prefersEdgeAttachedInCompactHeight](prefersedgeattachedincompactheight.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the appearance

- [prefersGrabberVisible](prefersgrabbervisible.md): A Boolean value that determines whether the sheet shows a grabber at the top.
- [prefersPageSizing](preferspagesizing.md): A Boolean value that indicates whether the sheet sizes itself for readable content.
- [prefersEdgeAttachedInCompactHeight](prefersedgeattachedincompactheight.md): A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.
- [preferredCornerRadius](preferredcornerradius-3mb5.md): The corner radius that the sheet attempts to present with.

# widthFollowsPreferredContentSizeWhenEdgeAttached (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size.

## Declaration

```objectivec
@property (nonatomic) BOOL widthFollowsPreferredContentSizeWhenEdgeAttached;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which means the sheet’s width equals the width of its container’s safe area. Set this value to [true](https://developer.apple.com/documentation/swift/true) to use your view controller’s [preferredContentSize](../uiviewcontroller/preferredcontentsize.md) to determine the width of the sheet instead.

This property doesn’t have an effect when the sheet is in a compact-width and regular-height size class, or when [prefersEdgeAttachedInCompactHeight](prefersedgeattachedincompactheight.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the appearance

- [prefersGrabberVisible](prefersgrabbervisible.md): A Boolean value that determines whether the sheet shows a grabber at the top.
- [prefersPageSizing](preferspagesizing.md): A Boolean value that indicates whether the sheet sizes itself for readable content.
- [prefersEdgeAttachedInCompactHeight](prefersedgeattachedincompactheight.md): A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.
- [preferredCornerRadius](preferredcornerradius-358tc.md): The corner radius that the sheet attempts to present with.
- [UISheetPresentationControllerAutomaticDimension](../uisheetpresentationcontrollerautomaticdimension.md): The default value to apply to a dimension.
