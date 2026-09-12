> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropeditability](https://developer.apple.com/documentation/uikit/uitextdropeditability)

# UITextDropEditability (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text-drop editability styles for noneditable text views.

## Declaration

```swift
enum UITextDropEditability
```

## Topics

### Editability styles

- [UITextDropEditability.no](uitextdropeditability/no.md): A text-drop editability specifier indicating that a noneditable text view does not accept drops.
- [UITextDropEditability.temporary](uitextdropeditability/temporary.md): A text-drop editability specifier indicating that a noneditable text view does accept drops but reverts to its noneditable status immediately afterward.
- [UITextDropEditability.yes](uitextdropeditability/yes.md): A text-drop editability specifier indicating that a noneditable text view does accept drops, and that the dropped text remains editable after the drop is finished.

### Initializers

- [init(rawValue:)](uitextdropeditability/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.

# UITextDropEditability (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text-drop editability styles for noneditable text views.

## Declaration

```objectivec
enum UITextDropEditability : NSUInteger;
```

## Topics

### Editability styles

- [UITextDropEditabilityNo](uitextdropeditability/no.md): A text-drop editability specifier indicating that a noneditable text view does not accept drops.
- [UITextDropEditabilityTemporary](uitextdropeditability/temporary.md): A text-drop editability specifier indicating that a noneditable text view does accept drops but reverts to its noneditable status immediately afterward.
- [UITextDropEditabilityYes](uitextdropeditability/yes.md): A text-drop editability specifier indicating that a noneditable text view does accept drops, and that the dropped text remains editable after the drop is finished.

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDragOptions](uitextdragoptions.md): A set of options that determine the behavior of a draggable text view.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
