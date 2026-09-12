> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restart-device-command](https://developer.apple.com/documentation/devicemanagement/restart-device-command)

# Restart Device

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · macOS 10.13+ · tvOS 10.2+

Remotely and immediately restart a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `RestartDeviceCommand`

The request object the server returns for the Restart Device Command.

## Response Codes

- `200` OK — `RestartDeviceResponse`: The response object the system returns for the Restart Device Command.

<a id="Discussion"></a>

## Discussion

A passcode-locked iOS device doesn’t rejoin a Wi-Fi network after restarting, so it may not be able to communicate with the server.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS |
| User channel | N/A |
| Requires supervision | iOS, macOS, tvOS |
| Allowed in user enrollment | N/A |
| Required access right | AllowPasscodeRemovalAndLock |

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
        <string>RestartDevice</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_RestartDevice</string>
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
    <string>0001_RestartDevice</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [RestartDeviceCommand](restartdevicecommand.md): The command to remotely and immediately restart a device.
- [RestartDeviceResponse](restartdeviceresponse.md): A response from the device after it processes the command to remotely and immediately restart a device.

## See Also

### Device state

- [Erase Device](erase-device-command.md): Remotely and immediately erase a device.
- [Device Lock](device-lock-command.md): Remotely and immediately lock a device.
- [Shut Down Device](shut-down-device-command.md): Remotely and immediately shut down a device.
