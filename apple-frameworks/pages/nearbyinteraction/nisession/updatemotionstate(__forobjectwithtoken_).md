> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/updatemotionstate(_:forobjectwithtoken:)](https://developer.apple.com/documentation/nearbyinteraction/nisession/updatemotionstate(_:forobjectwithtoken:))

# updateMotionState(\_:forObjectWithToken:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Notifies the session of an accessory’s motion state change.

## Declaration

```swift
func updateMotionState(_ motionState: NIMotionActivityState, forObjectWithToken token: NIDiscoveryToken)
```

## Parameters

- `motionState`: The current motion state of the accessory.
- `token`: The discovery token that identifies the nearby accessory.

<a id="discussion"></a>

## Discussion

Ranging accuracy improves when the framework knows whether the accessory is moving. Track your accessory’s motion using a method you choose and then describe the motion with the appropriate [NIMotionActivityState](../nimotionactivitystate.md). Call this method, providing the motion state, when the accessory’s motion state changes:

```swift
func handleMotionStateUpdate(_ state: NIMotionActivityState, session: NISession) {
    guard let config = session.configuration as? NINearbyAccessoryConfiguration else {
        return
    }
    session.updateMotionState(state, forObjectWithToken: config.accessoryDiscoveryToken)
}
```

This method works with [NINearbyAccessoryConfiguration](../ninearbyaccessoryconfiguration.md) sessions, and applies to Ultra Wideband and Bluetooth Channel Sounding sessions.

## See Also

### Providing accessory state information

- [NIMotionActivityState](../nimotionactivitystate.md): Motion states for a nearby accessory.

# updateMotionState:forObjectWithToken: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Notifies the session of an accessory’s motion state change.

## Declaration

```objectivec
- (void) updateMotionState:(NIMotionActivityState) motionState forObjectWithToken:(NIDiscoveryToken *) token;
```

## Parameters

- `motionState`: The current motion state of the accessory.
- `token`: The discovery token that identifies the nearby accessory.

<a id="discussion"></a>

## Discussion

Ranging accuracy improves when the framework knows whether the accessory is moving. Track your accessory’s motion using a method you choose and then describe the motion with the appropriate [NIMotionActivityState](../nimotionactivitystate.md). Call this method, providing the motion state, when the accessory’s motion state changes:

```swift
func handleMotionStateUpdate(_ state: NIMotionActivityState, session: NISession) {
    guard let config = session.configuration as? NINearbyAccessoryConfiguration else {
        return
    }
    session.updateMotionState(state, forObjectWithToken: config.accessoryDiscoveryToken)
}
```

This method works with [NINearbyAccessoryConfiguration](../ninearbyaccessoryconfiguration.md) sessions, and applies to Ultra Wideband and Bluetooth Channel Sounding sessions.

## See Also

### Providing accessory state information

- [NIMotionActivityState](../nimotionactivitystate.md): Motion states for a nearby accessory.
