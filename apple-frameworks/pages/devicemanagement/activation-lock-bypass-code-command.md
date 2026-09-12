> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/activation-lock-bypass-code-command](https://developer.apple.com/documentation/devicemanagement/activation-lock-bypass-code-command)

# Activation Lock Bypass Code

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 7.1+ · macOS 10.15+ · visionOS 2.0+

Get the code to bypass Activation Lock on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `ActivationLockBypassCodeCommand`

The request object the server returns for the Activation Lock Bypass Code Command.

## Response Codes

- `200` OK — `ActivationLockBypassCodeResponse`: The response object the system returns for the Activation Lock Bypass Code Command.

## Mentioned In

- [Creating and using bypass codes](creating-and-using-bypass-codes.md)

<a id="Discussion"></a>

## Discussion

This command allows organizations to retrieve the device’s bypass code. Organizations can use the bypass code to remove the Activation Lock from supervised devices prior to device activation without knowing the user’s personal Apple Account and password.

Supervised devices generate a device-specific Activation Lock bypass code. The activation server verifies this code to bypass Activation Lock on the device. For more information, see [Creating and using bypass codes](creating-and-using-bypass-codes.md).

A device creates a new bypass code when:

- Setting up the device the first time.
- Erasing and not restoring the device from a backup.
- Erasing and restoring the device from a backup from a different device.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, visionOS |
| User channel | N/A |
| Requires supervision | iOS, macOS, visionOS |
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
        <string>ActivationLockBypassCode</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_ActivationLockBypassCode</string>
</dict>
</plist>
```

**Response**

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>ActivationLockBypassCode</key>
    <string>A8QK7-GFG21-6RHT-V0U9-756P-L7E3</string>
    <key>CommandUUID</key>
    <string>0001_ActivationLockBypassCode</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [ActivationLockBypassCodeCommand](activationlockbypasscodecommand.md): The command to get the code to bypass Activation Lock on a device.
- [ActivationLockBypassCodeResponse](activationlockbypasscoderesponse.md): A response from the device after it processes the command to get the code to bypass Activation Lock on a device.

## See Also

### Security

- [Security Info](security-info-command.md): Get security-related information about a device.
- [Certificate List](certificate-list-command.md): Get a list of installed certificates on a device.
- [Clear Activation Lock Bypass Code](clear-activation-lock-bypass-code-command.md): Clear the Activation Lock bypass code on a device.
- [Rotate FileVault Key](rotate-filevault-key-command.md): Change the FileVault primary password on a device.
