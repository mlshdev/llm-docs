> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/data](https://developer.apple.com/documentation/scenekit/scngeometrysource/data)

# data (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The data for the geometry source.

## Declaration

```swift
var data: Data { get }
```

<a id="Discussion"></a>

## Discussion

A geometry source’s data is an array of vectors, each of which represents a particular attribute (or semantic) of a vertex in the geometry. The other properties of the geometry source determine how SceneKit interprets this data. For example, an array of vertex positions may have three 32-bit floating-point components per vector, but an array of texture coordinates may have two 8-bit integer coponents per vector.

## See Also

### Inspecting a Geometry Source

- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](vectorcount.md): The number of vectors in the data.
- [usesFloatComponents](usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.

# data (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The data for the geometry source.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * data;
```

<a id="Discussion"></a>

## Discussion

A geometry source’s data is an array of vectors, each of which represents a particular attribute (or semantic) of a vertex in the geometry. The other properties of the geometry source determine how SceneKit interprets this data. For example, an array of vertex positions may have three 32-bit floating-point components per vector, but an array of texture coordinates may have two 8-bit integer coponents per vector.

## See Also

### Inspecting a Geometry Source

- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](vectorcount.md): The number of vectors in the data.
- [floatComponents](usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.
