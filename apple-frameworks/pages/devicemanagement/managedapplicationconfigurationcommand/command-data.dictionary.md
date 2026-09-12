> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationconfigurationcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/managedapplicationconfigurationcommand/command-data.dictionary)

# ManagedApplicationConfigurationCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to get app configurations from managed apps on a device.

## Declaration

```
object ManagedApplicationConfigurationCommand.Command
```

## Properties

- `Identifiers` — `[string]` (required): The bundle identifiers of the managed apps.

  > **Important**

  >  For a watchOS app, the identifier needs to be the watch’s bundle identifier, which differs from the main bundle identifier for the iPhone the watch pairs with. Obtain the watch’s bundle identifier for an app with a watch bundle, in the `watchBundleId` key that’s part of the Content Metadata query. For more information on this query, see [Getting app and book information (Legacy)](../getting-app-and-book-information-legacy.md).
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ManagedApplicationConfiguration`
