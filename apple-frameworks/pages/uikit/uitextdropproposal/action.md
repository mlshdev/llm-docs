> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/action](https://developer.apple.com/documentation/uikit/uitextdropproposal/action)

# UITextDropProposal.Action (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text drop action styles for text views.

## Declaration

```swift
enum Action
```

## Topics

### Text drop actions

- [UITextDropProposal.Action.insert](action/insert.md): A text drop action style specifying that text is inserted at the provided location, without altering the surrounding text.
- [UITextDropProposal.Action.replaceAll](action/replaceall.md): A text drop action style specifying that the dropped text replaces all text in the target text view.
- [UITextDropProposal.Action.replaceSelection](action/replaceselection.md): A text drop action style specifying that if the target text view contains a selection, dropped text replaces it.

### Initializers

- [init(rawValue:)](action/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drop management

- [UITextDropRequest](../uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropProposal](../uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropProposal.Performer](performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProposal.ProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.

# UITextDropAction (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text drop action styles for text views.

## Declaration

```objectivec
enum UITextDropAction : NSUInteger;
```

## Topics

### Text drop actions

- [UITextDropActionInsert](action/insert.md): A text drop action style specifying that text is inserted at the provided location, without altering the surrounding text.
- [UITextDropActionReplaceAll](action/replaceall.md): A text drop action style specifying that the dropped text replaces all text in the target text view.
- [UITextDropActionReplaceSelection](action/replaceselection.md): A text drop action style specifying that if the target text view contains a selection, dropped text replaces it.

## See Also

### Drop management

- [UITextDropRequest](../uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropProposal](../uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropPerformer](performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
