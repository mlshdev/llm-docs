> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/cancel-enhanced-log-collection-command](https://developer.apple.com/documentation/devicemanagement/cancel-enhanced-log-collection-command)

# Cancel Enhanced Log Collection

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Cancel enhanced log collection on the device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `CancelEnhancedLogCollectionCommand`

The request object the server returns for the Cancel Enhanced Log Collection Command.

## Response Codes

- `200` OK — `CancelEnhancedLogCollectionResponse`: The response object the system returns for the Cancel Enhanced Log Collection Command.

<a id="Discussion"></a>

## Discussion

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad, tvOS |
| User channel | macOS |
| Requires supervision | iOS, macOS, tvOS |
| Allowed in user enrollment | N/A |
| Required access right | N/A |

## Topics

### Commands and responses

- [CancelEnhancedLogCollectionCommand](cancelenhancedlogcollectioncommand.md): The command to cancel enhanced log collection on the device.
- [CancelEnhancedLogCollectionResponse](cancelenhancedlogcollectionresponse.md): A response from the device after it processes the command to cancel enhanced log collection on the device.

## See Also

### Enhanced logging

- [Trigger Enhanced Log Collection](trigger-enhanced-log-collection-command.md): Trigger enhanced log collection on the device.
