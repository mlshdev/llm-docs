> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skuniform/uniformwithname:float:](https://developer.apple.com/documentation/spritekit/skuniform/uniformwithname:float:)

# uniformWithName:float:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new uniform object that holds a floating-point number.

## Declaration

```objectivec
+ (instancetype) uniformWithName:(NSString *) name float:(float) value;
```

## Parameters

- `name`: The name used to identify the uniform variable; you use this name inside your shader to read the uniform variable’s value.
- `value`: The initial floating-point value for the uniform variable.

<a id="return-value"></a>

## Return Value

A newly initialized uniform object whose type is set to [SKUniformTypeFloat](../skuniformtype/float.md).

## See Also

### Creating and Initializing Uniform Objects

- [uniformWithName:](uniformwithname_.md): Creates and initializes a new uniform object.
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
- [initWithName:floatMatrix3:](init%28name_float_%29-611hs.md): Deprecated. Initializes a new uniform object that holds a `3 x 3` matrix of floating-point numbers.
