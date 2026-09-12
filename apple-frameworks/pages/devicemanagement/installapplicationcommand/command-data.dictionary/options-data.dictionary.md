> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/installapplicationcommand/command-data.dictionary/options-data.dictionary](https://developer.apple.com/documentation/devicemanagement/installapplicationcommand/command-data.dictionary/options-data.dictionary)

# InstallApplicationCommand.Command.Options

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains the app installation options.

## Declaration

```
object InstallApplicationCommand.Command.Options
```

## Properties

- `PurchaseMethod` — `integer`: The app’s purchase type, which must be one of the following values:

  - `0`: Free apps and Legacy Volume Purchase Program (VPP) with a redemption code. This option is only available in iOS.
  - `1`: Volume Purchase Program (VPP) app assignment.

  Set this value to `1` to install first-party apps without user login to the iTunes Store, such as Mail or Safari, or to install an iOS app with user enrollment.  
  **Default:** `0`  
  **Allowed values:** `0`, `1`

## See Also

### Objects

- [InstallApplicationCommand.Command.Attributes](attributes-data.dictionary.md): A dictionary that contains the initial attributes of the app.
- [InstallApplicationCommand.Command.Configuration](configuration-data.dictionary.md): A dictionary that contains the configuration to install an enterprise app.
