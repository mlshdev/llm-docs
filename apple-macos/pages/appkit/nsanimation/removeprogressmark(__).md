> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/removeprogressmark(_:)](https://developer.apple.com/documentation/appkit/nsanimation/removeprogressmark(_:))

# removeProgressMark(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes progress mark from the receiver.

## Declaration

```swift
func removeProgressMark(_ progressMark: NSAnimation.Progress)
```

## Parameters

- `progressMark`: A `float` value (typed as NSAnimationProgress) that indicates the portion of the animation completed. The value should correspond to a progress mark set with [addProgressMark(\_:)](addprogressmark%28__%29.md) or [NSAnimation](../nsanimation.md).

## See Also

### Managing Progress Marks

- [addProgressMark(\_:)](addprogressmark%28__%29.md): Adds the progress mark to the receiver.
- [progressMarks](progressmarks.md): An array of floating-point numbers representing current progress marks.

# removeProgressMark: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes progress mark from the receiver.

## Declaration

```objectivec
- (void) removeProgressMark:(NSAnimationProgress) progressMark;
```

## Parameters

- `progressMark`: A `float` value (typed as NSAnimationProgress) that indicates the portion of the animation completed. The value should correspond to a progress mark set with [addProgressMark:](addprogressmark%28__%29.md) or [NSAnimation](../nsanimation.md).

## See Also

### Managing Progress Marks

- [addProgressMark:](addprogressmark%28__%29.md): Adds the progress mark to the receiver.
- [progressMarks](progressmarks.md): An array of floating-point numbers representing current progress marks.
