> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/isfirstresponder](https://developer.apple.com/documentation/uikit/uiresponder/isfirstresponder)

# isFirstResponder (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether this object is the first responder.

## Declaration

```swift
var isFirstResponder: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder is the first responder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

UIKit dispatches some types of events, such as motion events, to the first responder initially.

## See Also

### Managing the responder chain

- [next](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder()](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.

# isFirstResponder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether this object is the first responder.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isFirstResponder;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder is the first responder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

UIKit dispatches some types of events, such as motion events, to the first responder initially.

## See Also

### Managing the responder chain

- [nextResponder](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.
