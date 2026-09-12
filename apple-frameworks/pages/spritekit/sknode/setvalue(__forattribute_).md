> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/setvalue(_:forattribute:)](https://developer.apple.com/documentation/spritekit/sknode/setvalue(_:forattribute:))

# setValue(\_:forAttribute:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sets an attribute value for an attached shader

> Attributes are only available to node classes supporting [SKShader](../skshader.md), such as [SKSpriteNode](../skspritenode.md), [SKEffectNode](../skeffectnode.md) and [SKShapeNode](../skshapenode.md).

## Declaration

```swift
func setValue(_ value: SKAttributeValue, forAttribute key: String)
```

## Parameters

- `value`: An attribute value object containing the scalar or vector value to set in the attached shader.
- `key`: The attribute name.

## See Also

### Setting a Node’s Unique Attributes for a Shader

- [attributeValues](attributevalues.md): Deprecated. The values of each attribute associated with the node’s attached shader.
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Deprecated. The value of a shader attribute.

# setValue:forAttributeNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sets an attribute value for an attached shader

> Attributes are only available to node classes supporting [SKShader](../skshader.md), such as [SKSpriteNode](../skspritenode.md), [SKEffectNode](../skeffectnode.md) and [SKShapeNode](../skshapenode.md).

## Declaration

```objectivec
- (void) setValue:(SKAttributeValue *) value forAttributeNamed:(NSString *) key;
```

## Parameters

- `value`: An attribute value object containing the scalar or vector value to set in the attached shader.
- `key`: The attribute name.

## See Also

### Setting a Node’s Unique Attributes for a Shader

- [attributeValues](attributevalues.md): Deprecated. The values of each attribute associated with the node’s attached shader.
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Deprecated. The value of a shader attribute.
