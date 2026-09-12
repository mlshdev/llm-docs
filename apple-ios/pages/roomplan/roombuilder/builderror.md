> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roombuilder/builderror](https://developer.apple.com/documentation/roomplan/roombuilder/builderror)

# RoomBuilder.BuildError

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Errors that can occur during captured room-data processing.

## Declaration

```swift
enum BuildError
```

<a id="overview"></a>

## Overview

The room builder ([RoomBuilder](../roombuilder.md)) function [capturedRoom(from:)](capturedroom%28from_%29.md) can throw an error of this type.

## Topics

### Interpreting the error cause

- [RoomBuilder.BuildError.insufficientInput](builderror/insufficientinput.md): An error that indicates the framework expects more captured room data.
- [RoomBuilder.BuildError.invalidInput](builderror/invalidinput.md): An error that indicates the framework encounters invalid captured room data.
- [RoomBuilder.BuildError.exceedSceneSizeLimit](builderror/exceedscenesizelimit.md): An error that indicates when the scene size grows past the framework’s limitations.
- [RoomBuilder.BuildError.internalError](builderror/internalerror.md): An error that indicates when the framework encounters an unexpected error case.
- [RoomBuilder.BuildError.deviceNotSupported](builderror/devicenotsupported.md): An error that indicates that the framework doesn’t support the user’s device.

### Inspecting error information

- [errorDescription](builderror/errordescription.md): A human-readable explanation of the error.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
