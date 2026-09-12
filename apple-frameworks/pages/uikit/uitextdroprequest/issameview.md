> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdroprequest/issameview](https://developer.apple.com/documentation/uikit/uitextdroprequest/issameview)

# isSameView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the drag and the drop are within the same text view.

## Declaration

```swift
var isSameView: Bool { get }
```

## See Also

### Getting information about the text drop request

- [dropPosition](dropposition.md): The text position corresponding to the location of a drop session.
- [suggestedProposal](suggestedproposal.md): The text drop proposal offered by the text view.

# sameView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the drag and the drop are within the same text view.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSameView) BOOL sameView;
```

## See Also

### Getting information about the text drop request

- [dropPosition](dropposition.md): The text position corresponding to the location of a drop session.
- [suggestedProposal](suggestedproposal.md): The text drop proposal offered by the text view.
