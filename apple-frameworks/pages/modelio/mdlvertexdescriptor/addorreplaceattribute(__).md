> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexdescriptor/addorreplaceattribute(_:)](https://developer.apple.com/documentation/modelio/mdlvertexdescriptor/addorreplaceattribute(_:))

# addOrReplaceAttribute(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified vertex attribute to the vertex descriptor, replacing any existing attribute with the same name.

## Declaration

```swift
func addOrReplaceAttribute(_ attribute: MDLVertexAttribute)
```

## Parameters

- `attribute`: The vertex attribute to add to the vertex descriptor.

<a id="Discussion"></a>

## Discussion

If the vertex descriptor contains an attribute whose [name](../mdlvertexattribute/name.md) property is the same as that of the `attribute` parameter, the new attribute replaces the existing attribute in the [attributes](attributes.md) array. Otherwise, this method adds the new attribute to the end of the [attributes](attributes.md) array.

## See Also

### Working with Vertex Attributes

- [attributes](attributes.md): The list of vertex attributes described by the vertex descriptor.
- [attributeNamed(\_:)](attributenamed%28__%29.md): Returns the vertex attribute with the specified name in the vertex descriptor.
- [setPackedOffsets()](setpackedoffsets%28%29.md): Sets the offset for each vertex attribute to the minimum value to pack vertex data together in a single buffer.

# addOrReplaceAttribute: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified vertex attribute to the vertex descriptor, replacing any existing attribute with the same name.

## Declaration

```objectivec
- (void) addOrReplaceAttribute:(MDLVertexAttribute *) attribute;
```

## Parameters

- `attribute`: The vertex attribute to add to the vertex descriptor.

<a id="Discussion"></a>

## Discussion

If the vertex descriptor contains an attribute whose [name](../mdlvertexattribute/name.md) property is the same as that of the `attribute` parameter, the new attribute replaces the existing attribute in the [attributes](attributes.md) array. Otherwise, this method adds the new attribute to the end of the [attributes](attributes.md) array.

## See Also

### Working with Vertex Attributes

- [attributes](attributes.md): The list of vertex attributes described by the vertex descriptor.
- [attributeNamed:](attributenamed%28__%29.md): Returns the vertex attribute with the specified name in the vertex descriptor.
- [setPackedOffsets](setpackedoffsets%28%29.md): Sets the offset for each vertex attribute to the minimum value to pack vertex data together in a single buffer.
