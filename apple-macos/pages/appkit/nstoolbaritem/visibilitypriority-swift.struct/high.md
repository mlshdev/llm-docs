> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct/high](https://developer.apple.com/documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct/high)

# high (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A high priority that makes it less likely for the toolbar item to move to the overflow item.

## Declaration

```swift
static var high: NSToolbarItem.VisibilityPriority { get }
```

<a id="Discussion"></a>

## Discussion

The toolbar moves items with [standard](standard.md) priority to the overflow menu before it moves items with this priority.

## See Also

### Visibility priorities

- [standard](standard.md): The default visibility priority.
- [low](low.md): The lowest-priority for a toolbar item.
- [user](user.md): The highest priority for items in the toolbar.

# NSToolbarItemVisibilityPriorityHigh (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS

A high priority that makes it less likely for the toolbar item to move to the overflow item.

## Declaration

```objectivec
static const NSToolbarItemVisibilityPriority NSToolbarItemVisibilityPriorityHigh;
```

<a id="Discussion"></a>

## Discussion

The toolbar moves items with [NSToolbarItemVisibilityPriorityStandard](standard.md) priority to the overflow menu before it moves items with this priority.

## See Also

### Visibility priorities

- [NSToolbarItemVisibilityPriorityStandard](standard.md): The default visibility priority.
- [NSToolbarItemVisibilityPriorityLow](low.md): The lowest-priority for a toolbar item.
- [NSToolbarItemVisibilityPriorityUser](user.md): The highest priority for items in the toolbar.
