> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gktransporttype/reliable](https://developer.apple.com/documentation/gamekit/gktransporttype/reliable)

# GKTransportType.reliable (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The data is sent continuously until it is successfully received by the intended recipients or the connection times out.

## Declaration

```swift
case reliable
```

<a id="Discussion"></a>

## Discussion

Use this when you need to guarantee delivery and speed is not critical.

## See Also

### Constants

- [GKTransportType.unreliable](unreliable.md): The data is sent once and is not sent again if a transmission error occurs.

# GKTransportTypeReliable (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The data is sent continuously until it is successfully received by the intended recipients or the connection times out.

## Declaration

```objectivec
GKTransportTypeReliable
```

<a id="Discussion"></a>

## Discussion

Use this when you need to guarantee delivery and speed is not critical.

## See Also

### Constants

- [GKTransportTypeUnreliable](unreliable.md): The data is sent once and is not sent again if a transmission error occurs.
