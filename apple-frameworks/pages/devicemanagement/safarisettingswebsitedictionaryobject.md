> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/safarisettingswebsitedictionaryobject](https://developer.apple.com/documentation/devicemanagement/safarisettingswebsitedictionaryobject)

# SafariSettingsWebsiteDictionaryObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The dictionary that defines the website privacy permission defaults. Each key represents a website.

## Declaration

```
object SafariSettingsWebsiteDictionaryObject
```

## Properties

- `Camera` — `string`: Controls whether a website privacy permission default is set.

  - `None`: Safari sets no website privacy permission default for use of the camera.
  - `Allow`: Safari sets the website privacy permission default to allow use of the camera.  
  **Allowed values:** `None`, `Allow`
- `Microphone` — `string`: Controls whether a website privacy permission default is set.

  - `None`: Safari sets no website privacy permission default for use of the microphone.
  - `Allow`: Safari sets the website privacy permission default to allow use of the microphone.  
  **Allowed values:** `None`, `Allow`
- `OrganizationJustification` — `string` (required): Text that clearly explains to the Safari user the reason why the organization requires these website privacy permission defaults. Safari includes this text in the permission consent prompt it displays when it first displays the website.
