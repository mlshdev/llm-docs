> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/device-configured-command](https://developer.apple.com/documentation/devicemanagement/device-configured-command)

# Device Configured

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 10.2+ · visionOS 2.0+

Inform the device that it can allow the user to continue in Setup Assistant.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `DeviceConfiguredCommand`

The request object the server returns for the Device Configured Command.

## Response Codes

- `200` OK — `DeviceConfiguredResponse`: The response object the system returns for the Device Configured Command.

## Mentioned In

- [Implementing Platform SSO for unattended device enrollment](implementing-platform-sso-for-unattended-device-enrollment.md)
- [Migrating managed devices](migrating-managed-devices.md)
- [Returning a managed device to service](returning-a-managed-device-to-service.md)

<a id="Discussion"></a>

## Discussion

This command only works on Automated Device Enrollment (ADE) devices that have their cloud configuration set to await configuration.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS |
| User channel | N/A |
| Requires supervision | iOS, macOS, tvOS, visionOS |
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
        <string>DeviceConfigured</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_DeviceConfigured</string>
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
    <string>0001_DeviceConfigured</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [DeviceConfiguredCommand](deviceconfiguredcommand.md): The command to inform the device that it can allow the user to continue in Setup Assistant.
- [DeviceConfiguredResponse](deviceconfiguredresponse.md): A response from the device after it processes the command to inform the device that it can allow the user to continue in Setup Assistant.

## See Also

### Device details

- [Device Information](device-information-command.md): Get detailed information about a device.
- [User Configured](user-configured-command.md): Inform the device that it can continue past Setup Assistant and finish login.
- [Restrictions](restrictions-command.md): Get a list of restrictions on the device.
