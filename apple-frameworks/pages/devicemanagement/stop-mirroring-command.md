> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/stop-mirroring-command](https://developer.apple.com/documentation/devicemanagement/stop-mirroring-command)

# Stop Mirroring

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.10+

Stop mirroring the display to another device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `StopMirroringCommand`

The request object the server returns for the Stop Mirroring Command.

## Response Codes

- `200` OK — `StopMirroringResponse`: The response object the system returns for the Stop Mirroring Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad |
| User channel | N/A |
| Requires supervision | iOS, macOS |
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
        <string>StopMirroring</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_StopMirroring</string>
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
    <string>0001_StopMirroring</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [StopMirroringCommand](stopmirroringcommand.md): The command to stop mirroring the display to another device.
- [StopMirroringResponse](stopmirroringresponse.md): A response from the device after it processes the command to stop mirroring the display to another device.

## See Also

### AirPlay mirroring

- [Request Mirroring](request-mirroring-command.md): Prompt the user to share their screen using AirPlay Mirroring.
