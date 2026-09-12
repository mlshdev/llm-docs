> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct/user](https://developer.apple.com/documentation/appkit/nstoolbaritem/visibilitypriority-swift.struct/user)

# user (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The highest priority for items in the toolbar.

## Declaration

```swift
static var user: NSToolbarItem.VisibilityPriority { get }
```

<a id="Discussion"></a>

## Discussion

The toolbar pushes these items to the overflow menu last.

## See Also

### Visibility priorities

- [standard](standard.md): The default visibility priority.
- [low](low.md): The lowest-priority for a toolbar item.
- [high](high.md): A high priority that makes it less likely for the toolbar item to move to the overflow item.

# NSToolbarItemVisibilityPriorityUser (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS

The highest priority for items in the toolbar.

## Declaration

```objectivec
static const NSToolbarItemVisibilityPriority NSToolbarItemVisibilityPriorityUser;
```

<a id="Discussion"></a>

## Discussion

The toolbar pushes these items to the overflow menu last.

## See Also

### Visibility priorities

- [NSToolbarItemVisibilityPriorityStandard](standard.md): The default visibility priority.
- [NSToolbarItemVisibilityPriorityLow](low.md): The lowest-priority for a toolbar item.
- [NSToolbarItemVisibilityPriorityHigh](high.md): A high priority that makes it less likely for the toolbar item to move to the overflow item.
