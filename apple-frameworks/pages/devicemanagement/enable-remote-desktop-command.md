> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/enable-remote-desktop-command](https://developer.apple.com/documentation/devicemanagement/enable-remote-desktop-command)

# Enable Remote Desktop

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** macOS 10.14.4+

Enable Remote Desktop on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `EnableRemoteDesktopCommand`

The request object the server returns for the Enable Remote Desktop Command.

## Response Codes

- `200` OK — `EnableRemoteDesktopResponse`: The response object the system returns for the Enable Remote Desktop Command.

<a id="Discussion"></a>

## Discussion

This command enables the following capabilities on the device:

- Remote Desktop with the All Users access
- The ability to receive remote events
- The Observe, Control, and Show being Observed options

All other options remain unchanged.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
| Requires supervision | macOS |
| Allowed in user enrollment | N/A |
| Required access right | N/A |

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
        <string>EnableRemoteDesktop</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_EnableRemoteDesktop</string>
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
    <string>0001_EnableRemoteDesktop</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>E84CD517-CB37-52F7-988C-DB5137B604B8</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [EnableRemoteDesktopCommand](enableremotedesktopcommand.md): The command to enable Remote Desktop on a device.
- [EnableRemoteDesktopResponse](enableremotedesktopresponse.md): A response from the device after it processes the command to enable Remote Desktop on a device.

## See Also

### Managed settings

- [Disable Remote Desktop](disable-remote-desktop-command.md): Disable Remote Desktop on a device.
- [Settings](settings-command.md): Configure settings on a device.
