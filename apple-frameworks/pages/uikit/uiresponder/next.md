> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/next](https://developer.apple.com/documentation/uikit/uiresponder/next)

# next (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the next responder in the responder chain, or `nil` if there’s no next responder.

## Declaration

```swift
var next: UIResponder? { get }
```

<a id="return-value"></a>

## Return Value

The next object in the responder chain, or `nil` if this is the last object in the chain.

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

The [UIResponder](../uiresponder.md) class doesn’t store or set the next responder automatically, so this method returns `nil` by default. Subclasses must override this method and return an appropriate next responder. For example, [UIView](../uiview.md) implements this method and returns the [UIViewController](../uiviewcontroller.md) object that manages it (if it has one) or its superview (if it doesn’t). [UIViewController](../uiviewcontroller.md) similarly implements the method and returns its view’s superview. [UIWindow](../uiwindow.md) returns the application object. The shared [UIApplication](../uiapplication.md) object normally returns `nil`, but it returns its app delegate if that object is a subclass of [UIResponder](../uiresponder.md) and hasn’t already been called to handle the event.

## See Also

### Managing the responder chain

- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder()](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.

# nextResponder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the next responder in the responder chain, or `nil` if there’s no next responder.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIResponder * nextResponder;
```

<a id="return-value"></a>

## Return Value

The next object in the responder chain, or `nil` if this is the last object in the chain.

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

The [UIResponder](../uiresponder.md) class doesn’t store or set the next responder automatically, so this method returns `nil` by default. Subclasses must override this method and return an appropriate next responder. For example, [UIView](../uiview.md) implements this method and returns the [UIViewController](../uiviewcontroller.md) object that manages it (if it has one) or its superview (if it doesn’t). [UIViewController](../uiviewcontroller.md) similarly implements the method and returns its view’s superview. [UIWindow](../uiwindow.md) returns the application object. The shared [UIApplication](../uiapplication.md) object normally returns `nil`, but it returns its app delegate if that object is a subclass of [UIResponder](../uiresponder.md) and hasn’t already been called to handle the event.

## See Also

### Managing the responder chain

- [isFirstResponder](isfirstresponder.md): Returns a Boolean value indicating whether this object is the first responder.
- [canBecomeFirstResponder](canbecomefirstresponder.md): Returns a Boolean value indicating whether this object can become the first responder.
- [becomeFirstResponder](becomefirstresponder%28%29.md): Asks UIKit to make this object the first responder in its window.
- [canResignFirstResponder](canresignfirstresponder.md): Returns a Boolean value indicating whether the responder is willing to relinquish first-responder status.
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies this object that it has been asked to relinquish its status as first responder in its window.
