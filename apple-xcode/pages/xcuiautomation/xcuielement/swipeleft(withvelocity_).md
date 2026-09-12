> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/swipeleft(withvelocity:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/swipeleft(withvelocity:))

# swipeLeft(withVelocity:)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** watchOS · Xcode 16.3+

Sends a swipe-left gesture with a velocity you specify.

> Use [swipeLeft(velocity:)](swipeleft%28velocity_%29.md) instead.

## Declaration

```swift
@MainActor @nonobjc @preconcurrency func swipeLeft(withVelocity velocity: XCUIGestureVelocity)
```

## Parameters

- `velocity`: The speed at which to perform the swipe-left gesture, expressed in pixels per second.

## See Also

### Deprecated methods

- [swipeDown(withVelocity:)](swipedown%28withvelocity_%29.md): Deprecated. Sends a swipe-down gesture with a velocity you specify.
- [swipeUp(withVelocity:)](swipeup%28withvelocity_%29.md): Deprecated. Sends a swipe-up gesture with a velocity you specify.
- [swipeRight(withVelocity:)](swiperight%28withvelocity_%29.md): Deprecated. Sends a swipe-right gesture with a velocity you specify.
