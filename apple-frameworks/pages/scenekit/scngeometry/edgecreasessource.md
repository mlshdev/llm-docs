> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/edgecreasessource](https://developer.apple.com/documentation/scenekit/scngeometry/edgecreasessource)

# edgeCreasesSource (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The geometry source specifying the smoothness or sharpness of edges after surface subdivision.

## Declaration

```swift
var edgeCreasesSource: SCNGeometrySource? { get set }
```

<a id="Discussion"></a>

## Discussion

This geometry source’s [semantic](../scngeometrysource/semantic-swift.property.md) value must be [edgeCrease](../scngeometrysource/semantic-swift.struct/edgecrease.md). Its data is an array of scalar values (that is, the source’s [componentsPerVector](../scngeometrysource/componentspervector.md) value is `1`). The value at an index in the geometry source determines the smoothness or sharpness of the edge identified by the primitive at the corresponding index in the [edgeCreasesElement](edgecreaseselement.md) geometry element: a value of `0.0` specifies a completely smoothed edge, and a value of `10.0` or greater specifies an infinitely sharp edge.

## See Also

### Smoothing and Subdividing Geometry

- [subdivisionLevel](subdivisionlevel.md): The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.
- [edgeCreasesElement](edgecreaseselement.md): The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.
- [wantsAdaptiveSubdivision](wantsadaptivesubdivision.md)

# edgeCreasesSource (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The geometry source specifying the smoothness or sharpness of edges after surface subdivision.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNGeometrySource * edgeCreasesSource;
```

<a id="Discussion"></a>

## Discussion

This geometry source’s [semantic](../scngeometrysource/semantic-swift.property.md) value must be [SCNGeometrySourceSemanticEdgeCrease](../scngeometrysource/semantic-swift.struct/edgecrease.md). Its data is an array of scalar values (that is, the source’s [componentsPerVector](../scngeometrysource/componentspervector.md) value is `1`). The value at an index in the geometry source determines the smoothness or sharpness of the edge identified by the primitive at the corresponding index in the [edgeCreasesElement](edgecreaseselement.md) geometry element: a value of `0.0` specifies a completely smoothed edge, and a value of `10.0` or greater specifies an infinitely sharp edge.

## See Also

### Smoothing and Subdividing Geometry

- [subdivisionLevel](subdivisionlevel.md): The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.
- [edgeCreasesElement](edgecreaseselement.md): The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.
- [wantsAdaptiveSubdivision](wantsadaptivesubdivision.md)
