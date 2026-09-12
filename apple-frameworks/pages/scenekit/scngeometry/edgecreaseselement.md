> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/edgecreaseselement](https://developer.apple.com/documentation/scenekit/scngeometry/edgecreaseselement)

# edgeCreasesElement (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.

## Declaration

```swift
var edgeCreasesElement: SCNGeometryElement? { get set }
```

<a id="Discussion"></a>

## Discussion

This geometry element’s [primitiveType](../scngeometryelement/primitivetype.md) value must be [SCNGeometryPrimitiveType.line](../scngeometryprimitivetype/line.md). The geometry element’s data is an array of vertex indices, each pair of which defines a line segment identifying an edge to be treated as a crease during subdivision. Use the [edgeCreasesSource](edgecreasessource.md) property to specify the smoothness or sharpness of each crease.

## See Also

### Smoothing and Subdividing Geometry

- [subdivisionLevel](subdivisionlevel.md): The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.
- [edgeCreasesSource](edgecreasessource.md): The geometry source specifying the smoothness or sharpness of edges after surface subdivision.
- [wantsAdaptiveSubdivision](wantsadaptivesubdivision.md)

# edgeCreasesElement (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNGeometryElement * edgeCreasesElement;
```

<a id="Discussion"></a>

## Discussion

This geometry element’s [primitiveType](../scngeometryelement/primitivetype.md) value must be [SCNGeometryPrimitiveTypeLine](../scngeometryprimitivetype/line.md). The geometry element’s data is an array of vertex indices, each pair of which defines a line segment identifying an edge to be treated as a crease during subdivision. Use the [edgeCreasesSource](edgecreasessource.md) property to specify the smoothness or sharpness of each crease.

## See Also

### Smoothing and Subdividing Geometry

- [subdivisionLevel](subdivisionlevel.md): The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.
- [edgeCreasesSource](edgecreasessource.md): The geometry source specifying the smoothness or sharpness of edges after surface subdivision.
- [wantsAdaptiveSubdivision](wantsadaptivesubdivision.md)
