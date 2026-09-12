> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/verify-recovery-lock-command](https://developer.apple.com/documentation/devicemanagement/verify-recovery-lock-command)

# Verify Recovery Lock

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** macOS 11.5+

Verify the device’s Recovery Lock password.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `VerifyRecoveryLockCommand`

The request object the server returns for the Verify Recovery Lock Command.

## Response Codes

- `200` OK — `VerifyRecoveryLockResponse`: The response object the system returns for the Verify Recovery Lock Command.

<a id="Discussion"></a>

## Discussion

This command is only available on a Mac with Apple silicon.

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
        <string>VerifyRecoveryLock</string>
        <key>Password</key>
        <string>Apple</string>
    </dict>
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
    <string>0001_VerifyRecoveryLock</string>
    <key>PasswordVerified</key>
    <true/>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>1AC99473-AE6F-5E59-BE5C-410D257D481E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [VerifyRecoveryLockCommand](verifyrecoverylockcommand.md): The command to verify the device’s Recovery Lock password.
- [VerifyRecoveryLockResponse](verifyrecoverylockresponse.md): A response from the device after it processes the command to verify the device’s Recovery Lock password.

## See Also

### Recovery Lock

- [Set Recovery Lock](set-recovery-lock-command.md): Set or clear the Recovery Lock password.
