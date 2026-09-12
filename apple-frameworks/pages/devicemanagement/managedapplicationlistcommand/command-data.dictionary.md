> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationlistcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/managedapplicationlistcommand/command-data.dictionary)

# ManagedApplicationListCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to get the status of all managed apps on a device.

## Declaration

```
object ManagedApplicationListCommand.Command
```

## Properties

- `Identifiers` — `[string]`: The bundle identifiers of the managed apps to include in the response.

  > **Important**

  >  For a watchOS app, the identifier needs to be the watch’s bundle identifier, which differs from the main bundle identifier for the iPhone the watch pairs with. Obtain the watch’s bundle identifier for an app with a watch bundle, in the `watchBundleId` key that’s part of the Content Metadata query. For more information on this query, see [Getting app and book information (Legacy)](../getting-app-and-book-information-legacy.md).

  Available: iOS 7+ | iPadOS 7+ | macOS 11+ | tvOS 10.2+ | visionOS 1.1+ | watchOS 10+
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ManagedApplicationList`
