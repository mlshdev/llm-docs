> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/senddatamode/reliable](https://developer.apple.com/documentation/gamekit/gkmatch/senddatamode/reliable)

# GKMatch.SendDataMode.reliable (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Sends data continuously until the recipients successfully receive it or the connection times out.

## Declaration

```swift
case reliable
```

## Mentioned In

- [Exchanging data between players in real-time games](../../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

Use this mode when you need guaranteed delivery in the order it’s sent, and the speed isn’t critical.

## See Also

### Modes

- [GKMatch.SendDataMode.unreliable](unreliable.md): Sends data once even if an error occurs.

# GKMatchSendDataReliable (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Sends data continuously until the recipients successfully receive it or the connection times out.

## Declaration

```objectivec
GKMatchSendDataReliable
```

## Mentioned In

- [Exchanging data between players in real-time games](../../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

Use this mode when you need guaranteed delivery in the order it’s sent, and the speed isn’t critical.

## See Also

### Modes

- [GKMatchSendDataUnreliable](unreliable.md): Sends data once even if an error occurs.
