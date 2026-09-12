> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinstallationrequest](https://developer.apple.com/documentation/speech/assetinstallationrequest)

# AssetInstallationRequest

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that describes, downloads, and installs a selection of assets.

## Declaration

```swift
@objc final class AssetInstallationRequest
```

<a id="overview"></a>

## Overview

You do not create instances of this type directly; obtain them from [assetInstallationRequest(supporting:)](assetinventory/assetinstallationrequest%28supporting_%29.md).

The system consolidates download and installation requests; you may obtain several of these instances and call [downloadAndInstall()](assetinstallationrequest/downloadandinstall%28%29.md) several times without causing redundant downloads.

## Topics

### Performing an installation request

- [downloadAndInstall()](assetinstallationrequest/downloadandinstall%28%29.md): Downloads and installs assets not already on the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](../foundation/progressreporting.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset and resource management

- [SpeechModels](speechmodels.md): Namespace for methods related to model management.
