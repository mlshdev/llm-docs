> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragrequest/suggesteditems](https://developer.apple.com/documentation/uikit/uitextdragrequest/suggesteditems)

# suggestedItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of drag items that the system provides when the text drag delegate doesn’t provide custom drag items.

## Declaration

```swift
var suggestedItems: [UIDragItem] { get }
```

<a id="Discussion"></a>

## Discussion

The [suggestedItems](suggesteditems.md) property is always an empty array if the text drag delegate doesn’t implement the [textDraggableView(\_:itemsForDrag:)](../uitextdragdelegate/textdraggableview%28__itemsfordrag_%29.md) method.

## See Also

### Getting the drag items

- [existingItems](existingitems.md): The array of drag items present in a drag session.

# suggestedItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of drag items that the system provides when the text drag delegate doesn’t provide custom drag items.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIDragItem *> * suggestedItems;
```

<a id="Discussion"></a>

## Discussion

The [suggestedItems](suggesteditems.md) property is always an empty array if the text drag delegate doesn’t implement the [textDraggableView:itemsForDrag:](../uitextdragdelegate/textdraggableview%28__itemsfordrag_%29.md) method.

## See Also

### Getting the drag items

- [existingItems](existingitems.md): The array of drag items present in a drag session.
