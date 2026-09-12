> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/user-list-command](https://developer.apple.com/documentation/devicemanagement/user-list-command)

# User List

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.13+

Get a list of users with active accounts on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `UserListCommand`

The request object the server returns for the User List Command.

## Response Codes

- `200` OK — `UserListResponse`: The response object the system returns for the User List Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS |
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
        <key>RequestType</key>
        <string>UserList</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_UserList</string>
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
    <string>0001_UserList</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>cf98820bd143abe0bbf151bed8e8e427594d2f88</string>
    <key>Users</key>
    <array>
        <dict>
            <key>DataQuota</key>
            <integer>10171187200</integer>
            <key>DataUsed</key>
            <integer>145625088</integer>
            <key>HasDataToSync</key>
            <true/>
            <key>IsLoggedIn</key>
            <false/>
            <key>UserName</key>
            <string>example@acme.com</string>
        </dict>
    </array>
</dict>
</plist>
```

## Topics

### Commands and responses

- [UserListCommand](userlistcommand.md): The command to get a list of users with active accounts on a device.
- [UserListResponse](userlistresponse.md): A response from the device after it processes the command to get a list of users with active accounts on a device.

## See Also

### User management

- [Log Out User](log-out-user-command.md): Force the current user to log out of a device.
- [Delete User](delete-user-command.md): Delete a user’s account from a device.
