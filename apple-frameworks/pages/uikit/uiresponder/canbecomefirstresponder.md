> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/canbecomefirstresponder](https://developer.apple.com/documentation/uikit/uiresponder/canbecomefirstresponder)

# canBecomeFirstResponder (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether this object can become the first responder.

## Declaration

```swift
var canBecomeFirstResponder: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder can become the first responder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) by default. Subclasses must override this method and return [true](https://developer.apple.com/documentation/swift/true) to be able to become first responder.

Don’t call this method on a view that’s not currently in the active view hierarchy. The result is undefined.

## See Also

### Managing the responder chain

- [next](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [becomeFirstResponder()](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.

# canBecomeFirstResponder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether this object can become the first responder.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canBecomeFirstResponder;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder can become the first responder; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) by default. Subclasses must override this method and return [true](https://developer.apple.com/documentation/swift/true) to be able to become first responder.

Don’t call this method on a view that’s not currently in the active view hierarchy. The result is undefined.

## See Also

### Managing the responder chain

- [nextResponder](next.md): Returns the next responder in the responder chain, or `nil` if there’s no next responder.
- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [becomeFirstResponder](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.
