> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/remove-profile-command](https://developer.apple.com/documentation/devicemanagement/remove-profile-command)

# Remove Profile

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

Remove a previously installed profile from the device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `RemoveProfileCommand`

The request object the server returns for the Remove Profile Command.

## Response Codes

- `200` OK — `RemoveProfileResponse`: The response object the system returns for the Remove Profile Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | macOS, Shared iPad |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |
| Required access right | AllowInstallationRemoval |

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
        <key>Identifier</key>
        <string>com.acme.myprofile</string>
        <key>RequestType</key>
        <string>RemoveProfile</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_RemoveProfile</string>
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
    <string>0001_RemoveProfile</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [RemoveProfileCommand](removeprofilecommand.md): The command to remove a previously installed profile from the device.
- [RemoveProfileResponse](removeprofileresponse.md): A response from the device after it processes the command to remove a previously installed profile from the device.

## See Also

### Profile management

- [Install Profile](install-profile-command.md): Install a configuration profile on a device.
- [Profile List](profile-list-command.md): Get a list of installed profiles on a device.
- [Install Provisioning Profile](install-provisioning-profile-command.md): Install a provisioning profile on a device.
- [Provisioning Profile List](provisioning-profile-list-command.md): Get a list of installed provisioning profiles on a device.
- [Remove Provisioning Profile](remove-provisioning-profile-command.md): Remove a previously installed provisioning profile from a device.
