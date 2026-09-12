> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skattribute](https://developer.apple.com/documentation/spritekit/skattribute)

# SKAttribute (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specification for dynamic per-node data used with a custom shader.

## Declaration

```swift
class SKAttribute
```

## Mentioned In

- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md)

<a id="overview"></a>

## Overview

To define an attribute for your shader, you create an [SKAttribute](skattribute.md) object with a unique name and data type, which is a [SKAttributeType](skattributetype.md) enum. After creating an [SKShader](skshader.md) object, custom attributes are added to its [attributes](skshader/attributes.md) array. Attribute values are set on the parent node with [setValue(\_:forAttribute:)](sknode/setvalue%28__forattribute_%29.md) and can change for each execution of a shader without the need for recompilation.

The following listing shows how you can use an attribute to pass the size of a sprite into a shader using an attribute. In this example, `a_sprite_size` is available as a global `vec2` within the GLSL code.

Listing 1. Passing an attribute to a shader.

```objc
let attributeBasedShader = SKShader(fileNamed: "UsingAttributes.fsh")
attributeBasedShader.attributes = [
    SKAttribute(name: "a_sprite_size", type: .vectorFloat2)]

let sprite = SKSpriteNode()
sprite.shader = attributeBasedShader
sprite.size = CGSize(width: 10, height: 10)
let spriteSize = vector_float2(Float(sprite.frame.size.width), 
                               Float(sprite.frame.size.height))
sprite.setValue(SKAttributeValue(vectorFloat2: spriteSize), 
                forAttribute: "a_sprite_size")
```

## Topics

### Constants

- [SKAttributeType](skattributetype.md): Options that specify an attribute’s data type.

### Initializers

- [init(name:type:)](skattribute/init%28name_type_%29.md): Creates and initializes a new attribute object of a specified type with a name that can be referenced within the shader.
- [init(coder:)](skattribute/init%28coder_%29.md)

### Instance Properties

- [name](skattribute/name.md): The receiver’s name
- [type](skattribute/type.md): The data type of the attribute’s value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shaders

- [SKShader](skshader.md): An object that allows you to apply a custom fragment shader.
- [SKAttributeValue](skattributevalue.md): A container for dynamic shader data associated with a node.
- [SKUniform](skuniform.md): A container for uniform shader data.

# SKAttribute (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A specification for dynamic per-node data used with a custom shader.

## Declaration

```objectivec
@interface SKAttribute : NSObject
```

## Mentioned In

- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md)

<a id="overview"></a>

## Overview

To define an attribute for your shader, you create an [SKAttribute](skattribute.md) object with a unique name and data type, which is a [SKAttributeType](skattributetype.md) enum. After creating an [SKShader](skshader.md) object, custom attributes are added to its [attributes](skshader/attributes.md) array. Attribute values are set on the parent node with [setValue:forAttributeNamed:](sknode/setvalue%28__forattribute_%29.md) and can change for each execution of a shader without the need for recompilation.

The following listing shows how you can use an attribute to pass the size of a sprite into a shader using an attribute. In this example, `a_sprite_size` is available as a global `vec2` within the GLSL code.

Listing 1. Passing an attribute to a shader.

```objc
let attributeBasedShader = SKShader(fileNamed: "UsingAttributes.fsh")
attributeBasedShader.attributes = [
    SKAttribute(name: "a_sprite_size", type: .vectorFloat2)]

let sprite = SKSpriteNode()
sprite.shader = attributeBasedShader
sprite.size = CGSize(width: 10, height: 10)
let spriteSize = vector_float2(Float(sprite.frame.size.width), 
                               Float(sprite.frame.size.height))
sprite.setValue(SKAttributeValue(vectorFloat2: spriteSize), 
                forAttribute: "a_sprite_size")
```

## Topics

### Constants

- [SKAttributeType](skattributetype.md): Options that specify an attribute’s data type.

### Initializers

- [initWithName:type:](skattribute/init%28name_type_%29.md): Creates and initializes a new attribute object of a specified type with a name that can be referenced within the shader.

### Instance Properties

- [name](skattribute/name.md): The receiver’s name
- [type](skattribute/type.md): The data type of the attribute’s value.

### Type Methods

- [attributeWithName:type:](skattribute/attributewithname_type_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shaders

- [SKShader](skshader.md): An object that allows you to apply a custom fragment shader.
- [SKAttributeValue](skattributevalue.md): A container for dynamic shader data associated with a node.
- [SKUniform](skuniform.md): A container for uniform shader data.
