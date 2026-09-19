> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/navigationoverflowitems

# navigationOverflowItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Additional items to add to the overflow menu in the sidebar’s navigation bar. Setting this property to a non-nil value will force the overflow button to appear, regardless of if you provide any content in the element’s callback. Items returned are displayed directly in the presented menu. When set, the “Edit Sidebar” action will also be moved into the overflow menu after the app-provided items.

## Declaration

```swift
var navigationOverflowItems: UIDeferredMenuElement? { get set }
```

# navigationOverflowItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Additional items to add to the overflow menu in the sidebar’s navigation bar. Setting this property to a non-nil value will force the overflow button to appear, regardless of if you provide any content in the element’s callback. Items returned are displayed directly in the presented menu. When set, the “Edit Sidebar” action will also be moved into the overflow menu after the app-provided items.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIDeferredMenuElement * navigationOverflowItems;
```
