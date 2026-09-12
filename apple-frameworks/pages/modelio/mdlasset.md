> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset](https://developer.apple.com/documentation/modelio/mdlasset)

# MDLAsset (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.

## Declaration

```swift
class MDLAsset
```

<a id="overview"></a>

## Overview

You create a [MDLAsset](mdlasset.md) object by loading data from a URL, and you can export an asset to any of several file formats. To access the objects contained in an asset, use [Fast Enumeration](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Enumeration.html#//apple_ref/doc/uid/TP40008195-CH17-SW3), the [object(at:)](mdlasset/object%28at_%29.md) method, or subscripting. Each object in an asset can be the root of a hierarchy of objects. To traverse that hierarchy, use an object’s [children](mdlobject/children.md) property.

An asset may contain timed information, such as a series of mesh morphs. In such cases, the asset’s [frameInterval](mdlasset/frameinterval.md) property is nonzero and the [startTime](mdlasset/starttime.md) and [endTime](mdlasset/endtime.md) properties indicate the range of sample times available in the asset data. For objects contained in the asset, you can use methods such as [localTransform(atTime:)](mdltransformcomponent/localtransform%28attime_%29.md) and [boundingBox(atTime:)](mdlobject/boundingbox%28attime_%29.md) to access object properties at a specific time sample. Requesting a sample outside the time range clamps to the start or end sample. Some asset formats support continuous sampling with interpolation for times between the samples stored in the asset; other asset formats are discrete. For an asset with discrete time information, requesting a sample time that falls between the samples stored in the asset returns data for the immediately preceding time.

## Topics

### Creating an Asset

- [canImportFileExtension(\_:)](mdlasset/canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](mdlasset.md) class can read asset data from files with the specified extension.
- [init(url:)](mdlasset/init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [init(bufferAllocator:)](mdlasset/init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:)](mdlasset/init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [init(url:vertexDescriptor:bufferAllocator:preserveTopology:error:)](mdlasset/init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

### Exporting an Asset

- [canExportFileExtension(\_:)](mdlasset/canexportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](mdlasset.md) class can write asset data as a file with the specified format extension.
- [export(to:)](mdlasset/export%28to_%29.md): Writes asset data to a file at the specified URL and reports errors that occur during export.

### Working with Asset Content

- [object(at:)](mdlasset/object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [subscript(\_:)](mdlasset/subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](mdlasset/count.md): The number of top-level objects in the asset.
- [childObjects(of:)](mdlasset/childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [add(\_:)](mdlasset/add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [remove(\_:)](mdlasset/remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](mdlasset/boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBox(atTime:)](mdlasset/boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [url](mdlasset/url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](mdlasset/bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](mdlasset/vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](mdlasset/masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.

### Working with Timed Information

- [frameInterval](mdlasset/frameinterval.md): The time interval between data samples in the asset.
- [startTime](mdlasset/starttime.md): The timestamp for the first timed data sample in the asset.
- [endTime](mdlasset/endtime.md): The timestamp for the last timed data sample in the asset.

### Working with Lights

- [placeLightProbes(withDensity:heuristic:using:)](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md): Automatically creates and places light probes for use in illuminating a scene.
- [MDLProbePlacement](mdlprobeplacement.md): Options affecting automatic placement of light probes in a scene, used with the [placeLightProbes(withDensity:heuristic:using:)](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method.

### Constants

- [Asset File Types](asset-file-types.md): Uniform Type Identifiers for file formats supported by the Model I/O framework.

### Initializers

- [init(URL:)](mdlasset/init%28url_%29-21tmw.md)
- [init(URL:vertexDescriptor:bufferAllocator:)](mdlasset/init%28url_vertexdescriptor_bufferallocator_%29-4rokm.md)
- [init(URL:vertexDescriptor:bufferAllocator:preserveTopology:error:)](mdlasset/init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-7bivy.md)

### Instance Properties

- [animations](mdlasset/animations.md)
- [originals](mdlasset/originals.md)
- [resolver](mdlasset/resolver.md)
- [upAxis](mdlasset/upaxis.md)

### Instance Methods

- [loadTextures()](mdlasset/loadtextures%28%29.md)
- [object(atPath:)](mdlasset/object%28atpath_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### 3D Asset Basics

- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.

# MDLAsset (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.

## Declaration

```objectivec
@interface MDLAsset : NSObject
```

<a id="overview"></a>

## Overview

You create a [MDLAsset](mdlasset.md) object by loading data from a URL, and you can export an asset to any of several file formats. To access the objects contained in an asset, use [Fast Enumeration](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Enumeration.html#//apple_ref/doc/uid/TP40008195-CH17-SW3), the [objectAtIndex:](mdlasset/object%28at_%29.md) method, or subscripting. Each object in an asset can be the root of a hierarchy of objects. To traverse that hierarchy, use an object’s [children](mdlobject/children.md) property.

An asset may contain timed information, such as a series of mesh morphs. In such cases, the asset’s [frameInterval](mdlasset/frameinterval.md) property is nonzero and the [startTime](mdlasset/starttime.md) and [endTime](mdlasset/endtime.md) properties indicate the range of sample times available in the asset data. For objects contained in the asset, you can use methods such as [localTransformAtTime:](mdltransformcomponent/localtransform%28attime_%29.md) and [boundingBoxAtTime:](mdlobject/boundingbox%28attime_%29.md) to access object properties at a specific time sample. Requesting a sample outside the time range clamps to the start or end sample. Some asset formats support continuous sampling with interpolation for times between the samples stored in the asset; other asset formats are discrete. For an asset with discrete time information, requesting a sample time that falls between the samples stored in the asset returns data for the immediately preceding time.

## Topics

### Creating an Asset

- [canImportFileExtension:](mdlasset/canimportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](mdlasset.md) class can read asset data from files with the specified extension.
- [initWithURL:](mdlasset/init%28url_%29-1f4ym.md): Initializes an asset from the file at the specified URL.
- [initWithBufferAllocator:](mdlasset/init%28bufferallocator_%29.md): Initializes an empty asset, using the specified buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:](mdlasset/init%28url_vertexdescriptor_bufferallocator_%29-1tchi.md): Initializes an asset from the file at the specified URL, using the specified vertex descriptor and buffer allocator.
- [initWithURL:vertexDescriptor:bufferAllocator:preserveTopology:error:](mdlasset/init%28url_vertexdescriptor_bufferallocator_preservetopology_error_%29-510xi.md): Initializes an asset from the file at the specified URL, using the specified options for allocating and transforming data during import.

### Exporting an Asset

- [canExportFileExtension:](mdlasset/canexportfileextension%28__%29.md): Returns a Boolean value that indicates whether the [MDLAsset](mdlasset.md) class can write asset data as a file with the specified format extension.
- [exportAssetToURL:](mdlasset/exportassettourl_.md): Writes asset data to a file at the specified URL.
- [exportAssetToURL:error:](mdlasset/export%28to_%29.md): Writes asset data to a file at the specified URL and reports errors that occur during export.

### Working with Asset Content

- [objectAtIndex:](mdlasset/object%28at_%29.md): Returns the top-level object at the specified index in the asset.
- [objectAtIndexedSubscript:](mdlasset/subscript%28__%29.md): Returns the top-level object at the specified index in the asset, using subscript syntax.
- [count](mdlasset/count.md): The number of top-level objects in the asset.
- [childObjectsOfClass:](mdlasset/childobjects%28of_%29.md): Returns all objects contained in the asset of the specified class.
- [addObject:](mdlasset/add%28__%29.md): Adds the specified object to the asset’s list of top-level objects.
- [removeObject:](mdlasset/remove%28__%29.md): Removes the specified object from the asset’s list of top-level objects.
- [boundingBox](mdlasset/boundingbox.md): The minimum region entirely enclosing the asset’s contents.
- [boundingBoxAtTime:](mdlasset/boundingbox%28attime_%29.md): Returns the minimum region entirely enclosing the asset’s contents at the specified time sample.
- [URL](mdlasset/url.md): The URL from which the asset was loaded, if available.
- [bufferAllocator](mdlasset/bufferallocator.md): An object responsible for allocating mesh vertex data loaded from the asset.
- [vertexDescriptor](mdlasset/vertexdescriptor.md): The description of the vertex data format to be used for loading mesh data from the asset.
- [masters](mdlasset/masters.md): Deprecated. An array of objects that can be reused in the asset’s object hierarchy through instancing.

### Working with Timed Information

- [frameInterval](mdlasset/frameinterval.md): The time interval between data samples in the asset.
- [startTime](mdlasset/starttime.md): The timestamp for the first timed data sample in the asset.
- [endTime](mdlasset/endtime.md): The timestamp for the last timed data sample in the asset.

### Working with Lights

- [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md): Automatically creates and places light probes for use in illuminating a scene.
- [MDLProbePlacement](mdlprobeplacement.md): Options affecting automatic placement of light probes in a scene, used with the [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method.

### Constants

- [Asset File Types](asset-file-types.md): Uniform Type Identifiers for file formats supported by the Model I/O framework.

### Instance Properties

- [animations](mdlasset/animations.md)
- [originals](mdlasset/originals.md)
- [resolver](mdlasset/resolver.md)
- [upAxis](mdlasset/upaxis.md)

### Instance Methods

- [loadTextures](mdlasset/loadtextures%28%29.md)
- [objectAtPath:](mdlasset/object%28atpath_%29.md)

### Type Methods

- [assetWithSCNScene:](mdlasset/assetwithscnscene_.md)
- [assetWithSCNScene:bufferAllocator:](mdlasset/assetwithscnscene_bufferallocator_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### 3D Asset Basics

- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.
