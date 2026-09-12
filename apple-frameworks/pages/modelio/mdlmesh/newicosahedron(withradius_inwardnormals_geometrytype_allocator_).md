> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/newicosahedron(withradius:inwardnormals:geometrytype:allocator:)](https://developer.apple.com/documentation/modelio/mdlmesh/newicosahedron(withradius:inwardnormals:geometrytype:allocator:))

# newIcosahedron(withRadius:inwardNormals:geometryType:allocator:) (Swift)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
class func newIcosahedron(withRadius radius: Float, inwardNormals: Bool, geometryType: MDLGeometryType, allocator: (any MDLMeshBufferAllocator)?) -> Self
```

## See Also

### Creating Parametric Meshes

- [newBox(withDimensions:segments:geometryType:inwardNormals:allocator:)](newbox%28withdimensions_segments_geometrytype_inwardnormals_allocator_%29.md): Creates a mesh in the shape of a rectangular box or cube.
- [newEllipsoid(withRadii:radialSegments:verticalSegments:geometryType:inwardNormals:hemisphere:allocator:)](newellipsoid%28withradii_radialsegments_verticalsegments_geometrytype_inwardnormals_hemisphere_allocator_%29.md): Creates a mesh in the shape of an ellipsoid or sphere.
- [newCylinder(withHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:)](newcylinder%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a right circular or elliptical cylinder.
- [newEllipticalCone(withHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:)](newellipticalcone%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of an elliptical or circular cone.
- [newPlane(withDimensions:segments:geometryType:allocator:)](newplane%28withdimensions_segments_geometrytype_allocator_%29.md): Generates a mesh in the shape of a rectangular plane.
- [newCapsule(withHeight:radii:radialSegments:verticalSegments:hemisphereSegments:geometryType:inwardNormals:allocator:)](newcapsule%28withheight_radii_radialsegments_verticalsegments_hemispheresegments_geometrytype_inwardnormals_allocator_%29.md)
- [newIcosahedron(withRadius:inwardNormals:allocator:)](newicosahedron%28withradius_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a regular 20-sided polyhedron with triangular faces.
- [init(boxWithExtent:segments:inwardNormals:geometryType:allocator:)](init%28boxwithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [init(sphereWithExtent:segments:inwardNormals:geometryType:allocator:)](init%28spherewithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [init(cylinderWithExtent:segments:inwardNormals:topCap:bottomCap:geometryType:allocator:)](init%28cylinderwithextent_segments_inwardnormals_topcap_bottomcap_geometrytype_allocator_%29.md)
- [init(coneWithExtent:segments:inwardNormals:cap:geometryType:allocator:)](init%28conewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
- [init(planeWithExtent:segments:geometryType:allocator:)](init%28planewithextent_segments_geometrytype_allocator_%29.md)
- [init(icosahedronWithExtent:inwardNormals:geometryType:allocator:)](init%28icosahedronwithextent_inwardnormals_geometrytype_allocator_%29.md)
- [init(capsuleWithExtent:cylinderSegments:hemisphereSegments:inwardNormals:geometryType:allocator:)](init%28capsulewithextent_cylindersegments_hemispheresegments_inwardnormals_geometrytype_allocator_%29.md)
- [init(hemisphereWithExtent:segments:inwardNormals:cap:geometryType:allocator:)](init%28hemispherewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)

# newIcosahedronWithRadius:inwardNormals:geometryType:allocator: (Objective-C)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) newIcosahedronWithRadius:(float) radius inwardNormals:(BOOL) inwardNormals geometryType:(MDLGeometryType) geometryType allocator:(id<MDLMeshBufferAllocator>) allocator;
```

## See Also

### Creating Parametric Meshes

- [newBoxWithDimensions:segments:geometryType:inwardNormals:allocator:](newbox%28withdimensions_segments_geometrytype_inwardnormals_allocator_%29.md): Creates a mesh in the shape of a rectangular box or cube.
- [newEllipsoidWithRadii:radialSegments:verticalSegments:geometryType:inwardNormals:hemisphere:allocator:](newellipsoid%28withradii_radialsegments_verticalsegments_geometrytype_inwardnormals_hemisphere_allocator_%29.md): Creates a mesh in the shape of an ellipsoid or sphere.
- [newCylinderWithHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:](newcylinder%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a right circular or elliptical cylinder.
- [newEllipticalConeWithHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:](newellipticalcone%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of an elliptical or circular cone.
- [newPlaneWithDimensions:segments:geometryType:allocator:](newplane%28withdimensions_segments_geometrytype_allocator_%29.md): Generates a mesh in the shape of a rectangular plane.
- [newCapsuleWithHeight:radii:radialSegments:verticalSegments:hemisphereSegments:geometryType:inwardNormals:allocator:](newcapsule%28withheight_radii_radialsegments_verticalsegments_hemispheresegments_geometrytype_inwardnormals_allocator_%29.md)
- [newIcosahedronWithRadius:inwardNormals:allocator:](newicosahedron%28withradius_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a regular 20-sided polyhedron with triangular faces.
- [initBoxWithExtent:segments:inwardNormals:geometryType:allocator:](init%28boxwithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [initSphereWithExtent:segments:inwardNormals:geometryType:allocator:](init%28spherewithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [initCylinderWithExtent:segments:inwardNormals:topCap:bottomCap:geometryType:allocator:](init%28cylinderwithextent_segments_inwardnormals_topcap_bottomcap_geometrytype_allocator_%29.md)
- [initConeWithExtent:segments:inwardNormals:cap:geometryType:allocator:](init%28conewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
- [initPlaneWithExtent:segments:geometryType:allocator:](init%28planewithextent_segments_geometrytype_allocator_%29.md)
- [initIcosahedronWithExtent:inwardNormals:geometryType:allocator:](init%28icosahedronwithextent_inwardnormals_geometrytype_allocator_%29.md)
- [initCapsuleWithExtent:cylinderSegments:hemisphereSegments:inwardNormals:geometryType:allocator:](init%28capsulewithextent_cylindersegments_hemispheresegments_inwardnormals_geometrytype_allocator_%29.md)
- [initHemisphereWithExtent:segments:inwardNormals:cap:geometryType:allocator:](init%28hemispherewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
