> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object](https://developer.apple.com/documentation/usdkit/usdstage/object)

# USDStage.Object

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct Object
```

## Topics

### Protocols

- [USDStage.Object.MetadataCollection](object/metadatacollection.md): A scene graph object that possesses metadata.
- [USDStage.Object.MetadataValue](object/metadatavalue.md): A value that can be stored as metadata in a Universal Scene Description file.

### Initializers

- [init()](object/init%28%29.md): An invalid object handle.
- [init(\_:)](object/init%28__%29-421oz.md)
- [init(\_:)](object/init%28__%29-44tvz.md): Casts an attribute handle to an object handle.
- [init(\_:)](object/init%28__%29-64kbz.md)
- [init(\_:)](object/init%28__%29-9xizj.md): Casts a property handle to an object handle.

### Instance Properties

- [isValid](object/isvalid.md): A Boolean value indicating whether this object is valid.
- [name](object/name.md): The name of this scene graph object.
- [path](object/path.md): The complete scene path to this object, relative to its stage.
- [prim](object/prim.md): The nearest prim that contains this object.
- [primPath](object/primpath.md): The complete path to this prim, or to the nearest prim that contains this object.
- [stage](object/stage.md): The stage that owns this object.

### Default Implementations

- [CustomStringConvertible Implementations](object/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [USDStage.Object.MetadataCollection](object/metadatacollection.md)

## See Also

### Accessing prims and properties

- [prim(at:)](prim%28at_%29.md): Returns the prim at a given path, if it exists.
- [object(at:)](object%28at_%29.md): Returns the object at a given path, if it exists.
- [property(at:)](property%28at_%29.md): Returns the property at a given path, if it exists.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute at a given path, if it exists.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship at a given path, if it exists.
- [pseudoRoot](pseudoroot.md): The prim at the top of the stage’s namespace, whose path is `/`.
- [defaultPrim](defaultprim.md): The prim designated as this stage’s default entry point when the stage is referenced.
- [hasDefaultPrim](hasdefaultprim.md): Return true if this stage’s root layer has an authored opinion for the default prim layer metadata.
