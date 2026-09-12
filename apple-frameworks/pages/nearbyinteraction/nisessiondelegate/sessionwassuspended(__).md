> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/sessionwassuspended(_:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/sessionwassuspended(_:))

# sessionWasSuspended(\_:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you of a suspended session.

## Declaration

```swift
optional func sessionWasSuspended(_ session: NISession)
```

## Parameters

- `session`: The session that NI suspended.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

When NI invokes this callback, the session suspends and doesn’t receive [session(\_:didUpdate:)](session%28__didupdate_%29.md) callbacks. NI suspends a session when the user backgrounds the app. If the user reactivates the app before NI times out the session, NI calls [sessionSuspensionEnded(\_:)](sessionsuspensionended%28__%29.md). A suspended session won’t resume on its own. To resume the session, call [run(\_:)](../nisession/run%28__%29.md) again, passing in your session’s configuration.

If the app stays backgrounded for too long during a suspension, NI invalidates the session (see [session(\_:didInvalidateWith:)](session%28__didinvalidatewith_%29.md)) and the peer user’s session invokes [session(\_:didRemove:reason:)](session%28__didremove_reason_%29.md) with `reason` [NINearbyObject.RemovalReason.timeout](../ninearbyobject/removalreason/timeout.md).

Additionally, the system may suspend a session for internal reasons.

## See Also

### Managing interruption

- [sessionSuspensionEnded(\_:)](sessionsuspensionended%28__%29.md): Notifies you of the end of a session’s suspension.

# sessionWasSuspended: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you of a suspended session.

## Declaration

```objectivec
- (void) sessionWasSuspended:(NISession *) session;
```

## Parameters

- `session`: The session that NI suspended.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

When NI invokes this callback, the session suspends and doesn’t receive [session:didUpdateNearbyObjects:](session%28__didupdate_%29.md) callbacks. NI suspends a session when the user backgrounds the app. If the user reactivates the app before NI times out the session, NI calls [sessionSuspensionEnded:](sessionsuspensionended%28__%29.md). A suspended session won’t resume on its own. To resume the session, call [runWithConfiguration:](../nisession/run%28__%29.md) again, passing in your session’s configuration.

If the app stays backgrounded for too long during a suspension, NI invalidates the session (see [session:didInvalidateWithError:](session%28__didinvalidatewith_%29.md)) and the peer user’s session invokes [session:didRemoveNearbyObjects:withReason:](session%28__didremove_reason_%29.md) with `reason` [NINearbyObjectRemovalReasonTimeout](../ninearbyobject/removalreason/timeout.md).

Additionally, the system may suspend a session for internal reasons.

## See Also

### Managing interruption

- [sessionSuspensionEnded:](sessionsuspensionended%28__%29.md): Notifies you of the end of a session’s suspension.
