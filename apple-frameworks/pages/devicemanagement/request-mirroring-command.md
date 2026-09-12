> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/request-mirroring-command](https://developer.apple.com/documentation/devicemanagement/request-mirroring-command)

# Request Mirroring

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.10+

Prompt the user to share their screen using AirPlay Mirroring.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `RequestMirroringCommand`

The request object the server returns for the Request Mirroring Command.

## Response Codes

- `200` OK — `RequestMirroringResponse`: The response object the system returns for the Request Mirroring Command.

<a id="Discussion"></a>

## Discussion

Provide either the `DestinationName` or the `DestinationDeviceID`. If you provide both values, MDM uses `DestinationDeviceID`.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad |
| User channel | N/A |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, macOS |
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
        <key>DestinationName</key>
        <string>Apple TV</string>
        <key>Password</key>
        <string>password</string>
        <key>RequestType</key>
        <string>RequestMirroring</string>
        <key>ScanTime</key>
        <integer>30</integer>
    </dict>
    <key>CommandUUID</key>
    <string>0001_RequestMirroring</string>
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
    <string>0001_RequestMirroring</string>
    <key>MirroringResult</key>
    <string>Unknown</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [RequestMirroringCommand](requestmirroringcommand.md): The command to prompt the user to share their screen using AirPlay Mirroring.
- [RequestMirroringResponse](requestmirroringresponse.md): A response from the device after it processes the command to prompt the user to share their screen using AirPlay Mirroring.

## See Also

### AirPlay mirroring

- [Stop Mirroring](stop-mirroring-command.md): Stop mirroring the display to another device.
