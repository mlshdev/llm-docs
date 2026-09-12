> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview/action](https://developer.apple.com/documentation/passkit/pkpaylaterview/action)

# action (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

The information style that the Apple Pay Later view presents.

> Apple Pay Later is deprecated.

## Declaration

```swift
var action: PKPayLaterAction { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the kind of information modal the Apple Pay Later visual merchandising widget displays. The default is [PKPayLaterAction.learnMore](../pkpaylateraction/learnmore.md).

## See Also

### Setting the user action

- [PKPayLaterAction](../pkpaylateraction.md): Deprecated. Values you use to set the Apple Pay Later action.

# action (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

The information style that the Apple Pay Later view presents.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
@property (nonatomic, assign) PKPayLaterAction action;
```

<a id="Discussion"></a>

## Discussion

This property determines the kind of information modal the Apple Pay Later visual merchandising widget displays. The default is [PKPayLaterActionLearnMore](../pkpaylateraction/learnmore.md).

## See Also

### Setting the user action

- [PKPayLaterAction](../pkpaylateraction.md): Deprecated. Values you use to set the Apple Pay Later action.
