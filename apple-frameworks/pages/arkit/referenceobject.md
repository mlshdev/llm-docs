> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceobject](https://developer.apple.com/documentation/arkit/referenceobject)

# ReferenceObject

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object the framework can track.

## Declaration

```swift
struct ReferenceObject
```

## Topics

### Creating reference objects

- [init(from:)](referenceobject/init%28from_%29.md): Creates a reference object from a URL you provide.
- [init(named:from:)](referenceobject/init%28named_from_%29.md): Creates a reference object from a bundle.
- [init(from:configuration:)](referenceobject/init%28from_configuration_%29.md): Initializes a reference object from a URL, with reference object configuration.
- [init(named:from:configuration:)](referenceobject/init%28named_from_configuration_%29.md): Initializes a reference object from a bundle, with reference object configuration.

### Inspecting a reference object

- [id](referenceobject/id-swift.property.md): The unique identifier of this reference object.
- [ReferenceObject.ID](referenceobject/id-swift.typealias.md): A type representing the stable identity of the entity associated with an instance.
- [inputFile](referenceobject/inputfile.md): The input file the framework uses for loading a reference object.
- [usdzFile](referenceobject/usdzfile.md): The trained USDZ file, if the reference object includes one.
- [name](referenceobject/name.md): The name of a reference object.
- [description](referenceobject/description.md): A textual representation of this reference object.

### Structures

- [ReferenceObject.Configuration](referenceobject/configuration.md): Defines a configuration for an individual reference object.

### Operators

- [==(\_:\_:)](referenceobject/==%28____%29.md): Returns a Boolean value indicating whether two reference objects are equal.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an object anchor

- [boundingBox](objectanchor/boundingbox.md): The bounding box of an anchor.
- [ObjectAnchor.AxisAlignedBoundingBox](objectanchor/axisalignedboundingbox.md): Values that describe an axis-aligned bounding box.
- [description](objectanchor/description.md): A textual representation of this anchor.
- [isTracked](objectanchor/istracked.md): A Boolean value that indicates whether the framework is currently tracking an object anchor.
- [originFromAnchorTransform](objectanchor/originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [referenceObject](objectanchor/referenceobject.md): The reference object that an anchor corresponds to.
- [inputFile](referenceobject/inputfile.md): The input file the framework uses for loading a reference object.
- [usdzFile](referenceobject/usdzfile.md): The trained USDZ file, if the reference object includes one.
