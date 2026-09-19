> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcspatialaccessorydidconnectnotification

# GCSpatialAccessoryDidConnectNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** visionOS 27.0+

Use these constants with NSNotificationCenter to listen to connection and disconnection events.

## Declaration

```objectivec
extern NSString * const GCSpatialAccessoryDidConnectNotification;
```

<a id="discussion"></a>

## Discussion

Use GCSpatialAccessoryDidConnectNotification for observing connections of spatial accessories. Use GCSpatialAccessoryDidDisconnectNotification for observing disconnections of spatial accessories.

Connections and disconnections of spatial accessories will also be reflected in the accessories array of the GCSpatialAccessory class.

The ‘object’ property of the notification will contain the GCSpatialAccessory that was connected or disconnected.
