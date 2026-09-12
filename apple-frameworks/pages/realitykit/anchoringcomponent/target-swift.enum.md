> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/target-swift.enum](https://developer.apple.com/documentation/realitykit/anchoringcomponent/target-swift.enum)

# AnchoringComponent.Target

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Defines the kinds of real world objects to which an anchor entity can be tethered.

## Declaration

```swift
enum Target
```

## Topics

### Basic anchor targets

- [AnchoringComponent.Target.world(transform:)](target-swift.enum/world%28transform_%29.md): An anchor point attached to a fixed position in the scene.
- [AnchoringComponent.Target.plane(\_:classification:minimumBounds:)](target-swift.enum/plane%28__classification_minimumbounds_%29.md): An anchor point attached to a real world surface.
- [AnchoringComponent.Target.camera](target-swift.enum/camera.md): An anchor point attached to the device’s camera.
- [AnchoringComponent.Target.anchor(identifier:)](target-swift.enum/anchor%28identifier_%29.md): An anchor point attached to the AR anchor with a given identifier.

### Human anchor targets

- [AnchoringComponent.Target.face](target-swift.enum/face.md): An anchor point attached to the user’s face.
- [AnchoringComponent.Target.body](target-swift.enum/body.md): An anchor point attached to a human body in motion within the scene.
- [AnchoringComponent.Target.hand(\_:location:)](target-swift.enum/hand%28__location_%29.md): An anchor point attached to a specific location on the user’s hand.
- [AnchoringComponent.Target.head](target-swift.enum/head.md): An anchor point attached to the user’s head.

### Image and object anchor targets

- [AnchoringComponent.Target.image(group:name:)](target-swift.enum/image%28group_name_%29.md): An anchor point attached to the image specified by a group and a name in AR Resources.
- [AnchoringComponent.Target.referenceImage(from:)](target-swift.enum/referenceimage%28from_%29.md): An anchor point attached to the image specified by an image anchoring source.
- [AnchoringComponent.Target.object(group:name:)](target-swift.enum/object%28group_name_%29.md): An anchor point attached to the object specified by a group and a name in AR Resources.
- [AnchoringComponent.Target.referenceObject(from:)](target-swift.enum/referenceobject%28from_%29.md): An anchor point attached to an object that matches the reference of an object anchor.

### Structures

- [AnchoringComponent.Target.Alignment](target-swift.enum/alignment.md): Defines the alignment of real-world surfaces to seek as targets.
- [AnchoringComponent.Target.Classification](target-swift.enum/classification.md): Defines types of real-world surfaces to seek as targets.
- [AnchoringComponent.Target.HandLocation](target-swift.enum/handlocation.md): Defines the locations of tracked hands to look for.

### Operators

- [==(\_:\_:)](target-swift.enum/==%28____%29.md): Indicates whether two targets are equal.

### Enumeration Cases

- [AnchoringComponent.Target.accessory(from:location:)](target-swift.enum/accessory%28from_location_%29.md): An anchor point attached to a specific point on a tracked accessory.

### Instance Methods

- [hash(into:)](target-swift.enum/hash%28into_%29.md): Hashes the essential components of the target by feeding them into the given hash function.

### Enumerations

- [AnchoringComponent.Target.Chirality](target-swift.enum/chirality.md): Defines the chirality of tracked hands to look for.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Anchoring components

- [AnchoringComponent](../anchoringcomponent.md): A component that anchors virtual content to a real world target.
- [AnchoringComponent.TrackingMode](trackingmode-swift.struct.md): Options for how an entity tracks its target anchor.
- [ARKitAnchorComponent](../arkitanchorcomponent.md): A component that exposes the backing ARKit data of an anchored entity.
- [AnchorEntity](../anchorentity.md): An anchor that tethers entities to a scene.
- [HasAnchoring](../hasanchoring.md): An interface that enables anchoring of virtual content to a real-world object in an AR scene.
