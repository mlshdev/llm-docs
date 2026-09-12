> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/connectusingpairingcode(_:to:session:)](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/connectusingpairingcode(_:to:session:))

# connectUsingPairingCode(\_:to:session:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called after the user has input their authorization into a user interface. Use the Security framework’s keychain to store any derived key material.

## Declaration

```swift
@MainActor func connectUsingPairingCode(_ pairingCode: String?, to device: MediaOutputDevice, session: MediaOutputSession)
```

## Parameters

- `pairingCode`: The PIN code or password entered by the user. May be `nil` if the user canceled the pairing process.
- `device`: The device that the pairing response is for.
- `session`: The session associated with the pairing request.

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)
