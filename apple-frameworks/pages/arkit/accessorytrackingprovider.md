> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessorytrackingprovider](https://developer.apple.com/documentation/arkit/accessorytrackingprovider)

# AccessoryTrackingProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 26.0+

Provides the real time position of accessories in the user’s environment.

## Declaration

```swift
final class AccessoryTrackingProvider
```

## Topics

### Structures

- [AccessoryTrackingProvider.Error](accessorytrackingprovider/error.md): An accessory tracking error.

### Initializers

- [init(accessories:)](accessorytrackingprovider/init%28accessories_%29.md): Create an accessory tracking provider.

### Instance Properties

- [anchorUpdates](accessorytrackingprovider/anchorupdates.md): An async sequence of all anchor updates.
- [description](accessorytrackingprovider/description.md): A textual representation of this accessory tracking provider.
- [latestAnchors](accessorytrackingprovider/latestanchors.md): The latest accessory anchors updated with the most recent inertial data.
- [state](accessorytrackingprovider/state.md): The state of this accessory tracking provider.

### Instance Methods

- [predictAnchor(for:at:)](accessorytrackingprovider/predictanchor%28for_at_%29.md): Predict an accessory anchor to a target timestamp.
- [updateAccessories(\_:)](accessorytrackingprovider/updateaccessories%28__%29.md): Updates the accessories being tracked by a provider.

### Type Properties

- [isSupported](accessorytrackingprovider/issupported.md): Determines whether this device supports the accessory tracking provider.
- [requiredAuthorizations](accessorytrackingprovider/requiredauthorizations.md): The authorization type(s) required by the accessory tracking provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessory tracking

- [Preparing spatial accessories for tracking in your visionOS app](preparing-spatial-accessories-for-tracking-in-your-visionos-app.md): Prepare a spatial accessory for tracking by training a reference accessory file and integrating it into your visionOS app.
- [Working with generic spatial accessories](../visionos/working-with-generic-spatial-accessories.md): Let people place digital replicas of a generic spatial accessory by tracking the accessory with ARKit.
- [Accessory](accessory.md): Represents an accessory to be tracked.
- [AccessoryAnchor](accessoryanchor.md): Represents a tracked accessory.
- [Tracking accessories in volumetric windows](tracking-accessories-in-volumetric-windows.md): Translate the position and velocity of tracked handheld accessories to throw virtual balls at a stack of cans.
- [Tracking a handheld accessory as a virtual sculpting tool](tracking-a-handheld-accessory-as-a-virtual-sculpting-tool.md): Use a tracked accessory with Apple Vision Pro to create a virtual sculpture.
