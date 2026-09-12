> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/invite-to-program-command](https://developer.apple.com/documentation/devicemanagement/invite-to-program-command)

# Invite To Program

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+

Invite a user to join the Volume Purchase Program (VPP).

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `InviteToProgramCommand`

The request object the server returns for the Invite To Program Command.

## Response Codes

- `200` OK — `InviteToProgramResponse`: The response object the system returns for the Invite To Program Command.

<a id="Discussion"></a>

## Discussion

This command allows a server to invite a user to join the Volume Purchase Program (VPP). It issues the invitation, but doesn’t allow the server to monitor whether the user joins the program. This command yields a `NotNow` status if Setup Assistant is running.

The command doesn’t work with Account Driven enrollments.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS |
| User channel | macOS, Shared iPad |
| Requires supervision | macOS |
| Allowed in user enrollment | N/A |
| Required access right | AllowAppInstallation |

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
        <key>InvitationURL</key>
        <string>https://invite.example.com/invitation?id=39E92FBA-C853-4973-9922-17AF04DDDB3C</string>
        <key>ProgramID</key>
        <string>com.apple.cloudvpp</string>
        <key>RequestType</key>
        <string>InviteToProgram</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_InviteToProgram</string>
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
    <string>0001_InviteToProgram</string>
    <key>InvitationResult</key>
    <string>Acknowledged</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [InviteToProgramCommand](invitetoprogramcommand.md): The command to invite a user to join the Volume Purchase Program (VPP).
- [InviteToProgramResponse](invitetoprogramresponse.md): A response from the device after it processes the command to invite a user to join the Volume Purchase Program (VPP).

## See Also

### Accounts

- [Account Configuration](account-configuration-command.md): Create and configure a local administrator account on a device.
