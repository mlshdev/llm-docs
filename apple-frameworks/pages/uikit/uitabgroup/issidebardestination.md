> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabgroup/issidebardestination](https://developer.apple.com/documentation/uikit/uitabgroup/issidebardestination)

# isSidebarDestination (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Determines if the tab group itself can be selected as a destination in the sidebar.

## Declaration

```swift
var isSidebarDestination: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, tab groups are not destinations when displayed in the sidebar, and cannot be selected directly by users. When enabled, the tab group becomes a selectable item in the sidebar, and will no longer perform automatic selection for a default child if no child is currently selected. The default value is NO.

# isSidebarDestination (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Determines if the tab group itself can be selected as a destination in the sidebar.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL isSidebarDestination;
```

<a id="discussion"></a>

## Discussion

By default, tab groups are not destinations when displayed in the sidebar, and cannot be selected directly by users. When enabled, the tab group becomes a selectable item in the sidebar, and will no longer perform automatic selection for a default child if no child is currently selected. The default value is NO.
