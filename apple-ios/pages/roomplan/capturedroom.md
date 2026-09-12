> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom](https://developer.apple.com/documentation/roomplan/capturedroom)

# CapturedRoom

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A structure that provides the key details of a scanned room.

## Declaration

```swift
struct CapturedRoom
```

## Mentioned In

- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md)

<a id="overview"></a>

## Overview

This structure represents the post-processed result of the room-scanning process.

Your app receives an instance of this structure through:

- The view delegate ([RoomCaptureViewDelegate](roomcaptureviewdelegate.md)) callback [captureView(didPresent:error:)](roomcaptureviewdelegate/captureview%28didpresent_error_%29.md) for an app that scans rooms using the framework-provided view ([RoomCaptureView](roomcaptureview.md)).
- A room builder object ([RoomBuilder](roombuilder.md)) by calling [capturedRoom(from:)](roombuilder/capturedroom%28from_%29.md) for an app that provides its own room-scanning view, or processes the saved results of a prior scan.

With the room details, an app can provide custom features, such as rendering the room and enabling the user to modify the position of its objects. You can export the current state of the room at any time to a USDZ file by calling [export(to:metadataURL:modelProvider:exportOptions:)](capturedroom/export%28to_metadataurl_modelprovider_exportoptions_%29.md).

## Topics

### Creating a captured room

- [init(from:)](capturedroom/init%28from_%29.md): Creates a captured room by deserializing the decoder of a previously captured room.

### Inspecting room details

- [identifier](capturedroom/identifier.md): A unique alphanumeric value that the framework assigns the room.
- [story](capturedroom/story.md): The story, floor number, or level on which the captured room resides within a larger structure.
- [floors](capturedroom/floors.md): An array of floors that the framework identifies during a scan.
- [CapturedRoom.Surface](capturedroom/surface.md): A 2D area in a room that the framework identifies as a surface.
- [doors](capturedroom/doors.md): An array of doors that the framework identifies during a scan.
- [objects](capturedroom/objects.md): An array of objects that the framework identifies during a scan.
- [CapturedRoom.Object](capturedroom/object.md): A 3D area in a room that the framework identifies as an object.
- [openings](capturedroom/openings.md): An array of openings that the framework identifies during a scan.
- [walls](capturedroom/walls.md): An array of walls that the framework identifies during a scan.
- [windows](capturedroom/windows.md): An array of windows that the framework identifies during a scan.
- [sections](capturedroom/sections.md): One or more room types that the framework observes in the room.
- [CapturedRoom.Section](capturedroom/section.md): An object that identifies a particular area in a captured room in relation to common types of room areas in a building.
- [CapturedRoom.Confidence](capturedroom/confidence.md): Levels of certainty in the classification of a particular detail in a scan.
- [version](capturedroom/version.md): A version number for the captured room.

### Serializing a captured room

- [encode(to:)](capturedroom/encode%28to_%29.md): Serializes a captured room to the specified encoder.
- [CapturedRoom.AttributesCodableRepresentation](capturedroom/attributescodablerepresentation.md): A serializable set of details that describe an object in the room.

### Generating a USDZ file

- [export(to:exportOptions:)](capturedroom/export%28to_exportoptions_%29.md): Produces a 3D asset from the captured room.
- [export(to:metadataURL:modelProvider:exportOptions:)](capturedroom/export%28to_metadataurl_modelprovider_exportoptions_%29.md): Produces a 3D asset from the captured room with the given metadata output URL and model provider.
- [CapturedRoom.USDExportOptions](capturedroom/usdexportoptions.md): Options that determine the underlying data format of a scan export.
- [CapturedRoom.ModelProvider](capturedroom/modelprovider.md): A structure that assigns detailed 3D models to captured objects for an export.

### Handling errors

- [CapturedRoom.Error](capturedroom/error.md): Errors that can occur during a captured room export.

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
- [CapturedStructure](capturedstructure.md): An object that holds the results of the merger of multiple capture sessions.
- [CapturedRoomData](capturedroomdata.md): An opaque object that holds the raw results of a scan.
- [Captured Object Attributes](captured-object-attributes.md): Determine details about the objects and surfaces that the framework identifies in a scan.
