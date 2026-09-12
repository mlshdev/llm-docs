> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/newicosahedron(withradius:inwardnormals:allocator:)](https://developer.apple.com/documentation/modelio/mdlmesh/newicosahedron(withradius:inwardnormals:allocator:))

# newIcosahedron(withRadius:inwardNormals:allocator:) (Swift)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates a mesh in the shape of a regular 20-sided polyhedron with triangular faces.

## Declaration

```swift
class func newIcosahedron(withRadius radius: Float, inwardNormals: Bool, allocator: (any MDLMeshBufferAllocator)?) -> Self
```

## Parameters

- `radius`: The distance from the icosahedron’s center to any one of its vertices.
- `inwardNormals`: [true](https://developer.apple.com/documentation/swift/true) to generate normal vectors pointing toward the center of the icosahedron; [false](https://developer.apple.com/documentation/swift/false) to generate normal vectors pointing outward.
- `allocator`: An object responsible for allocating mesh vertex data. If `nil`, Model I/O  uses an internal allocator object.

<a id="return-value"></a>

## Return Value

A new mesh object.

<a id="Discussion"></a>

## Discussion

This method generates vertex data for an icosahedron centered at the origin of its local coordinate system. An icosahedron is a rough approximation of a sphere—to generate a more precise approximation, create an icosahedron and use the [newSubdividedMesh(\_:submeshIndex:subdivisionLevels:)](newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md) method to turn it into a geodesic sphere.

The `inwardNormals` parameter determines the direction of generated vertex normal vectors for the mesh. Specify [true](https://developer.apple.com/documentation/swift/true) if the mesh will be viewed from inside (for example, for use in a sky effect), or [false](https://developer.apple.com/documentation/swift/false) if the mesh will be viewed from outside.

## See Also

### Creating Parametric Meshes

- [newBox(withDimensions:segments:geometryType:inwardNormals:allocator:)](newbox%28withdimensions_segments_geometrytype_inwardnormals_allocator_%29.md): Creates a mesh in the shape of a rectangular box or cube.
- [newEllipsoid(withRadii:radialSegments:verticalSegments:geometryType:inwardNormals:hemisphere:allocator:)](newellipsoid%28withradii_radialsegments_verticalsegments_geometrytype_inwardnormals_hemisphere_allocator_%29.md): Creates a mesh in the shape of an ellipsoid or sphere.
- [newCylinder(withHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:)](newcylinder%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a right circular or elliptical cylinder.
- [newEllipticalCone(withHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:)](newellipticalcone%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of an elliptical or circular cone.
- [newPlane(withDimensions:segments:geometryType:allocator:)](newplane%28withdimensions_segments_geometrytype_allocator_%29.md): Generates a mesh in the shape of a rectangular plane.
- [newCapsule(withHeight:radii:radialSegments:verticalSegments:hemisphereSegments:geometryType:inwardNormals:allocator:)](newcapsule%28withheight_radii_radialsegments_verticalsegments_hemispheresegments_geometrytype_inwardnormals_allocator_%29.md)
- [newIcosahedron(withRadius:inwardNormals:geometryType:allocator:)](newicosahedron%28withradius_inwardnormals_geometrytype_allocator_%29.md)
- [init(boxWithExtent:segments:inwardNormals:geometryType:allocator:)](init%28boxwithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [init(sphereWithExtent:segments:inwardNormals:geometryType:allocator:)](init%28spherewithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [init(cylinderWithExtent:segments:inwardNormals:topCap:bottomCap:geometryType:allocator:)](init%28cylinderwithextent_segments_inwardnormals_topcap_bottomcap_geometrytype_allocator_%29.md)
- [init(coneWithExtent:segments:inwardNormals:cap:geometryType:allocator:)](init%28conewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
- [init(planeWithExtent:segments:geometryType:allocator:)](init%28planewithextent_segments_geometrytype_allocator_%29.md)
- [init(icosahedronWithExtent:inwardNormals:geometryType:allocator:)](init%28icosahedronwithextent_inwardnormals_geometrytype_allocator_%29.md)
- [init(capsuleWithExtent:cylinderSegments:hemisphereSegments:inwardNormals:geometryType:allocator:)](init%28capsulewithextent_cylindersegments_hemispheresegments_inwardnormals_geometrytype_allocator_%29.md)
- [init(hemisphereWithExtent:segments:inwardNormals:cap:geometryType:allocator:)](init%28hemispherewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)

# newIcosahedronWithRadius:inwardNormals:allocator: (Objective-C)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates a mesh in the shape of a regular 20-sided polyhedron with triangular faces.

## Declaration

```objectivec
+ (instancetype) newIcosahedronWithRadius:(float) radius inwardNormals:(BOOL) inwardNormals allocator:(id<MDLMeshBufferAllocator>) allocator;
```

## Parameters

- `radius`: The distance from the icosahedron’s center to any one of its vertices.
- `inwardNormals`: [true](https://developer.apple.com/documentation/swift/true) to generate normal vectors pointing toward the center of the icosahedron; [false](https://developer.apple.com/documentation/swift/false) to generate normal vectors pointing outward.
- `allocator`: An object responsible for allocating mesh vertex data. If `nil`, Model I/O  uses an internal allocator object.

<a id="return-value"></a>

## Return Value

A new mesh object.

<a id="Discussion"></a>

## Discussion

This method generates vertex data for an icosahedron centered at the origin of its local coordinate system. An icosahedron is a rough approximation of a sphere—to generate a more precise approximation, create an icosahedron and use the [newSubdividedMesh:submeshIndex:subdivisionLevels:](newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md) method to turn it into a geodesic sphere.

The `inwardNormals` parameter determines the direction of generated vertex normal vectors for the mesh. Specify [true](https://developer.apple.com/documentation/swift/true) if the mesh will be viewed from inside (for example, for use in a sky effect), or [false](https://developer.apple.com/documentation/swift/false) if the mesh will be viewed from outside.

## See Also

### Creating Parametric Meshes

- [newBoxWithDimensions:segments:geometryType:inwardNormals:allocator:](newbox%28withdimensions_segments_geometrytype_inwardnormals_allocator_%29.md): Creates a mesh in the shape of a rectangular box or cube.
- [newEllipsoidWithRadii:radialSegments:verticalSegments:geometryType:inwardNormals:hemisphere:allocator:](newellipsoid%28withradii_radialsegments_verticalsegments_geometrytype_inwardnormals_hemisphere_allocator_%29.md): Creates a mesh in the shape of an ellipsoid or sphere.
- [newCylinderWithHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:](newcylinder%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a right circular or elliptical cylinder.
- [newEllipticalConeWithHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:](newellipticalcone%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of an elliptical or circular cone.
- [newPlaneWithDimensions:segments:geometryType:allocator:](newplane%28withdimensions_segments_geometrytype_allocator_%29.md): Generates a mesh in the shape of a rectangular plane.
- [newCapsuleWithHeight:radii:radialSegments:verticalSegments:hemisphereSegments:geometryType:inwardNormals:allocator:](newcapsule%28withheight_radii_radialsegments_verticalsegments_hemispheresegments_geometrytype_inwardnormals_allocator_%29.md)
- [newIcosahedronWithRadius:inwardNormals:geometryType:allocator:](newicosahedron%28withradius_inwardnormals_geometrytype_allocator_%29.md)
- [initBoxWithExtent:segments:inwardNormals:geometryType:allocator:](init%28boxwithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [initSphereWithExtent:segments:inwardNormals:geometryType:allocator:](init%28spherewithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [initCylinderWithExtent:segments:inwardNormals:topCap:bottomCap:geometryType:allocator:](init%28cylinderwithextent_segments_inwardnormals_topcap_bottomcap_geometrytype_allocator_%29.md)
- [initConeWithExtent:segments:inwardNormals:cap:geometryType:allocator:](init%28conewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
- [initPlaneWithExtent:segments:geometryType:allocator:](init%28planewithextent_segments_geometrytype_allocator_%29.md)
- [initIcosahedronWithExtent:inwardNormals:geometryType:allocator:](init%28icosahedronwithextent_inwardnormals_geometrytype_allocator_%29.md)
- [initCapsuleWithExtent:cylinderSegments:hemisphereSegments:inwardNormals:geometryType:allocator:](init%28capsulewithextent_cylindersegments_hemispheresegments_inwardnormals_geometrytype_allocator_%29.md)
- [initHemisphereWithExtent:segments:inwardNormals:cap:geometryType:allocator:](init%28hemispherewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
