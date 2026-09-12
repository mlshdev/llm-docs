> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/bottombarview](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/bottombarview)

# bottomBarView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A view to display at the bottom of the sidebar, like a UIToolbar. The width of this view will be managed by the sidebar itself, and its height will be set to the value it returns from `systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:` Default is nil.

## Declaration

```swift
var bottomBarView: UIView? { get set }
```

## See Also

### Headers and footers

- [footerContentConfiguration](footercontentconfiguration.md)
- [headerContentConfiguration](headercontentconfiguration.md)

# bottomBarView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A view to display at the bottom of the sidebar, like a UIToolbar. The width of this view will be managed by the sidebar itself, and its height will be set to the value it returns from `systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:` Default is nil.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * bottomBarView;
```

## See Also

### Headers and footers

- [footerContentConfiguration](../../uitabbarcontrollersidebar/footercontentconfiguration.md): Content configuration for an optional header to display in the sidebar. The footer is displayed below all tab content in the sidebar.
- [headerContentConfiguration](../../uitabbarcontrollersidebar/headercontentconfiguration.md): Content configuration for an optional header to display in the sidebar. The header is displayed above all tab content in the sidebar.
