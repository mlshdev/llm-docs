> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/session(_:didremove:reason:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/session(_:didremove:reason:))

# session(\_:didRemove:reason:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you when the session removes one or more nearby objects.

## Declaration

```swift
optional func session(_ session: NISession, didRemove nearbyObjects: [NINearbyObject], reason: NINearbyObject.RemovalReason)
```

## Parameters

- `session`: The session that removed a tracked object or objects.
- `nearbyObjects`: The tracked objects the session removed.
- `reason`: The reason the session removed the objects.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The session invokes this callback to notify an app when an interaction ended for the argument `reason`. After Nearby Interaction calls this function, the framework no longer calls [session(\_:didUpdate:)](session%28__didupdate_%29.md) for the argument `trackedObjects`.

<a id="Restart-the-Session-on-Timeout"></a>

### Restart the Session on Timeout

A peer may exceed the supported range for too long or a session may fail to start after the initial attempt. If the peer remains nearby or comes back within the supported range, an app may want to try again. To handle this situation, check for [NINearbyObject.RemovalReason.timeout](../ninearbyobject/removalreason/timeout.md) in this callback and then restart the session. In the following code, the app implements a hypothetical `shouldResume(_:NINearbyObject)` function with app-specific logic that determinations whether to retry. The function may check how many times it’s retried and failed, whether an accessory indicated it stopped, and whether the existing configuration suffices unchanged. Then, the app calls [run(\_:)](../nisession/run%28__%29.md) again on the session.

```swift
func session(_ session: NISession, didRemove nearbyObjects: [NINearbyObject],
        reason: NINearbyObject.RemovalReason) {

    // Only retry if the peer timed out.
    guard reason == .timeout else { return }

    // The session runs with one accessory.
    guard let peer = nearbyObjects.first else { return }

    if shouldResume(peer) {
        // Restart the session.
        if let config = session.configuration {
            session.run(config)
        }
    }
}
```

## See Also

### Monitoring peers

- [session(\_:didUpdate:)](session%28__didupdate_%29.md): Notifies you when the session updates nearby objects.
- [session(\_:didGenerateShareableConfigurationData:for:)](session%28__didgenerateshareableconfigurationdata_for_%29.md): Provides configuration data to share with a third-party accessory.
- [NINearbyObject.RemovalReason](../ninearbyobject/removalreason.md): The reason a session removed a nearby object.

# session:didRemoveNearbyObjects:withReason: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you when the session removes one or more nearby objects.

## Declaration

```objectivec
- (void) session:(NISession *) session didRemoveNearbyObjects:(NSArray<__kindof NINearbyObject *> *) nearbyObjects withReason:(NINearbyObjectRemovalReason) reason;
```

## Parameters

- `session`: The session that removed a tracked object or objects.
- `nearbyObjects`: The tracked objects the session removed.
- `reason`: The reason the session removed the objects.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The session invokes this callback to notify an app when an interaction ended for the argument `reason`. After Nearby Interaction calls this function, the framework no longer calls [session:didUpdateNearbyObjects:](session%28__didupdate_%29.md) for the argument `trackedObjects`.

<a id="Restart-the-Session-on-Timeout"></a>

### Restart the Session on Timeout

A peer may exceed the supported range for too long or a session may fail to start after the initial attempt. If the peer remains nearby or comes back within the supported range, an app may want to try again. To handle this situation, check for [NINearbyObjectRemovalReasonTimeout](../ninearbyobject/removalreason/timeout.md) in this callback and then restart the session. In the following code, the app implements a hypothetical `shouldResume(_:NINearbyObject)` function with app-specific logic that determinations whether to retry. The function may check how many times it’s retried and failed, whether an accessory indicated it stopped, and whether the existing configuration suffices unchanged. Then, the app calls [runWithConfiguration:](../nisession/run%28__%29.md) again on the session.

```swift
func session(_ session: NISession, didRemove nearbyObjects: [NINearbyObject],
        reason: NINearbyObject.RemovalReason) {

    // Only retry if the peer timed out.
    guard reason == .timeout else { return }

    // The session runs with one accessory.
    guard let peer = nearbyObjects.first else { return }

    if shouldResume(peer) {
        // Restart the session.
        if let config = session.configuration {
            session.run(config)
        }
    }
}
```

## See Also

### Monitoring peers

- [session:didUpdateNearbyObjects:](session%28__didupdate_%29.md): Notifies you when the session updates nearby objects.
- [session:didGenerateShareableConfigurationData:forObject:](session%28__didgenerateshareableconfigurationdata_for_%29.md): Provides configuration data to share with a third-party accessory.
- [NINearbyObjectRemovalReason](../ninearbyobject/removalreason.md): The reason a session removed a nearby object.
