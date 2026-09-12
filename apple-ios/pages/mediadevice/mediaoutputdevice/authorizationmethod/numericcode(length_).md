> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/authorizationmethod/numericcode(length:)](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/authorizationmethod/numericcode(length:))

# numericCode(length:)

**Framework:** Media Device  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a numeric PIN entry authorization method.

## Declaration

```swift
static func numericCode(length: MediaOutputDevice.AuthorizationMethod.CodeLength) -> MediaOutputDevice.AuthorizationMethod
```

## Parameters

- `length`: The number of digit fields presented in the pairing UI.

## Mentioned In

- [Creating a media device extension](../../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

The system presents a UI with individual digit fields for the user to enter a numeric code when connecting to the device.

```swift
// Present a 4-digit PIN entry UI
let auth = AuthorizationMethod.numericCode(length: .fourCharacter)
```
