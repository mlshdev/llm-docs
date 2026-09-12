> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4translate(_:_:_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4translate(_:_:_:_:))

# SCNMatrix4Translate(\_:\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a new matrix created by concatenating the specified matrix with a translation transformation.

## Declaration

```swift
func SCNMatrix4Translate(_ m: SCNMatrix4, _ tx: Float, _ ty: Float, _ tz: Float) -> SCNMatrix4
```

```swift
func SCNMatrix4Translate(_ m: SCNMatrix4, _ tx: CGFloat, _ ty: CGFloat, _ tz: CGFloat) -> SCNMatrix4
```

## Parameters

- `m`: The matrix to be combined with a translation.
- `tx`: The translation distance in the x-axis direction.
- `ty`: The translation distance in the y-axis direction.
- `tz`: The translation distance in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The resulting transformation consists of the specified translation followed by the transformation represented by the `mat` parameter.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Rotate(\_:\_:\_:\_:\_:)](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale(\_:\_:\_:\_:)](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert(\_:)](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult(\_:\_:)](scnmatrix4mult%28____%29.md): Returns the product of two matrices.

# SCNMatrix4Translate (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new matrix created by concatenating the specified matrix with a translation transformation.

## Declaration

```objectivec
static SCNMatrix4 SCNMatrix4Translate(SCNMatrix4 m, float tx, float ty, float tz);
```

```objectivec
static SCNMatrix4 SCNMatrix4Translate(SCNMatrix4 m, CGFloat tx, CGFloat ty, CGFloat tz);
```

## Parameters

- `m`: The matrix to be combined with a translation.
- `tx`: The translation distance in the x-axis direction.
- `ty`: The translation distance in the y-axis direction.
- `tz`: The translation distance in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The resulting transformation consists of the specified translation followed by the transformation represented by the `mat` parameter.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Rotate](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult](scnmatrix4mult%28____%29.md): Returns the product of two matrices.
