> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer](https://developer.apple.com/documentation/usdkit/usdlayer)

# USDLayer

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A single USD document that stores scene description in a file or in memory.

## Declaration

```swift
struct USDLayer
```

## Topics

### Creating a layer

- [init(displayName:)](usdlayer/init%28displayname_%29.md): Creates an anonymous, in-memory layer.

### Opening and finding layers

- [find(identifier:)](usdlayer/find%28identifier_%29.md): Returns an already-loaded layer with this identifier, or `nil` if none is loaded. Does no I/O.
- [open(\_:options:)](usdlayer/open%28__options_%29.md): Returns an already-loaded layer at the identifier, or opens it from the resolved asset path.
- [USDLayer.OpenOptions](usdlayer/openoptions.md): Options for opening a layer.
- [USDLayer.Permission](usdlayer/permission.md): Access permission for a spec.

### Saving and reloading

- [save()](usdlayer/save%28%29.md): Saves the layer to its source if it has unsaved changes.
- [reload()](usdlayer/reload%28%29.md): Reloads the layer from its source, discarding any unsaved changes.
- [clear()](usdlayer/clear%28%29.md): Removes all in-memory content from the layer. The file on disk is unaffected until [save()](usdlayer/save%28%29.md) is called.

### Exporting and importing

- [export(to:)](usdlayer/export%28to_%29-7vouy.md): Writes the layer’s contents to a file at the given URL.
- [export(to:)](usdlayer/export%28to_%29-5hboj.md): Writes the layer’s contents to a file at the given path.
- [importContents(from:)](usdlayer/importcontents%28from_%29-2ipug.md): Replaces the layer’s contents with the layer file at the given path.
- [importContents(from:)](usdlayer/importcontents%28from_%29-99hnf.md): Replaces the layer’s contents with the USDA string.

### Inspecting identity and state

- [identifier](usdlayer/identifier.md): The layer’s identifier — typically a file path, URL, or anonymous identifier string. Identifies the layer in OpenUSD’s global registry.
- [resolvedPath](usdlayer/resolvedpath.md): The resolved filesystem location of the layer’s source, or `nil` for anonymous layers.
- [displayName](usdlayer/displayname.md): A human-readable name for the layer, derived from its identifier. Suitable for display in UI.
- [isAnonymous](usdlayer/isanonymous.md): Whether the layer is anonymous (in-memory, no file backing).
- [isValid](usdlayer/isvalid.md): Whether the layer is still valid. Returns `false` if the underlying data has been released.
- [isDirty](usdlayer/isdirty.md): Whether the layer has unsaved changes.
- [isMuted](usdlayer/ismuted.md): Whether the layer is muted from composition.

### Composing the scene

- [defaultPrim](usdlayer/defaultprim.md): The name of the layer’s default prim — the prim referenced when this layer is included as a reference or payload without specifying a target. `nil` if not authored.
- [subLayerPaths](usdlayer/sublayerpaths.md): The asset paths of the layer’s sublayers, ordered from strongest to weakest opinion.
- [USDLayer.AssetPath](usdlayer/assetpath.md): A reference to an external asset such as a texture, audio file, or USD layer.

### Accessing scene description by path

- [prim(at:)](usdlayer/prim%28at_%29.md): Returns the prim spec authored at the given path, or `nil` if no prim spec exists there.
- [property(at:)](usdlayer/property%28at_%29.md): Returns the property spec at the given path.
- [attribute(at:)](usdlayer/attribute%28at_%29.md): Returns the attribute spec at the given path.
- [relationship(at:)](usdlayer/relationship%28at_%29.md): Returns the relationship spec at the given path.
- [spec(at:)](usdlayer/spec%28at_%29.md): Returns the spec at the given path, or `nil` if no spec is authored there.
- [specType(at:)](usdlayer/spectype%28at_%29.md): Returns the kind of spec authored at the given path, or `nil` if nothing is authored there.
- [traverse(at:\_:)](usdlayer/traverse%28at___%29.md): Walks the spec tree rooted at the given path, calling `body` for each spec’s path.
- [USDLayer.Path](usdlayer/path.md): A path within a USD scene hierarchy.
- [USDLayer.PathExpression](usdlayer/pathexpression.md): A boolean expression over path patterns for selecting sets of prims.
- [USDLayer.Spec](usdlayer/spec.md): A handle to a single spec stored in a layer.
- [USDLayer.SpecType](usdlayer/spectype.md): The kind of spec stored at a path in a layer.

### Reading and authoring fields

- [field(at:name:)](usdlayer/field%28at_name_%29.md): Returns the value of the named field at the given path, or `nil` if no such field is authored.
- [fields(at:)](usdlayer/fields%28at_%29.md): Returns the names of the fields authored at the given path.
- [setField(at:name:value:)](usdlayer/setfield%28at_name_value_%29-83nwe.md): Sets the value of the named field at the given path.
- [setField(at:name:value:)](usdlayer/setfield%28at_name_value_%29-3242k.md): Sets the value of the named field at the given path, wrapping the typed value in a `USDValue`.

### Working with time samples

- [timeSample(at:time:)](usdlayer/timesample%28at_time_%29.md): Returns the time-sampled value for the attribute at the given path at the specified time, or `nil` if none is authored at that time.
- [timeSamples(at:)](usdlayer/timesamples%28at_%29.md): Returns the time codes for which the attribute at the given path has authored time samples.
- [allTimeSamples](usdlayer/alltimesamples.md): All time codes for which any attribute in the layer has an authored time sample.
- [setTimeSample(at:time:value:)](usdlayer/settimesample%28at_time_value_%29-6t3qd.md): Sets the time-sampled value for the attribute at the given path at the specified time.
- [setTimeSample(at:time:value:)](usdlayer/settimesample%28at_time_value_%29-3ot1j.md): Sets the time-sampled value for the attribute at the given path at the specified time, wrapping the typed value in a `USDValue`.
- [eraseTimeSample(at:time:)](usdlayer/erasetimesample%28at_time_%29.md): Erases the authored time sample at the given path and time.

### Setting the time range

- [startTimeCode](usdlayer/starttimecode.md): The first time code in the layer’s animation range. `nil` if not authored.
- [endTimeCode](usdlayer/endtimecode.md): The last time code in the layer’s animation range. `nil` if not authored.
- [timeCodesPerSecond](usdlayer/timecodespersecond.md): The rate at which time codes advance per second. `nil` if not authored.
- [USDLayer.TimeCode](usdlayer/timecode.md): A time value in USD, typically used for animation keyframe times.
- [USDLayer.TimeOffset](usdlayer/timeoffset.md): A time transformation applied when composing layers.

### Editing scene description

- [copy(from:to:in:)](usdlayer/copy%28from_to_in_%29.md): Copies the spec at `srcPath` in this layer (and its children) to `dstPath`.
- [USDLayer.ListOperation](usdlayer/listoperation.md): A non-destructive list of incremental editing operations for list-valued metadata and properties.
- [USDLayer.ListOperationType](usdlayer/listoperationtype.md): Identifies an operation slot in a [USDLayer.ListOperation](usdlayer/listoperation.md).
- [USDLayer.Relocate](usdlayer/relocate.md): A single path relocation from source to target.
- [USDLayer.RelocatesMap](usdlayer/relocatesmap.md): A mapping from source paths to target paths for relocations.
- [USDLayer.ChangeList](usdlayer/changelist.md): A list of changes made to a layer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Essentials

- [USDStage](usdstage.md): A 3D scene composed from one or more Universal Scene Description (USD) documents.
- [USDPrim](usdprim.md): A single node in a stage’s scene hierarchy that holds attributes, relationships, metadata, and child prims.
