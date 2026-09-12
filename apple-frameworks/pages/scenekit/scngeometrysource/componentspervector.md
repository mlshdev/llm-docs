> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/componentspervector](https://developer.apple.com/documentation/scenekit/scngeometrysource/componentspervector)

# componentsPerVector (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of scalar components in each vector.

## Declaration

```swift
var componentsPerVector: Int { get }
```

## See Also

### Inspecting a Geometry Source

- [data](data.md): The data for the geometry source.
- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](vectorcount.md): The number of vectors in the data.
- [usesFloatComponents](usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.

# componentsPerVector (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of scalar components in each vector.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger componentsPerVector;
```

## See Also

### Inspecting a Geometry Source

- [data](data.md): The data for the geometry source.
- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](vectorcount.md): The number of vectors in the data.
- [floatComponents](usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.
