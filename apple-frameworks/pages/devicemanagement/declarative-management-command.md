> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/declarative-management-command](https://developer.apple.com/documentation/devicemanagement/declarative-management-command)

# Declarative Management

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

Enable your server to support declarative management or trigger a declarative management synchronization operation on the device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `DeclarativeManagementCommand`

The request object the server returns for the Declarative Management Command.

## Response Codes

- `200` OK — `DeclarativeManagementResponse`: The response object the system returns for the Declarative Management Command.

<a id="Discussion"></a>

## Discussion

The server uses this command to turn on the declarative management engine on the device the first time the server sends it. Subsequent commands trigger a declarative management synchronization operation.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | macOS, Shared iPad |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |
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
        <key>CommandUUID</key>
        <string>0001_DeclarativeManagement</string>
        <key>Command</key>
        <dict>
            <key>RequestType</key>
            <string>DeclarativeManagement</string>
            <key>Data</key>
            <data>
            eyJTeW5jVG9rZW5zIjogeyJUaW1lc3RhbXAiOiAiMjAyMS0wNi0wMlQwMToy
            ODowMFoiLCAiRGVjbGFyYXRpb25zVG9rZW4iOiAiYjY1NDQwMjdhMzE1Y2Qw
            MDg1ZDRjZjA4MTc0NjI0YzJkMTQyNDQ0ODA0MzBhODdiMTc2YTI3MjdlNzM2
            NjEzOCJ9fQ==
            </data>
        </dict>
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
    <string>0001_DeclarativeManagement</string>
    <key>EnrollmentID</key>
    <string>8DB29EAB-A5BB-4B60-8DDA-F75517766FAC</string>
    <key>Status</key>
    <string>Acknowledged</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [DeclarativeManagementCommand](declarativemanagementcommand.md): The command to enable your server to support declarative management or trigger a declarative management synchronization operation on the device.
- [DeclarativeManagementResponse](declarativemanagementresponse.md): A response from the device after it processes the command to enable your server to support declarative management or trigger a declarative management synchronization operation on the device.
