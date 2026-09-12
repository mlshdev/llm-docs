> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gktransporttype/unreliable](https://developer.apple.com/documentation/gamekit/gktransporttype/unreliable)

# GKTransportType.unreliable (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The data is sent once and is not sent again if a transmission error occurs.

## Declaration

```swift
case unreliable
```

<a id="Discussion"></a>

## Discussion

Use this for small packets of data that must arrive quickly to be useful to the recipient.

## See Also

### Constants

- [GKTransportType.reliable](reliable.md): The data is sent continuously until it is successfully received by the intended recipients or the connection times out.

# GKTransportTypeUnreliable (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The data is sent once and is not sent again if a transmission error occurs.

## Declaration

```objectivec
GKTransportTypeUnreliable
```

<a id="Discussion"></a>

## Discussion

Use this for small packets of data that must arrive quickly to be useful to the recipient.

## See Also

### Constants

- [GKTransportTypeReliable](reliable.md): The data is sent continuously until it is successfully received by the intended recipients or the connection times out.
