> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteractiondelegate/interactionwillbegin(_:)](https://developer.apple.com/documentation/uikit/uitextinteractiondelegate/interactionwillbegin(_:))

# interactionWillBegin(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the text interaction will begin.

## Declaration

```swift
optional func interactionWillBegin(_ interaction: UITextInteraction)
```

## Parameters

- `interaction`: The text interaction that called this method.

## See Also

### Handling text interaction events

- [interactionShouldBegin(\_:at:)](interactionshouldbegin%28__at_%29.md): Asks the delegate whether the text interaction should begin.
- [interactionDidEnd(\_:)](interactiondidend%28__%29.md): Tells the delegate that the text interaction ended.

# interactionWillBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the text interaction will begin.

## Declaration

```objectivec
- (void) interactionWillBegin:(UITextInteraction *) interaction;
```

## Parameters

- `interaction`: The text interaction that called this method.

## See Also

### Handling text interaction events

- [interactionShouldBegin:atPoint:](interactionshouldbegin%28__at_%29.md): Asks the delegate whether the text interaction should begin.
- [interactionDidEnd:](interactiondidend%28__%29.md): Tells the delegate that the text interaction ended.
