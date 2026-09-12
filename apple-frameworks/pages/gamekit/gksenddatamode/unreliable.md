> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksenddatamode/unreliable](https://developer.apple.com/documentation/gamekit/gksenddatamode/unreliable)

# GKSendDataMode.unreliable (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The data is sent once and is not sent again if a transmission error occurred.

> No longer supported

## Declaration

```swift
case unreliable
```

<a id="Discussion"></a>

## Discussion

Data transmitted unreliably may be received out of order by recipients. Use this for small packets of data that must arrive quickly to be useful to the recipient.

## See Also

### Constants

- [GKSendDataMode.reliable](reliable.md): Deprecated. The data is sent continuously until it is successfully received by the intended recipients or the connection times out.

# GKSendDataUnreliable (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The data is sent once and is not sent again if a transmission error occurred.

> No longer supported

## Declaration

```objectivec
GKSendDataUnreliable
```

<a id="Discussion"></a>

## Discussion

Data transmitted unreliably may be received out of order by recipients. Use this for small packets of data that must arrive quickly to be useful to the recipient.

## See Also

### Constants

- [GKSendDataReliable](reliable.md): Deprecated. The data is sent continuously until it is successfully received by the intended recipients or the connection times out.
