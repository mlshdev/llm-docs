> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextcursorview/isblinking](https://developer.apple.com/documentation/uikit/uitextcursorview/isblinking)

# isBlinking (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that determines whether the blink animation is running.

## Declaration

```swift
var isBlinking: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) when you want the system to start animating the blink effect for the insertion point cursor. Set the property to [false](https://developer.apple.com/documentation/swift/false) to stop the blink animation.

## See Also

### Determining the animation state

- [resetBlinkAnimation()](resetblinkanimation%28%29.md): Resets the blink animation to avoid glitches while someone is typing.

# blinking (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that determines whether the blink animation is running.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isBlinking) BOOL blinking;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) when you want the system to start animating the blink effect for the insertion point cursor. Set the property to [false](https://developer.apple.com/documentation/swift/false) to stop the blink animation.

## See Also

### Determining the animation state

- [resetBlinkAnimation](resetblinkanimation%28%29.md): Resets the blink animation to avoid glitches while someone is typing.
