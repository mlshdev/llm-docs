> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector4allequaltoscalar(_:_:)](https://developer.apple.com/documentation/glkit/glkvector4allequaltoscalar(_:_:))

# GLKVector4AllEqualToScalar(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.

## Declaration

```swift
func GLKVector4AllEqualToScalar(_ vector: GLKVector4, _ value: Float) -> Bool
```

## Parameters

- `vector`: A vector.
- `value`: A scalar.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all of the vector’s components are equal to `value`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparison Operations

- [GLKVector4AllEqualToVector4(\_:\_:)](glkvector4allequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanOrEqualToScalar(\_:\_:)](glkvector4allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector4AllGreaterThanOrEqualToVector4(\_:\_:)](glkvector4allgreaterthanorequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanScalar(\_:\_:)](glkvector4allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector4AllGreaterThanVector4(\_:\_:)](glkvector4allgreaterthanvector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

# GLKVector4AllEqualToScalar (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.

## Declaration

```objectivec
static bool GLKVector4AllEqualToScalar(GLKVector4 vector, float value);
```

## Parameters

- `vector`: A vector.
- `value`: A scalar.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all of the vector’s components are equal to `value`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparison Operations

- [GLKVector4AllEqualToVector4](glkvector4allequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanOrEqualToScalar](glkvector4allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector4AllGreaterThanOrEqualToVector4](glkvector4allgreaterthanorequaltovector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector4AllGreaterThanScalar](glkvector4allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector4AllGreaterThanVector4](glkvector4allgreaterthanvector4%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.
