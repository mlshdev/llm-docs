> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship](https://developer.apple.com/documentation/usdkit/usdprim/relationship)

# USDPrim.Relationship

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A property that connects a prim to one or more other objects in the stage by their paths.

## Declaration

```swift
struct Relationship
```

## Topics

### Structures

- [USDPrim.Relationship.Spec](relationship/spec.md): A handle to a relationship definition stored in a layer.

### Initializers

- [init()](relationship/init%28%29.md): An invalid relationship handle.
- [init(\_:)](relationship/init%28__%29-8v165.md): Casts a property handle to a relationship handle.
- [init(\_:)](relationship/init%28__%29-sp7s.md): Casts an object handle to a relationship handle.

### Instance Properties

- [isValid](relationship/isvalid.md): A Boolean value indicating whether this relationship is valid.
- [name](relationship/name.md): The name of this relationship.
- [path](relationship/path.md): The complete scene path to this relationship, relative to its stage.
- [prim](relationship/prim.md): The nearest prim that contains this relationship.
- [primPath](relationship/primpath.md): The complete path to the nearest prim that contains this relationship.
- [stage](relationship/stage.md): The stage that owns this relationship.
- [targets](relationship/targets.md): The target paths authored on this relationship.

### Default Implementations

- [CustomStringConvertible Implementations](relationship/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [USDStage.Object.MetadataCollection](../usdstage/object/metadatacollection.md)

## See Also

### Accessing relationships

- [relationship(named:)](relationship%28named_%29.md): Returns the relationship with a given name on this prim.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship at a given path, relative to this prim.
- [hasRelationship(named:)](hasrelationship%28named_%29.md): Returns true if a relationship with a given name exists on this prim.
