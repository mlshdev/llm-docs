> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skeffectnode/value(forattributenamed:)](https://developer.apple.com/documentation/spritekit/skeffectnode/value(forattributenamed:))

# value(forAttributeNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Gets the value of a shader attribute.

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

### Applying a Shader with an Effect Node

- [shader](shader.md): A custom shader that is called when the effect node is blended into the parent’s framebuffer.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.

# valueForAttributeNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Gets the value of a shader attribute.

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

### Applying a Shader with an Effect Node

- [shader](shader.md): A custom shader that is called when the effect node is blended into the parent’s framebuffer.
- [attributeValues](attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
