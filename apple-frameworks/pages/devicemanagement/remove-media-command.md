> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/remove-media-command](https://developer.apple.com/documentation/devicemanagement/remove-media-command)

# Remove Media

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

Remove a previously installed book from a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `RemoveMediaCommand`

The request object the server returns for the Remove Media Command.

## Response Codes

- `200` OK — `RemoveMediaResponse`: The response object the system returns for the Remove Media Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad |
| User channel | N/A |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS |
| Required access right | AllowAppInstallation |

<a id="Example-request-and-response"></a>

### Example request and response

**Request**

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>MediaType</key>
    <string>Book</string>
    <key>PersistentID</key>
    <string>com.acme.pdf.myenterprisebook</string>
    <key>RequestType</key>
    <string>RemoveMedia</string>
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
    <string>0001_RemoveMedia</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [RemoveMediaCommand](removemediacommand.md): The command to remove a previously installed book from a device.
- [RemoveMediaResponse](removemediaresponse.md): A response from the device after it processes the command to remove a previously installed book from a device.

## See Also

### Managed media

- [Install Media](install-media-command.md): Deprecated. Install a book on a device.
- [Managed Media List](managed-media-list-command.md): Get a list of the managed books on a device.
