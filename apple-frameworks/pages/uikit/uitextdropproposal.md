> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal](https://developer.apple.com/documentation/uikit/uitextdropproposal)

# UITextDropProposal (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A proposed configuration for the behavior of a text drop interaction.

## Declaration

```swift
@MainActor class UITextDropProposal
```

## Topics

### Configuring a text drop proposal

- [dropAction](uitextdropproposal/dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropProposal.Action](uitextdropproposal/action.md): The text drop action styles for text views.
- [dropPerformer](uitextdropproposal/dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropProposal.Performer](uitextdropproposal/performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](uitextdropproposal/dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProposal.ProgressMode](uitextdropproposal/progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](uitextdropproposal/usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.

## Relationships

### Inherits From

- [UIDropProposal](uidropproposal.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drop management

- [UITextDropRequest](uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropProposal.Action](uitextdropproposal/action.md): The text drop action styles for text views.
- [UITextDropProposal.Performer](uitextdropproposal/performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProposal.ProgressMode](uitextdropproposal/progressmode.md): The text drop progress styles for user-visible progress indication.

# UITextDropProposal (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A proposed configuration for the behavior of a text drop interaction.

## Declaration

```objectivec
@interface UITextDropProposal : UIDropProposal
```

## Topics

### Configuring a text drop proposal

- [dropAction](uitextdropproposal/dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropAction](uitextdropproposal/action.md): The text drop action styles for text views.
- [dropPerformer](uitextdropproposal/dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropPerformer](uitextdropproposal/performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](uitextdropproposal/dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProgressMode](uitextdropproposal/progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](uitextdropproposal/usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.

## Relationships

### Inherits From

- [UIDropProposal](uidropproposal.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Drop management

- [UITextDropRequest](uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropAction](uitextdropproposal/action.md): The text drop action styles for text views.
- [UITextDropPerformer](uitextdropproposal/performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProgressMode](uitextdropproposal/progressmode.md): The text drop progress styles for user-visible progress indication.
