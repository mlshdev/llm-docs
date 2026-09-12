> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/setvalue(_:forattribute:)](https://developer.apple.com/documentation/spritekit/skemitternode/setvalue(_:forattribute:))

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

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](../getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [shader](shader.md): A custom shader used to determine how particles are rendered.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Gets the value of a shader attribute.

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

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](../getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [shader](shader.md): A custom shader used to determine how particles are rendered.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Gets the value of a shader attribute.
