> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/session(_:didupdate:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/session(_:didupdate:))

# session(\_:didUpdate:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you when the session updates nearby objects.

## Declaration

```swift
optional func session(_ session: NISession, didUpdate nearbyObjects: [NINearbyObject])
```

## Parameters

- `session`: The session that updated.
- `nearbyObjects`: The array of nearby objects that the session updated.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

Implement this callback to receive new nearby object updates for the argument session.

In Swift, if a peer is out of range or line of sight, the delegate reads the [distance](../ninearbyobject/distance-676dm.md) and [direction](../ninearbyobject/direction-4qh5w.md) as `nil`. An app can monitor this state and guide a person into range as necessary. For more information, see [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md).

In Objective-C, if a peer is out of range or line of sight, the delegate reads the [distance](../ninearbyobject/distance-676dm.md) as [NINearbyObjectDistanceNotAvailable](../ninearbyobjectdistancenotavailable.md), and [direction](../ninearbyobject/direction-4qh5w.md) as [NINearbyObjectDirectionNotAvailable](../ninearbyobjectdirectionnotavailable.md).

An app can monitor this state and guide the user into range as necessary. For more information, see [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md).

<a id="Provide-feedback-based-on-proximity"></a>

### Provide feedback based on proximity

Apps can react to positional information in an interaction session to create spatial awareness. For example, an app can play audio, invoke haptics, or display visual feedback when a peer is nearby. The following code calls two functions: it calls `enableFunctionalityA` when the device achieves a 1.5-meter proximity to the peer device, and `enableFunctionalityB` when the device achieves a 3-meter proximity to the peer device.

```swift
func session(_ session: NISession, didUpdate nearbyObjects: [NINearbyObject]) {
    // Ensure there's a current peer token.
    guard let peerToken = peerDiscoveryToken else {
        fatalError("don't have peer token")
    }

    // Find the right peer from session update.
    guard let peerObj = nearbyObjects.first (where: { $0.discoveryToken == peerToken }) else {
        return
    }

    // Retrieve the peer's distance, in meters.
    if let distance = peerObj.distance {
        // Compute peer object's distance.
    }
                
    // Retrieve the peer's horizontal angle, in radians.
    if let horizontalAngle = peerObj.horizontalAngle {
        // Compute peer object's angle.
    }

    // Retrieve the peer's direction, in `simd_float3`.
    if let direction = peerObj.direction {
        // Compute peer object's direction.
    }
}
```

## See Also

### Monitoring peers

- [session(\_:didGenerateShareableConfigurationData:for:)](session%28__didgenerateshareableconfigurationdata_for_%29.md): Provides configuration data to share with a third-party accessory.
- [session(\_:didRemove:reason:)](session%28__didremove_reason_%29.md): Notifies you when the session removes one or more nearby objects.
- [NINearbyObject.RemovalReason](../ninearbyobject/removalreason.md): The reason a session removed a nearby object.

# session:didUpdateNearbyObjects: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you when the session updates nearby objects.

## Declaration

```objectivec
- (void) session:(NISession *) session didUpdateNearbyObjects:(NSArray<__kindof NINearbyObject *> *) nearbyObjects;
```

## Parameters

- `session`: The session that updated.
- `nearbyObjects`: The array of nearby objects that the session updated.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

Implement this callback to receive new nearby object updates for the argument session.

In Swift, if a peer is out of range or line of sight, the delegate reads the [distance](../ninearbyobject/distance-676dm.md) and [direction](../ninearbyobject/direction-4qh5w.md) as `nil`. An app can monitor this state and guide a person into range as necessary. For more information, see [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md).

In Objective-C, if a peer is out of range or line of sight, the delegate reads the [distance](../ninearbyobject/distance-676dm.md) as [NINearbyObjectDistanceNotAvailable](../ninearbyobjectdistancenotavailable.md), and [direction](../ninearbyobject/direction-4qh5w.md) as [NINearbyObjectDirectionNotAvailable](../ninearbyobjectdirectionnotavailable.md).

An app can monitor this state and guide the user into range as necessary. For more information, see [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md).

<a id="Provide-feedback-based-on-proximity"></a>

### Provide feedback based on proximity

Apps can react to positional information in an interaction session to create spatial awareness. For example, an app can play audio, invoke haptics, or display visual feedback when a peer is nearby. The following code calls two functions: it calls `enableFunctionalityA` when the device achieves a 1.5-meter proximity to the peer device, and `enableFunctionalityB` when the device achieves a 3-meter proximity to the peer device.

```swift
func session(_ session: NISession, didUpdate nearbyObjects: [NINearbyObject]) {
    // Ensure there's a current peer token.
    guard let peerToken = peerDiscoveryToken else {
        fatalError("don't have peer token")
    }

    // Find the right peer from session update.
    guard let peerObj = nearbyObjects.first (where: { $0.discoveryToken == peerToken }) else {
        return
    }

    // Retrieve the peer's distance, in meters.
    if let distance = peerObj.distance {
        // Compute peer object's distance.
    }
                
    // Retrieve the peer's horizontal angle, in radians.
    if let horizontalAngle = peerObj.horizontalAngle {
        // Compute peer object's angle.
    }

    // Retrieve the peer's direction, in `simd_float3`.
    if let direction = peerObj.direction {
        // Compute peer object's direction.
    }
}
```

## See Also

### Monitoring peers

- [session:didGenerateShareableConfigurationData:forObject:](session%28__didgenerateshareableconfigurationdata_for_%29.md): Provides configuration data to share with a third-party accessory.
- [session:didRemoveNearbyObjects:withReason:](session%28__didremove_reason_%29.md): Notifies you when the session removes one or more nearby objects.
- [NINearbyObjectRemovalReason](../ninearbyobject/removalreason.md): The reason a session removed a nearby object.
