> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/delegatequeue](https://developer.apple.com/documentation/nearbyinteraction/nisession/delegatequeue)

# delegateQueue (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

The dispatch queue on which the session invokes delegate callbacks.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, NI invokes delegate callbacks on [main](../../dispatch/dispatchqueue/main.md).

## See Also

### Connecting to a peer device

- [discoveryToken](discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [run(\_:)](run%28__%29.md): Starts a session with a nearby peer.
- [configuration](configuration.md): The configuration run by the session.

# delegateQueue (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

The dispatch queue on which the session invokes delegate callbacks.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) dispatch_queue_t delegateQueue;
```

<a id="Discussion"></a>

## Discussion

By default, NI invokes delegate callbacks on [main](../../dispatch/dispatchqueue/main.md).

## See Also

### Connecting to a peer device

- [discoveryToken](discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [runWithConfiguration:](run%28__%29.md): Starts a session with a nearby peer.
- [configuration](configuration.md): The configuration run by the session.
