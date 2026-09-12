> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationcontext/completionhandler](https://developer.apple.com/documentation/appkit/nsanimationcontext/completionhandler)

# completionHandler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A completion Block that is called when the animations in the grouping are completed.

## Declaration

```swift
var completionHandler: (() -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

If set to a non-`nil` value, a context’s `completionHandler` is guaranteed to be called on the main thread as soon as all animations subsequently added to the current `NSAnimationContext` grouping have completed or been cancelled.

This method drives the underlying `CATransaction`[completionBlock()](https://developer.apple.com/documentation/quartzcore/catransaction/completionblock%28%29) property, although the Application Kit may assign a different, intermediary `completionBlock` to the current `CATransaction`.

The completion handler waits for all animations to which the handler applies, independent of whether they are evaluated by the Application Kit or delegated to Core Animation for evaluation in the render tree before firing.

If no animations are added before the current grouping is ended—or the completionHandler is set to a different value—the handler will be invoked immediately.

## See Also

### Animation Completion Handlers

- [runAnimationGroup(\_:completionHandler:)](runanimationgroup%28__completionhandler_%29.md): Allows you to specify a completion block body after the set of animation actions whose completion will trigger the completion block.

# completionHandler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A completion Block that is called when the animations in the grouping are completed.

## Declaration

```objectivec
@property (copy, nullable) void (^)(void) completionHandler;
```

<a id="Discussion"></a>

## Discussion

If set to a non-`nil` value, a context’s `completionHandler` is guaranteed to be called on the main thread as soon as all animations subsequently added to the current `NSAnimationContext` grouping have completed or been cancelled.

This method drives the underlying `CATransaction`[completionBlock](https://developer.apple.com/documentation/quartzcore/catransaction/completionblock%28%29) property, although the Application Kit may assign a different, intermediary `completionBlock` to the current `CATransaction`.

The completion handler waits for all animations to which the handler applies, independent of whether they are evaluated by the Application Kit or delegated to Core Animation for evaluation in the render tree before firing.

If no animations are added before the current grouping is ended—or the completionHandler is set to a different value—the handler will be invoked immediately.

## See Also

### Animation Completion Handlers

- [runAnimationGroup:completionHandler:](runanimationgroup%28__completionhandler_%29.md): Allows you to specify a completion block body after the set of animation actions whose completion will trigger the completion block.
