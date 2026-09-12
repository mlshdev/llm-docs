> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/file](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/file)

# AccessoryNotification.File

**Framework:** Accessory Notifications  
**Kind:** Structure  
**Availability:** iOS 26.5+

A file associated with a notification.

## Declaration

```swift
struct File
```

<a id="overview"></a>

## Overview

The [AccessoryNotification](../accessorynotification.md) structure’s [attachments](attachments.md), [sourceIcon](sourceicon.md), and [contextIcon](contexticon.md) properties use this type.

## Topics

### Accessing file data

- [url](file/url.md): A URL that locates the file’s data.

### Determining the file type

- [type](file/type.md): A uniform type identifier for the file.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Accessing related media

- [attachments](attachments.md): An array of files sent with the notification.
- [sourceIcon](sourceicon.md): An icon that represents the app that sent the notification.
- [contextIcon](contexticon.md): A secondary icon that provides additional contextual information about the notification.
