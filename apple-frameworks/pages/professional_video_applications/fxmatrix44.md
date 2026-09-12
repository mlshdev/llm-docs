> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxmatrix44](https://developer.apple.com/documentation/professional_video_applications/fxmatrix44)

# FxMatrix44 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** FxPlug 3.1+

The `FxMatrix` class encapsulates a 4x4 matrix object and provides matrix inversion and transforming of 2D and 3D points.

## Declaration

```swift
class FxMatrix44
```

<a id="overview"></a>

## Overview

> **Important**

>  FxMatrix44 stores its data in *row major* order, which is different from OpenGL.

## Topics

### Creating and Initializing a Matrix

- [init()](fxmatrix44/init%28%29.md): Initializes the matrix to the identity matrix.
- [init(fxMatrix:)](fxmatrix44/init%28fxmatrix_%29.md): Initializes the matrix using the specified matrix object.
- [init(matrix44Data:)](fxmatrix44/init%28matrix44data_%29.md): Initializes a matrix with the specified data.
- [init(colorMatrix44Data:)](fxmatrix44/init%28colormatrix44data_%29.md)

### Getting and Setting the Matrix

- [setMatrix(\_:)](fxmatrix44/setmatrix%28__%29.md): Sets the matrix to the specified values.
- [matrix()](fxmatrix44/matrix%28%29.md): Gets the raw matrix data.
- [setToIdentity()](fxmatrix44/settoidentity%28%29.md): Sets the matrix to the identity matrix.

### Transforming the Matrix

- [invert()](fxmatrix44/invert%28%29.md): Inverts the matrix if possible.
- [invertColorMatrix(withTolerance:)](fxmatrix44/invertcolormatrix%28withtolerance_%29.md): Inverts the matrix if possible.
- [transpose()](fxmatrix44/transpose%28%29.md): Transposes the matrix.

### Transforming Points Using the Matrix

- [transform2DPoint(\_:)](fxmatrix44/transform2dpoint%28__%29.md): Transforms a 2D point using the matrix.
- [transform3DPoint(\_:)](fxmatrix44/transform3dpoint%28__%29.md): Transforms a 3D point using the matrix.

### Constants

- [Matrix44Data](matrix44data.md): A matrix data type in the raw format.

### Initializers

- [init(coder:)](fxmatrix44/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### 3D and lighting

- [Fx3DAPI_v5](fx3dapi_v5.md): An API that defines the methods the host application provides to get information about the 3D environment, including camera and object transforms.
- [FxLightingAPI_v3](fxlightingapi_v3.md): An API you use to get information about lights in a scene in a Motion project.

# FxMatrix44 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

The `FxMatrix` class encapsulates a 4x4 matrix object and provides matrix inversion and transforming of 2D and 3D points.

## Declaration

```objectivec
@interface FxMatrix44 : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  FxMatrix44 stores its data in *row major* order, which is different from OpenGL.

## Topics

### Creating and Initializing a Matrix

- [init](fxmatrix44/init%28%29.md): Initializes the matrix to the identity matrix.
- [initWithFxMatrix:](fxmatrix44/init%28fxmatrix_%29.md): Initializes the matrix using the specified matrix object.
- [initWithMatrix44Data:](fxmatrix44/init%28matrix44data_%29.md): Initializes a matrix with the specified data.
- [initWithColorMatrix44Data:](fxmatrix44/init%28colormatrix44data_%29.md)

### Getting and Setting the Matrix

- [setMatrix:](fxmatrix44/setmatrix%28__%29.md): Sets the matrix to the specified values.
- [matrix](fxmatrix44/matrix%28%29.md): Gets the raw matrix data.
- [setToIdentity](fxmatrix44/settoidentity%28%29.md): Sets the matrix to the identity matrix.

### Transforming the Matrix

- [invert](fxmatrix44/invert%28%29.md): Inverts the matrix if possible.
- [invertColorMatrixWithTolerance:](fxmatrix44/invertcolormatrix%28withtolerance_%29.md): Inverts the matrix if possible.
- [transpose](fxmatrix44/transpose%28%29.md): Transposes the matrix.

### Transforming Points Using the Matrix

- [transform2DPoint:](fxmatrix44/transform2dpoint%28__%29.md): Transforms a 2D point using the matrix.
- [transform3DPoint:](fxmatrix44/transform3dpoint%28__%29.md): Transforms a 3D point using the matrix.

### Constants

- [Matrix44Data](matrix44data.md): A matrix data type in the raw format.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### 3D and lighting

- [Fx3DAPI_v5](fx3dapi_v5.md): An API that defines the methods the host application provides to get information about the 3D environment, including camera and object transforms.
- [FxLightingAPI_v3](fxlightingapi_v3.md): An API you use to get information about lights in a scene in a Motion project.
