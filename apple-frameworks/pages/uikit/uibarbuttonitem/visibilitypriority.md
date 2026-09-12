> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/visibilitypriority](https://developer.apple.com/documentation/uikit/uibarbuttonitem/visibilitypriority)

# visibilityPriority (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Visibility priority for this item when placed in a button bar.

## Declaration

```swift
var visibilityPriority: UIBarButtonItemVisibilityPriority { get set }
```

<a id="discussion"></a>

## Discussion

Items with higher priority values are preserved longer when space is constrained. When an item is placed in an implicit group, the group inherits this priority.

The default value is `UIBarButtonItemVisibilityPriorityStandard`.

# visibilityPriority (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Visibility priority for this item when placed in a button bar.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIBarButtonItemVisibilityPriority visibilityPriority;
```

<a id="discussion"></a>

## Discussion

Items with higher priority values are preserved longer when space is constrained. When an item is placed in an implicit group, the group inherits this priority.

The default value is `UIBarButtonItemVisibilityPriorityStandard`.
