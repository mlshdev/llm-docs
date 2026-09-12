> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settings-command](https://developer.apple.com/documentation/devicemanagement/settings-command)

# Settings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

Configure settings on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `SettingsCommand`

The request object the server returns for the Settings Command.

## Response Codes

- `200` OK — `SettingsResponse`: The response object the system returns for the Settings Command.

## Mentioned In

- [Returning a managed device to service](returning-a-managed-device-to-service.md)

<a id="Discussion"></a>

## Discussion

Users may be able to change the settings later if a profile isn’t set to restrict such changes.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | macOS, Shared iPad |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |
| Required access right | AllowSettings |

<a id="Example-request-and-response-DeviceName"></a>

### Example request and response (DeviceName)

**Request**

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Command</key>
    <dict>
        <key>RequestType</key>
        <string>Settings</string>
        <key>Settings</key>
        <array>
            <dict>
                <key>DeviceName</key>
                <string>NewName</string>
                <key>Item</key>
                <string>DeviceName</string>
            </dict>
        </array>
    </dict>
    <key>CommandUUID</key>
    <string>0001_Settings</string>
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
    <string>0001_Settings</string>
    <key>Settings</key>
    <array>
        <dict>
            <key>Item</key>
            <string>DeviceName</string>
            <key>Status</key>
            <string>Acknowledged</string>
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

- [SettingsCommand](settingscommand.md): The command to configure settings on a device.
- [SettingsResponse](settingsresponse.md): A response from the device after it processes the command to configure settings on a device.

## See Also

### Managed settings

- [Disable Remote Desktop](disable-remote-desktop-command.md): Disable Remote Desktop on a device.
- [Enable Remote Desktop](enable-remote-desktop-command.md): Enable Remote Desktop on a device.
