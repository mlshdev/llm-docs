> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview/delegate](https://developer.apple.com/documentation/passkit/pkpaylaterview/delegate)

# delegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

A delegate object that receives messages about the changes to the Apple Pay Later view.

> Apple Pay Later is deprecated.

## Declaration

```swift
unowned(unsafe) var delegate: any PKPayLaterViewDelegate { get set }
```

## See Also

### Responding to changes in the view’s height

- [PKPayLaterViewDelegate](../pkpaylaterviewdelegate.md): Deprecated. Methods the framework calls when the Apple Pay Later view’s size changes.

# delegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

A delegate object that receives messages about the changes to the Apple Pay Later view.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
@property (nonatomic, assign) id<PKPayLaterViewDelegate> delegate;
```

## See Also

### Responding to changes in the view’s height

- [PKPayLaterViewDelegate](../pkpaylaterviewdelegate.md): Deprecated. Methods the framework calls when the Apple Pay Later view’s size changes.
