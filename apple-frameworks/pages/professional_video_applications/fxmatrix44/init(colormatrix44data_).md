> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxmatrix44/init(colormatrix44data:)](https://developer.apple.com/documentation/professional_video_applications/fxmatrix44/init(colormatrix44data:))

# init(colorMatrix44Data:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 3.1+

## Declaration

```swift
init!(colorMatrix44Data newMatrix: UnsafeMutablePointer<(Double, Double, Double, Double)>!)
```

## See Also

### Creating and Initializing a Matrix

- [init()](init%28%29.md): Initializes the matrix to the identity matrix.
- [init(fxMatrix:)](init%28fxmatrix_%29.md): Initializes the matrix using the specified matrix object.
- [init(matrix44Data:)](init%28matrix44data_%29.md): Initializes a matrix with the specified data.

# initWithColorMatrix44Data: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

## Declaration

```objectivec
- (id) initWithColorMatrix44Data:(Matrix44Data) newMatrix;
```

## See Also

### Creating and Initializing a Matrix

- [init](init%28%29.md): Initializes the matrix to the identity matrix.
- [initWithFxMatrix:](init%28fxmatrix_%29.md): Initializes the matrix using the specified matrix object.
- [initWithMatrix44Data:](init%28matrix44data_%29.md): Initializes a matrix with the specified data.
