> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuigesturevelocity](https://developer.apple.com/documentation/xcuiautomation/xcuigesturevelocity)

# XCUIGestureVelocity (Swift)

**Framework:** XCUIAutomation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A value that describes how fast a gesture moves across the screen, in pixels per second.

## Declaration

```swift
struct XCUIGestureVelocity
```

## Topics

### Creating a gesture velocity

- [init(\_:)](xcuigesturevelocity/init%28__%29.md): Creates a gesture velocity, expressed as a float.
- [init(rawValue:)](xcuigesturevelocity/init%28rawvalue_%29.md): Creates a gesture velocity with a raw value, expressed as a float.

### Using typical gesture velocities

- [default](xcuigesturevelocity/default.md): A value representing a default gesture velocity.
- [fast](xcuigesturevelocity/fast.md): A value representing a fast gesture velocity.
- [slow](xcuigesturevelocity/slow.md): A value representing a slow gesture velocity.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing gestures

- [swipeLeft()](xcuielement/swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeft(velocity:)](xcuielement/swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight()](xcuielement/swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRight(velocity:)](xcuielement/swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp()](xcuielement/swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUp(velocity:)](xcuielement/swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown()](xcuielement/swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDown(velocity:)](xcuielement/swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.
- [pinch(withScale:velocity:)](xcuielement/pinch%28withscale_velocity_%29.md): Sends a pinching gesture with two touches.
- [rotate(\_:withVelocity:)](xcuielement/rotate%28__withvelocity_%29.md): Sends a rotation gesture with two touches.

# XCUIGestureVelocity (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A value that describes how fast a gesture moves across the screen, in pixels per second.

## Declaration

```objectivec
typedef CGFloat XCUIGestureVelocity;
```

## Topics

### Using typical gesture velocities

- [XCUIGestureVelocityDefault](xcuigesturevelocity/default.md): A value representing a default gesture velocity.
- [XCUIGestureVelocityFast](xcuigesturevelocity/fast.md): A value representing a fast gesture velocity.
- [XCUIGestureVelocitySlow](xcuigesturevelocity/slow.md): A value representing a slow gesture velocity.

## See Also

### Performing gestures

- [swipeLeft](xcuielement/swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeftWithVelocity:](xcuielement/swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight](xcuielement/swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRightWithVelocity:](xcuielement/swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp](xcuielement/swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUpWithVelocity:](xcuielement/swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown](xcuielement/swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDownWithVelocity:](xcuielement/swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.
- [pinchWithScale:velocity:](xcuielement/pinch%28withscale_velocity_%29.md): Sends a pinching gesture with two touches.
- [rotate:withVelocity:](xcuielement/rotate%28__withvelocity_%29.md): Sends a rotation gesture with two touches.
