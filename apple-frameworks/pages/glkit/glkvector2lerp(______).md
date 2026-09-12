> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector2lerp(_:_:_:)](https://developer.apple.com/documentation/glkit/glkvector2lerp(_:_:_:))

# GLKVector2Lerp(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector created by linearly interpreting between two vectors.

## Declaration

```swift
func GLKVector2Lerp(_ vectorStart: GLKVector2, _ vectorEnd: GLKVector2, _ t: Float) -> GLKVector2
```

## Parameters

- `vectorStart`: The starting vector.
- `vectorEnd`: The ending vector.
- `t`: An interpolation constant.

<a id="return-value"></a>

## Return Value

A new vector.

<a id="Discussion"></a>

## Discussion

The value of `t` should typically be between `0.0` and `1.0`. A value of `0.0` returns the starting vector and a value of `1.0` returns the ending vector. Any other value of `t` results in a linear interpolation between the two points.

## See Also

### Mathematical Operations Performed on Vectors

- [GLKVector2Negate(\_:)](glkvector2negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector2Normalize(\_:)](glkvector2normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector2AddScalar(\_:\_:)](glkvector2addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector2SubtractScalar(\_:\_:)](glkvector2subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector2MultiplyScalar(\_:\_:)](glkvector2multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector2DivideScalar(\_:\_:)](glkvector2dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector2Add(\_:\_:)](glkvector2add%28____%29.md): Returns the sum of two vectors.
- [GLKVector2Subtract(\_:\_:)](glkvector2subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector2Multiply(\_:\_:)](glkvector2multiply%28____%29.md): Returns a new vector created by multiplying one vector by another.
- [GLKVector2Divide(\_:\_:)](glkvector2divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector2DotProduct(\_:\_:)](glkvector2dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector2Project(\_:\_:)](glkvector2project%28____%29.md): Returns a new vector created by projecting a vector onto another vector
- [GLKVector2Maximum(\_:\_:)](glkvector2maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position of the two source vectors.
- [GLKVector2Minimum(\_:\_:)](glkvector2minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position of the two source vectors.

# GLKVector2Lerp (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector created by linearly interpreting between two vectors.

## Declaration

```objectivec
static GLKVector2 GLKVector2Lerp(GLKVector2 vectorStart, GLKVector2 vectorEnd, float t);
```

## Parameters

- `vectorStart`: The starting vector.
- `vectorEnd`: The ending vector.
- `t`: An interpolation constant.

<a id="return-value"></a>

## Return Value

A new vector.

<a id="Discussion"></a>

## Discussion

The value of `t` should typically be between `0.0` and `1.0`. A value of `0.0` returns the starting vector and a value of `1.0` returns the ending vector. Any other value of `t` results in a linear interpolation between the two points.

## See Also

### Mathematical Operations Performed on Vectors

- [GLKVector2Negate](glkvector2negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector2Normalize](glkvector2normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector2AddScalar](glkvector2addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector2SubtractScalar](glkvector2subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector2MultiplyScalar](glkvector2multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector2DivideScalar](glkvector2dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector2Add](glkvector2add%28____%29.md): Returns the sum of two vectors.
- [GLKVector2Subtract](glkvector2subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector2Multiply](glkvector2multiply%28____%29.md): Returns a new vector created by multiplying one vector by another.
- [GLKVector2Divide](glkvector2divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector2DotProduct](glkvector2dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector2Project](glkvector2project%28____%29.md): Returns a new vector created by projecting a vector onto another vector
- [GLKVector2Maximum](glkvector2maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position of the two source vectors.
- [GLKVector2Minimum](glkvector2minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position of the two source vectors.
