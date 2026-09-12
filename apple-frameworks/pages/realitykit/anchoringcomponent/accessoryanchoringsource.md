> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/accessoryanchoringsource](https://developer.apple.com/documentation/realitykit/anchoringcomponent/accessoryanchoringsource)

# AnchoringComponent.AccessoryAnchoringSource

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Defines the source of accessory anchoring target based on how it is created.

## Declaration

```swift
struct AccessoryAnchoringSource
```

## Topics

### Creating an anchoring source

- [init(type:location:)](accessoryanchoringsource/init%28type_location_%29.md): Creates an accessory anchoring source for a deferred accessory type.

### Specifying the accessory type

- [AnchoringComponent.AccessoryAnchoringSource.AccessoryType](accessoryanchoringsource/accessorytype.md): Describes the type of accessory to track.

### Initializers

- [init(accessory:)](accessoryanchoringsource/init%28accessory_%29.md)
- [init(device:)](accessoryanchoringsource/init%28device_%29.md): Creates the accessory anchoring source by the GCDevice asynchronously Returns an AccessoryAnchoringSource if the GCDevice supports spatial tracking, throwing an error otherwise

### Instance Properties

- [accessoryLocations](accessoryanchoringsource/accessorylocations.md): The list of anchor-able locations for this accessory.
- [underlyingAccessory](accessoryanchoringsource/underlyingaccessory.md): A reference to the root accessory object.

### Instance Methods

- [locationName(named:)](accessoryanchoringsource/locationname%28named_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
