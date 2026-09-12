> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skuniform](https://developer.apple.com/documentation/spritekit/skuniform)

# SKUniform (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A container for uniform shader data.

## Declaration

```swift
class SKUniform
```

## Mentioned In

- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md)

<a id="overview"></a>

## Overview

An [SKUniform](skuniform.md) object is used to hold uniform data for a custom OpenGL or OpenGL ES shader. The uniform data is accessible from all shaders that include the uniform.To use a uniform variable in your shader, create the [SKUniform](skuniform.md) object and set its initial value. Once its value is specified, the [uniformType](skuniform/uniformtype.md) property changes to match the type of the initial value you provided and can never change afterward. To use the uniform object, add it to an [SKShader](skshader.md) object that needs to access the uniform variable. To update the uniform variable’s value, choose the appropriate property on the uniform object based on the data type it encapsulates.

## Topics

### Creating and Initializing Uniform Objects

- [init(name:)](skuniform/init%28name_%29.md): Initializes a new uniform object.
- [init(name:float:)](skuniform/init%28name_float_%29-48rln.md): Initializes a new uniform object that holds a floating-point number.
- [init(name:float:)](skuniform/init%28name_float_%29-9g5vj.md): Deprecated. Initializes a new uniform object that holds a vector of two floating-point numbers.
- [init(name:float:)](skuniform/init%28name_float_%29-9g6a7.md): Deprecated. Creates and initializes a new uniform object that holds a vector of three floating-point numbers.
- [init(name:float:)](skuniform/init%28name_float_%29-9g7j7.md): Deprecated. Initializes a new uniform object that holds a vector of four floating-point numbers.
- [init(name:float:)](skuniform/init%28name_float_%29-6110m.md): Deprecated. Initializes a new uniform object that holds a `2 x 2` matrix of floating-point numbers.
- [init(name:float:)](skuniform/init%28name_float_%29-611hs.md): Deprecated. Initializes a new uniform object that holds a `3 x 3` matrix of floating-point numbers.
- [init(name:float:)](skuniform/init%28name_float_%29-60zbm.md): Deprecated. Initializes a new uniform object that holds a `4 x 4` matrix of floating-point numbers.
- [init(name:texture:)](skuniform/init%28name_texture_%29.md): Initializes a new uniform object that holds a reference to a texture.

### Reading Information About a Uniform

- [name](skuniform/name.md): The uniform’s name.
- [uniformType](skuniform/uniformtype.md): The uniform object’s data type.

### Reading and Writing an Uniform Object’s Value

You should only read or write the property type that matches the type of the uniform object; it is a programming error to use any of the other properties.

- [floatValue](skuniform/floatvalue.md): The receiver’s value as a floating-point value.
- [floatVector2Value](skuniform/floatvector2value.md): Deprecated. The receiver’s value as a vector of two floating-point values.
- [floatVector3Value](skuniform/floatvector3value.md): Deprecated. The receiver’s value as a vector of three floating-point values.
- [floatVector4Value](skuniform/floatvector4value.md): Deprecated. The receiver’s value as a vector of four floating-point values.
- [floatMatrix2Value](skuniform/floatmatrix2value.md): Deprecated. The receiver’s value as a `2 x 2` matrix of floating-point values.
- [floatMatrix3Value](skuniform/floatmatrix3value.md): Deprecated. The receiver’s value as a `3 x 3` matrix of floating-point values.
- [floatMatrix4Value](skuniform/floatmatrix4value.md): Deprecated. The receiver’s value as a `4 x 4` matrix of floating-point values.
- [textureValue](skuniform/texturevalue.md): The receiver’s value as a SpriteKit texture.

### Constants

- [SKUniformType](skuniformtype.md): An enumerated type to identify the type of a uniform object.

### Initializers

- [init(name:matrixFloat2x2:)](skuniform/init%28name_matrixfloat2x2_%29.md)
- [init(name:matrixFloat3x3:)](skuniform/init%28name_matrixfloat3x3_%29.md)
- [init(name:matrixFloat4x4:)](skuniform/init%28name_matrixfloat4x4_%29.md)
- [init(name:vectorFloat2:)](skuniform/init%28name_vectorfloat2_%29.md)
- [init(name:vectorFloat3:)](skuniform/init%28name_vectorfloat3_%29.md)
- [init(name:vectorFloat4:)](skuniform/init%28name_vectorfloat4_%29.md)
- [init(coder:)](skuniform/init%28coder_%29.md)
- [init(name:floatMatrix2:)](skuniform/init%28name_floatmatrix2_%29-39w1i.md): Deprecated.
- [init(name:floatMatrix2:)](skuniform/init%28name_floatmatrix2_%29-3zlmz.md): Deprecated.
- [init(name:floatMatrix3:)](skuniform/init%28name_floatmatrix3_%29-5kh8w.md): Deprecated.
- [init(name:floatMatrix3:)](skuniform/init%28name_floatmatrix3_%29-xf7x.md): Deprecated.
- [init(name:floatMatrix4:)](skuniform/init%28name_floatmatrix4_%29-13pbm.md): Deprecated.
- [init(name:floatMatrix4:)](skuniform/init%28name_floatmatrix4_%29-9xcfm.md): Deprecated.
- [init(name:floatVector2:)](skuniform/init%28name_floatvector2_%29-2yocf.md): Deprecated.
- [init(name:floatVector2:)](skuniform/init%28name_floatvector2_%29-7fwo7.md): Deprecated.
- [init(name:floatVector3:)](skuniform/init%28name_floatvector3_%29-8gnuo.md): Deprecated.
- [init(name:floatVector3:)](skuniform/init%28name_floatvector3_%29-984ul.md): Deprecated.
- [init(name:floatVector4:)](skuniform/init%28name_floatvector4_%29-298dz.md): Deprecated.
- [init(name:floatVector4:)](skuniform/init%28name_floatvector4_%29-o019.md): Deprecated.

### Instance Properties

- [matrixFloat2x2Value](skuniform/matrixfloat2x2value.md)
- [matrixFloat3x3Value](skuniform/matrixfloat3x3value.md)
- [matrixFloat4x4Value](skuniform/matrixfloat4x4value.md)
- [vectorFloat2Value](skuniform/vectorfloat2value.md)
- [vectorFloat3Value](skuniform/vectorfloat3value.md)
- [vectorFloat4Value](skuniform/vectorfloat4value.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shaders

- [SKShader](skshader.md): An object that allows you to apply a custom fragment shader.
- [SKAttribute](skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKAttributeValue](skattributevalue.md): A container for dynamic shader data associated with a node.

# SKUniform (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A container for uniform shader data.

## Declaration

```objectivec
@interface SKUniform : NSObject
```

## Mentioned In

- [Creating a Custom Fragment Shader](creating-a-custom-fragment-shader.md)

<a id="overview"></a>

## Overview

An [SKUniform](skuniform.md) object is used to hold uniform data for a custom OpenGL or OpenGL ES shader. The uniform data is accessible from all shaders that include the uniform.To use a uniform variable in your shader, create the [SKUniform](skuniform.md) object and set its initial value. Once its value is specified, the [uniformType](skuniform/uniformtype.md) property changes to match the type of the initial value you provided and can never change afterward. To use the uniform object, add it to an [SKShader](skshader.md) object that needs to access the uniform variable. To update the uniform variable’s value, choose the appropriate property on the uniform object based on the data type it encapsulates.

## Topics

### Creating and Initializing Uniform Objects

- [uniformWithName:](skuniform/uniformwithname_.md): Creates and initializes a new uniform object.
- [uniformWithName:float:](skuniform/uniformwithname_float_.md): Creates and initializes a new uniform object that holds a floating-point number.
- [uniformWithName:floatVector2:](skuniform/uniformwithname_floatvector2_.md): Deprecated. Creates and initializes a new uniform object that holds a vector of two floating-point numbers.
- [uniformWithName:floatVector3:](skuniform/uniformwithname_floatvector3_.md): Deprecated. Creates and initializes a new uniform object that holds a vector of three floating-point numbers.
- [uniformWithName:floatVector4:](skuniform/uniformwithname_floatvector4_.md): Deprecated. Creates and initializes a new uniform object that holds a vector of four floating-point numbers.
- [uniformWithName:floatMatrix2:](skuniform/uniformwithname_floatmatrix2_.md): Deprecated. Creates and initializes a new uniform object that holds a `2 x 2` matrix of floating-point numbers.
- [uniformWithName:floatMatrix3:](skuniform/uniformwithname_floatmatrix3_.md): Deprecated. Creates and initializes a new uniform object that holds a `3 x 3` matrix of floating-point numbers.
- [uniformWithName:floatMatrix4:](skuniform/uniformwithname_floatmatrix4_.md): Deprecated. Creates and initializes a new uniform object that holds a `4 x 4` matrix of floating-point numbers.
- [uniformWithName:texture:](skuniform/uniformwithname_texture_.md): Creates and initializes a new uniform object that holds a reference to a texture.
- [initWithName:](skuniform/init%28name_%29.md): Initializes a new uniform object.
- [initWithName:float:](skuniform/init%28name_float_%29-48rln.md): Initializes a new uniform object that holds a floating-point number.
- [initWithName:floatVector2:](skuniform/init%28name_float_%29-9g5vj.md): Deprecated. Initializes a new uniform object that holds a vector of two floating-point numbers.
- [initWithName:floatVector3:](skuniform/init%28name_float_%29-9g6a7.md): Deprecated. Creates and initializes a new uniform object that holds a vector of three floating-point numbers.
- [initWithName:floatVector4:](skuniform/init%28name_float_%29-9g7j7.md): Deprecated. Initializes a new uniform object that holds a vector of four floating-point numbers.
- [initWithName:floatMatrix2:](skuniform/init%28name_float_%29-6110m.md): Deprecated. Initializes a new uniform object that holds a `2 x 2` matrix of floating-point numbers.
- [initWithName:floatMatrix3:](skuniform/init%28name_float_%29-611hs.md): Deprecated. Initializes a new uniform object that holds a `3 x 3` matrix of floating-point numbers.
- [initWithName:floatMatrix4:](skuniform/init%28name_float_%29-60zbm.md): Deprecated. Initializes a new uniform object that holds a `4 x 4` matrix of floating-point numbers.
- [initWithName:texture:](skuniform/init%28name_texture_%29.md): Initializes a new uniform object that holds a reference to a texture.

### Reading Information About a Uniform

- [name](skuniform/name.md): The uniform’s name.
- [uniformType](skuniform/uniformtype.md): The uniform object’s data type.

### Reading and Writing an Uniform Object’s Value

You should only read or write the property type that matches the type of the uniform object; it is a programming error to use any of the other properties.

- [floatValue](skuniform/floatvalue.md): The receiver’s value as a floating-point value.
- [floatVector2Value](skuniform/floatvector2value.md): Deprecated. The receiver’s value as a vector of two floating-point values.
- [floatVector3Value](skuniform/floatvector3value.md): Deprecated. The receiver’s value as a vector of three floating-point values.
- [floatVector4Value](skuniform/floatvector4value.md): Deprecated. The receiver’s value as a vector of four floating-point values.
- [floatMatrix2Value](skuniform/floatmatrix2value.md): Deprecated. The receiver’s value as a `2 x 2` matrix of floating-point values.
- [floatMatrix3Value](skuniform/floatmatrix3value.md): Deprecated. The receiver’s value as a `3 x 3` matrix of floating-point values.
- [floatMatrix4Value](skuniform/floatmatrix4value.md): Deprecated. The receiver’s value as a `4 x 4` matrix of floating-point values.
- [textureValue](skuniform/texturevalue.md): The receiver’s value as a SpriteKit texture.

### Constants

- [SKUniformType](skuniformtype.md): An enumerated type to identify the type of a uniform object.

### Initializers

- [initWithName:matrixFloat2x2:](skuniform/init%28name_matrixfloat2x2_%29.md)
- [initWithName:matrixFloat3x3:](skuniform/init%28name_matrixfloat3x3_%29.md)
- [initWithName:matrixFloat4x4:](skuniform/init%28name_matrixfloat4x4_%29.md)
- [initWithName:vectorFloat2:](skuniform/init%28name_vectorfloat2_%29.md)
- [initWithName:vectorFloat3:](skuniform/init%28name_vectorfloat3_%29.md)
- [initWithName:vectorFloat4:](skuniform/init%28name_vectorfloat4_%29.md)

### Instance Properties

- [matrixFloat2x2Value](skuniform/matrixfloat2x2value.md)
- [matrixFloat3x3Value](skuniform/matrixfloat3x3value.md)
- [matrixFloat4x4Value](skuniform/matrixfloat4x4value.md)
- [vectorFloat2Value](skuniform/vectorfloat2value.md)
- [vectorFloat3Value](skuniform/vectorfloat3value.md)
- [vectorFloat4Value](skuniform/vectorfloat4value.md)

### Type Methods

- [uniformWithName:matrixFloat2x2:](skuniform/uniformwithname_matrixfloat2x2_.md)
- [uniformWithName:matrixFloat3x3:](skuniform/uniformwithname_matrixfloat3x3_.md)
- [uniformWithName:matrixFloat4x4:](skuniform/uniformwithname_matrixfloat4x4_.md)
- [uniformWithName:vectorFloat2:](skuniform/uniformwithname_vectorfloat2_.md)
- [uniformWithName:vectorFloat3:](skuniform/uniformwithname_vectorfloat3_.md)
- [uniformWithName:vectorFloat4:](skuniform/uniformwithname_vectorfloat4_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shaders

- [SKShader](skshader.md): An object that allows you to apply a custom fragment shader.
- [SKAttribute](skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKAttributeValue](skattributevalue.md): A container for dynamic shader data associated with a node.
