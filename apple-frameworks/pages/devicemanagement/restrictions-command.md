> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restrictions-command](https://developer.apple.com/documentation/devicemanagement/restrictions-command)

# Restrictions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

Get a list of restrictions on the device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `RestrictionsCommand`

The request object the server returns for the Restrictions Command.

## Response Codes

- `200` OK — `RestrictionsResponse`: The response object the system returns for the Restrictions Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | Shared iPad |
| Requires supervision | N/A |
| Allowed in user enrollment | N/A |
| Required access right | AllowQueryRestrictions |

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
        <key>ProfileRestrictions</key>
        <false/>
        <key>RequestType</key>
        <string>Restrictions</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_Restrictions</string>
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
    <string>0001_Restrictions</string>
    <key>GlobalRestrictions</key>
    <dict>
        <key>restrictedBool</key>
        <dict>
            <key>allowCamera</key>
            <dict>
                <key>value</key>
                <false/>
            </dict>
        </dict>
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

- [RestrictionsCommand](restrictionscommand.md): The command to get a list of restrictions on the device.
- [RestrictionsResponse](restrictionsresponse.md): A response from the device after it processes the command to get a list of restrictions on the device.

## See Also

### Device details

- [Device Information](device-information-command.md): Get detailed information about a device.
- [Device Configured](device-configured-command.md): Inform the device that it can allow the user to continue in Setup Assistant.
- [User Configured](user-configured-command.md): Inform the device that it can continue past Setup Assistant and finish login.
