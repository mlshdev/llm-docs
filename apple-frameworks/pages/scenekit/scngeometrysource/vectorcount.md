> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource/vectorcount](https://developer.apple.com/documentation/scenekit/scngeometrysource/vectorcount)

# vectorCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of vectors in the data.

## Declaration

```swift
var vectorCount: Int { get }
```

## See Also

### Inspecting a Geometry Source

- [data](data.md): The data for the geometry source.
- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [usesFloatComponents](usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.

# vectorCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of vectors in the data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger vectorCount;
```

## See Also

### Inspecting a Geometry Source

- [data](data.md): The data for the geometry source.
- [semantic](semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [floatComponents](usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [componentsPerVector](componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](datastride.md): The number of bytes from a vector to the next one in the data.
