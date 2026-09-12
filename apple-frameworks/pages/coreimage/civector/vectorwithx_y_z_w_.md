> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/vectorwithx:y:z:w:](https://developer.apple.com/documentation/coreimage/civector/vectorwithx:y:z:w:)

# vectorWithX:Y:Z:W:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Create a Core Image vector object that is initialized with four values.

## Declaration

```objectivec
+ (instancetype) vectorWithX:(CGFloat) x Y:(CGFloat) y Z:(CGFloat) z W:(CGFloat) w;
```

## Parameters

- `x`: The value for the first position in the vector.
- `y`: The value for the second position in the vector.
- `z`: The value for the third position in the vector.
- `w`: The value for the forth position in the vector.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIVector](../civector.md) object of length 4.

## See Also

### Creating a Vector

- [vectorWithValues:count:](vectorwithvalues_count_.md): Create a Core Image vector object that is initialized with the specified values.
- [vectorWithX:](vectorwithx_.md): Create a Core Image vector object that is initialized with one value.
- [vectorWithX:Y:](vectorwithx_y_.md): Create a Core Image vector object that is initialized with two values.
- [vectorWithX:Y:Z:](vectorwithx_y_z_.md): Create a Core Image vector object that is initialized with three values.
- [vectorWithString:](vectorwithstring_.md): Create a Core Image vector object with values provided in a string representation.
- [vectorWithCGAffineTransform:](init%28cgaffinetransform_%29-59e4k.md): Create a Core Image vector object that is initialized with six values provided by a `CGAffineTransform` structure.
- [vectorWithCGPoint:](init%28cgpoint_%29-3mobm.md): Create a Core Image vector object that is initialized with two values provided by a `CGPoint` structure.
- [vectorWithCGRect:](init%28cgrect_%29-3undj.md): Create a Core Image vector object that is initialized with four values provided by a `CGRect` structure.
