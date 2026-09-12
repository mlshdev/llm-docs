> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/lom-setup-request-command](https://developer.apple.com/documentation/devicemanagement/lom-setup-request-command)

# LOM Setup Request

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** macOS 11.0+

Get information from a device to set up lights-out management (LOM).

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `LOMSetupRequestCommand`

The request object the server returns for the LOM Setup Request Command.

## Response Codes

- `200` OK — `LOMSetupRequestResponse`: The response object the system returns for the LOM Setup Request Command.

<a id="Discussion"></a>

## Discussion

This command requires the `DeviceLockAndRemovePasscode` access right, [LightsOutManagementLOM](lightsoutmanagementlom.md) configuration and is available in macOS 11 and later on [supported macOS devices](https://support.apple.com/guide/deployment/lights-out-management-payload-settings-dep580cf25bc/web).

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
| Requires supervision | macOS |
| Allowed in user enrollment | N/A |
| Required access right | DeviceLockAndRemovePasscode |

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
        <string>LOMSetupRequest</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_LOMSetupRequest</string>
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
    <string>0001_LOMSetupRequest</string>
    <key>PrimaryIPv6AddressList</key>
    <array>
       <string>fe80::94f6:d6ff:fef3:c05b</string>
       <string>fe80::94f6:d6ff:fef3:c1a4</string>
    </array>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>84341F79-92F5-5EF7-9A6A-3A7374613227</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [LOMSetupRequestCommand](lomsetuprequestcommand.md): The command to get information from a device to set up lights-out management (LOM).
- [LOMSetupRequestResponse](lomsetuprequestresponse.md): A response from the device after it processes the command to get information from a device to set up lights-out management (LOM).

## See Also

### Lights-out management

- [LOM Device Request](lom-device-request-command.md): Send requests to a device using lights-out management (LOM).
