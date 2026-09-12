> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/usesfloatcomponents](https://developer.apple.com/documentation/scenekit/scngeometrysource/usesfloatcomponents)

# usesFloatComponents (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that indicates whether vector components are floating-point values.

## Declaration

```swift
var usesFloatComponents: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), SceneKit interprets the geometry source’s data as an array of vectors whose components are floating-point values. The type of floating-point value is determined by the [SCNGeometrySource](../scngeometrysource.md) property: 4 bytes for `float` values or 8 bytes for `double` values.

If [false](https://developer.apple.com/documentation/swift/false), SceneKit interprets the geometry source’s data as an array of vectors whose components are integer values. The type of integer value is determined by the [SCNGeometrySource](../scngeometrysource.md) property; for example, 2 bytes for `unsigned short` values or 4 bytes for `unsigned int` values.

## See Also

### Inspecting a Geometry Source

- [data](data.md): The data for the geometry source.
- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](vectorcount.md): The number of vectors in the data.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.

# floatComponents (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether vector components are floating-point values.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL floatComponents;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), SceneKit interprets the geometry source’s data as an array of vectors whose components are floating-point values. The type of floating-point value is determined by the [SCNGeometrySource](../scngeometrysource.md) property: 4 bytes for `float` values or 8 bytes for `double` values.

If [false](https://developer.apple.com/documentation/swift/false), SceneKit interprets the geometry source’s data as an array of vectors whose components are integer values. The type of integer value is determined by the [SCNGeometrySource](../scngeometrysource.md) property; for example, 2 bytes for `unsigned short` values or 4 bytes for `unsigned int` values.

## See Also

### Inspecting a Geometry Source

- [data](data.md): The data for the geometry source.
- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](vectorcount.md): The number of vectors in the data.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.
