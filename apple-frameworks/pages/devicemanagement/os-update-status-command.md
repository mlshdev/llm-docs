> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/os-update-status-command](https://developer.apple.com/documentation/devicemanagement/os-update-status-command)

# OS Update Status

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11.5+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

Get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.

> **Removed** Use the declarative management software update features instead.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `OSUpdateStatusCommand`

The request object the server returns for the OS Update Status Command.

## Response Codes

- `200` OK — `OSUpdateStatusResponse`: The response object the system returns for the OS Update Status Command.

<a id="Discussion"></a>

## Discussion

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
        <string>OSUpdateStatus</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_OSUpdateStatus</string>
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
    <string>0001_OSUpdateStatus</string>
    <key>OSUpdateStatus</key>
    <array>
        <dict>
            <key>DownloadPercentComplete</key>
            <real>0.5030184984207153</real>
            <key>IsDownloaded</key>
            <false/>
            <key>ProductKey</key>
            <string>iOSUpdate17A576</string>
            <key>Status</key>
            <string>Downloading</string>
        </dict>
    </array>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [OSUpdateStatusCommand](osupdatestatuscommand.md): Deprecated. The command to get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.
- [OSUpdateStatusResponse](osupdatestatusresponse.md): Deprecated. A response from the device after it processes the command to get the status of operating-system updates on a device. Removed: subscribe to the declarative management `softwareupdate.install-state` status item.

## See Also

### Commands

- [Available OS Updates](available-os-updates-command.md): Deprecated. Get a list of available operating-system updates for a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
- [Schedule OS Update](schedule-os-update-command.md): Deprecated. Schedule an update of the operating system on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
- [Schedule OS Update Scan](schedule-os-update-scan-command.md): Deprecated. Schedule a background scan for operating-system updates on a device. Removed: use the declarative management `com.apple.configuration.softwareupdate.enforcement.specific` configuration.
