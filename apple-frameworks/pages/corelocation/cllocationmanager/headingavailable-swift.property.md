> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/headingavailable-swift.property](https://developer.apple.com/documentation/corelocation/cllocationmanager/headingavailable-swift.property)

# headingAvailable (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 4.0) · iPadOS 3.0+ (deprecated in 4.0) · Mac Catalyst 3.0+ (deprecated in 4.0) · macOS 10.15+ (deprecated in 10.15) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value indicating whether the location manager is able to generate heading-related events.

> Use the [headingAvailable()](headingavailable%28%29.md) class method instead.

## Declaration

```swift
var headingAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Heading data may not be available on all iOS-based devices. You should check the value of this property before asking the location manager to deliver heading-related events.

# headingAvailable (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 4.0) · iPadOS 3.0+ (deprecated in 4.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value indicating whether the location manager is able to generate heading-related events.

> Use the [headingAvailable](headingavailable%28%29.md) class method instead.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL headingAvailable;
```

<a id="Discussion"></a>

## Discussion

Heading data may not be available on all iOS-based devices. You should check the value of this property before asking the location manager to deliver heading-related events.
