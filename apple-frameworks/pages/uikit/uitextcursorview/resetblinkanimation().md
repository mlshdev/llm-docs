> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextcursorview/resetblinkanimation()](https://developer.apple.com/documentation/uikit/uitextcursorview/resetblinkanimation())

# resetBlinkAnimation() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Resets the blink animation to avoid glitches while someone is typing.

## Declaration

```swift
func resetBlinkAnimation()
```

<a id="Discussion"></a>

## Discussion

When the cursor is moving in your text view, call this method to prevent the insertion point from blinking.

## See Also

### Determining the animation state

- [isBlinking](isblinking.md): A Boolean value that determines whether the blink animation is running.

# resetBlinkAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Resets the blink animation to avoid glitches while someone is typing.

## Declaration

```objectivec
- (void) resetBlinkAnimation;
```

<a id="Discussion"></a>

## Discussion

When the cursor is moving in your text view, call this method to prevent the insertion point from blinking.

## See Also

### Determining the animation state

- [blinking](isblinking.md): A Boolean value that determines whether the blink animation is running.
