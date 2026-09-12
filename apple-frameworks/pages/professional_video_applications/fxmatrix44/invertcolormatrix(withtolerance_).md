> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxmatrix44/invertcolormatrix(withtolerance:)](https://developer.apple.com/documentation/professional_video_applications/fxmatrix44/invertcolormatrix(withtolerance:))

# invertColorMatrix(withTolerance:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Inverts the matrix if possible.

## Declaration

```swift
func invertColorMatrix(withTolerance tolerance: Double) -> Bool
```

## Parameters

- `tolerance`: A threshold for determining whether inversion is possible. If set to 0, then inversion will only fail if the determininant of the matrix is exactly 0.0.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the invert succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Transforming the Matrix

- [invert()](invert%28%29.md): Inverts the matrix if possible.
- [transpose()](transpose%28%29.md): Transposes the matrix.

# invertColorMatrixWithTolerance: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Inverts the matrix if possible.

## Declaration

```objectivec
- (BOOL) invertColorMatrixWithTolerance:(double) tolerance;
```

## Parameters

- `tolerance`: A threshold for determining whether inversion is possible. If set to 0, then inversion will only fail if the determininant of the matrix is exactly 0.0.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the invert succeeded; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Transforming the Matrix

- [invert](invert%28%29.md): Inverts the matrix if possible.
- [transpose](transpose%28%29.md): Transposes the matrix.
