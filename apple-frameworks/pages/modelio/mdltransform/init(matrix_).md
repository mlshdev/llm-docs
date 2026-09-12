> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/init(matrix:)](https://developer.apple.com/documentation/modelio/mdltransform/init(matrix:))

# init(matrix:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a transform object with the specified transform matrix.

## Declaration

```swift
convenience init(matrix: matrix_float4x4)
```

## Parameters

- `matrix`: A transform matrix that defines a local coordinate space relative to a parent coordinate space.

<a id="return-value"></a>

## Return Value

A new transform object.

<a id="Discussion"></a>

## Discussion

A transform matrix defines the local coordinate space transformations for a 3D object—that is, its position, orientation, shear, and scale.

After initializing a transform object from a matrix, you can use the [translation](translation.md), [rotation](rotation.md), [shear](shear.md), and [scale](scale.md) properties to individually work with those factors of the transform (or the corresponding methods listed in Using Factors of an Animated Transform to associate time-based transformation with each factor). To work with the complete transform matrix defined by those factors, use the [matrix](../mdltransformcomponent/matrix.md) property.

The `matrix` parameter must be an invertible, homogeneous affine transform matrix. If you initialize a transform object with a nonaffine transform matrix, attempts to retrieve its translation, rotation, shear, or scale factors instead return identity values.

## See Also

### Creating a Transform Object

- [init(identity:)](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [init(transformComponent:)](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [init(matrix:resetsTransform:)](init%28matrix_resetstransform_%29.md)
- [init(transformComponent:resetsTransform:)](init%28transformcomponent_resetstransform_%29.md)

# initWithMatrix: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a transform object with the specified transform matrix.

## Declaration

```objectivec
- (instancetype) initWithMatrix:(matrix_float4x4) matrix;
```

## Parameters

- `matrix`: A transform matrix that defines a local coordinate space relative to a parent coordinate space.

<a id="return-value"></a>

## Return Value

A new transform object.

<a id="Discussion"></a>

## Discussion

A transform matrix defines the local coordinate space transformations for a 3D object—that is, its position, orientation, shear, and scale.

After initializing a transform object from a matrix, you can use the [translation](translation.md), [rotation](rotation.md), [shear](shear.md), and [scale](scale.md) properties to individually work with those factors of the transform (or the corresponding methods listed in Using Factors of an Animated Transform to associate time-based transformation with each factor). To work with the complete transform matrix defined by those factors, use the [matrix](../mdltransformcomponent/matrix.md) property.

The `matrix` parameter must be an invertible, homogeneous affine transform matrix. If you initialize a transform object with a nonaffine transform matrix, attempts to retrieve its translation, rotation, shear, or scale factors instead return identity values.

## See Also

### Creating a Transform Object

- [initWithIdentity](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [initWithTransformComponent:](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [initWithMatrix:resetsTransform:](init%28matrix_resetstransform_%29.md)
- [initWithTransformComponent:resetsTransform:](init%28transformcomponent_resetstransform_%29.md)
