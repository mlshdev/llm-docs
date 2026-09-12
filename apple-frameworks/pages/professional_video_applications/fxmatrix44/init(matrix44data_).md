> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxmatrix44/init(matrix44data:)](https://developer.apple.com/documentation/professional_video_applications/fxmatrix44/init(matrix44data:))

# init(matrix44Data:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 3.1+

Initializes a matrix with the specified data.

## Declaration

```swift
init!(matrix44Data newMatrix: UnsafeMutablePointer<(Double, Double, Double, Double)>!)
```

## Parameters

- `newMatrix`: The new matrix data.

<a id="return-value"></a>

## Return Value

An initialized matrix object or `nil` if the object couldn’t be created.

## See Also

### Creating and Initializing a Matrix

- [init()](init%28%29.md): Initializes the matrix to the identity matrix.
- [init(fxMatrix:)](init%28fxmatrix_%29.md): Initializes the matrix using the specified matrix object.
- [init(colorMatrix44Data:)](init%28colormatrix44data_%29.md)

# initWithMatrix44Data: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Initializes a matrix with the specified data.

## Declaration

```objectivec
- (id) initWithMatrix44Data:(Matrix44Data) newMatrix;
```

## Parameters

- `newMatrix`: The new matrix data.

<a id="return-value"></a>

## Return Value

An initialized matrix object or `nil` if the object couldn’t be created.

## See Also

### Creating and Initializing a Matrix

- [init](init%28%29.md): Initializes the matrix to the identity matrix.
- [initWithFxMatrix:](init%28fxmatrix_%29.md): Initializes the matrix using the specified matrix object.
- [initWithColorMatrix44Data:](init%28colormatrix44data_%29.md)
