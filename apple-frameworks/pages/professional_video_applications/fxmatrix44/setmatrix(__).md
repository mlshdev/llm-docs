> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxmatrix44/setmatrix(_:)](https://developer.apple.com/documentation/professional_video_applications/fxmatrix44/setmatrix(_:))

# setMatrix(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Sets the matrix to the specified values.

## Declaration

```swift
func setMatrix(_ newMatrix: UnsafeMutablePointer<(Double, Double, Double, Double)>!)
```

## Parameters

- `newMatrix`: The new matrix values.

## See Also

### Getting and Setting the Matrix

- [matrix()](matrix%28%29.md): Gets the raw matrix data.
- [setToIdentity()](settoidentity%28%29.md): Sets the matrix to the identity matrix.

# setMatrix: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the matrix to the specified values.

## Declaration

```objectivec
- (void) setMatrix:(Matrix44Data) newMatrix;
```

## Parameters

- `newMatrix`: The new matrix values.

## See Also

### Getting and Setting the Matrix

- [matrix](matrix%28%29.md): Gets the raw matrix data.
- [setToIdentity](settoidentity%28%29.md): Sets the matrix to the identity matrix.
