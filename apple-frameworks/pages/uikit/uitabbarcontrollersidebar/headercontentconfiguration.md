> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollersidebar/headercontentconfiguration](https://developer.apple.com/documentation/uikit/uitabbarcontrollersidebar/headercontentconfiguration)

# headerContentConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Content configuration for an optional header to display in the sidebar. The header is displayed above all tab content in the sidebar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) id<UIContentConfiguration> headerContentConfiguration;
```

## See Also

### Headers and footers

- [bottomBarView](../uitabbarcontroller/sidebar-swift.class/bottombarview.md): A view to display at the bottom of the sidebar, like a UIToolbar. The width of this view will be managed by the sidebar itself, and its height will be set to the value it returns from `systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:` Default is nil.
- [footerContentConfiguration](footercontentconfiguration.md): Content configuration for an optional header to display in the sidebar. The footer is displayed below all tab content in the sidebar.
