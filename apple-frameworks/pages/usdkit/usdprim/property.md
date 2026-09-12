> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/property](https://developer.apple.com/documentation/usdkit/usdprim/property)

# USDPrim.Property

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A named property on a prim, which is either an attribute or a relationship.

## Declaration

```swift
struct Property
```

## Topics

### Structures

- [USDPrim.Property.Spec](property/spec.md): A handle to a property definition (attribute or relationship) stored in a layer.

### Initializers

- [init()](property/init%28%29.md): An invalid property handle.
- [init(\_:)](property/init%28__%29-2927p.md): Casts an object handle to a property handle.
- [init(\_:)](property/init%28__%29-7co8b.md): Casts an attribute handle to a property handle.
- [init(\_:)](property/init%28__%29-po4e.md)

### Instance Properties

- [baseName](property/basename.md): The name of this property without its namespace prefix.
- [isAuthored](property/isauthored.md): A Boolean value that indicates whether this property has any authored opinions.
- [isCustom](property/iscustom.md): A Boolean value that indicates whether this property is a custom property not defined by a schema.
- [isDefined](property/isdefined.md): A Boolean value that indicates whether this property has a defining specification on the stage.
- [isValid](property/isvalid.md): A Boolean value indicating whether this property is valid.
- [name](property/name.md): The name of this property.
- [namespace](property/namespace.md): The namespace prefix of this property’s name, or an empty token if it has none.
- [path](property/path.md): The complete scene path to this property, relative to its stage.
- [prim](property/prim.md): The nearest prim that contains this property.
- [primPath](property/primpath.md): The complete path to the nearest prim that contains this property.
- [stage](property/stage.md): The stage that owns this property.

### Enumerations

- [USDPrim.Property.Variability](property/variability.md): Whether a property’s value can change over time.

### Default Implementations

- [CustomStringConvertible Implementations](property/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [USDStage.Object.MetadataCollection](../usdstage/object/metadatacollection.md)

## See Also

### Accessing properties

- [properties](properties.md): The properties of this prim, including those provided by its schemas.
- [authoredProperties](authoredproperties.md): The properties of this prim that have an authored opinion.
- [propertyNames](propertynames.md): The names of this prim’s properties, including those provided by its schemas.
- [authoredPropertyNames](authoredpropertynames.md): The names of this prim’s properties that have an authored opinion.
- [property(named:)](property%28named_%29.md): Returns the property with a given name on this prim.
- [hasProperty(named:)](hasproperty%28named_%29.md): Returns true if an attribute or relationship with a given name exists.
- [object(at:)](object%28at_%29.md): Returns the object at a given path, relative to this prim.
