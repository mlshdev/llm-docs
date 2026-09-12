> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/init(identity:)](https://developer.apple.com/documentation/modelio/mdltransform/init(identity:))

# init(identity:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a transform object to the identity transformation.

## Declaration

```swift
convenience init(identity: ())
```

<a id="return-value"></a>

## Return Value

A new transform object.

<a id="Discussion"></a>

## Discussion

A transform matrix defines the local coordinate space transformations for a 3D object—that is, its position, orientation, shear, and scale. The identity transform is equivalent to no transformation, so an object affected by the transform uses the same coordinate space as its parent.

After initializing a transform object, you can use the [translation](translation.md), [rotation](rotation.md), [shear](shear.md), and [scale](scale.md) properties to individually work with those factors of the transform (or the corresponding methods listed in Using Factors of an Animated Transform to associate time-based transformation with each factor). To work with the complete transform matrix defined by those factors, use the [matrix](../mdltransformcomponent/matrix.md) property.

## See Also

### Creating a Transform Object

- [init(matrix:)](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [init(transformComponent:)](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [init(matrix:resetsTransform:)](init%28matrix_resetstransform_%29.md)
- [init(transformComponent:resetsTransform:)](init%28transformcomponent_resetstransform_%29.md)

# initWithIdentity (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a transform object to the identity transformation.

## Declaration

```objectivec
- (instancetype) initWithIdentity;
```

<a id="return-value"></a>

## Return Value

A new transform object.

<a id="Discussion"></a>

## Discussion

A transform matrix defines the local coordinate space transformations for a 3D object—that is, its position, orientation, shear, and scale. The identity transform is equivalent to no transformation, so an object affected by the transform uses the same coordinate space as its parent.

After initializing a transform object, you can use the [translation](translation.md), [rotation](rotation.md), [shear](shear.md), and [scale](scale.md) properties to individually work with those factors of the transform (or the corresponding methods listed in Using Factors of an Animated Transform to associate time-based transformation with each factor). To work with the complete transform matrix defined by those factors, use the [matrix](../mdltransformcomponent/matrix.md) property.

## See Also

### Creating a Transform Object

- [initWithMatrix:](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [initWithTransformComponent:](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [initWithMatrix:resetsTransform:](init%28matrix_resetstransform_%29.md)
- [initWithTransformComponent:resetsTransform:](init%28transformcomponent_resetstransform_%29.md)
