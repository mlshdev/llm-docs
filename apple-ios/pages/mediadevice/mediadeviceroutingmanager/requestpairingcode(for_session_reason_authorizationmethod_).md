> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager/requestpairingcode(for:session:reason:authorizationmethod:)](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/requestpairingcode(for:session:reason:authorizationmethod:))

# requestPairingCode(for:session:reason:authorizationMethod:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Presents a pairing user interface so the user can enter authorization credentials for a device.

## Declaration

```swift
@MainActor final func requestPairingCode(for device: MediaOutputDevice, session: MediaOutputSession, reason: LocalizedStringResource, authorizationMethod: MediaOutputDevice.AuthorizationMethod)
```

## Parameters

- `device`: The device needing authorization.
- `session`: The session associated with the pairing request.
- `reason`: The reason why the user is being asked to input authorization.
- `authorizationMethod`: The type of authorization user interface to present to the user.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Call this function when the session requires user input for pairing.
