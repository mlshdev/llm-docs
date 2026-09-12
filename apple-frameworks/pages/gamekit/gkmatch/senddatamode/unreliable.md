> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/senddatamode/unreliable](https://developer.apple.com/documentation/gamekit/gkmatch/senddatamode/unreliable)

# GKMatch.SendDataMode.unreliable (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Sends data once even if an error occurs.

## Declaration

```swift
case unreliable
```

## Mentioned In

- [Exchanging data between players in real-time games](../../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

Use this mode for small packets of data that must arrive quickly to be useful to the recipient. Unreliable data may arrive in a different order than when you sent it.

## See Also

### Modes

- [GKMatch.SendDataMode.reliable](reliable.md): Sends data continuously until the recipients successfully receive it or the connection times out.

# GKMatchSendDataUnreliable (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Sends data once even if an error occurs.

## Declaration

```objectivec
GKMatchSendDataUnreliable
```

## Mentioned In

- [Exchanging data between players in real-time games](../../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

Use this mode for small packets of data that must arrive quickly to be useful to the recipient. Unreliable data may arrive in a different order than when you sent it.

## See Also

### Modes

- [GKMatchSendDataReliable](reliable.md): Sends data continuously until the recipients successfully receive it or the connection times out.
