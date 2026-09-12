> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksenddatamode/reliable](https://developer.apple.com/documentation/gamekit/gksenddatamode/reliable)

# GKSendDataMode.reliable (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The data is sent continuously until it is successfully received by the intended recipients or the connection times out.

> No longer supported

## Declaration

```swift
case reliable
```

<a id="Discussion"></a>

## Discussion

Reliable transmissions are delivered in the order they were sent. Use this when you need to guarantee delivery.

## See Also

### Constants

- [GKSendDataMode.unreliable](unreliable.md): Deprecated. The data is sent once and is not sent again if a transmission error occurred.

# GKSendDataReliable (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The data is sent continuously until it is successfully received by the intended recipients or the connection times out.

> No longer supported

## Declaration

```objectivec
GKSendDataReliable
```

<a id="Discussion"></a>

## Discussion

Reliable transmissions are delivered in the order they were sent. Use this when you need to guarantee delivery.

## See Also

### Constants

- [GKSendDataUnreliable](unreliable.md): Deprecated. The data is sent once and is not sent again if a transmission error occurred.
