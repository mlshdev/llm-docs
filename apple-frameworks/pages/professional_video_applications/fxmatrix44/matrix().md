> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxmatrix44/matrix()](https://developer.apple.com/documentation/professional_video_applications/fxmatrix44/matrix())

# matrix() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Gets the raw matrix data.

## Declaration

```swift
func matrix() -> UnsafeMutablePointer<Matrix44Data>!
```

<a id="return-value"></a>

## Return Value

A pointer to a [FxMatrix44](../fxmatrix44.md).

## See Also

### Getting and Setting the Matrix

- [setMatrix(\_:)](setmatrix%28__%29.md): Sets the matrix to the specified values.
- [setToIdentity()](settoidentity%28%29.md): Sets the matrix to the identity matrix.

# matrix (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Gets the raw matrix data.

## Declaration

```objectivec
- (Matrix44Data *) matrix;
```

<a id="return-value"></a>

## Return Value

A pointer to a [FxMatrix44](../fxmatrix44.md).

## See Also

### Getting and Setting the Matrix

- [setMatrix:](setmatrix%28__%29.md): Sets the matrix to the specified values.
- [setToIdentity](settoidentity%28%29.md): Sets the matrix to the identity matrix.
