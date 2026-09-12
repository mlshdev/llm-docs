> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/value(forattributenamed:)](https://developer.apple.com/documentation/spritekit/skshapenode/value(forattributenamed:))

# value(forAttributeNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The value of a shader attribute.

## Declaration

```swift
func value(forAttributeNamed key: String) -> SKAttributeValue?
```

## Parameters

- `key`: The attribute name.

<a id="return-value"></a>

## Return Value

An attribute value object containing the scalar or vector value or `nil` if no such attribute exists.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.

# valueForAttributeNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The value of a shader attribute.

## Declaration

```objectivec
- (SKAttributeValue *) valueForAttributeNamed:(NSString *) key;
```

## Parameters

- `key`: The attribute name.

<a id="return-value"></a>

## Return Value

An attribute value object containing the scalar or vector value or `nil` if no such attribute exists.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
