> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/dropaction](https://developer.apple.com/documentation/uikit/uitextdropproposal/dropaction)

# dropAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A text drop action style that specifies how the text view receives dropped items.

## Declaration

```swift
var dropAction: UITextDropProposal.Action { get set }
```

<a id="Discussion"></a>

## Discussion

The property’s default value is [UITextDropProposal.Action.insert](action/insert.md).

## See Also

### Configuring a text drop proposal

- [UITextDropProposal.Action](action.md): The text drop action styles for text views.
- [dropPerformer](dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropProposal.Performer](performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProposal.ProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.

# dropAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A text drop action style that specifies how the text view receives dropped items.

## Declaration

```objectivec
@property (nonatomic) UITextDropAction dropAction;
```

<a id="Discussion"></a>

## Discussion

The property’s default value is [UITextDropActionInsert](action/insert.md).

## See Also

### Configuring a text drop proposal

- [UITextDropAction](action.md): The text drop action styles for text views.
- [dropPerformer](dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropPerformer](performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.
