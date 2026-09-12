> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragoptions](https://developer.apple.com/documentation/uikit/uitextdragoptions)

# UITextDragOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of options that determine the behavior of a draggable text view.

## Declaration

```swift
struct UITextDragOptions
```

## Topics

### Text drag options

- [stripTextColorFromPreviews](uitextdragoptions/striptextcolorfrompreviews.md): Strips the foreground and background colors for a system-provided text drag preview.

### Initializers

- [init(rawValue:)](uitextdragoptions/init%28rawvalue_%29.md): Creates a text-drag options structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.

# UITextDragOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of options that determine the behavior of a draggable text view.

## Declaration

```objectivec
enum UITextDragOptions : NSInteger;
```

## Topics

### Text drag options

- [UITextDragOptionsNone](uitextdragoptions/uitextdragoptionsnone.md): Indicates no text drag options.
- [UITextDragOptionStripTextColorFromPreviews](uitextdragoptions/striptextcolorfrompreviews.md): Strips the foreground and background colors for a system-provided text drag preview.

## See Also

### Text view additions

- [UITextDragDelegate](uitextdragdelegate.md): The interface for customizing the behavior of a drag activity for a text view.
- [UITextDropDelegate](uitextdropdelegate.md): The interface for configuring a text view’s drop behavior.
- [UITextDraggable](uitextdraggable.md): The interface that determines if a text view is a drag source.
- [UITextDroppable](uitextdroppable.md): The interface that determines if a text view is a drop destination.
- [UITextDropEditability](uitextdropeditability.md): The text-drop editability styles for noneditable text views.
