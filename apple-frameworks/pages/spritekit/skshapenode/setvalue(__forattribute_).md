> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/setvalue(_:forattribute:)](https://developer.apple.com/documentation/spritekit/skshapenode/setvalue(_:forattribute:))

# setValue(\_:forAttribute:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets an attribute value for an attached shader.

## Declaration

```swift
func setValue(_ value: SKAttributeValue, forAttribute key: String)
```

## Parameters

- `value`: An attribute value object containing the scalar or vector value to set in the attached shader.
- `key`: The attribute name.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): The value of a shader attribute.

# setValue:forAttributeNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Sets an attribute value for an attached shader.

## Declaration

```objectivec
- (void) setValue:(SKAttributeValue *) value forAttributeNamed:(NSString *) key;
```

## Parameters

- `value`: An attribute value object containing the scalar or vector value to set in the attached shader.
- `key`: The attribute name.

## See Also

### Customizing Stroking or Fill Drawing

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): The value of a shader attribute.
