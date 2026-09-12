> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/performer/view](https://developer.apple.com/documentation/uikit/uitextdropproposal/performer/view)

# UITextDropProposal.Performer.view (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A performer type that indicates that the text view is responsible for doing the drop operation.

## Declaration

```swift
case view
```

<a id="Discussion"></a>

## Discussion

This performer is the default for a [UITextDropProposal](../../uitextdropproposal.md) object. If this performer is used, the [textDroppableView(\_:willPerformDrop:)](../../uitextdropdelegate/textdroppableview%28__willperformdrop_%29.md) method is called (if implemented). However, implementing the delegate method isn’t required when using this performer.

## See Also

### Performers

- [UITextDropProposal.Performer.delegate](delegate.md): A performer type that indicates the delegate object is responsible for doing the drop operation.

# UITextDropPerformerView (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A performer type that indicates that the text view is responsible for doing the drop operation.

## Declaration

```objectivec
UITextDropPerformerView
```

<a id="Discussion"></a>

## Discussion

This performer is the default for a [UITextDropProposal](../../uitextdropproposal.md) object. If this performer is used, the [textDroppableView:willPerformDrop:](../../uitextdropdelegate/textdroppableview%28__willperformdrop_%29.md) method is called (if implemented). However, implementing the delegate method isn’t required when using this performer.

## See Also

### Performers

- [UITextDropPerformerDelegate](delegate.md): A performer type that indicates the delegate object is responsible for doing the drop operation.
