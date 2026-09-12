> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice](https://developer.apple.com/documentation/nowplaying/mediadevice)

# MediaDevice

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A device that plays media in a remote session.

## Declaration

```swift
struct MediaDevice
```

## Mentioned In

- [Publishing remote media sessions](publishing-remote-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type to represent playback devices in your remote sessions.

The system displays device information including the name, type, and volume level in the Now Playing interface.

For more information, see [Publishing remote media sessions](publishing-remote-media-sessions.md)

## Topics

### Structures

- [MediaDevice.Capability](mediadevice/capability.md): The control capabilities of a device.

### Initializers

- [init(id:name:type:capabilities:)](mediadevice/init%28id_name_type_capabilities_%29.md): Creates a media device with the specified identifier, name, type, and capabilities.

### Instance Properties

- [capabilities](mediadevice/capabilities.md): The control capabilities this device supports.
- [id](mediadevice/id.md): The unique identifier for this device.
- [name](mediadevice/name.md): The human-readable name of the device.
- [type](mediadevice/type.md): The type of device.

### Enumerations

- [MediaDevice.DeviceType](mediadevice/devicetype.md): The type of device that plays media.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Remote sessions

- [Publishing remote media sessions](publishing-remote-media-sessions.md): Show media from an external device on the Lock Screen and Control Center.
- [RemoteMediaSessionRepresentable](remotemediasessionrepresentable.md): A session that plays remotely, potentially across multiple devices.
- [RemoteMediaSession](remotemediasession.md): A session that manages remote media playback across devices.
- [RemoteMediaSessionExtension](remotemediasessionextension.md): An app extension that provides remote media sessions.
- [RemoteMediaSessionExtensionConfiguration](remotemediasessionextensionconfiguration.md): The configuration object for a remote playback extension.
- [RemoteMediaSessionAttributes](remotemediasessionattributes.md): A type that represents attributes for remote sessions.
- [RemoteMediaSessionError](remotemediasessionerror.md): Errors that can occur during remote session operations.
