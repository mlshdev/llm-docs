> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/attributevalues](https://developer.apple.com/documentation/spritekit/sknode/attributevalues)

# attributeValues (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The values of each attribute associated with the node’s attached shader.

> Attributes are only available to node classes supporting [SKShader](../skshader.md), such as [SKSpriteNode](../skspritenode.md), [SKEffectNode](../skeffectnode.md) and [SKShapeNode](../skshapenode.md).

## Declaration

```swift
var attributeValues: [String : SKAttributeValue] { get set }
```

<a id="Discussion"></a>

## Discussion

All nodes have their own copy of an attribute value and therefore the attribute values can be different across the same `SKShader`. If instead you need all nodes to share the same value, use `SKUniform`. Uniforms can change values every frame, but uniforms cannot vary per-node like attributes can.

## See Also

### Setting a Node’s Unique Attributes for a Shader

- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Deprecated. Sets an attribute value for an attached shader
- [value(forAttributeNamed:)](value%28forattributenamed_%29.md): Deprecated. The value of a shader attribute.

# attributeValues (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The values of each attribute associated with the node’s attached shader.

> Attributes are only available to node classes supporting [SKShader](../skshader.md), such as [SKSpriteNode](../skspritenode.md), [SKEffectNode](../skeffectnode.md) and [SKShapeNode](../skshapenode.md).

## Declaration

```objectivec
@property (nonatomic, copy, nonnull) NSDictionary<NSString *,SKAttributeValue *> * attributeValues;
```

<a id="Discussion"></a>

## Discussion

All nodes have their own copy of an attribute value and therefore the attribute values can be different across the same `SKShader`. If instead you need all nodes to share the same value, use `SKUniform`. Uniforms can change values every frame, but uniforms cannot vary per-node like attributes can.

## See Also

### Setting a Node’s Unique Attributes for a Shader

- [setValue:forAttributeNamed:](setvalue%28__forattribute_%29.md): Deprecated. Sets an attribute value for an attached shader
- [valueForAttributeNamed:](value%28forattributenamed_%29.md): Deprecated. The value of a shader attribute.
