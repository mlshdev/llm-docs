> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/isavailable](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/isavailable)

# isAvailable (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Indicates when the tab sidebar is available to be displayed in the current context. When available, the sidebar is either visible, or can become visible depending on `isHidden`. Use this property to gate behaviors or UI that is dependent on the availability of the sidebar (like child tabs, or landing pages for groups).

## Declaration

```swift
var isAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

Implement the delegate method `tabBarController:sidebarAvailabilityDidChange:` to be notified when the value of this property changes.

# isAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Indicates when the tab sidebar is available to be displayed in the current context. When available, the sidebar is either visible, or can become visible depending on `isHidden`. Use this property to gate behaviors or UI that is dependent on the availability of the sidebar (like child tabs, or landing pages for groups).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isAvailable;
```

<a id="discussion"></a>

## Discussion

Implement the delegate method `tabBarController:sidebarAvailabilityDidChange:` to be notified when the value of this property changes.
