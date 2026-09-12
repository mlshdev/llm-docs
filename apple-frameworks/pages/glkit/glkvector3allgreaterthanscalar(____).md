> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector3allgreaterthanscalar(_:_:)](https://developer.apple.com/documentation/glkit/glkvector3allgreaterthanscalar(_:_:))

# GLKVector3AllGreaterThanScalar(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.

## Declaration

```swift
func GLKVector3AllGreaterThanScalar(_ vector: GLKVector3, _ value: Float) -> Bool
```

## Parameters

- `vector`: A vector.
- `value`: A scalar.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all of the vector’s components are greater than the scalar value, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparison Operations

- [GLKVector3AllEqualToScalar(\_:\_:)](glkvector3allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector3AllEqualToVector3(\_:\_:)](glkvector3allequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanOrEqualToScalar(\_:\_:)](glkvector3allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector3AllGreaterThanOrEqualToVector3(\_:\_:)](glkvector3allgreaterthanorequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanVector3(\_:\_:)](glkvector3allgreaterthanvector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

# GLKVector3AllGreaterThanScalar (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.

## Declaration

```objectivec
static bool GLKVector3AllGreaterThanScalar(GLKVector3 vector, float value);
```

## Parameters

- `vector`: A vector.
- `value`: A scalar.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all of the vector’s components are greater than the scalar value, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparison Operations

- [GLKVector3AllEqualToScalar](glkvector3allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector3AllEqualToVector3](glkvector3allequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanOrEqualToScalar](glkvector3allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector3AllGreaterThanOrEqualToVector3](glkvector3allgreaterthanorequaltovector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector3AllGreaterThanVector3](glkvector3allgreaterthanvector3%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.
