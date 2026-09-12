> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedstructure](https://developer.apple.com/documentation/roomplan/capturedstructure)

# CapturedStructure

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that holds the results of the merger of multiple capture sessions.

## Declaration

```swift
struct CapturedStructure
```

## Mentioned In

- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md)

<a id="overview"></a>

## Overview

This structure combines the data from multiple [CapturedRoom](capturedroom.md) instances that a user scans in the same physical vicinity. The [StructureBuilder](structurebuilder.md) class’s function merges the captured rooms with the [capturedStructure(from:)](structurebuilder/capturedstructure%28from_%29.md) function, which returns an object of this type.

## Topics

### Creating a captured room

- [init(from:)](capturedstructure/init%28from_%29.md): Creates a captured structure by deserializing the decoder of a prior captured structure.

### Inspecting structure details

- [identifier](capturedstructure/identifier.md): A unique alphanumeric value that the framework assigns the structure.
- [rooms](capturedstructure/rooms.md): An array of all the captured rooms in the structure.
- [floors](capturedstructure/floors.md): An array of all the floors in the structure.
- [CapturedStructure.Surface](capturedstructure/surface.md): The type a captured structure assigns to surfaces.
- [doors](capturedstructure/doors.md): An array of all the doors in the structure.
- [objects](capturedstructure/objects.md): An array of all the objects in the structure.
- [CapturedStructure.Object](capturedstructure/object.md): The type a captured structure assigns to objects.
- [openings](capturedstructure/openings.md): An array of all the openings in the structure.
- [walls](capturedstructure/walls.md): An array of all the walls in the structure.
- [windows](capturedstructure/windows.md): An array of all the windows in the structure.
- [sections](capturedstructure/sections.md): One or more room types that the framework identifies in the structure.
- [CapturedStructure.Section](capturedstructure/section.md): The type a captured structure assigns to distinct room areas.
- [version](capturedstructure/version.md): A version number for the captured structure.

### Serializing a captured structure

- [encode(to:)](capturedstructure/encode%28to_%29.md): Serializes a captured structure to the specified encoder.

### Generating a USDZ file

- [export(to:metadataURL:modelProvider:exportOptions:)](capturedstructure/export%28to_metadataurl_modelprovider_exportoptions_%29.md): Produces a 3D asset from the captured structure.
- [CapturedStructure.USDExportOptions](capturedstructure/usdexportoptions.md): The type a captured structure uses to configure exports.
- [CapturedStructure.ModelProvider](capturedstructure/modelprovider.md): The type a captured structure uses to output sophisticated 3D models.

### Handling errors

- [CapturedStructure.Error](capturedstructure/error.md): Errors that can occur during a captured structure export.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Captured Data

- [Merging multiple scans into a single structure](merging-multiple-scans-into-a-single-structure.md): Export a 3D model that consists of multiple rooms captured in the same physical vicinity.
- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md): Create an AR experience that enables people to scan a building that contains multiple rooms.
- [CapturedRoom](capturedroom.md): A structure that provides the key details of a scanned room.
- [CapturedRoomData](capturedroomdata.md): An opaque object that holds the raw results of a scan.
- [Captured Object Attributes](captured-object-attributes.md): Determine details about the objects and surfaces that the framework identifies in a scan.
