> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/refresh-cellular-plans-command](https://developer.apple.com/documentation/devicemanagement/refresh-cellular-plans-command)

# Refresh Cellular Plans

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Query a carrier URL for active eSIM cellular-plan profiles on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `RefreshCellularPlansCommand`

The request object the server returns for the Refresh Cellular Plans Command.

## Response Codes

- `200` OK — `RefreshCellularPlansResponse`: The response object the system returns for the Refresh Cellular Plans Command.

<a id="Discussion"></a>

## Discussion

<a id="Error-codes"></a>

### Error codes

An error response uses one of the following error codes:

- `36001`: Unable to communicate with the cellular software stack.
- `36002`: The hardware doesn’t support this command.
- `36003`: The cellular stack was unable to perform the request. This error can also occur if the cellular stack is busy, in which case, retrying the command later may resolve the issue.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad |
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
        <string>RefreshCellularPlans</string>
        <key>eSIMServerURL</key>
        <string>http://server.example.com</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_RefreshCellularPlans</string>
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
    <string>0001_RefreshCellularPlans</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [RefreshCellularPlansCommand](refreshcellularplanscommand.md): The command to query a carrier URL for active eSIM cellular-plan profiles on a device.
- [RefreshCellularPlansResponse](refreshcellularplansresponse.md): A response from the device after it processes the command to query a carrier URL for active eSIM cellular-plan profiles on a device.
