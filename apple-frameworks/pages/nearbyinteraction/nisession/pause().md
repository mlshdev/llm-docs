> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/pause()](https://developer.apple.com/documentation/nearbyinteraction/nisession/pause())

# pause() (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Stops sending distance and direction updates to the peer.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

To resume a paused session, the app calls [run(\_:)](run%28__%29.md), passing in the session’s configuration.

If an app pauses the session for too long, the peer receives [session(\_:didRemove:reason:)](../nisessiondelegate/session%28__didremove_reason_%29.md) callback with the [NINearbyObject.RemovalReason.timeout](../ninearbyobject/removalreason/timeout.md) reason.

## See Also

### Managing life cycle

- [delegate](delegate.md): An object that the framework notifies of session events.
- [invalidate()](invalidate%28%29.md): Stops a running session.

# pause (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Stops sending distance and direction updates to the peer.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

To resume a paused session, the app calls [runWithConfiguration:](run%28__%29.md), passing in the session’s configuration.

If an app pauses the session for too long, the peer receives [session:didRemoveNearbyObjects:withReason:](../nisessiondelegate/session%28__didremove_reason_%29.md) callback with the [NINearbyObjectRemovalReasonTimeout](../ninearbyobject/removalreason/timeout.md) reason.

## See Also

### Managing life cycle

- [delegate](delegate.md): An object that the framework notifies of session events.
- [invalidate](invalidate%28%29.md): Stops a running session.
