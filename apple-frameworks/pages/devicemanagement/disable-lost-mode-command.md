> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/disable-lost-mode-command](https://developer.apple.com/documentation/devicemanagement/disable-lost-mode-command)

# Disable Lost Mode

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

Take the device out of Lost Mode.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `DisableLostModeCommand`

The request object the server returns for the Disable Lost Mode Command.

## Response Codes

- `200` OK — `DisableLostModeResponse`: The response object the system returns for the Disable Lost Mode Command.

<a id="Discussion"></a>

## Discussion

A device responds with error codes:

- `12067`: If it isn’t in Lost Mode.
- `12069`: If the request to disable Lost Mode failed.
- `12078`: If the command is invalid while in Lost Mode.

Erasing a device also disables Lost Mode. To reenable Lost Mode, the MDM server needs to store the device’s Lost Mode state before erasing it, and restore that state if the device enrolls again.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad |
| User channel | N/A |
| Requires supervision | iOS |
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
        <string>DisableLostMode</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_DisableLostMode</string>
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
    <string>0001_DisableLostMode</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [DisableLostModeCommand](disablelostmodecommand.md): The command to take the device out of Lost Mode.
- [DisableLostModeResponse](disablelostmoderesponse.md): A response from the device after it processes the command to take the device out of Lost Mode.

## See Also

### Lost device

- [Enable Lost Mode](enable-lost-mode-command.md): Enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.
- [Device Location](device-location-command.md): Request the location of a device when in Lost Mode.
- [Play Lost Mode Sound](play-lost-mode-sound-command.md): Play the Lost Mode sound on a device that’s in Lost Mode.
