> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup)

# NSToolbarItemGroup (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.5+

A group of subitems in a toolbar item.

## Declaration

```swift
class NSToolbarItemGroup
```

<a id="overview"></a>

## Overview

An [NSToolbarItemGroup](nstoolbaritemgroup.md) represents a collection set of subitems in a toolbar that the system displays based on available space and settings that you specify. The system uses the views and labels of the subitems, but the parent’s attributes take precedence. This differs from other [NSToolbarItem](nstoolbaritem.md) objects because they’re attached — the user drags them together as a single item rather than separately.

If a subitem of the group has an action set on it, the group uses that action instead of its own when the user clicks or taps on that item. The system prefers the subitem’s action if it exists, otherwise it uses the group’s action.

To configure an instance of [NSToolbarItemGroup](nstoolbaritemgroup.md), you first create the individual toolbar subitems:

```objc
NSToolbarItem *item1 = [[NSToolbarItem alloc] initWithItemIdentifier:@"Item1"];
NSToolbarItem *item2 = [[NSToolbarItem alloc] initWithItemIdentifier:@"Item2"];
[item1 setImage:[NSImage imageNamed:@"LeftArrow"]];
[item2 setImage:[NSImage imageNamed:@"RightArrow"]];
[item1 setLabel:@"Prev"];
[item2 setLabel:@"Next"];
```

Then, you put them in a grouped item:

```objc
NSToolbarItemGroup *group = [[NSToolbarItemGroup alloc] initWithItemIdentifier:@"GroupItem"];
[group setSubitems:[NSArray arrayWithObjects:item1, item2, nil]];
```

In this configuration, you get two grouped items, and two labels.

If you set a label on the parent item, you get two grouped items with one shared label:

```objc
[group setLabel:@"Navigate"];
```

If instead you set a view on the parent item, you get two labels with one shared view:

```objc
[group setView:someSegmentedControl];
```

## Topics

### Creating grouped toolbar items

- [init(itemIdentifier:images:selectionMode:labels:target:action:)](nstoolbaritemgroup/init%28itemidentifier_images_selectionmode_labels_target_action_%29.md): Creates a grouped toolbar item with images.
- [init(itemIdentifier:titles:selectionMode:labels:target:action:)](nstoolbaritemgroup/init%28itemidentifier_titles_selectionmode_labels_target_action_%29.md): Creates a grouped toolbar item with labels.

### Working with subitems

- [subitems](nstoolbaritemgroup/subitems.md): The subitems of the grouped toolbar item.
- [selectedIndex](nstoolbaritemgroup/selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [isSelected(at:)](nstoolbaritemgroup/isselected%28at_%29.md): Indicates whether a specified index is currently selected.
- [setSelected(\_:at:)](nstoolbaritemgroup/setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.

### Configuring grouped toolbar items

- [controlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.property.md): A value that represents how a toolbar displays a grouped toolbar item.
- [NSToolbarItemGroup.ControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [selectionMode](nstoolbaritemgroup/selectionmode-swift.property.md): The selection mode of the grouped toolbar item.
- [NSToolbarItemGroup.SelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [role](nstoolbaritemgroup/role-swift.property.md): The semantic role of the item. Defaults to `NSToolbarItemGroupRoleAutomatic`.
- [NSToolbarItemGroup.Role](nstoolbaritemgroup/role-swift.enum.md)

## Relationships

### Inherits From

- [NSToolbarItem](nstoolbaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSValidatedUserInterfaceItem](nsvalidateduserinterfaceitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Items

- [NSToolbarItem](nstoolbaritem.md): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroup.ControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [NSToolbarItemGroup.SelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [NSMenuToolbarItem](nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.

# NSToolbarItemGroup (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

A group of subitems in a toolbar item.

## Declaration

```objectivec
@interface NSToolbarItemGroup : NSToolbarItem
```

<a id="overview"></a>

## Overview

An [NSToolbarItemGroup](nstoolbaritemgroup.md) represents a collection set of subitems in a toolbar that the system displays based on available space and settings that you specify. The system uses the views and labels of the subitems, but the parent’s attributes take precedence. This differs from other [NSToolbarItem](nstoolbaritem.md) objects because they’re attached — the user drags them together as a single item rather than separately.

If a subitem of the group has an action set on it, the group uses that action instead of its own when the user clicks or taps on that item. The system prefers the subitem’s action if it exists, otherwise it uses the group’s action.

To configure an instance of [NSToolbarItemGroup](nstoolbaritemgroup.md), you first create the individual toolbar subitems:

```objc
NSToolbarItem *item1 = [[NSToolbarItem alloc] initWithItemIdentifier:@"Item1"];
NSToolbarItem *item2 = [[NSToolbarItem alloc] initWithItemIdentifier:@"Item2"];
[item1 setImage:[NSImage imageNamed:@"LeftArrow"]];
[item2 setImage:[NSImage imageNamed:@"RightArrow"]];
[item1 setLabel:@"Prev"];
[item2 setLabel:@"Next"];
```

Then, you put them in a grouped item:

```objc
NSToolbarItemGroup *group = [[NSToolbarItemGroup alloc] initWithItemIdentifier:@"GroupItem"];
[group setSubitems:[NSArray arrayWithObjects:item1, item2, nil]];
```

In this configuration, you get two grouped items, and two labels.

If you set a label on the parent item, you get two grouped items with one shared label:

```objc
[group setLabel:@"Navigate"];
```

If instead you set a view on the parent item, you get two labels with one shared view:

```objc
[group setView:someSegmentedControl];
```

## Topics

### Creating grouped toolbar items

- [groupWithItemIdentifier:images:selectionMode:labels:target:action:](nstoolbaritemgroup/init%28itemidentifier_images_selectionmode_labels_target_action_%29.md): Creates a grouped toolbar item with images.
- [groupWithItemIdentifier:titles:selectionMode:labels:target:action:](nstoolbaritemgroup/init%28itemidentifier_titles_selectionmode_labels_target_action_%29.md): Creates a grouped toolbar item with labels.

### Working with subitems

- [subitems](nstoolbaritemgroup/subitems.md): The subitems of the grouped toolbar item.
- [selectedIndex](nstoolbaritemgroup/selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [isSelectedAtIndex:](nstoolbaritemgroup/isselected%28at_%29.md): Indicates whether a specified index is currently selected.
- [setSelected:atIndex:](nstoolbaritemgroup/setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.

### Configuring grouped toolbar items

- [controlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.property.md): A value that represents how a toolbar displays a grouped toolbar item.
- [NSToolbarItemGroupControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [selectionMode](nstoolbaritemgroup/selectionmode-swift.property.md): The selection mode of the grouped toolbar item.
- [NSToolbarItemGroupSelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [role](nstoolbaritemgroup/role-swift.property.md): The semantic role of the item. Defaults to `NSToolbarItemGroupRoleAutomatic`.
- [NSToolbarItemGroupRole](nstoolbaritemgroup/role-swift.enum.md)

## Relationships

### Inherits From

- [NSToolbarItem](nstoolbaritem.md)

## See Also

### Items

- [NSToolbarItem](nstoolbaritem.md): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroupControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [NSToolbarItemGroupSelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [NSMenuToolbarItem](nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.
