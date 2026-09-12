> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteractiondelegate](https://developer.apple.com/documentation/uikit/uitextinteractiondelegate)

# UITextInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface that an object implements to receive information about text interaction events.

## Declaration

```swift
@MainActor protocol UITextInteractionDelegate : NSObjectProtocol
```

## Topics

### Handling text interaction events

- [interactionShouldBegin(\_:at:)](uitextinteractiondelegate/interactionshouldbegin%28__at_%29.md): Asks the delegate whether the text interaction should begin.
- [interactionWillBegin(\_:)](uitextinteractiondelegate/interactionwillbegin%28__%29.md): Tells the delegate that the text interaction will begin.
- [interactionDidEnd(\_:)](uitextinteractiondelegate/interactiondidend%28__%29.md): Tells the delegate that the text interaction ended.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text interactions

- [UITextInteraction](uitextinteraction.md): An interaction that provides text selection gestures and UI to custom text views.
- [UITextInteractionMode](uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.

# UITextInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface that an object implements to receive information about text interaction events.

## Declaration

```objectivec
@protocol UITextInteractionDelegate <NSObject>
```

## Topics

### Handling text interaction events

- [interactionShouldBegin:atPoint:](uitextinteractiondelegate/interactionshouldbegin%28__at_%29.md): Asks the delegate whether the text interaction should begin.
- [interactionWillBegin:](uitextinteractiondelegate/interactionwillbegin%28__%29.md): Tells the delegate that the text interaction will begin.
- [interactionDidEnd:](uitextinteractiondelegate/interactiondidend%28__%29.md): Tells the delegate that the text interaction ended.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Text interactions

- [UITextInteraction](uitextinteraction.md): An interaction that provides text selection gestures and UI to custom text views.
- [UITextInteractionMode](uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.
