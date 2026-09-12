> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/structurebuilder](https://developer.apple.com/documentation/roomplan/structurebuilder)

# StructureBuilder

**Framework:** RoomPlan  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that combines multiple scan sessions into a single captured result.

## Declaration

```swift
class StructureBuilder
```

## Mentioned In

- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md)

<a id="overview"></a>

## Overview

This class in conjunction with [CapturedStructure](capturedstructure.md) enables an app to export a 3D model that consists of multiple [CapturedRoom](capturedroom.md) instances. First, combine the rooms into a single captured result by calling [capturedStructure(from:)](structurebuilder/capturedstructure%28from_%29.md). Then, generate a 3D model of the whole structure by calling [export(to:metadataURL:modelProvider:exportOptions:)](capturedstructure/export%28to_metadataurl_modelprovider_exportoptions_%29.md).

## Topics

### Creating a structure builder

- [init(options:)](structurebuilder/init%28options_%29.md): Creates a structure builder using the specified options.
- [StructureBuilder.ConfigurationOptions](structurebuilder/configurationoptions.md): Options that configure a structure builder.

### Building a captured structure

- [capturedStructure(from:)](structurebuilder/capturedstructure%28from_%29.md): Combines the argument captured rooms into a single unit.

### Interpreting build errors

- [StructureBuilder.BuildError](structurebuilder/builderror.md): Errors that can occur during the multiple-scan merging process.

## See Also

### 3D Asset Output

- [Providing custom models for captured rooms and structure exports](providing-custom-models-for-captured-rooms-and-structure-exports.md): Enhance the look of an exported 3D model by substituting object bounding boxes with detailed 3D renditions.
- [RoomBuilder](roombuilder.md): An object that generates a 3D asset from room-capture data.
- [CapturedRoom.USDExportOptions](capturedroom/usdexportoptions.md): Options that determine the underlying data format of a scan export.
