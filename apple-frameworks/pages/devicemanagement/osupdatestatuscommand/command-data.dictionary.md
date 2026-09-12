> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/osupdatestatuscommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/osupdatestatuscommand/command-data.dictionary)

# OSUpdateStatusCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11.5+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

The command to get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object OSUpdateStatusCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: ~~If `true`, the device needs to be network-tethered to run the command.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `RequestType` — `string` (required): ~~The request type for this command.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Allowed values:** `OSUpdateStatus`
