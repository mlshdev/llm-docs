> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/init(cgpoint:)-3mobm](https://developer.apple.com/documentation/coreimage/civector/init(cgpoint:)-3mobm)

# init(cgPoint:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · visionOS 1.0+

Create a Core Image vector object that is initialized with two values provided by a `CGPoint` structure.

## Declaration

```swift
convenience init(cgPoint p: CGPoint)
```

## Parameters

- `p`: The `CGPoint` structure.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIVector](../civector.md) object of length 2.

<a id="discussion"></a>

## Discussion

The `CGRect` structure’s `y` and `y` values are stored in the vector’s two values.

## See Also

### Creating a Vector

- [init(cgAffineTransform:)](init%28cgaffinetransform_%29-59e4k.md): Create a Core Image vector object that is initialized with six values provided by a `CGAffineTransform` structure.
- [init(cgRect:)](init%28cgrect_%29-3undj.md): Create a Core Image vector object that is initialized with four values provided by a `CGRect` structure.

# vectorWithCGPoint: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+

Create a Core Image vector object that is initialized with two values provided by a `CGPoint` structure.

## Declaration

```objectivec
+ (instancetype) vectorWithCGPoint:(CGPoint) p;
```

## Parameters

- `p`: The `CGPoint` structure.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIVector](../civector.md) object of length 2.

<a id="discussion"></a>

## Discussion

The `CGRect` structure’s `y` and `y` values are stored in the vector’s two values.

## See Also

### Creating a Vector

- [vectorWithValues:count:](vectorwithvalues_count_.md): Create a Core Image vector object that is initialized with the specified values.
- [vectorWithX:](vectorwithx_.md): Create a Core Image vector object that is initialized with one value.
- [vectorWithX:Y:](vectorwithx_y_.md): Create a Core Image vector object that is initialized with two values.
- [vectorWithX:Y:Z:](vectorwithx_y_z_.md): Create a Core Image vector object that is initialized with three values.
- [vectorWithX:Y:Z:W:](vectorwithx_y_z_w_.md): Create a Core Image vector object that is initialized with four values.
- [vectorWithString:](vectorwithstring_.md): Create a Core Image vector object with values provided in a string representation.
- [vectorWithCGAffineTransform:](init%28cgaffinetransform_%29-59e4k.md): Create a Core Image vector object that is initialized with six values provided by a `CGAffineTransform` structure.
- [vectorWithCGRect:](init%28cgrect_%29-3undj.md): Create a Core Image vector object that is initialized with four values provided by a `CGRect` structure.
