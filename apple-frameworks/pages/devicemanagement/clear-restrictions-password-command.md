> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clear-restrictions-password-command](https://developer.apple.com/documentation/devicemanagement/clear-restrictions-password-command)

# Clear Restrictions Password

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

Clear the Screen Time password and the restrictions on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `ClearRestrictionsPasswordCommand`

The request object the server returns for the Clear Restrictions Password Command.

## Response Codes

- `200` OK — `ClearRestrictionsPasswordResponse`: The response object the system returns for the Clear Restrictions Password Command.

<a id="Discussion"></a>

## Discussion

In iOS 11 and earlier, this command clears the restrictions password and all restrictions that the password protects.

In iOS 12.2 and later, if Screen Time uses iCloud to share its settings (Share Across Devices), this command disables Screen Time entirely and clears its restrictions. If the user is a child in an iCloud family, the command fails. Otherwise, if Screen Time isn’t using iCloud, this command clears the passcode, but not the restrictions, and it leaves Screen Time enabled.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS |
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
        <string>ClearRestrictionsPassword</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_ClearRestrictionsPassword</string>
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
    <string>0001_ClearRestrictionsPassword</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [ClearRestrictionsPasswordCommand](clearrestrictionspasswordcommand.md): The command to clear the Screen Time password and the restrictions on a device.
- [ClearRestrictionsPasswordResponse](clearrestrictionspasswordresponse.md): A response from the device after it processes the command to clear the Screen Time password and the restrictions on a device.

## See Also

### Passwords

- [Clear Passcode](clear-passcode-command.md): Remove the passcode from a device.
- [Unlock User Account](unlock-user-account-command.md): Unlock a user account that the system locked because of too many failed password attempts.
- [Set Auto Admin Password](set-auto-admin-password-command.md): Update the local administrator account password.
- [Set Firmware Password](set-firmware-password-command.md): Change or clear the firmware password on a device.
- [Verify Firmware Password](verify-firmware-password-command.md): Verify the firmware password on a device.
