> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/canresignfirstresponder](https://developer.apple.com/documentation/uikit/uiresponder/canresignfirstresponder)

# canResignFirstResponder (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.

## Declaration

```swift
var canResignFirstResponder: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder can resign first-responder status; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) by default. You can override this method in your custom responders and return a different value if needed. For example, a text field containing invalid content might want to return [false](https://developer.apple.com/documentation/swift/false) to ensure that the user corrects that content first.

## See Also

### Managing the responder chain

- [next](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder()](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.

# canResignFirstResponder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canResignFirstResponder;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder can resign first-responder status; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) by default. You can override this method in your custom responders and return a different value if needed. For example, a text field containing invalid content might want to return [false](https://developer.apple.com/documentation/swift/false) to ensure that the user corrects that content first.

## See Also

### Managing the responder chain

- [nextResponder](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.
