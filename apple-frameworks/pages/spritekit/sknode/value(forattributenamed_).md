> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/value(forattributenamed:)](https://developer.apple.com/documentation/spritekit/sknode/value(forattributenamed:))

# value(forAttributeNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The value of a shader attribute.

> Attributes are only available to node classes supporting [SKShader](../skshader.md), such as [SKSpriteNode](../skspritenode.md), [SKEffectNode](../skeffectnode.md) and [SKShapeNode](../skshapenode.md).

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

### Setting a Node’s Unique Attributes for a Shader

- [attributeValues](attributevalues.md): Deprecated. The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Deprecated. Sets an attribute value for an attached shader

# valueForAttributeNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The value of a shader attribute.

> Attributes are only available to node classes supporting [SKShader](../skshader.md), such as [SKSpriteNode](../skspritenode.md), [SKEffectNode](../skeffectnode.md) and [SKShapeNode](../skshapenode.md).

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

### Setting a Node’s Unique Attributes for a Shader

- [attributeValues](attributevalues.md): Deprecated. The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Deprecated. Sets an attribute value for an attached shader
