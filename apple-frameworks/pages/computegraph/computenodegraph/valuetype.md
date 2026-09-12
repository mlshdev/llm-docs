> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/valuetype](https://developer.apple.com/documentation/computegraph/computenodegraph/valuetype)

# ComputeNodeGraph.ValueType

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Describes the storage and layout of a port’s value, ranging from Metal primitives and structures to opaque references and stateful bindings.

## Declaration

```swift
enum ValueType
```

## Topics

### Enumeration Cases

- [ComputeNodeGraph.ValueType.data(length:)](valuetype/data%28length_%29.md): Value contains fixed-length data of the given length.
- [ComputeNodeGraph.ValueType.dataType(type:)](valuetype/datatype%28type_%29.md): Deprecated. Legacy. Do not construct in new code.
- [ComputeNodeGraph.ValueType.enumeration(typeName:)](valuetype/enumeration%28typename_%29.md): Value is from enumeration with the given typeName
- [ComputeNodeGraph.ValueType.none](valuetype/none.md): No storage for this value.
- [ComputeNodeGraph.ValueType.opaque(typeName:)](valuetype/opaque%28typename_%29.md): Value is an opaque value of the given type
- [ComputeNodeGraph.ValueType.pointer(type:)](valuetype/pointer%28type_%29.md)
- [ComputeNodeGraph.ValueType.primitive(type:)](valuetype/primitive%28type_%29.md): Value is stored as a primitive data type.
- [ComputeNodeGraph.ValueType.state(definition:)](valuetype/state%28definition_%29.md): Value is a stored state value
- [ComputeNodeGraph.ValueType.string](valuetype/string.md): Value is a utf-8 encoded string
- [ComputeNodeGraph.ValueType.structure(definition:)](valuetype/structure%28definition_%29.md): Value is a structure with the given definition.
- [ComputeNodeGraph.ValueType.texture(typeName:)](valuetype/texture%28typename_%29.md): Value is an texture with the given type name (e.g. texture2d)

### Type Methods

- [primitive(\_:)](valuetype/primitive%28__%29.md)
- [structure(typeName:layout:)](valuetype/structure%28typename_layout_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
