> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctossignpostmetric/scrolldraggingmetric](https://developer.apple.com/documentation/xctest/xctossignpostmetric/scrolldraggingmetric)

# scrollDraggingMetric (Swift)

**Framework:** XCTest  
**Kind:** Type Property  
**Availability:** xcode 12.0+ (deprecated in 13.0)

A metric that records scroll-dragging animations.

> Use [scrollingAndDecelerationMetric](scrollinganddecelerationmetric.md) instead.

## Declaration

```swift
class var scrollDraggingMetric: any XCTMetric { get }
```

## See Also

### Deprecated

- [applicationLaunch](applicationlaunch.md): Deprecated. A metric that records the time that elapses during app launch.
- [scrollDecelerationMetric](scrolldecelerationmetric.md): Deprecated. A metric that records scroll deceleration animations.

# scrollDraggingMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.0+ (deprecated in 26.0)

A metric that records scroll-dragging animations.

> Use [scrollingAndDecelerationMetric](scrollinganddecelerationmetric.md) instead.

## Declaration

```objectivec
@property (class, readonly) id<XCTMetric> scrollDraggingMetric;
```

## See Also

### Deprecated

- [applicationLaunchMetric](applicationlaunch.md): Deprecated. A metric that records the time that elapses during app launch.
- [scrollDecelerationMetric](scrolldecelerationmetric.md): Deprecated. A metric that records scroll deceleration animations.
