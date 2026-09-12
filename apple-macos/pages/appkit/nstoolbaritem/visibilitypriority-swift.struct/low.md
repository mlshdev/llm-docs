> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct/low](https://developer.apple.com/documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct/low)

# low (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The lowest-priority for a toolbar item.

## Declaration

```swift
static var low: NSToolbarItem.VisibilityPriority { get }
```

<a id="Discussion"></a>

## Discussion

The toolbar pushes items with this priority to the overflow menu first, even before items with the [standard](standard.md) priority.

## See Also

### Visibility priorities

- [standard](standard.md): The default visibility priority.
- [high](high.md): A high priority that makes it less likely for the toolbar item to move to the overflow item.
- [user](user.md): The highest priority for items in the toolbar.

# NSToolbarItemVisibilityPriorityLow (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS

The lowest-priority for a toolbar item.

## Declaration

```objectivec
static const NSToolbarItemVisibilityPriority NSToolbarItemVisibilityPriorityLow;
```

<a id="Discussion"></a>

## Discussion

The toolbar pushes items with this priority to the overflow menu first, even before items with the [NSToolbarItemVisibilityPriorityStandard](standard.md) priority.

## See Also

### Visibility priorities

- [NSToolbarItemVisibilityPriorityStandard](standard.md): The default visibility priority.
- [NSToolbarItemVisibilityPriorityHigh](high.md): A high priority that makes it less likely for the toolbar item to move to the overflow item.
- [NSToolbarItemVisibilityPriorityUser](user.md): The highest priority for items in the toolbar.
