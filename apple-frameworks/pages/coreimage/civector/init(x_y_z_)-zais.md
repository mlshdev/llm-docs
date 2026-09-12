> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/init(x:y:z:)-zais](https://developer.apple.com/documentation/coreimage/civector/init(x:y:z:)-zais)

# init(x:y:z:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initialize a Core Image vector object with three values.

## Declaration

```swift
convenience init(x: CGFloat, y: CGFloat, z: CGFloat)
```

## Parameters

- `x`: The value for the first position in the vector.
- `y`: The value for the second position in the vector.
- `z`: The value for the third position in the vector.

<a id="return-value"></a>

## Return Value

 An initialized [CIVector](../civector.md) object of length 3.

## See Also

### Initializing a Vector

- [init(values:count:)](init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [init(x:)](init%28x_%29.md): Initialize a Core Image vector object with one value.
- [init(x:y:)](init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [init(x:y:z:w:)](init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [init(string:)](init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [init(cgAffineTransform:)](init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [init(cgPoint:)](init%28cgpoint_%29-8cf9j.md): Initialize a Core Image vector object with two values provided by a `CGPoint` structure.
- [init(cgRect:)](init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.

# initWithX:Y:Z: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initialize a Core Image vector object with three values.

## Declaration

```objectivec
- (instancetype) initWithX:(CGFloat) x Y:(CGFloat) y Z:(CGFloat) z;
```

## Parameters

- `x`: The value for the first position in the vector.
- `y`: The value for the second position in the vector.
- `z`: The value for the third position in the vector.

<a id="return-value"></a>

## Return Value

 An initialized [CIVector](../civector.md) object of length 3.

## See Also

### Initializing a Vector

- [initWithValues:count:](init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [initWithX:](init%28x_%29.md): Initialize a Core Image vector object with one value.
- [initWithX:Y:](init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [initWithX:Y:Z:W:](init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [initWithString:](init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [initWithCGAffineTransform:](init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [initWithCGPoint:](init%28cgpoint_%29-8cf9j.md): Initialize a Core Image vector object with two values provided by a `CGPoint` structure.
- [initWithCGRect:](init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.
