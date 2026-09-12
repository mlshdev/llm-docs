> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/prefersedgeattachedincompactheight](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/prefersedgeattachedincompactheight)

# prefersEdgeAttachedInCompactHeight (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.

## Declaration

```swift
var prefersEdgeAttachedInCompactHeight: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which means the sheet defaults to a full screen appearance at compact height. Set this value to [true](https://developer.apple.com/documentation/swift/true) to use an alternate appearance in a compact-height size class, causing the sheet to only attach to the screen on its bottom edge.

## See Also

### Managing the appearance

- [prefersGrabberVisible](prefersgrabbervisible.md): A Boolean value that determines whether the sheet shows a grabber at the top.
- [prefersPageSizing](preferspagesizing.md): A Boolean value that indicates whether the sheet sizes itself for readable content.
- [widthFollowsPreferredContentSizeWhenEdgeAttached](widthfollowspreferredcontentsizewhenedgeattached.md): A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size.
- [preferredCornerRadius](preferredcornerradius-3mb5.md): The corner radius that the sheet attempts to present with.

# prefersEdgeAttachedInCompactHeight (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersEdgeAttachedInCompactHeight;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which means the sheet defaults to a full screen appearance at compact height. Set this value to [true](https://developer.apple.com/documentation/swift/true) to use an alternate appearance in a compact-height size class, causing the sheet to only attach to the screen on its bottom edge.

## See Also

### Managing the appearance

- [prefersGrabberVisible](prefersgrabbervisible.md): A Boolean value that determines whether the sheet shows a grabber at the top.
- [prefersPageSizing](preferspagesizing.md): A Boolean value that indicates whether the sheet sizes itself for readable content.
- [widthFollowsPreferredContentSizeWhenEdgeAttached](widthfollowspreferredcontentsizewhenedgeattached.md): A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size.
- [preferredCornerRadius](preferredcornerradius-358tc.md): The corner radius that the sheet attempts to present with.
- [UISheetPresentationControllerAutomaticDimension](../uisheetpresentationcontrollerautomaticdimension.md): The default value to apply to a dimension.
