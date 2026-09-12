> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/error](https://developer.apple.com/documentation/roomplan/capturedroom/error)

# CapturedRoom.Error

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Errors that can occur during a captured room export.

## Declaration

```swift
enum Error
```

<a id="overview"></a>

## Overview

The captured room ([CapturedRoom](../capturedroom.md)) function [export(to:metadataURL:modelProvider:exportOptions:)](export%28to_metadataurl_modelprovider_exportoptions_%29.md) can throw an error of this type.

## Topics

### Interpreting the error

- [CapturedRoom.Error.deviceNotSupported](error/devicenotsupported.md): An error that indicates that the framework doesn’t support the user’s device.
- [CapturedRoom.Error.urlInvalidFileExtension](error/urlinvalidfileextension.md): An error that indicates that the URL contains an unsupported file extension.
- [CapturedRoom.Error.urlInvalidFilePath](error/urlinvalidfilepath.md): An error that indicates that the URL references an invalid file path.
- [CapturedRoom.Error.urlInvalidScheme](error/urlinvalidscheme.md): An error that indicates that the URL prefix represents an unsupported scheme.
- [CapturedRoom.Error.urlMissingFileExtension](error/urlmissingfileextension.md): An error that indicates that the URL lacks a necessary file extension.

### Inspecting error information

- [errorDescription](error/errordescription.md): A human-readable explanation of the error.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
