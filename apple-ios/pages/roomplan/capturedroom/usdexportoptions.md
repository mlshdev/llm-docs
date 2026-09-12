> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/usdexportoptions](https://developer.apple.com/documentation/roomplan/capturedroom/usdexportoptions)

# CapturedRoom.USDExportOptions

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Options that determine the underlying data format of a scan export.

## Declaration

```swift
struct USDExportOptions
```

<a id="overview"></a>

## Overview

The `exportOptions` parameter of the captured room ([CapturedRoom](../capturedroom.md)) and captured structure ([CapturedStructure](../capturedstructure.md)) functions `export(to:metadataURL:modelProvider:exportOptions:)` are of this type.

The following table lists the features that each export option supports in the output result.

| Feature per export option | Parametric | Mesh | Model |
| --- | --- | --- | --- |
| Changing the size or position of objects, windows, or doors | ✔ |  |  |
| Boolean operations | ✔ |  |  |
| Section positions and labels | ✔ | ✔ | ✔ |
| Polygonal walls |  | ✔ | ✔ |
| Windows, doors, and other openings cut out of wall geometry |  | ✔ | ✔ |
| The recessed areas of a sink or fireplace |  | ✔ | ✔ |
| ModelProvider models |  |  | ✔ |

## Topics

### Choosing an export option

- [parametric](usdexportoptions/parametric.md): An export option that formats the output file as a collection of size-dependent primitives.
- [mesh](usdexportoptions/mesh.md): An export option that formats the output file as a collection of size-independant triangles that connect to form a mesh.
- [model](usdexportoptions/model.md): An export option that formats the output file as a collection of 3D models.

### Creating an export option

- [init(rawValue:)](usdexportoptions/init%28rawvalue_%29.md): Creates an export option with the specified raw value.
- [rawValue](usdexportoptions/rawvalue.md): A raw value for the export option.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### 3D Asset Output

- [Providing custom models for captured rooms and structure exports](../providing-custom-models-for-captured-rooms-and-structure-exports.md): Enhance the look of an exported 3D model by substituting object bounding boxes with detailed 3D renditions.
- [RoomBuilder](../roombuilder.md): An object that generates a 3D asset from room-capture data.
- [StructureBuilder](../structurebuilder.md): An object that combines multiple scan sessions into a single captured result.
