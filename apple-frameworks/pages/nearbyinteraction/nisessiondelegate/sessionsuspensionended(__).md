> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/sessionsuspensionended(_:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/sessionsuspensionended(_:))

# sessionSuspensionEnded(\_:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you of the end of a session’s suspension.

## Declaration

```swift
optional func sessionSuspensionEnded(_ session: NISession)
```

## Parameters

- `session`: The session that NI suspended.

## Mentioned In

- [Extending advanced direction finding and ranging](../extending-advanced-direction-finding-and-ranging.md)

<a id="Discussion"></a>

## Discussion

NI suspends an interaction session when the user backgrounds the app. NI ends the suspension when the user foregrounds the app again. An app may resume a suspended session only after NI invokes this callback. To resume a session after a suspension ends, call [run(\_:)](../nisession/run%28__%29.md), passing in your session’s configuration.

Session suspension is a local event. The framework suspends only the user’s session when the user or system event such as a phone call backgrounds the app. However, if the app stays backgrounded for too long during a suspension, NI invalidates the session with [session(\_:didInvalidateWith:)](session%28__didinvalidatewith_%29.md) and the peer user’s session invokes [session(\_:didRemove:reason:)](session%28__didremove_reason_%29.md) with `reason` [NINearbyObject.RemovalReason.timeout](../ninearbyobject/removalreason/timeout.md).

## See Also

### Managing interruption

- [sessionWasSuspended(\_:)](sessionwassuspended%28__%29.md): Notifies you of a suspended session.

# sessionSuspensionEnded: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you of the end of a session’s suspension.

## Declaration

```objectivec
- (void) sessionSuspensionEnded:(NISession *) session;
```

## Parameters

- `session`: The session that NI suspended.

## Mentioned In

- [Extending advanced direction finding and ranging](../extending-advanced-direction-finding-and-ranging.md)

<a id="Discussion"></a>

## Discussion

NI suspends an interaction session when the user backgrounds the app. NI ends the suspension when the user foregrounds the app again. An app may resume a suspended session only after NI invokes this callback. To resume a session after a suspension ends, call [runWithConfiguration:](../nisession/run%28__%29.md), passing in your session’s configuration.

Session suspension is a local event. The framework suspends only the user’s session when the user or system event such as a phone call backgrounds the app. However, if the app stays backgrounded for too long during a suspension, NI invalidates the session with [session:didInvalidateWithError:](session%28__didinvalidatewith_%29.md) and the peer user’s session invokes [session:didRemoveNearbyObjects:withReason:](session%28__didremove_reason_%29.md) with `reason` [NINearbyObjectRemovalReasonTimeout](../ninearbyobject/removalreason/timeout.md).

## See Also

### Managing interruption

- [sessionWasSuspended:](sessionwassuspended%28__%29.md): Notifies you of a suspended session.
