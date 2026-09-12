> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector4project(_:_:)](https://developer.apple.com/documentation/glkit/glkvector4project(_:_:))

# GLKVector4Project(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector created by projecting a vector onto another vector.

## Declaration

```swift
func GLKVector4Project(_ vectorToProject: GLKVector4, _ projectionVector: GLKVector4) -> GLKVector4
```

## Parameters

- `vectorToProject`: The vector being projected.
- `projectionVector`: The projection vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Mathematical Operations Performed on Vectors

- [GLKVector4Negate(\_:)](glkvector4negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector4Normalize(\_:)](glkvector4normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector4AddScalar(\_:\_:)](glkvector4addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector4SubtractScalar(\_:\_:)](glkvector4subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector4MultiplyScalar(\_:\_:)](glkvector4multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector4DivideScalar(\_:\_:)](glkvector4dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector4Add(\_:\_:)](glkvector4add%28____%29.md): Returns the sum of two vectors.
- [GLKVector4Subtract(\_:\_:)](glkvector4subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector4Multiply(\_:\_:)](glkvector4multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector4Divide(\_:\_:)](glkvector4divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector4DotProduct(\_:\_:)](glkvector4dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector4CrossProduct(\_:\_:)](glkvector4crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector4Lerp(\_:\_:\_:)](glkvector4lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector4Maximum(\_:\_:)](glkvector4maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector4Minimum(\_:\_:)](glkvector4minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.

# GLKVector4Project (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector created by projecting a vector onto another vector.

## Declaration

```objectivec
static GLKVector4 GLKVector4Project(GLKVector4 vectorToProject, GLKVector4 projectionVector);
```

## Parameters

- `vectorToProject`: The vector being projected.
- `projectionVector`: The projection vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Mathematical Operations Performed on Vectors

- [GLKVector4Negate](glkvector4negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector4Normalize](glkvector4normalize%28__%29.md): Returns a new vector created by normalizing an input vector to a length of `1.0`.
- [GLKVector4AddScalar](glkvector4addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector4SubtractScalar](glkvector4subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector4MultiplyScalar](glkvector4multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector4DivideScalar](glkvector4dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector4Add](glkvector4add%28____%29.md): Returns the sum of two vectors.
- [GLKVector4Subtract](glkvector4subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector4Multiply](glkvector4multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector4Divide](glkvector4divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector4DotProduct](glkvector4dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector4CrossProduct](glkvector4crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector4Lerp](glkvector4lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector4Maximum](glkvector4maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector4Minimum](glkvector4minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.
