> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/log-out-user-command](https://developer.apple.com/documentation/devicemanagement/log-out-user-command)

# Log Out User

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

Force the current user to log out of a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `LogOutUserCommand`

The request object the server returns for the Log Out User Command.

## Response Codes

- `200` OK — `LogOutUserResponse`: The response object the system returns for the Log Out User Command.

<a id="Discussion"></a>

## Discussion

After logging out the user, MDM commands aren’t available on the device for up to 2 minutes.

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS |
| User channel | N/A |
| Requires supervision | N/A |
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
        <string>LogOutUser</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_LogOutUser</string>
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
    <string>0001_LogOutUser</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>cf98820bd143abe0bbf151bed8e8e427594d2f88</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [LogOutUserCommand](logoutusercommand.md): The command to force the current user to log out of a device.
- [LogOutUserResponse](logoutuserresponse.md): A response from the device after it processes the command to force the current user to log out of a device.

## See Also

### User management

- [User List](user-list-command.md): Get a list of users with active accounts on a device.
- [Delete User](delete-user-command.md): Delete a user’s account from a device.
