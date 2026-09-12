> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4invert(_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4invert(_:))

# SCNMatrix4Invert(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the inverse of the specified matrix.

## Declaration

```swift
func SCNMatrix4Invert(_ m: SCNMatrix4) -> SCNMatrix4
```

```swift
func SCNMatrix4Invert(_ m: SCNMatrix4) -> SCNMatrix4
```

## Parameters

- `m`: The matrix to be inverted.

<a id="return-value"></a>

## Return Value

The inverse matrix of the specified matrix, or the original matrix if it is not invertible.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate(\_:\_:\_:\_:)](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate(\_:\_:\_:\_:\_:)](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale(\_:\_:\_:\_:)](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Mult(\_:\_:)](scnmatrix4mult%28____%29.md): Returns the product of two matrices.

# SCNMatrix4Invert (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns the inverse of the specified matrix.

## Declaration

```objectivec
extern SCNMatrix4 SCNMatrix4Invert(SCNMatrix4 m);
```

```objectivec
extern SCNMatrix4 SCNMatrix4Invert(SCNMatrix4 m);
```

## Parameters

- `m`: The matrix to be inverted.

<a id="return-value"></a>

## Return Value

The inverse matrix of the specified matrix, or the original matrix if it is not invertible.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Scale](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Mult](scnmatrix4mult%28____%29.md): Returns the product of two matrices.
