> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctossignpostmetric/scrollinganddecelerationmetric](https://developer.apple.com/documentation/xctest/xctossignpostmetric/scrollinganddecelerationmetric)

# scrollingAndDecelerationMetric (Swift)

**Framework:** XCTest  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A metric that records scroll-dragging and deceleration animations.

## Declaration

```swift
class var scrollingAndDecelerationMetric: any XCTMetric { get }
```

<a id="Discussion"></a>

## Discussion

In a compatible iPad or iPhone app running in visionOS, the system doesn’t report hitch- or animation-related metrics that occur during scrolling.

# scrollingAndDecelerationMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A metric that records scroll-dragging and deceleration animations.

## Declaration

```objectivec
@property (class, readonly) id<XCTMetric> scrollingAndDecelerationMetric;
```

<a id="Discussion"></a>

## Discussion

In a compatible iPad or iPhone app running in visionOS, the system doesn’t report hitch- or animation-related metrics that occur during scrolling.
