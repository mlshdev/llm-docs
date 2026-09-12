> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxmatrix44/init(fxmatrix:)](https://developer.apple.com/documentation/professional_video_applications/fxmatrix44/init(fxmatrix:))

# init(fxMatrix:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 3.1+

Initializes the matrix using the specified matrix object.

## Declaration

```swift
init!(fxMatrix newFxMatrix: FxMatrix44!)
```

## Parameters

- `newFxMatrix`: A 4 x 4 matrix object.

<a id="return-value"></a>

## Return Value

An initialized matrix object or `nil` if the object couldn’t be created.

## See Also

### Creating and Initializing a Matrix

- [init()](init%28%29.md): Initializes the matrix to the identity matrix.
- [init(matrix44Data:)](init%28matrix44data_%29.md): Initializes a matrix with the specified data.
- [init(colorMatrix44Data:)](init%28colormatrix44data_%29.md)

# initWithFxMatrix: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Initializes the matrix using the specified matrix object.

## Declaration

```objectivec
- (id) initWithFxMatrix:(FxMatrix44 *) newFxMatrix;
```

## Parameters

- `newFxMatrix`: A 4 x 4 matrix object.

<a id="return-value"></a>

## Return Value

An initialized matrix object or `nil` if the object couldn’t be created.

## See Also

### Creating and Initializing a Matrix

- [init](init%28%29.md): Initializes the matrix to the identity matrix.
- [initWithMatrix44Data:](init%28matrix44data_%29.md): Initializes a matrix with the specified data.
- [initWithColorMatrix44Data:](init%28colormatrix44data_%29.md)
