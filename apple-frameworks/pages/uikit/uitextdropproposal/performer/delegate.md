> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/performer/delegate](https://developer.apple.com/documentation/uikit/uitextdropproposal/performer/delegate)

# UITextDropProposal.Performer.delegate (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A performer type that indicates the delegate object is responsible for doing the drop operation.

## Declaration

```swift
case delegate
```

<a id="Discussion"></a>

## Discussion

If this performer is used, the delegate must implement the [textDroppableView(\_:willPerformDrop:)](../../uitextdropdelegate/textdroppableview%28__willperformdrop_%29.md) method. Otherwise, the text view handles the drop operation, which is the same behavior as specifying [UITextDropProposal.Performer.view](view.md) as the performer.

## See Also

### Performers

- [UITextDropProposal.Performer.view](view.md): A performer type that indicates that the text view is responsible for doing the drop operation.

# UITextDropPerformerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A performer type that indicates the delegate object is responsible for doing the drop operation.

## Declaration

```objectivec
UITextDropPerformerDelegate
```

<a id="Discussion"></a>

## Discussion

If this performer is used, the delegate must implement the [textDroppableView:willPerformDrop:](../../uitextdropdelegate/textdroppableview%28__willperformdrop_%29.md) method. Otherwise, the text view handles the drop operation, which is the same behavior as specifying [UITextDropPerformerView](view.md) as the performer.

## See Also

### Performers

- [UITextDropPerformerView](view.md): A performer type that indicates that the text view is responsible for doing the drop operation.
