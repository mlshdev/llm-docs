> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scenekit-3d-data-types](https://developer.apple.com/documentation/scenekit/scenekit-3d-data-types)

# SceneKit 3D Data Types (Swift)

**Framework:** SceneKit  
**Kind:** API Collection

SceneKit-specific vectors, matrices, and related functions and operations.

<a id="overview"></a>

## Overview

> **Important**

>  In macOS 10.13, iOS 11, tvOS 11, and watchOS 4 (or later), use data types provided by the system SIMD library (such as `float3` and `float4x4`) and the corresponding SceneKit methods (such as [simdPosition](scnnode/simdposition.md) and [simdTransform](scnnode/simdtransform.md)) instead. These types provide faster performance, offer more concise C, C++, and Swift syntax (such as `+` and `*` operators instead of functions), and interoperate better with other technologies (such as Model I/O, GameplayKit, and the Metal Shading Language).

## Topics

### Vectors

- [SCNVector3](scnvector3.md): A representation of a three-component vector.
- [SCNVector4](scnvector4.md): A representation of a four-component vector.

### Transforms and Rotations

- [SCNMatrix4](scnmatrix4-swift.struct.md): A representation of a 4 x 4 matrix.
- [SCNMatrix4](scnmatrix4-swift.typealias.md): A representation of a 4 x 4 matrix.
- [SCNQuaternion](scnquaternion.md): A representation of a quaternion.

### Scalars

- [SCNFloat](scnfloat.md): Deprecated. The element type for SceneKit vectors and matrices.

# SceneKit 3D Data Types (Objective-C)

**Framework:** SceneKit  
**Kind:** API Collection

SceneKit-specific vectors, matrices, and related functions and operations.

<a id="overview"></a>

## Overview

> **Important**

>  In macOS 10.13, iOS 11, tvOS 11, and watchOS 4 (or later), use data types provided by the system SIMD library (such as `float3` and `float4x4`) and the corresponding SceneKit methods (such as [simdPosition](scnnode/simdposition.md) and [simdTransform](scnnode/simdtransform.md)) instead. These types provide faster performance, offer more concise C, C++, and Swift syntax (such as `+` and `*` operators instead of functions), and interoperate better with other technologies (such as Model I/O, GameplayKit, and the Metal Shading Language).

## Topics

### Vectors

- [SCNVector3](scnvector3.md): A representation of a three-component vector.
- [SCNVector4](scnvector4.md): A representation of a four-component vector.

### Transforms and Rotations

- [SCNMatrix4](scnmatrix4-swift.struct.md): A representation of a 4 x 4 matrix.
- [SCNMatrix4](scnmatrix4-swift.typealias.md): A representation of a 4 x 4 matrix.
- [SCNQuaternion](scnquaternion.md): A representation of a quaternion.
