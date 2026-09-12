> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragrequest](https://developer.apple.com/documentation/uikit/uitextdragrequest)

# UITextDragRequest (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for describing the attributes of a drag activity originating in a text view.

## Declaration

```swift
@MainActor protocol UITextDragRequest : NSObjectProtocol
```

## Topics

### Getting the drag items

- [existingItems](uitextdragrequest/existingitems.md): The array of drag items present in a drag session.
- [suggestedItems](uitextdragrequest/suggesteditems.md): An array of drag items that the system provides when the text drag delegate doesn’t provide custom drag items.

### Getting information about the text

- [dragRange](uitextdragrequest/dragrange.md): A range of text associated with a drag item in an active drag session that originated in a text view.
- [isSelected](uitextdragrequest/isselected.md): A Boolean value indicating whether text is selected for dragging.

### Getting the drag session

- [dragSession](uitextdragrequest/dragsession.md): The active drag session.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drag content

- [UITextDragPreviewRenderer](uitextdragpreviewrenderer.md): Renders previews of text dragged by the user.

# UITextDragRequest (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for describing the attributes of a drag activity originating in a text view.

## Declaration

```objectivec
@protocol UITextDragRequest <NSObject>
```

## Topics

### Getting the drag items

- [existingItems](uitextdragrequest/existingitems.md): The array of drag items present in a drag session.
- [suggestedItems](uitextdragrequest/suggesteditems.md): An array of drag items that the system provides when the text drag delegate doesn’t provide custom drag items.

### Getting information about the text

- [dragRange](uitextdragrequest/dragrange.md): A range of text associated with a drag item in an active drag session that originated in a text view.
- [selected](uitextdragrequest/isselected.md): A Boolean value indicating whether text is selected for dragging.

### Getting the drag session

- [dragSession](uitextdragrequest/dragsession.md): The active drag session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drag content

- [UITextDragPreviewRenderer](uitextdragpreviewrenderer.md): Renders previews of text dragged by the user.
