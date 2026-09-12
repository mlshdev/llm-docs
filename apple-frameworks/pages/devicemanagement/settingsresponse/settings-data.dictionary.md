> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingsresponse/settings-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingsresponse/settings-data.dictionary)

# SettingsResponse.Settings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that describes the results of configuring settings on a device.

## Declaration

```
object SettingsResponse.Settings
```

## Properties

- `ErrorChain` — `[SettingsResponse.Settings.ErrorChainItem]`: An array of dictionaries that describes any errors that occurred.
- `Identifier` — `string`: The app identifier to which this error applies.

  > **Note**

  >  For a watchOS app, the identifier is the watch’s bundle identifier, which differs from the main bundle identifier for the iPhone the watch pairs with.

  Available: iOS 7+ | iPadOS 7+ | tvOS 10.2+ | visionOS 1.1+ | watchOS 10+
- `Status` — `string` (required): The status of the setting, which is one of the following values:

  - `Acknowledged`: The device processed the command successfully.
  - `Error`: An error occurred. See the `ErrorChain` for more details.

## Topics

### Objects

- [SettingsResponse.Settings.ErrorChainItem](settings-data.dictionary/errorchainitem.md): A dictionary that describes an error chain item.

## See Also

### Objects

- [SettingsResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
