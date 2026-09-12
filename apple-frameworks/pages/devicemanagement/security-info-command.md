> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/security-info-command](https://developer.apple.com/documentation/devicemanagement/security-info-command)

# Security Info

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

Get security-related information about a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `SecurityInfoCommand`

The request object the server returns for the Security Info Command.

## Response Codes

- `200` OK — `SecurityInfoResponse`: The response object the system returns for the Security Info Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | macOS |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |
| Required access right | AllowQuerySecurity |

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
        <string>SecurityInfo</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_SecurityInfo</string>
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
    <string>0011_SecurityInfo</string>
    <key>SecurityInfo</key>
    <dict>
        <key>HardwareEncryptionCaps</key>
        <integer>3</integer>
        <key>ManagementStatus</key>
        <dict>
            <key>IsUserEnrollment</key>
            <false/>
        </dict>
        <key>PasscodeCompliant</key>
        <true/>
        <key>PasscodeCompliantWithProfiles</key>
        <true/>
        <key>PasscodeLockGracePeriod</key>
        <integer>0</integer>
        <key>PasscodeLockGracePeriodEnforced</key>
        <integer>0</integer>
        <key>PasscodePresent</key>
        <false/>
    </dict>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [SecurityInfoCommand](securityinfocommand.md): The command to get security-related information about a device.
- [SecurityInfoResponse](securityinforesponse.md): A response from the device after it processes the command to get security-related information about a device.

## See Also

### Security

- [Certificate List](certificate-list-command.md): Get a list of installed certificates on a device.
- [Activation Lock Bypass Code](activation-lock-bypass-code-command.md): Get the code to bypass Activation Lock on a device.
- [Clear Activation Lock Bypass Code](clear-activation-lock-bypass-code-command.md): Clear the Activation Lock bypass code on a device.
- [Rotate FileVault Key](rotate-filevault-key-command.md): Change the FileVault primary password on a device.
