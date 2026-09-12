> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute](https://developer.apple.com/documentation/usdkit/usdprim/attribute)

# USDPrim.Attribute

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct Attribute
```

## Topics

### Protocols

- [USDPrim.Attribute.Value](attribute/value.md): A value that can be stored on an attribute in a Universal Scene Description file.

### Structures

- [USDPrim.Attribute.Spec](attribute/spec.md): A handle to an attribute definition stored in a layer.
- [USDPrim.Attribute.ValueType](attribute/valuetype.md): A type that describes the kind of value an attribute can store, such as `float3` or `token[]`.

### Initializers

- [init()](attribute/init%28%29.md): An invalid attribute handle.
- [init(\_:)](attribute/init%28__%29-8gu7p.md): Casts an object handle to an attribute handle.
- [init(\_:)](attribute/init%28__%29-8mm8c.md): Casts a property handle to an attribute handle.

### Instance Properties

- [connections](attribute/connections.md): The connection target paths authored on this attribute.
- [isValid](attribute/isvalid.md): A Boolean value indicating whether this attribute is valid.
- [name](attribute/name.md): The name of this attribute.
- [path](attribute/path.md): The complete scene path to this attribute, relative to its stage.
- [prim](attribute/prim.md): The nearest prim that contains this attribute.
- [primPath](attribute/primpath.md): The complete path to the nearest prim that contains this attribute.
- [roleName](attribute/rolename.md): The name of this attribute type’s role, which clarifies the semantic purpose of its values.
- [stage](attribute/stage.md): The stage that owns this attribute.
- [timeSamples](attribute/timesamples.md): The composed set of time codes for which this attribute has authored time samples.
- [typeName](attribute/typename.md): The type of the values this attribute stores.
- [variability](attribute/variability.md): The variability of this attribute, which indicates whether its value can change over time.

### Instance Methods

- [clear()](attribute/clear%28%29.md): Clears the authored value of this attribute.
- [setValue(\_:at:)](attribute/setvalue%28__at_%29.md): Sets this attribute’s value at the given time.
- [value(at:)](attribute/value%28at_%29.md): Returns this attribute’s value at the given time, or `nil` if unauthored.

### Default Implementations

- [CustomStringConvertible Implementations](attribute/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [USDStage.Object.MetadataCollection](../usdstage/object/metadatacollection.md)

## See Also

### Accessing attributes

- [attributes](attributes.md): The attributes of this prim, including those provided by its schemas.
- [authoredAttributes](authoredattributes.md): The attributes of this prim that have an authored opinion.
- [attribute(named:)](attribute%28named_%29.md): Returns the attribute with a given name on this prim.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute at a given path, relative to this prim.
- [hasAttribute(named:)](hasattribute%28named_%29.md): Returns true if an attribute with a given name exists on this prim.
- [makeAttribute(named:as:custom:variability:)](makeattribute%28named_as_custom_variability_%29.md): Creates an attribute with the given name on this prim, or returns the existing attribute if one already exists.
