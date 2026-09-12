> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/homescreenlayout/iconitem](https://developer.apple.com/documentation/devicemanagement/homescreenlayout/iconitem)

# HomeScreenLayout.IconItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · tvOS 11.0+

An array of dictionaries that conform to the icon dictionary format.

## Declaration

```
object HomeScreenLayout.IconItem
```

## Properties

- `BundleID` — `string`: The bundle identifier of the app. The device requires this setting if the type is `Application`.
- `DisplayName` — `string`: The human-readable string shown to the user. This setting is valid only if the type is `Folder`.
- `Pages` — `[[HomeScreenLayout.IconItem]]`: An array of arrays of dictionaries, each conforming to the icon dictionary format. This setting is valid only if the type is `Folder`.
- `Type` — `string` (required): The type of the Dock item.
  **Allowed values:** `Application`, `Folder`, `WebClip`
- `URL` — `string`: The URL of the existing web clip for this item. The device requires this setting if `type` is `WebClip`. If more than one web clip exists with the same URL, the behavior is undefined.

  Specifying a web clip in this payload doesn’t create the web clip. Use the [WebClip](../webclip.md) payload to create a web clip.

  Available: iOS 11.3+ | iPadOS 11.3+ | tvOS 11+
