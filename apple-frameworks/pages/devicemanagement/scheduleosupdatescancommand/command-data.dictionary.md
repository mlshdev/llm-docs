> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scheduleosupdatescancommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/scheduleosupdatescancommand/command-data.dictionary)

# ScheduleOSUpdateScanCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+ (deprecated in 26.0)

The command to schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object ScheduleOSUpdateScanCommand.Command
```

## Properties

- `Force` — `boolean`: ~~If `true`, force a scan to start immediately. Otherwise, the scan starts at a system-determined time.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+  
  **Default:** `false`
- `RequestRequiresNetworkTether` — `boolean`: ~~If `true`, the device needs to be network-tethered to run the command.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+  
  **Default:** `false`
- `RequestType` — `string` (required): ~~The request type for this command.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+  
  **Allowed values:** `ScheduleOSUpdateScan`
