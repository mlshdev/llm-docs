> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctossignpostmetric](https://developer.apple.com/documentation/xctest/xctossignpostmetric)

# XCTOSSignpostMetric (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the time that a performance test spends executing a signposted region of code.

## Declaration

```swift
class XCTOSSignpostMetric
```

<a id="overview"></a>

## Overview

This metric captures the time that elapses between the [begin](https://developer.apple.com/documentation/os/ossignposttype/begin) and [end](https://developer.apple.com/documentation/os/ossignposttype/end) events for a specific named [os_signpost(\_:dso:log:name:signpostID:)](https://developer.apple.com/documentation/os/os_signpost%28_:dso:log:name:signpostid:%29-2oz8u) region. It doesn’t record any results when there isn’t a matching pair of `begin` and `end` events.

## Topics

### Measuring Specific Signposts

- [init(subsystem:category:name:)](xctossignpostmetric/init%28subsystem_category_name_%29.md): Creates a metric to record a specific signpost.

### Measuring Navigation Transitions

- [customNavigationTransitionMetric](xctossignpostmetric/customnavigationtransitionmetric.md): A metric that records the duration of custom navigation transitions between views.
- [navigationTransitionMetric](xctossignpostmetric/navigationtransitionmetric.md): A metric that records the duration of navigation transitions between views.

### Measuring Scrolling Properties

- [scrollingAndDecelerationMetric](xctossignpostmetric/scrollinganddecelerationmetric.md): A metric that records scroll-dragging and deceleration animations.

### Deprecated

- [applicationLaunch](xctossignpostmetric/applicationlaunch.md): Deprecated. A metric that records the time that elapses during app launch.
- [scrollDecelerationMetric](xctossignpostmetric/scrolldecelerationmetric.md): Deprecated. A metric that records scroll deceleration animations.
- [scrollDraggingMetric](xctossignpostmetric/scrolldraggingmetric.md): Deprecated. A metric that records scroll-dragging animations.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [XCTMetric](xctmetric.md)

## See Also

### Measurement Metrics

- [XCTMetric](xctmetric.md): A protocol that defines the methods that objects must provide when gathering metrics during performance tests.
- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.

# XCTOSSignpostMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A metric to record the time that a performance test spends executing a signposted region of code.

## Declaration

```objectivec
@interface XCTOSSignpostMetric : NSObject
```

<a id="overview"></a>

## Overview

This metric captures the time that elapses between the [begin](https://developer.apple.com/documentation/os/ossignposttype/begin) and [end](https://developer.apple.com/documentation/os/ossignposttype/end) events for a specific named [os_signpost(\_:dso:log:name:signpostID:)](https://developer.apple.com/documentation/os/os_signpost%28_:dso:log:name:signpostid:%29-2oz8u) region. It doesn’t record any results when there isn’t a matching pair of `begin` and `end` events.

## Topics

### Measuring Specific Signposts

- [initWithSubsystem:category:name:](xctossignpostmetric/init%28subsystem_category_name_%29.md): Creates a metric to record a specific signpost.

### Measuring Navigation Transitions

- [customNavigationTransitionMetric](xctossignpostmetric/customnavigationtransitionmetric.md): A metric that records the duration of custom navigation transitions between views.
- [navigationTransitionMetric](xctossignpostmetric/navigationtransitionmetric.md): A metric that records the duration of navigation transitions between views.

### Measuring Scrolling Properties

- [scrollingAndDecelerationMetric](xctossignpostmetric/scrollinganddecelerationmetric.md): A metric that records scroll-dragging and deceleration animations.

### Deprecated

- [applicationLaunchMetric](xctossignpostmetric/applicationlaunch.md): Deprecated. A metric that records the time that elapses during app launch.
- [scrollDecelerationMetric](xctossignpostmetric/scrolldecelerationmetric.md): Deprecated. A metric that records scroll deceleration animations.
- [scrollDraggingMetric](xctossignpostmetric/scrolldraggingmetric.md): Deprecated. A metric that records scroll-dragging animations.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [XCTMetric](xctmetric.md)

## See Also

### Measurement Metrics

- [XCTMetric](xctmetric.md): A protocol that defines the methods that objects must provide when gathering metrics during performance tests.
- [XCTCPUMetric](xctcpumetric.md): A metric to record information about CPU activity during a performance test.
- [XCTClockMetric](xctclockmetric.md): A metric to record the time that elapses during a performance test.
- [XCTHitchMetric](xcthitchmetric.md): A metric to measure the number of hitches your UI encounters in a performance test.
- [XCTMemoryMetric](xctmemorymetric.md): A metric to record the physical memory that a performance test uses.
- [XCTStorageMetric](xctstoragemetric.md): A metric to record the amount of data that a performance test logically writes to storage.
- [XCTApplicationLaunchMetric](xctapplicationlaunchmetric.md): A metric to record the application launch duration for a performance test.
