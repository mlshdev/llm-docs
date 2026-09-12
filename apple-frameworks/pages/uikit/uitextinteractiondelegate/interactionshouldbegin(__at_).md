> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteractiondelegate/interactionshouldbegin(_:at:)](https://developer.apple.com/documentation/uikit/uitextinteractiondelegate/interactionshouldbegin(_:at:))

# interactionShouldBegin(\_:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the text interaction should begin.

## Declaration

```swift
optional func interactionShouldBegin(_ interaction: UITextInteraction, at point: CGPoint) -> Bool
```

## Parameters

- `interaction`: The text interaction that called this method.
- `point`: The position on the screen where the user is touching.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the interaction should begin. Return [true](https://developer.apple.com/documentation/swift/true) to let the interaction begin; otherwise, return [false](https://developer.apple.com/documentation/swift/false) to prevent the interaction from beginning.

## See Also

### Handling text interaction events

- [interactionWillBegin(\_:)](interactionwillbegin%28__%29.md): Tells the delegate that the text interaction will begin.
- [interactionDidEnd(\_:)](interactiondidend%28__%29.md): Tells the delegate that the text interaction ended.

# interactionShouldBegin:atPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate whether the text interaction should begin.

## Declaration

```objectivec
- (BOOL) interactionShouldBegin:(UITextInteraction *) interaction atPoint:(CGPoint) point;
```

## Parameters

- `interaction`: The text interaction that called this method.
- `point`: The position on the screen where the user is touching.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the interaction should begin. Return [true](https://developer.apple.com/documentation/swift/true) to let the interaction begin; otherwise, return [false](https://developer.apple.com/documentation/swift/false) to prevent the interaction from beginning.

## See Also

### Handling text interaction events

- [interactionWillBegin:](interactionwillbegin%28__%29.md): Tells the delegate that the text interaction will begin.
- [interactionDidEnd:](interactiondidend%28__%29.md): Tells the delegate that the text interaction ended.
