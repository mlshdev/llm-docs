> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/shut-down-device-command](https://developer.apple.com/documentation/devicemanagement/shut-down-device-command)

# Shut Down Device

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · macOS 10.13+

Remotely and immediately shut down a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `ShutDownDeviceCommand`

The request object the server returns for the Shut Down Device Command.

## Response Codes

- `200` OK — `ShutDownDeviceResponse`: The response object the system returns for the Shut Down Device Command.

<a id="Discussion"></a>

## Discussion

A passcode-locked iOS device doesn’t rejoin a Wi-Fi network after a user restarts it and before they unlock it for the first time, so it can’t communicate with the server if it needs Wi-Fi to do so.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad |
| User channel | N/A |
| Requires supervision | iOS, macOS |
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
        <string>ShutDownDevice</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_ShutDownDevice</string>
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
    <string>0001_ShutDownDevice</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [ShutDownDeviceCommand](shutdowndevicecommand.md): The command to remotely and immediately shut down a device.
- [ShutDownDeviceResponse](shutdowndeviceresponse.md): A response from the device after it processes the command to remotely and immediately shut down a device.

## See Also

### Device state

- [Erase Device](erase-device-command.md): Remotely and immediately erase a device.
- [Device Lock](device-lock-command.md): Remotely and immediately lock a device.
- [Restart Device](restart-device-command.md): Remotely and immediately restart a device.
