> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clear-activation-lock-bypass-code-command](https://developer.apple.com/documentation/devicemanagement/clear-activation-lock-bypass-code-command)

# Clear Activation Lock Bypass Code

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 7.1+ · macOS 10.15+ · visionOS 2.0+

Clear the Activation Lock bypass code on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `ClearActivationLockBypassCodeCommand`

The request object the server returns for the Clear Activation Lock Bypass Code Command.

## Response Codes

- `200` OK — `ClearActivationLockBypassCodeResponse`: The response object the system returns for the Clear Activation Lock Bypass Code Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

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
        <string>ClearActivationLockBypassCode</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_ClearActivationLockBypassCode</string>
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
    <string>0001_ClearActivationLockBypassCode</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [ClearActivationLockBypassCodeCommand](clearactivationlockbypasscodecommand.md): The command to clear the Activation Lock bypass code on a device.
- [ClearActivationLockBypassCodeResponse](clearactivationlockbypasscoderesponse.md): A response from the device after it processes the command to clear the Activation Lock bypass code on a device.

## See Also

### Security

- [Security Info](security-info-command.md): Get security-related information about a device.
- [Certificate List](certificate-list-command.md): Get a list of installed certificates on a device.
- [Activation Lock Bypass Code](activation-lock-bypass-code-command.md): Get the code to bypass Activation Lock on a device.
- [Rotate FileVault Key](rotate-filevault-key-command.md): Change the FileVault primary password on a device.
