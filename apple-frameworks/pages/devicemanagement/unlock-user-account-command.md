> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/unlock-user-account-command](https://developer.apple.com/documentation/devicemanagement/unlock-user-account-command)

# Unlock User Account

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** macOS 10.13+

Unlock a user account that the system locked because of too many failed password attempts.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `UnlockUserAccountCommand`

The request object the server returns for the Unlock User Account Command.

## Response Codes

- `200` OK — `UnlockUserAccountResponse`: The response object the system returns for the Unlock User Account Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
| Requires supervision | macOS |
| Allowed in user enrollment | N/A |
| Required access right | DeviceLockAndRemovePasscode |

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
        <string>UnlockUserAccount</string>
        <key>UserName</key>
        <string>graham</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_UnlockUserAccount</string>
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
    <string>0001_UnlockUserAccount</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>91FE0F6E-F91C-589A-95E6-02835CE7126D</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [UnlockUserAccountCommand](unlockuseraccountcommand.md): The command to unlock a user account that the system locked because of too many failed password attempts.
- [UnlockUserAccountResponse](unlockuseraccountresponse.md): A response from the device after it processes the command to unlock a user account that the system locked because of too many failed password attempts.

## See Also

### Passwords

- [Clear Passcode](clear-passcode-command.md): Remove the passcode from a device.
- [Clear Restrictions Password](clear-restrictions-password-command.md): Clear the Screen Time password and the restrictions on a device.
- [Set Auto Admin Password](set-auto-admin-password-command.md): Update the local administrator account password.
- [Set Firmware Password](set-firmware-password-command.md): Change or clear the firmware password on a device.
- [Verify Firmware Password](verify-firmware-password-command.md): Verify the firmware password on a device.
