> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/selectionmode-swift.enum](https://developer.apple.com/documentation/appkit/nsmenu/selectionmode-swift.enum)

# NSMenu.SelectionMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Describes how the menu manages selection states of the menu items that belong to the same selection group.

## Declaration

```swift
enum SelectionMode
```

<a id="overview"></a>

## Overview

This doesn’t apply to menu items that have distinct target-action values.

## Topics

### Defining the selection mode

- [NSMenu.SelectionMode.automatic](selectionmode-swift.enum/automatic.md): A selection mode where the menu determines the appropriate selection mode based on the context and its constants.
- [NSMenu.SelectionMode.selectAny](selectionmode-swift.enum/selectany.md): A selection mode where someone can select multiple items in the menu.
- [NSMenu.SelectionMode.selectOne](selectionmode-swift.enum/selectone.md): A selection mode where someone can select at most one menu item in the same selection group at the same time.

### Initializers

- [init(rawValue:)](selectionmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting Items

- [selectedItems](selecteditems.md): The menu items that are currently selected.
- [selectionMode](selectionmode-swift.property.md): The selection mode of the menu.

# NSMenuSelectionMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Describes how the menu manages selection states of the menu items that belong to the same selection group.

## Declaration

```objectivec
enum NSMenuSelectionMode : NSInteger;
```

<a id="overview"></a>

## Overview

This doesn’t apply to menu items that have distinct target-action values.

## Topics

### Defining the selection mode

- [NSMenuSelectionModeAutomatic](selectionmode-swift.enum/automatic.md): A selection mode where the menu determines the appropriate selection mode based on the context and its constants.
- [NSMenuSelectionModeSelectAny](selectionmode-swift.enum/selectany.md): A selection mode where someone can select multiple items in the menu.
- [NSMenuSelectionModeSelectOne](selectionmode-swift.enum/selectone.md): A selection mode where someone can select at most one menu item in the same selection group at the same time.

## See Also

### Selecting Items

- [selectedItems](selecteditems.md): The menu items that are currently selected.
- [selectionMode](selectionmode-swift.property.md): The selection mode of the menu.
