> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector3project(_:_:)](https://developer.apple.com/documentation/glkit/glkvector3project(_:_:))

# GLKVector3Project(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector created by projecting a vector onto another vector.

## Declaration

```swift
func GLKVector3Project(_ vectorToProject: GLKVector3, _ projectionVector: GLKVector3) -> GLKVector3
```

## Parameters

- `vectorToProject`: The vector being projected.
- `projectionVector`: The projection vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Mathematical Operations Performed on Vectors

- [GLKVector3Negate(\_:)](glkvector3negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector3Normalize(\_:)](glkvector3normalize%28__%29.md): Returns a new vector created by normalizing the input vector to a length of `1.0`.
- [GLKVector3AddScalar(\_:\_:)](glkvector3addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector3SubtractScalar(\_:\_:)](glkvector3subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector3MultiplyScalar(\_:\_:)](glkvector3multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector3DivideScalar(\_:\_:)](glkvector3dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector3Add(\_:\_:)](glkvector3add%28____%29.md): Returns the sum of two vectors.
- [GLKVector3Subtract(\_:\_:)](glkvector3subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector3Multiply(\_:\_:)](glkvector3multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector3Divide(\_:\_:)](glkvector3divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector3DotProduct(\_:\_:)](glkvector3dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector3CrossProduct(\_:\_:)](glkvector3crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector3Lerp(\_:\_:\_:)](glkvector3lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector3Maximum(\_:\_:)](glkvector3maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector3Minimum(\_:\_:)](glkvector3minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.

# GLKVector3Project (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new vector created by projecting a vector onto another vector.

## Declaration

```objectivec
static GLKVector3 GLKVector3Project(GLKVector3 vectorToProject, GLKVector3 projectionVector);
```

## Parameters

- `vectorToProject`: The vector being projected.
- `projectionVector`: The projection vector.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Mathematical Operations Performed on Vectors

- [GLKVector3Negate](glkvector3negate%28__%29.md): Returns a new vector created by negating the component values of another vector.
- [GLKVector3Normalize](glkvector3normalize%28__%29.md): Returns a new vector created by normalizing the input vector to a length of `1.0`.
- [GLKVector3AddScalar](glkvector3addscalar%28____%29.md): Returns a new vector created by adding a scalar value to each component of a vector.
- [GLKVector3SubtractScalar](glkvector3subtractscalar%28____%29.md): Returns a new vector created by subtracting a scalar value from each component of a vector.
- [GLKVector3MultiplyScalar](glkvector3multiplyscalar%28____%29.md): Returns a new vector created by multiplying each component of a vector by a scalar value.
- [GLKVector3DivideScalar](glkvector3dividescalar%28____%29.md): Returns a new vector created by dividing each component of a vector by a scalar value.
- [GLKVector3Add](glkvector3add%28____%29.md): Returns the sum of two vectors.
- [GLKVector3Subtract](glkvector3subtract%28____%29.md): Returns the difference between two vectors.
- [GLKVector3Multiply](glkvector3multiply%28____%29.md): Returns the product of two vectors.
- [GLKVector3Divide](glkvector3divide%28____%29.md): Returns a new vector created by dividing one vector by another.
- [GLKVector3DotProduct](glkvector3dotproduct%28____%29.md): Returns the dot product of two vectors.
- [GLKVector3CrossProduct](glkvector3crossproduct%28____%29.md): Returns the cross product of two vectors.
- [GLKVector3Lerp](glkvector3lerp%28______%29.md): Returns a new vector created by linearly interpreting between two vectors.
- [GLKVector3Maximum](glkvector3maximum%28____%29.md): Returns a new vector whose component value at each position is the largest component value at the same position in the source vectors.
- [GLKVector3Minimum](glkvector3minimum%28____%29.md): Returns a new vector whose component value at each position is the smallest component value at the same position in the source vectors.
