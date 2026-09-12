> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup/barbuttonitems](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/barbuttonitems)

# barButtonItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The bar button items to display on the bar.

## Declaration

```swift
var barButtonItems: [UIBarButtonItem] { get set }
```

<a id="Discussion"></a>

## Discussion

You may include any number of bar button items in a group, but you should keep the total number of items relatively small because of space considerations. The items in a group are typically related to each other, but need not be. The array must contain at least one item.

Items can belong to only one group at a time. If you specify an item that’s already in a group, UIKit removes the item from its previous group before assigning it to the current group.

## See Also

### Configuring the group

- [representativeItem](representativeitem.md): The item to display for a group when space is constrained.
- [alwaysAvailable](alwaysavailable.md): A Boolean value that determines whether the group is always available through the UI.

# barButtonItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The bar button items to display on the bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<UIBarButtonItem *> * barButtonItems;
```

<a id="Discussion"></a>

## Discussion

You may include any number of bar button items in a group, but you should keep the total number of items relatively small because of space considerations. The items in a group are typically related to each other, but need not be. The array must contain at least one item.

Items can belong to only one group at a time. If you specify an item that’s already in a group, UIKit removes the item from its previous group before assigning it to the current group.

## See Also

### Configuring the group

- [representativeItem](representativeitem.md): The item to display for a group when space is constrained.
- [alwaysAvailable](alwaysavailable.md): A Boolean value that determines whether the group is always available through the UI.
