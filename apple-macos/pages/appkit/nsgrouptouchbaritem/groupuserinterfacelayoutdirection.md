> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgrouptouchbaritem/groupuserinterfacelayoutdirection](https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem/groupuserinterfacelayoutdirection)

# groupUserInterfaceLayoutDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The user interface direction that controls the layout order of the items.

## Declaration

```swift
var groupUserInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [NSUserInterfaceLayoutDirection.leftToRight](../nsuserinterfacelayoutdirection/lefttoright.md).

If you want the order of the items in the group to respect the user’s preferred layout, set this property to the value of [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md) on the [NSApplication](../nsapplication.md).

## See Also

### Configuring groups

- [groupTouchBar](grouptouchbar.md): A bar that holds this group’s items.

# groupUserInterfaceLayoutDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The user interface direction that controls the layout order of the items.

## Declaration

```objectivec
@property NSUserInterfaceLayoutDirection groupUserInterfaceLayoutDirection;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSUserInterfaceLayoutDirectionLeftToRight](../nsuserinterfacelayoutdirection/lefttoright.md).

If you want the order of the items in the group to respect the user’s preferred layout, set this property to the value of [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md) on the [NSApplication](../nsapplication.md).

## See Also

### Configuring groups

- [groupTouchBar](grouptouchbar.md): A bar that holds this group’s items.
