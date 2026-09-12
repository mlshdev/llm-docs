> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skuniform/init(name:texture:)](https://developer.apple.com/documentation/spritekit/skuniform/init(name:texture:))

# init(name:texture:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new uniform object that holds a reference to a texture.

## Declaration

```swift
init(name: String, texture: SKTexture?)
```

## Parameters

- `name`: The name used to identify the uniform variable; you use this name inside your shader to read the uniform variable’s value.
- `texture`: The initial texture to use for the uniform variable.

<a id="return-value"></a>

## Return Value

An initialized uniform object whose type is set to [SKUniformType.texture](../skuniformtype/texture.md).

## See Also

### Creating and Initializing Uniform Objects

- [init(name:)](init%28name_%29.md): Initializes a new uniform object.
- [init(name:float:)](init%28name_float_%29-48rln.md): Initializes a new uniform object that holds a floating-point number.
- [init(name:float:)](init%28name_float_%29-9g5vj.md): Deprecated. Initializes a new uniform object that holds a vector of two floating-point numbers.
- [init(name:float:)](init%28name_float_%29-9g6a7.md): Deprecated. Creates and initializes a new uniform object that holds a vector of three floating-point numbers.
- [init(name:float:)](init%28name_float_%29-9g7j7.md): Deprecated. Initializes a new uniform object that holds a vector of four floating-point numbers.
- [init(name:float:)](init%28name_float_%29-6110m.md): Deprecated. Initializes a new uniform object that holds a `2 x 2` matrix of floating-point numbers.
- [init(name:float:)](init%28name_float_%29-611hs.md): Deprecated. Initializes a new uniform object that holds a `3 x 3` matrix of floating-point numbers.
- [init(name:float:)](init%28name_float_%29-60zbm.md): Deprecated. Initializes a new uniform object that holds a `4 x 4` matrix of floating-point numbers.

# initWithName:texture: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new uniform object that holds a reference to a texture.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name texture:(SKTexture *) texture;
```

## Parameters

- `name`: The name used to identify the uniform variable; you use this name inside your shader to read the uniform variable’s value.
- `texture`: The initial texture to use for the uniform variable.

<a id="return-value"></a>

## Return Value

An initialized uniform object whose type is set to [SKUniformTypeTexture](../skuniformtype/texture.md).

## See Also

### Creating and Initializing Uniform Objects

- [uniformWithName:](uniformwithname_.md): Creates and initializes a new uniform object.
- [uniformWithName:float:](uniformwithname_float_.md): Creates and initializes a new uniform object that holds a floating-point number.
- [uniformWithName:floatVector2:](uniformwithname_floatvector2_.md): Deprecated. Creates and initializes a new uniform object that holds a vector of two floating-point numbers.
- [uniformWithName:floatVector3:](uniformwithname_floatvector3_.md): Deprecated. Creates and initializes a new uniform object that holds a vector of three floating-point numbers.
- [uniformWithName:floatVector4:](uniformwithname_floatvector4_.md): Deprecated. Creates and initializes a new uniform object that holds a vector of four floating-point numbers.
- [uniformWithName:floatMatrix2:](uniformwithname_floatmatrix2_.md): Deprecated. Creates and initializes a new uniform object that holds a `2 x 2` matrix of floating-point numbers.
- [uniformWithName:floatMatrix3:](uniformwithname_floatmatrix3_.md): Deprecated. Creates and initializes a new uniform object that holds a `3 x 3` matrix of floating-point numbers.
- [uniformWithName:floatMatrix4:](uniformwithname_floatmatrix4_.md): Deprecated. Creates and initializes a new uniform object that holds a `4 x 4` matrix of floating-point numbers.
- [uniformWithName:texture:](uniformwithname_texture_.md): Creates and initializes a new uniform object that holds a reference to a texture.
- [initWithName:](init%28name_%29.md): Initializes a new uniform object.
- [initWithName:float:](init%28name_float_%29-48rln.md): Initializes a new uniform object that holds a floating-point number.
- [initWithName:floatVector2:](init%28name_float_%29-9g5vj.md): Deprecated. Initializes a new uniform object that holds a vector of two floating-point numbers.
- [initWithName:floatVector3:](init%28name_float_%29-9g6a7.md): Deprecated. Creates and initializes a new uniform object that holds a vector of three floating-point numbers.
- [initWithName:floatVector4:](init%28name_float_%29-9g7j7.md): Deprecated. Initializes a new uniform object that holds a vector of four floating-point numbers.
- [initWithName:floatMatrix2:](init%28name_float_%29-6110m.md): Deprecated. Initializes a new uniform object that holds a `2 x 2` matrix of floating-point numbers.
