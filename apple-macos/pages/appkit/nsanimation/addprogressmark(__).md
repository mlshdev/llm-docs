> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/addprogressmark(_:)](https://developer.apple.com/documentation/appkit/nsanimation/addprogressmark(_:))

# addProgressMark(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the progress mark to the receiver.

## Declaration

```swift
func addProgressMark(_ progressMark: NSAnimation.Progress)
```

## Parameters

- `progressMark`: A `float` value (typed as NSAnimationProgress) between 0.0 and 1.0. Values outside that range are pinned to 0.0 or 1.0, whichever is nearest.

<a id="Discussion"></a>

## Discussion

A progress mark represents a percentage of the animation completed. When the animation reaches a progress mark, an [animation(\_:didReachProgressMark:)](../nsanimationdelegate/animation%28__didreachprogressmark_%29.md) message is sent to the delegate and an [progressMarkNotification](progressmarknotification.md) is broadcast to all observers. You might receive multiple notifications of progress advances over multiple marks.

## See Also

### Related Documentation

- [currentProgress](currentprogress.md): The current progress of the animation.

### Managing Progress Marks

- [removeProgressMark(\_:)](removeprogressmark%28__%29.md): Removes progress mark from the receiver.
- [progressMarks](progressmarks.md): An array of floating-point numbers representing current progress marks.

# addProgressMark: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the progress mark to the receiver.

## Declaration

```objectivec
- (void) addProgressMark:(NSAnimationProgress) progressMark;
```

## Parameters

- `progressMark`: A `float` value (typed as NSAnimationProgress) between 0.0 and 1.0. Values outside that range are pinned to 0.0 or 1.0, whichever is nearest.

<a id="Discussion"></a>

## Discussion

A progress mark represents a percentage of the animation completed. When the animation reaches a progress mark, an [animation:didReachProgressMark:](../nsanimationdelegate/animation%28__didreachprogressmark_%29.md) message is sent to the delegate and an [NSAnimationProgressMarkNotification](progressmarknotification.md) is broadcast to all observers. You might receive multiple notifications of progress advances over multiple marks.

## See Also

### Related Documentation

- [currentProgress](currentprogress.md): The current progress of the animation.

### Managing Progress Marks

- [removeProgressMark:](removeprogressmark%28__%29.md): Removes progress mark from the receiver.
- [progressMarks](progressmarks.md): An array of floating-point numbers representing current progress marks.
