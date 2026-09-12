> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4mult(_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4mult(_:_:))

# SCNMatrix4Mult(\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the product of two matrices.

## Declaration

```swift
func SCNMatrix4Mult(_ a: SCNMatrix4, _ b: SCNMatrix4) -> SCNMatrix4
```

```swift
func SCNMatrix4Mult(_ a: SCNMatrix4, _ b: SCNMatrix4) -> SCNMatrix4
```

## Parameters

- `a`: The multiplicand, or left operand of matrix multiplication.
- `b`: The multiplier, or right operand of matrix multiplication.

<a id="return-value"></a>

## Return Value

The matrix product of the `matA` and `matB` parameters.

<a id="Discussion"></a>

## Discussion

Matrix multiplication is not commutative. As a transformation, the result of multiplying a matrix `A` by a matrix `B` is the transformation represented by `B` followed by the transformation represented by `A`.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate(\_:\_:\_:\_:)](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate(\_:\_:\_:\_:\_:)](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale(\_:\_:\_:\_:)](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert(\_:)](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.

# SCNMatrix4Mult (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns the product of two matrices.

## Declaration

```objectivec
extern SCNMatrix4 SCNMatrix4Mult(SCNMatrix4 a, SCNMatrix4 b);
```

```objectivec
extern SCNMatrix4 SCNMatrix4Mult(SCNMatrix4 a, SCNMatrix4 b);
```

## Parameters

- `a`: The multiplicand, or left operand of matrix multiplication.
- `b`: The multiplier, or right operand of matrix multiplication.

<a id="return-value"></a>

## Return Value

The matrix product of the `matA` and `matB` parameters.

<a id="Discussion"></a>

## Discussion

Matrix multiplication is not commutative. As a transformation, the result of multiplying a matrix `A` by a matrix `B` is the transformation represented by `B` followed by the transformation represented by `A`.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
