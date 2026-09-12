> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/structurebuilder/builderror](https://developer.apple.com/documentation/roomplan/structurebuilder/builderror)

# StructureBuilder.BuildError

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Errors that can occur during the multiple-scan merging process.

## Declaration

```swift
enum BuildError
```

<a id="overview"></a>

## Overview

The structure builder ([StructureBuilder](../structurebuilder.md)) function [capturedStructure(from:)](capturedstructure%28from_%29.md) throws an error of this type if the multiple-scan merging process fails.

## Topics

### Enumeration Cases

- [StructureBuilder.BuildError.deviceNotSupported](builderror/devicenotsupported.md): An error that indicates that the framework doesn’t support the user’s device.
- [StructureBuilder.BuildError.exceedSceneSizeLimit](builderror/exceedscenesizelimit.md): An error that indicates when the scene size grows past the framework’s limitations.
- [StructureBuilder.BuildError.insufficientInput](builderror/insufficientinput.md): An error that indicates the framework expects more captured room data.
- [StructureBuilder.BuildError.internalError](builderror/internalerror.md): An error that indicates when the framework encounters an unexpected error case.
- [StructureBuilder.BuildError.invalidInput](builderror/invalidinput.md): An error that indicates the framework encounters invalid captured room data.
- [StructureBuilder.BuildError.invalidRoomLocation](builderror/invalidroomlocation.md): An error that indicates one or more rooms reside in a different vicinity.

### Instance Properties

- [errorDescription](builderror/errordescription.md): A human-readable explanation of the error.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
