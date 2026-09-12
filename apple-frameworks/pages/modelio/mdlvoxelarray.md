> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray](https://developer.apple.com/documentation/modelio/mdlvoxelarray)

# MDLVoxelArray (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A model of a 3D object’s solid volume as a collection of *voxels*, or cubic units.

## Declaration

```swift
class MDLVoxelArray
```

<a id="overview"></a>

## Overview

Unlike a mesh, which models only surface topology, a voxel array models the solid volume of a 3D object. Voxels are useful for modeling volumetric phenomena (such as clouds and fire), performing solid geometry operations (such as intersection and union), and preparing a 3D design for real-world physical production.

## Topics

### Creating a Voxel Array

- [init(asset:divisions:interiorShells:exteriorShells:patchRadius:)](mdlvoxelarray/init%28asset_divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset and creates the specified number of voxel shells.
- [init(asset:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:)](mdlvoxelarray/init%28asset_divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset, creating voxel shells for the specified distances from the object’s surface.
- [init(data:boundingBox:voxelExtent:)](mdlvoxelarray/init%28data_boundingbox_voxelextent_%29.md): Initializes a voxel array with the specified voxel data.

### Examining Voxels

- [count](mdlvoxelarray/count.md): The number of voxels in the array.
- [voxelIndexExtent](mdlvoxelarray/voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExists(atIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:)](mdlvoxelarray/voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxels(within:)](mdlvoxelarray/voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.
- [voxelIndices()](mdlvoxelarray/voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.

### Modifying Voxels

- [setVoxelAtIndex(\_:)](mdlvoxelarray/setvoxelatindex%28__%29.md): Sets voxel characteristics at the specified index in the array.
- [setVoxelsFor(\_:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:)](mdlvoxelarray/setvoxelsfor%28__divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates voxel shells for the specified distances from the object’s surface.
- [setVoxelsFor(\_:divisions:interiorShells:exteriorShells:patchRadius:)](mdlvoxelarray/setvoxelsfor%28__divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates the specified number of voxel shells.

### Performing Constructive Solid Geometry Operations

- [union(with:)](mdlvoxelarray/union%28with_%29.md): Extends the voxel array to also cover the volume of the specified voxel array.
- [intersect(with:)](mdlvoxelarray/intersect%28with_%29.md): Reduces the voxel array to cover only the volume within both it and another voxel array.
- [difference(with:)](mdlvoxelarray/difference%28with_%29.md): Reduces the voxel array to cover only the portion of its volume not covered by another voxel array.

### Relating Voxels to Scene Space

- [boundingBox](mdlvoxelarray/boundingbox.md): The extent of the voxel array’s volume in world coordinate space.
- [index(ofSpatialLocation:)](mdlvoxelarray/index%28ofspatiallocation_%29.md): Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.
- [spatialLocation(ofIndex:)](mdlvoxelarray/spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.
- [voxelBoundingBox(atIndex:)](mdlvoxelarray/voxelboundingbox%28atindex_%29.md): Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.

### Creating a Mesh from Voxels

- [mesh(using:)](mdlvoxelarray/mesh%28using_%29.md): Generates a closed polygon mesh around the volume of space the voxel array describes.

### Constants

- [MDLVoxelIndex](mdlvoxelindex.md): A 4-component vector encoding the location of a voxel in a voxel array and describing its relation to an object’s volume.
- [MDLVoxelIndexExtent](mdlvoxelindexextent.md): The corner voxel indices defining a solid rectangular volume of voxels. Used by the [voxelIndexExtent](mdlvoxelarray/voxelindexextent.md) property and [voxels(within:)](mdlvoxelarray/voxels%28within_%29.md) method.

### Initializers

- [init(asset:divisions:patchRadius:)](mdlvoxelarray/init%28asset_divisions_patchradius_%29.md)

### Instance Properties

- [isValidSignedShellField](mdlvoxelarray/isvalidsignedshellfield.md)
- [shellFieldExteriorThickness](mdlvoxelarray/shellfieldexteriorthickness.md)
- [shellFieldInteriorThickness](mdlvoxelarray/shellfieldinteriorthickness.md)

### Instance Methods

- [coarseMesh()](mdlvoxelarray/coarsemesh%28%29.md)
- [coarseMesh(using:)](mdlvoxelarray/coarsemesh%28using_%29.md)
- [convertToSignedShellField()](mdlvoxelarray/converttosignedshellfield%28%29.md)
- [setVoxelsFor(\_:divisions:patchRadius:)](mdlvoxelarray/setvoxelsfor%28__divisions_patchradius_%29.md)

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MDLVoxelArray (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A model of a 3D object’s solid volume as a collection of *voxels*, or cubic units.

## Declaration

```objectivec
@interface MDLVoxelArray : MDLObject
```

<a id="overview"></a>

## Overview

Unlike a mesh, which models only surface topology, a voxel array models the solid volume of a 3D object. Voxels are useful for modeling volumetric phenomena (such as clouds and fire), performing solid geometry operations (such as intersection and union), and preparing a 3D design for real-world physical production.

## Topics

### Creating a Voxel Array

- [initWithAsset:divisions:interiorShells:exteriorShells:patchRadius:](mdlvoxelarray/init%28asset_divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset and creates the specified number of voxel shells.
- [initWithAsset:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:](mdlvoxelarray/init%28asset_divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset, creating voxel shells for the specified distances from the object’s surface.
- [initWithData:boundingBox:voxelExtent:](mdlvoxelarray/init%28data_boundingbox_voxelextent_%29.md): Initializes a voxel array with the specified voxel data.

### Examining Voxels

- [count](mdlvoxelarray/count.md): The number of voxels in the array.
- [voxelIndexExtent](mdlvoxelarray/voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExistsAtIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:](mdlvoxelarray/voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxelsWithinExtent:](mdlvoxelarray/voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.
- [voxelIndices](mdlvoxelarray/voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.

### Modifying Voxels

- [setVoxelAtIndex:](mdlvoxelarray/setvoxelatindex%28__%29.md): Sets voxel characteristics at the specified index in the array.
- [setVoxelsForMesh:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:](mdlvoxelarray/setvoxelsfor%28__divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates voxel shells for the specified distances from the object’s surface.
- [setVoxelsForMesh:divisions:interiorShells:exteriorShells:patchRadius:](mdlvoxelarray/setvoxelsfor%28__divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates the specified number of voxel shells.

### Performing Constructive Solid Geometry Operations

- [unionWithVoxels:](mdlvoxelarray/union%28with_%29.md): Extends the voxel array to also cover the volume of the specified voxel array.
- [intersectWithVoxels:](mdlvoxelarray/intersect%28with_%29.md): Reduces the voxel array to cover only the volume within both it and another voxel array.
- [differenceWithVoxels:](mdlvoxelarray/difference%28with_%29.md): Reduces the voxel array to cover only the portion of its volume not covered by another voxel array.

### Relating Voxels to Scene Space

- [boundingBox](mdlvoxelarray/boundingbox.md): The extent of the voxel array’s volume in world coordinate space.
- [indexOfSpatialLocation:](mdlvoxelarray/index%28ofspatiallocation_%29.md): Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.
- [spatialLocationOfIndex:](mdlvoxelarray/spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.
- [voxelBoundingBoxAtIndex:](mdlvoxelarray/voxelboundingbox%28atindex_%29.md): Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.

### Creating a Mesh from Voxels

- [meshUsingAllocator:](mdlvoxelarray/mesh%28using_%29.md): Generates a closed polygon mesh around the volume of space the voxel array describes.

### Constants

- [MDLVoxelIndex](mdlvoxelindex.md): A 4-component vector encoding the location of a voxel in a voxel array and describing its relation to an object’s volume.
- [MDLVoxelIndexExtent](mdlvoxelindexextent.md): The corner voxel indices defining a solid rectangular volume of voxels. Used by the [voxelIndexExtent](mdlvoxelarray/voxelindexextent.md) property and [voxelsWithinExtent:](mdlvoxelarray/voxels%28within_%29.md) method.

### Instance Properties

- [isValidSignedShellField](mdlvoxelarray/isvalidsignedshellfield.md)
- [shellFieldExteriorThickness](mdlvoxelarray/shellfieldexteriorthickness.md)
- [shellFieldInteriorThickness](mdlvoxelarray/shellfieldinteriorthickness.md)

### Instance Methods

- [coarseMesh](mdlvoxelarray/coarsemesh%28%29.md)
- [coarseMeshUsingAllocator:](mdlvoxelarray/coarsemesh%28using_%29.md)
- [convertToSignedShellField](mdlvoxelarray/converttosignedshellfield%28%29.md)
- [initWithAsset:divisions:patchRadius:](mdlvoxelarray/init%28asset_divisions_patchradius_%29.md)
- [setVoxelsForMesh:divisions:patchRadius:](mdlvoxelarray/setvoxelsfor%28__divisions_patchradius_%29.md)

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)
