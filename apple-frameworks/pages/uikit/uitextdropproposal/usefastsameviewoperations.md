> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/usefastsameviewoperations](https://developer.apple.com/documentation/uikit/uitextdropproposal/usefastsameviewoperations)

# useFastSameViewOperations (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.

## Declaration

```swift
var useFastSameViewOperations: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the drag item data isn’t used. Instead, the drop operation moves or copies the text from its original position to the dropped position within the text view. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a text drop proposal

- [dropAction](dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropProposal.Action](action.md): The text drop action styles for text views.
- [dropPerformer](dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropProposal.Performer](performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProposal.ProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.

# useFastSameViewOperations (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the text view can use fast inline dropping when the source and destination are in the same text view.

## Declaration

```objectivec
@property (nonatomic) BOOL useFastSameViewOperations;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the drag item data isn’t used. Instead, the drop operation moves or copies the text from its original position to the dropped position within the text view. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a text drop proposal

- [dropAction](dropaction.md): A text drop action style that specifies how the text view receives dropped items.
- [UITextDropAction](action.md): The text drop action styles for text views.
- [dropPerformer](dropperformer.md): The performer that is responsible for handling the drop operation.
- [UITextDropPerformer](performer.md): The performers that are responsible for handling the drop operation.
- [dropProgressMode](dropprogressmode.md): A mode that specifies how the text view indicates progress to the user when loading dropped items.
- [UITextDropProgressMode](progressmode.md): The text drop progress styles for user-visible progress indication.
