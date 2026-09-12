> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector2allequaltovector2(_:_:)](https://developer.apple.com/documentation/glkit/glkvector2allequaltovector2(_:_:))

# GLKVector2AllEqualToVector2(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.

## Declaration

```swift
func GLKVector2AllEqualToVector2(_ vectorLeft: GLKVector2, _ vectorRight: GLKVector2) -> Bool
```

## Parameters

- `vectorLeft`: The first vector.
- `vectorRight`: The second vector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all of the vectors’ components are equal , [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The vectors are considered equal when the value for the component at each position in the two source vectors is equal.

## See Also

### Comparison Operations

- [GLKVector2AllEqualToScalar(\_:\_:)](glkvector2allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector2AllGreaterThanOrEqualToScalar(\_:\_:)](glkvector2allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector2AllGreaterThanOrEqualToVector2(\_:\_:)](glkvector2allgreaterthanorequaltovector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector2AllGreaterThanScalar(\_:\_:)](glkvector2allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector2AllGreaterThanVector2(\_:\_:)](glkvector2allgreaterthanvector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.

# GLKVector2AllEqualToVector2 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a Boolean value that indicates whether each component of the first vector is equal to the corresponding component of a second vector.

## Declaration

```objectivec
static bool GLKVector2AllEqualToVector2(GLKVector2 vectorLeft, GLKVector2 vectorRight);
```

## Parameters

- `vectorLeft`: The first vector.
- `vectorRight`: The second vector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all of the vectors’ components are equal , [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The vectors are considered equal when the value for the component at each position in the two source vectors is equal.

## See Also

### Comparison Operations

- [GLKVector2AllEqualToScalar](glkvector2allequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are equal to a scalar value.
- [GLKVector2AllGreaterThanOrEqualToScalar](glkvector2allgreaterthanorequaltoscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than or equal to a scalar value.
- [GLKVector2AllGreaterThanOrEqualToVector2](glkvector2allgreaterthanorequaltovector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than or equal to the corresponding component of a second vector.
- [GLKVector2AllGreaterThanScalar](glkvector2allgreaterthanscalar%28____%29.md): Returns a Boolean value that states whether all the components of the source vector are greater than a scalar value.
- [GLKVector2AllGreaterThanVector2](glkvector2allgreaterthanvector2%28____%29.md): Returns a Boolean value that indicates whether each component of the first vector is greater than the corresponding component of a second vector.
