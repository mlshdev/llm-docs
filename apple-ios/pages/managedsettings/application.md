> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/application](https://developer.apple.com/documentation/managedsettings/application)

# Application

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A representation of an application on the user’s device.

## Declaration

```swift
struct Application
```

<a id="overview"></a>

## Overview

Managed Settings represents apps with tokens to preserve user privacy and control.

## Topics

### Creating an application

- [init(bundleIdentifier:)](application/init%28bundleidentifier_%29.md): Creates an object that represents the app with the specified bundle identifier.
- [init(token:)](application/init%28token_%29.md): Creates an object that represents the app with the specified token.

### Accessing application information

- [bundleIdentifier](application/bundleidentifier.md): The unique string that identifies this app.
- [token](application/token.md): An opaque representation of a specific web domain.
- [localizedDisplayName](application/localizeddisplayname.md): A localized display name for the application.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Apps

- [ApplicationToken](applicationtoken.md): A representation of an application.
