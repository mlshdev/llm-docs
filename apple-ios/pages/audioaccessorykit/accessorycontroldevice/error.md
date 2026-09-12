> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice/error](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/error)

# AccessoryControlDevice.Error

**Framework:** AudioAccessoryKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+

An error that occurs during audio accessory configuration operations.

## Declaration

```swift
enum Error
```

<a id="overview"></a>

## Overview

Use error cases to identify the cause of failures when registering devices or updating their state.

## Topics

### Error cases

- [AccessoryControlDevice.Error.accessoryNotCapable](error/accessorynotcapable.md): An error indicating the accessory doesn’t support the requested capability.
- [AccessoryControlDevice.Error.invalidRequest](error/invalidrequest.md): An error indicating an invalid request.
- [AccessoryControlDevice.Error.invalidated](error/invalidated.md): An error indicating a configuration that the system has invalidated.
- [AccessoryControlDevice.Error.unknown](error/unknown.md): An error indicating an unknown error.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
