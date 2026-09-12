> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/verify-firmware-password-command](https://developer.apple.com/documentation/devicemanagement/verify-firmware-password-command)

# Verify Firmware Password

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** macOS 10.13+

Verify the firmware password on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `VerifyFirmwarePasswordCommand`

The request object the server returns for the Verify Firmware Password Command.

## Response Codes

- `200` OK — `VerifyFirmwarePasswordResponse`: The response object the system returns for the Verify Firmware Password Command.

<a id="Discussion"></a>

## Discussion

This command has a throttle interval to prevent executing it more frequently than every 30 seconds. Requests that occur within the throttle interval return an error.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

This command isn’t supported on a Mac with Apple silicon.

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
        <key>Password</key>
        <string>password</string>
        <key>RequestType</key>
        <string>VerifyFirmwarePassword</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_VerifyFirmwarePassword</string>
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
    <string>0001_VerifyFirmwarePassword</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>E84CD517-CB37-52F7-988C-DB5137B604B8</string>
    <key>VerifyFirmwarePassword</key>
    <dict>
        <key>PasswordVerified</key>
        <true/>
    </dict>
</dict>
</plist>
```

## Topics

### Commands and responses

- [VerifyFirmwarePasswordCommand](verifyfirmwarepasswordcommand.md): The command to verify the firmware password on a device.
- [VerifyFirmwarePasswordResponse](verifyfirmwarepasswordresponse.md): A response from the device after it processes the command to verify the firmware password on a device.

## See Also

### Passwords

- [Clear Passcode](clear-passcode-command.md): Remove the passcode from a device.
- [Clear Restrictions Password](clear-restrictions-password-command.md): Clear the Screen Time password and the restrictions on a device.
- [Unlock User Account](unlock-user-account-command.md): Unlock a user account that the system locked because of too many failed password attempts.
- [Set Auto Admin Password](set-auto-admin-password-command.md): Update the local administrator account password.
- [Set Firmware Password](set-firmware-password-command.md): Change or clear the firmware password on a device.
