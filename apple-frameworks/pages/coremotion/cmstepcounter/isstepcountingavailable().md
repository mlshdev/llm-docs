> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmstepcounter/isstepcountingavailable()](https://developer.apple.com/documentation/coremotion/cmstepcounter/isstepcountingavailable())

# isStepCountingAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean indicating whether step-counting support is available on the current device.

> Use CMPedometer instead

## Declaration

```swift
class func isStepCountingAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if step-counting support is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Step-counting support is not available on all iOS devices. Use this method to determine if support is available on the current device.

# isStepCountingAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Returns a Boolean indicating whether step-counting support is available on the current device.

> Use CMPedometer instead

## Declaration

```objectivec
+ (BOOL) isStepCountingAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if step-counting support is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Step-counting support is not available on all iOS devices. Use this method to determine if support is available on the current device.
