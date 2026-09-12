> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/erase-device-command](https://developer.apple.com/documentation/devicemanagement/erase-device-command)

# Erase Device

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

Remotely and immediately erase a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `EraseDeviceCommand`

The request object the server returns for the Erase Device Command.

## Response Codes

- `200` OK — `EraseDeviceResponse`: The response object the system returns for the Erase Device Command.

## Mentioned In

- [Returning a managed device to service](returning-a-managed-device-to-service.md)

<a id="Discussion"></a>

## Discussion

This command allows the server to immediately erase a device, even a locked device, without warning the user. The device sends a response to the server, but it doesn’t retry if it isn’t successful the first time.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | N/A |
| Requires supervision | macOS |
| Allowed in user enrollment | N/A |
| Required access right | AllowDeviceErase |

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
        <key>DisallowProximitySetup</key>
        <false/>
        <key>PreserveDataPlan</key>
        <true/>
        <key>RequestType</key>
        <string>EraseDevice</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_EraseDevice</string>
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
    <string>0001_EraseDevice</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [EraseDeviceCommand](erasedevicecommand.md): The command to remotely and immediately erase a device.
- [EraseDeviceResponse](erasedeviceresponse.md): A response from the device after it processes the command to remotely and immediately erase a device.

## See Also

### Device state

- [Device Lock](device-lock-command.md): Remotely and immediately lock a device.
- [Restart Device](restart-device-command.md): Remotely and immediately restart a device.
- [Shut Down Device](shut-down-device-command.md): Remotely and immediately shut down a device.
