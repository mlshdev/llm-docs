> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/init(cgpoint:)-8cf9j](https://developer.apple.com/documentation/coreimage/civector/init(cgpoint:)-8cf9j)

# init(cgPoint:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS

Initialize a Core Image vector object with two values provided by a `CGPoint` structure.

## Declaration

```swift
convenience init(cgPoint p: CGPoint)
```

## Parameters

- `p`: The `CGPoint` structure.

<a id="return-value"></a>

## Return Value

 An initialized [CIVector](../civector.md) object of length 2.

<a id="discussion"></a>

## Discussion

The `CGRect` structure’s `y` and `y` values are stored in the vector’s two values.

## See Also

### Initializing a Vector

- [init(values:count:)](init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [init(x:)](init%28x_%29.md): Initialize a Core Image vector object with one value.
- [init(x:y:)](init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [init(x:y:z:)](init%28x_y_z_%29-zais.md): Initialize a Core Image vector object with three values.
- [init(x:y:z:w:)](init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [init(string:)](init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [init(cgAffineTransform:)](init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [init(cgRect:)](init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.

# initWithCGPoint: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+

Initialize a Core Image vector object with two values provided by a `CGPoint` structure.

## Declaration

```objectivec
- (instancetype) initWithCGPoint:(CGPoint) p;
```

## Parameters

- `p`: The `CGPoint` structure.

<a id="return-value"></a>

## Return Value

 An initialized [CIVector](../civector.md) object of length 2.

<a id="discussion"></a>

## Discussion

The `CGRect` structure’s `y` and `y` values are stored in the vector’s two values.

## See Also

### Initializing a Vector

- [initWithValues:count:](init%28values_count_%29.md): Initialize a Core Image vector object with the specified the values.
- [initWithX:](init%28x_%29.md): Initialize a Core Image vector object with one value.
- [initWithX:Y:](init%28x_y_%29-4grr.md): Initialize a Core Image vector object with two values.
- [initWithX:Y:Z:](init%28x_y_z_%29-zais.md): Initialize a Core Image vector object with three values.
- [initWithX:Y:Z:W:](init%28x_y_z_w_%29-75emo.md): Initialize a Core Image vector object with four values.
- [initWithString:](init%28string_%29.md): Initialize a Core Image vector object with values provided in a string representation.
- [initWithCGAffineTransform:](init%28cgaffinetransform_%29-6o8gl.md): Initialize a Core Image vector object with six values provided by a `CGAffineTransform` structure.
- [initWithCGRect:](init%28cgrect_%29-6bolw.md): Initialize a Core Image vector object with four values provided by a `CGRect` structure.
