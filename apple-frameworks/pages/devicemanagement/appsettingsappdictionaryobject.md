> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/appsettingsappdictionaryobject](https://developer.apple.com/documentation/devicemanagement/appsettingsappdictionaryobject)

# AppSettingsAppDictionaryObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The dictionary that defines the app privacy permission defaults. Each key is an app identifier.

## Declaration

```
object AppSettingsAppDictionaryObject
```

## Properties

- `Accessibility` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for use of accessibility.
  - `Allow`: The app privacy permission default is set to allow use of accessibility.

  Available: macOS 27+  
  **Allowed values:** `None`, `Allow`
- `Bluetooth` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for use of Bluetooth.
  - `Allow`: The app privacy permission default is set to allow use of Bluetooth.  
  **Allowed values:** `None`, `Allow`
- `Camera` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for use of the camera.
  - `Allow`: The app privacy permission default is set to allow use of the camera.  
  **Allowed values:** `None`, `Allow`
- `Dictation` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for use of dictation.
  - `Allow`: The app privacy permission default is set to allow use of dictation.  
  **Allowed values:** `None`, `Allow`
- `LocalNetwork` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for use of the local network.
  - `Allow`: The app privacy permission default is set to allow use of the local network.  
  **Allowed values:** `None`, `Allow`
- `Location` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for access to location.
  - `WhileUsing`: The app privacy permission default is set to allow access to location only while the user is using the app In macOS, this is equivalent to `Always`.
  - `Always`: The app privacy permission default is set to allow access to location always.  
  **Allowed values:** `None`, `WhileUsing`, `Always`
- `LocationAccuracy` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for access to precise location.
  - `Approximate`: The app privacy permission default is set to allow approximate access to location.
  - `Precise`: The app privacy permission default is set to allow precise access to location.

  Available: iOS 27+ | iPadOS 27+  
  **Allowed values:** `None`, `Approximate`, `Precise`
- `Microphone` — `string`: Controls whether an app privacy permission default is set.

  - `None`: No app privacy permission default is set for use of the microphone.
  - `Allow`: The app privacy permission default is set to allow use of the microphone.  
  **Allowed values:** `None`, `Allow`
- `OrganizationJustification` — `string` (required): Text you provide that clearly explains to the user the reason why the organization requires these app permission defaults. The device includes this text in the permission consent prompt it displays when it launches the app.
