> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/content-caching-information-command](https://developer.apple.com/documentation/devicemanagement/content-caching-information-command)

# Content Caching Information

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** macOS 10.15.4+

Get the status of the content caches on a device.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `ContentCachingInformationCommand`

The request object the server returns for the Content Caching Information Command.

## Response Codes

- `200` OK — `ContentCachingInformationResponse`: The response object the system returns for the Content Caching Information Command.

<a id="Discussion"></a>

## Discussion

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
| Requires supervision | macOS |
| Allowed in user enrollment | N/A |
| Required access right | AllowQueryNetworkInformation |

## Topics

### Commands and responses

- [ContentCachingInformationCommand](contentcachinginformationcommand.md): The command to get the status of the content caches on a device.
- [ContentCachingInformationResponse](contentcachinginformationresponse.md): A response from the device after it processes the command to get the status of the content caches on a device.
