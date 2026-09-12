> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/modelprovider/error](https://developer.apple.com/documentation/roomplan/capturedroom/modelprovider/error)

# CapturedRoom.ModelProvider.Error

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Errors that can occur when managing 3D model association with categories and attributes.

## Declaration

```swift
enum Error
```

<a id="overview"></a>

## Overview

The `modelFileURL` functions can throw an error of this type, such as `CapturedRoom/ModelProvider/modelFileURL(for:)-42iz3`.

## Topics

### Interpreting the error

- [CapturedRoom.ModelProvider.Error.attributeCombinationNotSupported](error/attributecombinationnotsupported.md): An error that indicates the framework doesn’t support the attributes set in a model-URL query.
- [CapturedRoom.ModelProvider.Error.nonExistingFile(url:)](error/nonexistingfile%28url_%29.md): An error that indicates a model-URL query failed to return a result.

### Inspecting error information

- [errorDescription](error/errordescription.md): A human-readable explanation for the particular model-provider error.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
