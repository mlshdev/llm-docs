> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/session(_:didgenerateshareableconfigurationdata:for:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/session(_:didgenerateshareableconfigurationdata:for:))

# session(\_:didGenerateShareableConfigurationData:for:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Provides configuration data to share with a third-party accessory.

## Declaration

```swift
optional func session(_ session: NISession, didGenerateShareableConfigurationData shareableConfigurationData: Data, for object: NINearbyObject)
```

## Parameters

- `session`: The session that produced the configuration data.
- `shareableConfigurationData`: The data to share with the accessory.
- `object`: A representation of the accessory as an [NINearbyObject](../ninearbyobject.md).

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The system invokes this callback only for sessions that run an accessory configuration. The `shareableConfigurationData` argument contains information that the accessory needs to begin the session. For more information, see [NINearbyAccessoryConfiguration](../ninearbyaccessoryconfiguration.md).

## See Also

### Monitoring peers

- [session(\_:didUpdate:)](session%28__didupdate_%29.md): Notifies you when the session updates nearby objects.
- [session(\_:didRemove:reason:)](session%28__didremove_reason_%29.md): Notifies you when the session removes one or more nearby objects.
- [NINearbyObject.RemovalReason](../ninearbyobject/removalreason.md): The reason a session removed a nearby object.

# session:didGenerateShareableConfigurationData:forObject: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Provides configuration data to share with a third-party accessory.

## Declaration

```objectivec
- (void) session:(NISession *) session didGenerateShareableConfigurationData:(NSData *) shareableConfigurationData forObject:(NINearbyObject *) object;
```

## Parameters

- `session`: The session that produced the configuration data.
- `shareableConfigurationData`: The data to share with the accessory.
- `object`: A representation of the accessory as an [NINearbyObject](../ninearbyobject.md).

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The system invokes this callback only for sessions that run an accessory configuration. The `shareableConfigurationData` argument contains information that the accessory needs to begin the session. For more information, see [NINearbyAccessoryConfiguration](../ninearbyaccessoryconfiguration.md).

## See Also

### Monitoring peers

- [session:didUpdateNearbyObjects:](session%28__didupdate_%29.md): Notifies you when the session updates nearby objects.
- [session:didRemoveNearbyObjects:withReason:](session%28__didremove_reason_%29.md): Notifies you when the session removes one or more nearby objects.
- [NINearbyObjectRemovalReason](../ninearbyobject/removalreason.md): The reason a session removed a nearby object.
