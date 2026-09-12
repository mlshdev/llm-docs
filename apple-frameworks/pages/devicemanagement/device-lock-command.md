> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/device-lock-command](https://developer.apple.com/documentation/devicemanagement/device-lock-command)

# Device Lock

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 2.0+ · watchOS 10.0+

Remotely and immediately lock a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `DeviceLockCommand`

The request object the server returns for the Device Lock Command.

## Response Codes

- `200` OK — `DeviceLockResponse`: The response object the system returns for the Device Lock Command.

<a id="Discussion"></a>

## Discussion

You can display a message and phone number on the Lock Screen if the user has set a passcode for the device, it isn’t a Shared iPad, and it isn’t in Lost Mode. In macOS, this command uses the Find My framework to lock a device, and fails if there’s no recovery partition on the device.

> **Warning**

>  Sending this command to a Mac with Apple silicon running a version of macOS before 11.5 deactivates the Mac. To reactivate that Mac, it needs a network connection and authentication by a local administrator with Secure Token enabled.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, visionOS, watchOS |
| User channel | N/A |
| Requires supervision | macOS |
| Allowed in user enrollment | iOS, visionOS |
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
        <key>Message</key>
        <string>Lock Message</string>
        <key>PhoneNumber</key>
        <string>408-555-5555</string>
        <key>RequestType</key>
        <string>DeviceLock</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_DeviceLock</string>
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
    <string>0001_DeviceLock</string>
    <key>MessageResult</key>
    <string>Success</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [DeviceLockCommand](devicelockcommand.md): The command to remotely and immediately lock a device.
- [DeviceLockResponse](devicelockresponse.md): A response from the device after it processes the command to remotely and immediately lock a device.

## See Also

### Device state

- [Erase Device](erase-device-command.md): Remotely and immediately erase a device.
- [Restart Device](restart-device-command.md): Remotely and immediately restart a device.
- [Shut Down Device](shut-down-device-command.md): Remotely and immediately shut down a device.
