> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexdescriptor/attributenamed(_:)](https://developer.apple.com/documentation/modelio/mdlvertexdescriptor/attributenamed(_:))

# attributeNamed(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the vertex attribute with the specified name in the vertex descriptor.

## Declaration

```swift
func attributeNamed(_ name: String) -> MDLVertexAttribute?
```

## Parameters

- `name`: The attribute name for which to retrieve data. See Vertex Attributes for standard attribute names.

<a id="return-value"></a>

## Return Value

The descriptor’s vertex attribute with the specified name, or `nil` if the [attributes](attributes.md) array does not contain a vertex attribute with that name.

## See Also

### Working with Vertex Attributes

- [attributes](attributes.md): The list of vertex attributes described by the vertex descriptor.
- [addOrReplaceAttribute(\_:)](addorreplaceattribute%28__%29.md): Adds the specified vertex attribute to the vertex descriptor, replacing any existing attribute with the same name.
- [setPackedOffsets()](setpackedoffsets%28%29.md): Sets the offset for each vertex attribute to the minimum value to pack vertex data together in a single buffer.

# attributeNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the vertex attribute with the specified name in the vertex descriptor.

## Declaration

```objectivec
- (MDLVertexAttribute *) attributeNamed:(NSString *) name;
```

## Parameters

- `name`: The attribute name for which to retrieve data. See Vertex Attributes for standard attribute names.

<a id="return-value"></a>

## Return Value

The descriptor’s vertex attribute with the specified name, or `nil` if the [attributes](attributes.md) array does not contain a vertex attribute with that name.

## See Also

### Working with Vertex Attributes

- [attributes](attributes.md): The list of vertex attributes described by the vertex descriptor.
- [addOrReplaceAttribute:](addorreplaceattribute%28__%29.md): Adds the specified vertex attribute to the vertex descriptor, replacing any existing attribute with the same name.
- [setPackedOffsets](setpackedoffsets%28%29.md): Sets the offset for each vertex attribute to the minimum value to pack vertex data together in a single buffer.
