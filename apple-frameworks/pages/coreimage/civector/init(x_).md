> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/init(x:)](https://developer.apple.com/documentation/coreimage/civector/init(x:))

# init(x:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initialize a Core Image vector object with one value.

## Declaration

```swift
convenience init(x: CGFloat)
```

## Parameters

- `x`: The value for the first position in the vector.

<a id="return-value"></a>

## Return Value

 An initialized [CIVector](../civector.md) object of length 1.

## See Also

### Initializing a Vector

- [init(values:count:)](init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [init(x:y:)](init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [init(x:y:z:)](init%28x_y_z_%29-zais.md): Initialize a Core Image vector object with three values.
- [init(x:y:z:w:)](init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [init(string:)](init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [init(cgAffineTransform:)](init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [init(cgPoint:)](init%28cgpoint_%29-8cf9j.md): Initialize a Core Image vector object with two values provided by a `CGPoint` structure.
- [init(cgRect:)](init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.

# initWithX: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initialize a Core Image vector object with one value.

## Declaration

```objectivec
- (instancetype) initWithX:(CGFloat) x;
```

## Parameters

- `x`: The value for the first position in the vector.

<a id="return-value"></a>

## Return Value

 An initialized [CIVector](../civector.md) object of length 1.

## See Also

### Initializing a Vector

- [initWithValues:count:](init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [initWithX:Y:](init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [initWithX:Y:Z:](init%28x_y_z_%29-zais.md): Initialize a Core Image vector object with three values.
- [initWithX:Y:Z:W:](init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [initWithString:](init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [initWithCGAffineTransform:](init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [initWithCGPoint:](init%28cgpoint_%29-8cf9j.md): Initialize a Core Image vector object with two values provided by a `CGPoint` structure.
- [initWithCGRect:](init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.
