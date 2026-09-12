> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject](https://developer.apple.com/documentation/arkit/arreferenceobject)

# ARReferenceObject (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The description of a 3D object that you want ARKit to detect in the physical environment.

## Declaration

```swift
class ARReferenceObject
```

<a id="overview"></a>

## Overview

Object detection in ARKit lets you trigger AR content when the session recognizes a known 3D object. For example, your app could detect sculptures in an art museum and provide a virtual curator, or detect tabletop gaming figures and create visual effects for the game.

To provide a known 3D object for detection, you scan a real-world object using ARKit:

1. Run an AR session using [ARObjectScanningConfiguration](arobjectscanningconfiguration.md) to enable collection of high-fidelity spatial mapping data.
2. In that session, point the device camera at the real-world object from various angles, allowing ARKit to build up an internal map of the object and its surroundings. For an example of guiding user interactions to produce good scan data, see [Scanning and Detecting 3D Objects](scanning-and-detecting-3d-objects.md).
3. Determine the portion of the session’s world coordinate space representing the object to be recognized, and call [createReferenceObject(transform:center:extent:completionHandler:)](arsession/createreferenceobject%28transform_center_extent_completionhandler_%29.md) to get that portion as an [ARReferenceObject](arreferenceobject.md) ready for use in object detection.
4. To save the reference object for use later or elsewhere, use the [export(to:previewImage:)](arreferenceobject/export%28to_previewimage_%29.md) method to create an `.arobject` file.

To detect objects in an AR session, pass a collection of reference objects to your session configuration’s [detectionObjects](arworldtrackingconfiguration/detectionobjects.md) property. You need not scan and detect objects in the same app: For example, you might create one app for scanning museum collections that outputs `.arobject` files, then bundle those files into another app meant for museum visitors.

To bundle reference objects into an app, use your Xcode project’s asset catalog:

1. In your asset catalog, use the Add (+) button to create an AR Resource Group.
2. Drag `.arobject` into the resource group to create AR Reference Object entries in the asset catalog.
3. Optionally, use the Xcode inspector panel to provide a descriptive name for the object, which appears as the [name](arreferenceobject/name.md) property at runtime and can be useful for debugging.

## Topics

### Loading Reference Objects

- [init(archiveURL:)](arreferenceobject/init%28archiveurl_%29.md): Loads a reference object from the specified file URL.
- [referenceObjects(inGroupNamed:bundle:)](arreferenceobject/referenceobjects%28ingroupnamed_bundle_%29.md): Deprecated. Loads all reference objects in the specified AR Resource Group in your Xcode project’s asset catalog.

### Examining a Reference Object

- [name](arreferenceobject/name.md): A descriptive name for the reference object.
- [resourceGroupName](arreferenceobject/resourcegroupname.md): Deprecated.
- [center](arreferenceobject/center.md): The center point of the reference object’s space-mapping data.
- [extent](arreferenceobject/extent.md): The size of the reference object’s space-mapping data.
- [scale](arreferenceobject/scale.md): A scale factor for the local coordinate space the reference object defines.

### Saving Recorded Objects

- [export(to:previewImage:)](arreferenceobject/export%28to_previewimage_%29.md): Deprecated. Writes a binary representation of the object to the specified file URL.
- [archiveExtension](arreferenceobject/archiveextension.md): The standard filename extension for exported [ARReferenceObject](arreferenceobject.md) instances.

### Creating Derivative Reference Objects

- [applyingTransform(\_:)](arreferenceobject/applyingtransform%28__%29.md): Deprecated. Returns a new reference object created by applying the specified transform to this reference object’s geometric data.
- [merging(\_:)](arreferenceobject/merging%28__%29.md): Deprecated. Returns a new reference object that combines spatial information from both this reference object and another.

### Debugging a Reference Object

- [rawFeaturePoints](arreferenceobject/rawfeaturepoints.md): Deprecated. A coarse representation of the space-mapping data contained in the reference object.

### Initializers

- [init(coder:)](arreferenceobject/init%28coder_%29.md)

### Instance Properties

- [usdzFile](arreferenceobject/usdzfile.md): The URL to the extracted USDZ model, if available.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Physical Objects

- [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.
- [Scanning and Detecting 3D Objects](scanning-and-detecting-3d-objects.md): Record spatial features of real-world objects, then use the results to find those objects in the user’s environment and trigger AR content.
- [ARObjectAnchor](arobjectanchor.md): An anchor for a real-world 3D object that ARKit detects in the physical environment.

# ARReferenceObject (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The description of a 3D object that you want ARKit to detect in the physical environment.

## Declaration

```objectivec
@interface ARReferenceObject : NSObject
```

<a id="overview"></a>

## Overview

Object detection in ARKit lets you trigger AR content when the session recognizes a known 3D object. For example, your app could detect sculptures in an art museum and provide a virtual curator, or detect tabletop gaming figures and create visual effects for the game.

To provide a known 3D object for detection, you scan a real-world object using ARKit:

1. Run an AR session using [ARObjectScanningConfiguration](arobjectscanningconfiguration.md) to enable collection of high-fidelity spatial mapping data.
2. In that session, point the device camera at the real-world object from various angles, allowing ARKit to build up an internal map of the object and its surroundings. For an example of guiding user interactions to produce good scan data, see [Scanning and Detecting 3D Objects](scanning-and-detecting-3d-objects.md).
3. Determine the portion of the session’s world coordinate space representing the object to be recognized, and call [createReferenceObjectWithTransform:center:extent:completionHandler:](arsession/createreferenceobject%28transform_center_extent_completionhandler_%29.md) to get that portion as an [ARReferenceObject](arreferenceobject.md) ready for use in object detection.
4. To save the reference object for use later or elsewhere, use the [exportObjectToURL:previewImage:error:](arreferenceobject/export%28to_previewimage_%29.md) method to create an `.arobject` file.

To detect objects in an AR session, pass a collection of reference objects to your session configuration’s [detectionObjects](arworldtrackingconfiguration/detectionobjects.md) property. You need not scan and detect objects in the same app: For example, you might create one app for scanning museum collections that outputs `.arobject` files, then bundle those files into another app meant for museum visitors.

To bundle reference objects into an app, use your Xcode project’s asset catalog:

1. In your asset catalog, use the Add (+) button to create an AR Resource Group.
2. Drag `.arobject` into the resource group to create AR Reference Object entries in the asset catalog.
3. Optionally, use the Xcode inspector panel to provide a descriptive name for the object, which appears as the [name](arreferenceobject/name.md) property at runtime and can be useful for debugging.

## Topics

### Loading Reference Objects

- [initWithArchiveURL:error:](arreferenceobject/init%28archiveurl_%29.md): Loads a reference object from the specified file URL.
- [referenceObjectsInGroupNamed:bundle:](arreferenceobject/referenceobjects%28ingroupnamed_bundle_%29.md): Deprecated. Loads all reference objects in the specified AR Resource Group in your Xcode project’s asset catalog.

### Examining a Reference Object

- [name](arreferenceobject/name.md): A descriptive name for the reference object.
- [resourceGroupName](arreferenceobject/resourcegroupname.md): Deprecated.
- [center](arreferenceobject/center.md): The center point of the reference object’s space-mapping data.
- [extent](arreferenceobject/extent.md): The size of the reference object’s space-mapping data.
- [scale](arreferenceobject/scale.md): A scale factor for the local coordinate space the reference object defines.

### Saving Recorded Objects

- [exportObjectToURL:previewImage:error:](arreferenceobject/export%28to_previewimage_%29.md): Deprecated. Writes a binary representation of the object to the specified file URL.
- [ARReferenceObjectArchiveExtension](arreferenceobject/archiveextension.md): The standard filename extension for exported [ARReferenceObject](arreferenceobject.md) instances.

### Creating Derivative Reference Objects

- [referenceObjectByApplyingTransform:](arreferenceobject/applyingtransform%28__%29.md): Deprecated. Returns a new reference object created by applying the specified transform to this reference object’s geometric data.
- [referenceObjectByMergingObject:error:](arreferenceobject/merging%28__%29.md): Deprecated. Returns a new reference object that combines spatial information from both this reference object and another.

### Debugging a Reference Object

- [rawFeaturePoints](arreferenceobject/rawfeaturepoints.md): Deprecated. A coarse representation of the space-mapping data contained in the reference object.

### Instance Properties

- [usdzFile](arreferenceobject/usdzfile.md): The URL to the extracted USDZ model, if available.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physical Objects

- [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.
- [Scanning and Detecting 3D Objects](scanning-and-detecting-3d-objects.md): Record spatial features of real-world objects, then use the results to find those objects in the user’s environment and trigger AR content.
- [ARObjectAnchor](arobjectanchor.md): An anchor for a real-world 3D object that ARKit detects in the physical environment.
