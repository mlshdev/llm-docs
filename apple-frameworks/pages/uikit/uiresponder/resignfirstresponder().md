> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/resignfirstresponder()](https://developer.apple.com/documentation/uikit/uiresponder/resignfirstresponder())

# resignFirstResponder() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies this object that it has been asked to relinquish its status as first responder in its window.

## Declaration

```swift
func resignFirstResponder() -> Bool
```

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true), resigning first responder status. You can override this method in your custom responders to update your object’s state or perform other actions, such as removing the highlight from a selection. You can also return [false](https://developer.apple.com/documentation/swift/false), refusing to relinquish first responder status. If you override this method, you must call `super` (the superclass implementation) at some point in your code.

## See Also

### Managing the responder chain

- [next](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder()](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.

# resignFirstResponder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies this object that it has been asked to relinquish its status as first responder in its window.

## Declaration

```objectivec
- (BOOL) resignFirstResponder;
```

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true), resigning first responder status. You can override this method in your custom responders to update your object’s state or perform other actions, such as removing the highlight from a selection. You can also return [false](https://developer.apple.com/documentation/swift/false), refusing to relinquish first responder status. If you override this method, you must call `super` (the superclass implementation) at some point in your code.

## See Also

### Managing the responder chain

- [nextResponder](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
