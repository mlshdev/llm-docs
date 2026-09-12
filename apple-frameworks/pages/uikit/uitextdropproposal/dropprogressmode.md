> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/dropprogressmode](https://developer.apple.com/documentation/uikit/uitextdropproposal/dropprogressmode)

# dropProgressMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A mode that specifies how the text view indicates progress to the user when loading dropped items.

## Declaration

```swift
var dropProgressMode: UITextDropProposal.ProgressMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [UITextDropProposal.ProgressMode.system](progressmode/system.md).

## See Also

### Configuring a text drop proposal

- [dropAction](dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropProposal.Action](action.md): The text drop action styles for text views.
- [dropPerformer](dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropProposal.Performer](performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProposal.ProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.

# dropProgressMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A mode that specifies how the text view indicates progress to the user when loading dropped items.

## Declaration

```objectivec
@property (nonatomic) UITextDropProgressMode dropProgressMode;
```

<a id="Discussion"></a>

## Discussion

The default value is [UITextDropProgressModeSystem](progressmode/system.md).

## See Also

### Configuring a text drop proposal

- [dropAction](dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropAction](action.md): The text drop action styles for text views.
- [dropPerformer](dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropPerformer](performer.md): The performers that are responsible for handling the drop operation.
- [UITextDropProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.
