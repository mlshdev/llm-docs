> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessory](https://developer.apple.com/documentation/arkit/accessory)

# Accessory

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Represents an accessory to be tracked.

## Declaration

```swift
struct Accessory
```

## Topics

### Structures

- [Accessory.LocationName](accessory/locationname.md): Location names to fetch transforms defined on accessories. Some pre-defined location names that are common to accessories conforming to the OpenXR spec are provided as a convenience. These are not required to exist on all accessories.

### Operators

- [==(\_:\_:)](accessory/==%28____%29.md): Returns a Boolean value indicating whether two accessories are equal.

### Initializers

- [init(device:)](accessory/init%28device_%29.md): Initializes an accessory from a GCDevice.

### Instance Properties

- [description](accessory/description.md): A textual representation of this accessory.
- [id](accessory/id.md): The unique identifier of this accessory.
- [inherentChirality](accessory/inherentchirality.md): The hand that this accessory is designed to be held in.
- [locations](accessory/locations.md): A list of locations on this accessory for which coordinate transforms are provided.
- [name](accessory/name.md): The name of the accessory.
- [source](accessory/source-swift.property.md): The input source used to create this accessory.
- [usdzFile](accessory/usdzfile.md): USDZ file representing this accessory, if present.

### Enumerations

- [Accessory.Chirality](accessory/chirality.md): The hand which an accessory corresponds to.
- [Accessory.Source](accessory/source-swift.enum.md): Type of source an Accessory was loaded from.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessory tracking

- [Preparing spatial accessories for tracking in your visionOS app](preparing-spatial-accessories-for-tracking-in-your-visionos-app.md): Prepare a spatial accessory for tracking by training a reference accessory file and integrating it into your visionOS app.
- [Working with generic spatial accessories](../visionos/working-with-generic-spatial-accessories.md): Let people place digital replicas of a generic spatial accessory by tracking the accessory with ARKit.
- [AccessoryTrackingProvider](accessorytrackingprovider.md): Provides the real time position of accessories in the user’s environment.
- [AccessoryAnchor](accessoryanchor.md): Represents a tracked accessory.
- [Tracking accessories in volumetric windows](tracking-accessories-in-volumetric-windows.md): Translate the position and velocity of tracked handheld accessories to throw virtual balls at a stack of cans.
- [Tracking a handheld accessory as a virtual sculpting tool](tracking-a-handheld-accessory-as-a-virtual-sculpting-tool.md): Use a tracked accessory with Apple Vision Pro to create a virtual sculpture.
