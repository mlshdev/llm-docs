> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/dropperformer](https://developer.apple.com/documentation/uikit/uitextdropproposal/dropperformer)

# dropPerformer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The performer that is responsible for handling the drop operation.

## Declaration

```swift
var dropPerformer: UITextDropProposal.Performer { get set }
```

<a id="Discussion"></a>

## Discussion

The performer provides a preview for the drop activity, loads the data from the item providers, and inserts the data into the text view. It can be the [UITextDropProposal.Performer.view](performer/view.md) performer (default) or the [UITextDropProposal.Performer.delegate](performer/delegate.md) performer.

## See Also

### Configuring a text drop proposal

- [dropAction](dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropProposal.Action](action.md): The text drop action styles for text views.
- [UITextDropProposal.Performer](performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProposal.ProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.

# dropPerformer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The performer that is responsible for handling the drop operation.

## Declaration

```objectivec
@property (nonatomic) UITextDropPerformer dropPerformer;
```

<a id="Discussion"></a>

## Discussion

The performer provides a preview for the drop activity, loads the data from the item providers, and inserts the data into the text view. It can be the [UITextDropPerformerView](performer/view.md) performer (default) or the [UITextDropPerformerDelegate](performer/delegate.md) performer.

## See Also

### Configuring a text drop proposal

- [dropAction](dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropAction](action.md): The text drop action styles for text views.
- [UITextDropPerformer](performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
- [useFastSameViewOperations](usefastsameviewoperations.md): A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.
