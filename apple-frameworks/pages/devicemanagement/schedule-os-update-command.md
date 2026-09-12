> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/schedule-os-update-command](https://developer.apple.com/documentation/devicemanagement/schedule-os-update-command)

# Schedule OS Update

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

Schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

> **Removed** Use the declarative management software update features instead.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `ScheduleOSUpdateCommand`

The request object the server returns for the Schedule OS Update Command.

## Response Codes

- `200` OK — `ScheduleOSUpdateResponse`: The response object the system returns for the Schedule OS Update Command.

<a id="Discussion"></a>

## Discussion

Only supervised iOS, macOS, and tvOS devices are eligible for software update management.

This command can only schedule operating-system updates in iOS and tvOS, however, it can also schedule a variety of system software updates in macOS.

Downloading and installing updates in iOS and tvOS is a two-step process. Send a `ScheduleOSUpdate` command with `Default` for `InstallAction` to download the updates. Then send another `ScheduleOSUpdate` command with a `Default` `InstallAction` to install the updates. Software updates may require a restart, which prevents the device from responding. When this happens, the MDM server resends the `ScheduleOSUpdate` command when the device checks in again, however, the device won’t return a value for `UpdateResults`.

This command uses the [ScheduleOSUpdateCommand.Command.UpdatesItem](scheduleosupdatecommand/command-data.dictionary/updatesitem.md) `InstallAction` values to offer varying degrees of control to the user of a device. The user can control the update with the `NotifyOnly` and `DownloadOnly` actions, which don’t initiate the update process at all. The `InstallASAP` and `InstallForceRestart` actions attempt to install the update as soon as possible. On iOS devices with a passcode, the user must authorize the update by entering their passcode, allowing them to defer the update a limited number of times. After the user reaches that limit, the system prompts to update every time the device returns to the Home Screen. This makes the device virtually unusable until the user approves the software update. On macOS devices, the `InstallLater` action provides a similar behavior, which specifies how many times the user may defer the update before it’s forced.

A device may return a different `InstallAction` than requested.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS |
| User channel | N/A |
| Requires supervision | iOS, macOS, tvOS |
| Allowed in user enrollment | N/A |
| Required access right | AllowAppInstallation |

<a id="Example-request-and-response"></a>

### Example request and response

**Request**

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Command</key>
    <dict>
        <key>RequestType</key>
        <string>ScheduleOSUpdate</string>
        <key>Updates</key>
        <array>
            <dict>
                <key>InstallAction</key>
                <string>DownloadOnly</string>
                <key>ProductKey</key>
                <string>iOSUpdate17A576</string>
                <key>ProductVersion</key>
                <string>13.0</string>
            </dict>
        </array>
    </dict>
    <key>CommandUUID</key>
    <string>0001_ScheduleOSUpdate</string>
</dict>
</plist>
```

**Response**

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CommandUUID</key>
    <string>0001_ScheduleOSUpdate</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
    <key>UpdateResults</key>
    <array>
        <dict>
            <key>InstallAction</key>
            <string>DownloadOnly</string>
            <key>ProductKey</key>
            <string>iOSUpdate17A576</string>
            <key>Status</key>
            <string>Downloading</string>
        </dict>
    </array>
</dict>
</plist>
```

## Topics

### Commands and responses

- [ScheduleOSUpdateCommand](scheduleosupdatecommand.md): Deprecated. The command to schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
- [ScheduleOSUpdateResponse](scheduleosupdateresponse.md): Deprecated. A response from the device after it processes the command to schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.

## See Also

### Commands

- [Available OS Updates](available-os-updates-command.md): Deprecated. Get a list of available operating-system updates for a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
- [OS Update Status](os-update-status-command.md): Deprecated. Get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.
- [Schedule OS Update Scan](schedule-os-update-scan-command.md): Deprecated. Schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
