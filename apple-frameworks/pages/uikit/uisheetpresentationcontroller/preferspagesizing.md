> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/preferspagesizing](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/preferspagesizing)

# prefersPageSizing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the sheet sizes itself for readable content.

## Declaration

```swift
var prefersPageSizing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). The default value indicates the sheet uses [UIModalPresentationStyle.pageSheet](../uimodalpresentationstyle/pagesheet.md) behavior, in which the sheet width follows the readable width.

When the value is set to [false](https://developer.apple.com/documentation/swift/false), the sheet uses [UIModalPresentationStyle.formSheet](../uimodalpresentationstyle/formsheet.md) behavior, in which the sheet size follows the presented view controller’s [preferredContentSize](../uiviewcontroller/preferredcontentsize.md).

## See Also

### Managing the appearance

- [prefersGrabberVisible](prefersgrabbervisible.md): A Boolean value that determines whether the sheet shows a grabber at the top.
- [prefersEdgeAttachedInCompactHeight](prefersedgeattachedincompactheight.md): A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.
- [widthFollowsPreferredContentSizeWhenEdgeAttached](widthfollowspreferredcontentsizewhenedgeattached.md): A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size.
- [preferredCornerRadius](preferredcornerradius-3mb5.md): The corner radius that the sheet attempts to present with.

# prefersPageSizing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the sheet sizes itself for readable content.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersPageSizing;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). The default value indicates the sheet uses [UIModalPresentationPageSheet](../uimodalpresentationstyle/pagesheet.md) behavior, in which the sheet width follows the readable width.

When the value is set to [false](https://developer.apple.com/documentation/swift/false), the sheet uses [UIModalPresentationFormSheet](../uimodalpresentationstyle/formsheet.md) behavior, in which the sheet size follows the presented view controller’s [preferredContentSize](../uiviewcontroller/preferredcontentsize.md).

## See Also

### Managing the appearance

- [prefersGrabberVisible](prefersgrabbervisible.md): A Boolean value that determines whether the sheet shows a grabber at the top.
- [prefersEdgeAttachedInCompactHeight](prefersedgeattachedincompactheight.md): A Boolean value that determines whether the sheet attaches to the bottom edge of the screen in a compact-height size class.
- [widthFollowsPreferredContentSizeWhenEdgeAttached](widthfollowspreferredcontentsizewhenedgeattached.md): A Boolean value that determines whether the sheet’s width matches its view controller’s preferred content size.
- [preferredCornerRadius](preferredcornerradius-358tc.md): The corner radius that the sheet attempts to present with.
- [UISheetPresentationControllerAutomaticDimension](../uisheetpresentationcontrollerautomaticdimension.md): The default value to apply to a dimension.
