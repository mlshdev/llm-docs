> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/removed-commands-and-profiles](https://developer.apple.com/documentation/devicemanagement/removed-commands-and-profiles)

# Removed commands and profiles

**Interface language:** Data

**Framework:** Device Management  
**Kind:** API Collection

Commands and configuration profiles that have been removed and are no longer supported.

## Topics

### Commands

- [Available OS Updates](available-os-updates-command.md): Deprecated. Get a list of available operating-system updates for a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
- [OS Update Status](os-update-status-command.md): Deprecated. Get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.
- [Schedule OS Update](schedule-os-update-command.md): Deprecated. Schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
- [Schedule OS Update Scan](schedule-os-update-scan-command.md): Deprecated. Schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

### Profiles

- [SoftwareUpdate](softwareupdate.md): Deprecated. The payload that configures the software update policy. Removed: use the declarative management `com.apple.configuration.softwareupdate.settings` configuration.
