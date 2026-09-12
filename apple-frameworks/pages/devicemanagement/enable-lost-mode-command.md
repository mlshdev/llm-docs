> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/enable-lost-mode-command](https://developer.apple.com/documentation/devicemanagement/enable-lost-mode-command)

# Enable Lost Mode

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

Enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `EnableLostModeCommand`

The request object the server returns for the Enable Lost Mode Command.

## Response Codes

- `200` OK — `EnableLostModeResponse`: The response object the system returns for the Enable Lost Mode Command.

<a id="Discussion"></a>

## Discussion

While in Lost Mode, a device responds to invalid commands with error code `12078`.

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
        <key>Footnote</key>
        <string>Return to Acme, Inc.</string>
        <key>Message</key>
        <string>Lock Message</string>
        <key>PhoneNumber</key>
        <string>408-555-555</string>
        <key>RequestType</key>
        <string>EnableLostMode</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_EnableLostMode</string>
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
    <string>0001_EnableLostMode</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [EnableLostModeCommand](enablelostmodecommand.md): The command to enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.
- [EnableLostModeResponse](enablelostmoderesponse.md): A response from the device after it processes the command to enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.

## See Also

### Lost device

- [Device Location](device-location-command.md): Request the location of a device when in Lost Mode.
- [Play Lost Mode Sound](play-lost-mode-sound-command.md): Play the Lost Mode sound on a device that’s in Lost Mode.
- [Disable Lost Mode](disable-lost-mode-command.md): Take the device out of Lost Mode.
