> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/init(cgaffinetransform:)-59e4k](https://developer.apple.com/documentation/coreimage/civector/init(cgaffinetransform:)-59e4k)

# init(cgAffineTransform:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · visionOS 1.0+

Create a Core Image vector object that is initialized with six values provided by a `CGAffineTransform` structure.

## Declaration

```swift
convenience init(cgAffineTransform t: CGAffineTransform)
```

## Parameters

- `t`: The `CGAffineTransform` structure.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIVector](../civector.md) object of length 6.

<a id="discussion"></a>

## Discussion

The `CGAffineTransform` structure’s `a`, `b`, `c`, `d`, `tx` and `ty` values are stored in the vector’s six values.

## See Also

### Creating a Vector

- [init(cgPoint:)](init%28cgpoint_%29-3mobm.md): Create a Core Image vector object that is initialized with two values provided by a `CGPoint` structure.
- [init(cgRect:)](init%28cgrect_%29-3undj.md): Create a Core Image vector object that is initialized with four values provided by a `CGRect` structure.

# vectorWithCGAffineTransform: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+

Create a Core Image vector object that is initialized with six values provided by a `CGAffineTransform` structure.

## Declaration

```objectivec
+ (instancetype) vectorWithCGAffineTransform:(CGAffineTransform) t;
```

## Parameters

- `t`: The `CGAffineTransform` structure.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIVector](../civector.md) object of length 6.

<a id="discussion"></a>

## Discussion

The `CGAffineTransform` structure’s `a`, `b`, `c`, `d`, `tx` and `ty` values are stored in the vector’s six values.

## See Also

### Creating a Vector

- [vectorWithValues:count:](vectorwithvalues_count_.md): Create a Core Image vector object that is initialized with the specified values.
- [vectorWithX:](vectorwithx_.md): Create a Core Image vector object that is initialized with one value.
- [vectorWithX:Y:](vectorwithx_y_.md): Create a Core Image vector object that is initialized with two values.
- [vectorWithX:Y:Z:](vectorwithx_y_z_.md): Create a Core Image vector object that is initialized with three values.
- [vectorWithX:Y:Z:W:](vectorwithx_y_z_w_.md): Create a Core Image vector object that is initialized with four values.
- [vectorWithString:](vectorwithstring_.md): Create a Core Image vector object with values provided in a string representation.
- [vectorWithCGPoint:](init%28cgpoint_%29-3mobm.md): Create a Core Image vector object that is initialized with two values provided by a `CGPoint` structure.
- [vectorWithCGRect:](init%28cgrect_%29-3undj.md): Create a Core Image vector object that is initialized with four values provided by a `CGRect` structure.
