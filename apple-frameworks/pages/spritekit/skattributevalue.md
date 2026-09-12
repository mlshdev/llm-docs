> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skattributevalue](https://developer.apple.com/documentation/spritekit/skattributevalue)

# SKAttributeValue (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container for dynamic shader data associated with a node.

## Declaration

```swift
class SKAttributeValue
```

<a id="overview"></a>

## Overview

SpriteKit nodes that are rendered with a custom shader can use [SKAttributeValue](skattributevalue.md) objects to pass dynamic values which can change without requiring that shader to be recompiled. An attribute value is passed to a shader using a node’s [setValue(\_:forAttribute:)](sknode/setvalue%28__forattribute_%29.md) method using the relevant attribute’s name. For example, given a shader with a [SKAttributeType.float](skattributetype/float.md) attribute named `a_radius`:

Listing 1. Creating an attribute

```objc
let attribute = SKAttribute(name: "a_radius", 
                            type: SKAttributeType.float)
```

The following code sets the value of this attribute to `10` and passes it to a [SKSpriteNode](skspritenode.md) object’s shader:

Listing 2. Setting an attribute value

```objc
node.setValue(SKAttributeValue(float: 10), 
              forAttribute: "a_radius")
```

The attribute, `a_radius`, is available as a global floating-point variable within the shader code.

Using this technique, a single shader can be shared across many nodes and each nodes can supply its own attributes. This approach is an alternative to using [SKUniform](skuniform.md) objects which would require a recompilation for each distinct set of parameters.

## Topics

### Initializers

- [init()](skattributevalue/init%28%29.md): Creates and initializes a new attribute value object
- [init(float:)](skattributevalue/init%28float_%29.md): Creates and initializes a new attribute value object that holds a floating point number.
- [init(vectorFloat2:)](skattributevalue/init%28vectorfloat2_%29.md): Creates and initializes a new attribute value object that holds a vector of two floating point numbers.
- [init(vectorFloat3:)](skattributevalue/init%28vectorfloat3_%29.md): Creates and initializes a new attribute value object that holds a vector of three floating point numbers.
- [init(vectorFloat4:)](skattributevalue/init%28vectorfloat4_%29.md): Creates and initializes a new attribute value object that holds a vector of four floating point numbers.
- [init(coder:)](skattributevalue/init%28coder_%29.md)

### Instance Properties

- [floatValue](skattributevalue/floatvalue.md): The receiver’s floating point value.
- [vectorFloat2Value](skattributevalue/vectorfloat2value.md): The receiver’s value as a vector of two floating-point numbers.
- [vectorFloat3Value](skattributevalue/vectorfloat3value.md): The receiver’s value as a vector of three floating point numbers.
- [vectorFloat4Value](skattributevalue/vectorfloat4value.md): The receiver’s value as a vector of four floating point numbers.

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
- [SKAttribute](skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKUniform](skuniform.md): A container for uniform shader data.

# SKAttributeValue (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container for dynamic shader data associated with a node.

## Declaration

```objectivec
@interface SKAttributeValue : NSObject
```

<a id="overview"></a>

## Overview

SpriteKit nodes that are rendered with a custom shader can use [SKAttributeValue](skattributevalue.md) objects to pass dynamic values which can change without requiring that shader to be recompiled. An attribute value is passed to a shader using a node’s [setValue:forAttributeNamed:](sknode/setvalue%28__forattribute_%29.md) method using the relevant attribute’s name. For example, given a shader with a [SKAttributeTypeFloat](skattributetype/float.md) attribute named `a_radius`:

Listing 1. Creating an attribute

```objc
let attribute = SKAttribute(name: "a_radius", 
                            type: SKAttributeType.float)
```

The following code sets the value of this attribute to `10` and passes it to a [SKSpriteNode](skspritenode.md) object’s shader:

Listing 2. Setting an attribute value

```objc
node.setValue(SKAttributeValue(float: 10), 
              forAttribute: "a_radius")
```

The attribute, `a_radius`, is available as a global floating-point variable within the shader code.

Using this technique, a single shader can be shared across many nodes and each nodes can supply its own attributes. This approach is an alternative to using [SKUniform](skuniform.md) objects which would require a recompilation for each distinct set of parameters.

## Topics

### Initializers

- [init](skattributevalue/init%28%29.md): Creates and initializes a new attribute value object
- [valueWithFloat:](skattributevalue/init%28float_%29.md): Creates and initializes a new attribute value object that holds a floating point number.
- [valueWithVectorFloat2:](skattributevalue/init%28vectorfloat2_%29.md): Creates and initializes a new attribute value object that holds a vector of two floating point numbers.
- [valueWithVectorFloat3:](skattributevalue/init%28vectorfloat3_%29.md): Creates and initializes a new attribute value object that holds a vector of three floating point numbers.
- [valueWithVectorFloat4:](skattributevalue/init%28vectorfloat4_%29.md): Creates and initializes a new attribute value object that holds a vector of four floating point numbers.

### Instance Properties

- [floatValue](skattributevalue/floatvalue.md): The receiver’s floating point value.
- [vectorFloat2Value](skattributevalue/vectorfloat2value.md): The receiver’s value as a vector of two floating-point numbers.
- [vectorFloat3Value](skattributevalue/vectorfloat3value.md): The receiver’s value as a vector of three floating point numbers.
- [vectorFloat4Value](skattributevalue/vectorfloat4value.md): The receiver’s value as a vector of four floating point numbers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shaders

- [SKShader](skshader.md): An object that allows you to apply a custom fragment shader.
- [SKAttribute](skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKUniform](skuniform.md): A container for uniform shader data.
