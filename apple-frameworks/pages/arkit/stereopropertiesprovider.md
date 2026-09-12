> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/stereopropertiesprovider](https://developer.apple.com/documentation/arkit/stereopropertiesprovider)

# StereoPropertiesProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 2.4+

The StereoPropertiesProvider serves the latest viewpoint properties on the device.

## Declaration

```swift
final class StereoPropertiesProvider
```

## Topics

### Initializers

- [init()](stereopropertiesprovider/init%28%29.md): Initialize the StereoPropertiesProvider.

### Instance Properties

- [description](stereopropertiesprovider/description.md): A textual representation of this stereo properties provider.
- [latestViewpointProperties](stereopropertiesprovider/latestviewpointproperties.md): The latest viewpoint properties, if available.
- [state](stereopropertiesprovider/state.md): The state of this stereo properties provider.

### Type Properties

- [isSupported](stereopropertiesprovider/issupported.md): Determines whether this device supports the stereo properties provider.
- [requiredAuthorizations](stereopropertiesprovider/requiredauthorizations.md): The authorization type(s) required by the stereo properties provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rendering

- [ViewpointProperties](viewpointproperties.md): The ViewpointProperties is a record of render camera transforms at some particular time.
