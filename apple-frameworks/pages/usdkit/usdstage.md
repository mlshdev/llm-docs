> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage](https://developer.apple.com/documentation/usdkit/usdstage)

# USDStage

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 3D scene composed from one or more Universal Scene Description (USD) documents.

## Declaration

```swift
struct USDStage
```

<a id="overview"></a>

## Overview

Stages support authoring, animating, and composing 3D data from various 3D file formats. A stage can contain meshes, materials, cameras, lights, or arbitrary custom data, as well as references to textures or additional scene data stored in separate files.

A stage is a scene graph formed by opening a single document (the “root layer”) and then recursively following the composition rules described by that document in order to assemble a scene graph. Because of this composition process, a `USDStage` object presents a unified view that may incorporate data from more than one source file.

A `USDStage` object is a mutable view onto the composed scene graph. It consists of a tree-structured hierarchy of [USDPrim](usdprim.md) objects representing nodes in the scene graph. Each prim has schemas that give it a kind (is-a) and capabilities (has-a), attributes that contain possibly-animated values, and relationships that connect the prim to other objects in the stage.

The [USDPrim](usdprim.md), `USDPrim.Attribute`, and `USDPrim.Relationship` objects in a stage are owned by the `USDStage` object. Values of these types act as views or handles into the composed content of the stage. Modifying any value in a stage authors a modification to an [USDLayer](usdlayer.md) that represents a file or file-like storage. Values of these types refer to and act on the current state of a particular stage, and become invalid if the stage is closed.

> **Note**

> A stage may also possess a “session layer” that may contain temporary modifications that will not be written to any file.

A composed, runtime view of a USD scene assembled from one or more layers.

## Topics

### Creating a stage

- [init(displayName:loadingPayloads:)](usdstage/init%28displayname_loadingpayloads_%29.md): Creates a new memory-backed stage.
- [init(string:loadingPayloads:)](usdstage/init%28string_loadingpayloads_%29.md): Creates a stage from a string containing a `.usda` document.
- [init(\_:type:loadingPayloads:)](usdstage/init%28__type_loadingpayloads_%29.md): Creates a stage from in-memory data in a given format.

### Opening a stage

- [open(rootLayer:sessionLayer:options:)](usdstage/open%28rootlayer_sessionlayer_options_%29.md): Opens a stage rooted at a given layer.
- [open(\_:sessionLayer:options:)](usdstage/open%28__sessionlayer_options_%29.md): Opens a stage using a file as the root layer.
- [open(\_:loadingPayloads:)](usdstage/open%28__loadingpayloads_%29.md): Opens a stage using the file at a URL as its root layer.
- [USDStage.OpenOptions](usdstage/openoptions.md): Options that specify behavior related to opening a stage.
- [USDStage.InitialLoadRule](usdstage/initialloadrule.md): Specifies the rule used when opening a stage to determine if referenced payloads are loaded.

### Saving and reloading

- [save()](usdstage/save%28%29.md): Saves the stage’s changed layers to their sources.
- [saveSessionLayers()](usdstage/savesessionlayers%28%29.md): Saves the stage’s changed session layers to their sources.
- [reload()](usdstage/reload%28%29.md): Reloads the stage’s layers from their sources, discarding any unsaved changes.

### Accessing prims and properties

- [prim(at:)](usdstage/prim%28at_%29.md): Returns the prim at a given path, if it exists.
- [object(at:)](usdstage/object%28at_%29.md): Returns the object at a given path, if it exists.
- [property(at:)](usdstage/property%28at_%29.md): Returns the property at a given path, if it exists.
- [attribute(at:)](usdstage/attribute%28at_%29.md): Returns the attribute at a given path, if it exists.
- [relationship(at:)](usdstage/relationship%28at_%29.md): Returns the relationship at a given path, if it exists.
- [pseudoRoot](usdstage/pseudoroot.md): The prim at the top of the stage’s namespace, whose path is `/`.
- [defaultPrim](usdstage/defaultprim.md): The prim designated as this stage’s default entry point when the stage is referenced.
- [hasDefaultPrim](usdstage/hasdefaultprim.md): Return true if this stage’s root layer has an authored opinion for the default prim layer metadata.
- [USDStage.Object](usdstage/object.md)

### Authoring prims

- [definePrim(at:type:)](usdstage/defineprim%28at_type_%29.md): Defines a prim at a given path, if none already exists.
- [overridePrim(at:)](usdstage/overrideprim%28at_%29.md): Authors an override prim at a given path, if no prim exists at that path.
- [removePrim(at:)](usdstage/removeprim%28at_%29.md): Removes all authored data at the given path in the current edit target.

### Traversing the scene

- [descendants](usdstage/descendants.md): The active, loaded, defined, non-abstract descendant prims of this stage’s pseudo-root.
- [descendants(where:)](usdstage/descendants%28where_%29.md): Returns the descendant prims of this stage that satisfy the given predicate.
- [allDescendants](usdstage/alldescendants.md): All descendant prims of this stage’s pseudo-root.

### Managing layers

- [rootLayer](usdstage/rootlayer.md): The root layer of this stage.
- [muteLayer(\_:)](usdstage/mutelayer%28__%29.md): Mutes the layer with the given identifier, excluding its opinions from composition.
- [unmuteLayer(\_:)](usdstage/unmutelayer%28__%29.md): Unmutes the layer with the given identifier, restoring its opinions to composition.
- [isLayerMuted(\_:)](usdstage/islayermuted%28__%29.md): Returns a Boolean value that indicates whether the layer with the given identifier is muted.

### Setting the edit target

- [editTarget](usdstage/edittarget-swift.property.md): The destination for authoring operations on this stage.
- [USDStage.EditTarget](usdstage/edittarget-swift.struct.md): A destination for authoring operations on a stage.

### Working with time codes

- [timeCodeRange](usdstage/timecoderange.md): The range of time codes over which this stage has authored animation.
- [timeCodesPerSecond](usdstage/timecodespersecond.md): The number of time codes per second of playback for this stage.
- [USDStage.TimeCode](usdstage/timecode.md): A unitless point in time, used with time-varying values authored in 3D scenes.

### Reading stage metrics

- [metersPerUnit](usdstage/metersperunit.md): The number of meters represented by one unit in this stage’s coordinate system.
- [hasAuthoredMetersPerUnit](usdstage/hasauthoredmetersperunit.md): A Boolean value that indicates whether this stage has an authored [metersPerUnit](usdstage/metersperunit.md) opinion.
- [upAxis](usdstage/upaxis.md): The axis that points upward in this stage’s coordinate system.
- [fallbackUpAxis](usdstage/fallbackupaxis.md): The up axis used when a stage has no authored opinion.

### Observing changes

- [addObserver(for:using:)](usdstage/addobserver%28for_using_%29.md): Registers an observer that runs when a notice of the given type is sent for this stage.
- [USDStage.Notice](usdstage/notice.md): A change notification that can be observed on a stage.
- [USDStage.ObjectsDidChange](usdstage/objectsdidchange.md): A notice sent when the objects on a stage change.
- [USDStage.ObservationToken](usdstage/observationtoken.md): A token that keeps an observer registered for as long as it is retained.

### Exporting the stage

- [exportPackage(to:options:)](usdstage/exportpackage%28to_options_%29-6s2wk.md): Packages the stage into a USDZ archive.
- [exportPackage(to:options:)](usdstage/exportpackage%28to_options_%29-2x7yr.md): Packages the stage into a USDZ archive.
- [exportFlattened(to:)](usdstage/exportflattened%28to_%29-98kpc.md): Exports the stage as a flattened USD file.
- [exportFlattened(to:)](usdstage/exportflattened%28to_%29-6717d.md): Exports the stage as a flattened USD file.
- [USDStage.ExportOptions](usdstage/exportoptions.md): Options for packaging a stage into a USDZ file.

### Instance Methods

- [exportPackage(options:)](usdstage/exportpackage%28options_%29.md): Packages the stage into a USDZ archive and returns it as in-memory data.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Essentials

- [USDPrim](usdprim.md): A single node in a stage’s scene hierarchy that holds attributes, relationships, metadata, and child prims.
- [USDLayer](usdlayer.md): A single USD document that stores scene description in a file or in memory.
