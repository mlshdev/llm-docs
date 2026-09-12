> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdroprequest](https://developer.apple.com/documentation/uikit/uitextdroprequest)

# UITextDropRequest (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for specifying the attributes of a drop request for a text view.

## Declaration

```swift
@MainActor protocol UITextDropRequest : NSObjectProtocol
```

## Topics

### Getting information about the text drop request

- [dropPosition](uitextdroprequest/dropposition.md): The text position corresponding to the location of a drop session.
- [isSameView](uitextdroprequest/issameview.md): A Boolean value indicating whether the drag and the drop are within the same text view.
- [suggestedProposal](uitextdroprequest/suggestedproposal.md): The text drop proposal offered by the text view.

### Getting the drop session

- [dropSession](uitextdroprequest/dropsession.md): The drop session for the text view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Drop management

- [UITextDropProposal](uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropProposal.Action](uitextdropproposal/action.md): The text drop action styles for text views.
- [UITextDropProposal.Performer](uitextdropproposal/performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProposal.ProgressMode](uitextdropproposal/progressmode.md): The text drop progress styles for user-visible progress indication.

# UITextDropRequest (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for specifying the attributes of a drop request for a text view.

## Declaration

```objectivec
@protocol UITextDropRequest <NSObject>
```

## Topics

### Getting information about the text drop request

- [dropPosition](uitextdroprequest/dropposition.md): The text position corresponding to the location of a drop session.
- [sameView](uitextdroprequest/issameview.md): A Boolean value indicating whether the drag and the drop are within the same text view.
- [suggestedProposal](uitextdroprequest/suggestedproposal.md): The text drop proposal offered by the text view.

### Getting the drop session

- [dropSession](uitextdroprequest/dropsession.md): The drop session for the text view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Drop management

- [UITextDropProposal](uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropAction](uitextdropproposal/action.md): The text drop action styles for text views.
- [UITextDropPerformer](uitextdropproposal/performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProgressMode](uitextdropproposal/progressmode.md): The text drop progress styles for user-visible progress indication.
