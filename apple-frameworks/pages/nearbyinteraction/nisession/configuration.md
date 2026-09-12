> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/configuration](https://developer.apple.com/documentation/nearbyinteraction/nisession/configuration)

# configuration (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

The configuration run by the session.

## Declaration

```swift
@NSCopying var configuration: NIConfiguration? { get }
```

<a id="Discussion"></a>

## Discussion

An app doesn’t set this property. Instead, NI sets its value to reflect the object that the app passed in to [run(\_:)](run%28__%29.md).

## See Also

### Connecting to a peer device

- [discoveryToken](discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [run(\_:)](run%28__%29.md): Starts a session with a nearby peer.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.

# configuration (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

The configuration run by the session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NIConfiguration * configuration;
```

<a id="Discussion"></a>

## Discussion

An app doesn’t set this property. Instead, NI sets its value to reflect the object that the app passed in to [runWithConfiguration:](run%28__%29.md).

## See Also

### Connecting to a peer device

- [discoveryToken](discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](../nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [runWithConfiguration:](run%28__%29.md): Starts a session with a nearby peer.
- [delegateQueue](delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.
