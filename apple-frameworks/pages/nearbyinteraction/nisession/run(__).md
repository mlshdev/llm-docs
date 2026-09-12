> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/run(_:)](https://developer.apple.com/documentation/nearbyinteraction/nisession/run(_:))

# run(\_:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Starts a session with a nearby peer.

## Declaration

```swift
func run(_ configuration: NIConfiguration)
```

## Parameters

- `configuration`: An object that indicates an interaction session’s features.

<a id="Discussion"></a>

## Discussion

This function starts an interaction session between two devices.

Before calling this function, ensure the device supports the features your app requires by first inspecting global [deviceCapabilities](devicecapabilities.md).

<a id="Restart-an-Interaction-Session"></a>

### Restart an Interaction Session

To restart a session as the result of unpausing, call this function as described in [pause()](pause%28%29.md). The app calls this function when resuming from session suspension, as described in [sessionSuspensionEnded(\_:)](../nisessiondelegate/sessionsuspensionended%28__%29.md).

> **Note**

>  A session’s [discoveryToken](discoverytoken.md) maintains its original value through restarts.

<a id="Prompt-for-User-Approval"></a>

### Prompt for User Approval

The framework prompts for user permission to provide its relative position to nearby peers when it calls this function the first time the app launches. On subsequent calls to this function, the framework consults a preference in Settings that stores the user’s decision. For more information, see [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md).

## See Also

### Connecting to a peer device

- [discoveryToken](discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [configuration](configuration.md): The configuration run by the session.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.

# runWithConfiguration: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Starts a session with a nearby peer.

## Declaration

```objectivec
- (void) runWithConfiguration:(NIConfiguration *) configuration;
```

## Parameters

- `configuration`: An object that indicates an interaction session’s features.

<a id="Discussion"></a>

## Discussion

This function starts an interaction session between two devices.

Before calling this function, ensure the device supports the features your app requires by first inspecting global [deviceCapabilities](devicecapabilities.md).

<a id="Restart-an-Interaction-Session"></a>

### Restart an Interaction Session

To restart a session as the result of unpausing, call this function as described in [pause](pause%28%29.md). The app calls this function when resuming from session suspension, as described in [sessionSuspensionEnded:](../nisessiondelegate/sessionsuspensionended%28__%29.md).

> **Note**

>  A session’s [discoveryToken](discoverytoken.md) maintains its original value through restarts.

<a id="Prompt-for-User-Approval"></a>

### Prompt for User Approval

The framework prompts for user permission to provide its relative position to nearby peers when it calls this function the first time the app launches. On subsequent calls to this function, the framework consults a preference in Settings that stores the user’s decision. For more information, see [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md).

## See Also

### Connecting to a peer device

- [discoveryToken](discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [configuration](configuration.md): The configuration run by the session.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.
