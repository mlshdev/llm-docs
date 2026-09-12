> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/audioaccessoryheadtracking/session](https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/session)

# AudioAccessoryHeadTracking.Session

**Framework:** AudioAccessoryKit  
**Kind:** Class  
**Availability:** iOS 27.0+

## Declaration

```swift
final class Session
```

## Topics

### Instance Properties

- [isHeadTrackingActive](session/isheadtrackingactive.md): Returns `true` when head tracking is currently enabled for this accessory; `false` otherwise.
- [restorationID](session/restorationid.md): A stable identifier the system uses to bring this extension out of suspension when sensor traffic arrives for this accessory.

### Instance Methods

- [sendDataToAudioExtension(\_:)](session/senddatatoaudioextension%28__%29.md): Forward a frame of IMU sensor data from the accessory to the Spatial Audio renderer.

## Relationships

### Conforms To

- [AccessoryFeatureSession](../../accessorytransportextension/accessoryfeaturesession.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
