> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/declarative-management](https://developer.apple.com/documentation/devicemanagement/declarative-management)

# Declarative Management

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

Sends declarative management requests to the server.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm-checkin`

Type: `DeclarativeManagementRequest`

The request object the system sends for the `DeclarativeManagement` request.

## Response Codes

- `200` OK:

## Mentioned In

- [Integrating declarative management](integrating-declarative-management.md)

<a id="Discussion"></a>

## Discussion

The `Data` field is optional, depending on the `Endpoint` value, as described below:

- `tokens`: The client uses the `tokens` endpoint to request the current synchronization tokens from the server. It doesn’t use the `Data` field. A successful response to this request is a `200 OK` HTTP status, with a response body that’s a JSON object conforming to the [TokensResponse](tokensresponse.md) schema.
- `declaration-items`: The client uses the `declaration-items` endpoint to request the current declaration manifest from the server. It doesn’t use the `Data` field. A successful response to this request is a `200 OK` HTTP status, with a response body that’s a JSON object conforming to the [DeclarationItemsResponse](declarationitemsresponse.md) schema.
- `declaration/…/…` : The client uses the `declaration/…/…` endpoint to request a specific declaration from the server. It doesn’t use the `Data` field.

The endpoint value is a path with three segments separated by a slash character (`/`). The first segment is always `declaration`. The second segment indicates the declaration type and is one of `activation`, `asset`, `configuration`, or `management`. The third segment is the `Identifier` of the declaration to fetch.

A successful response to this request is a `200 OK` HTTP status, with a response body that’s a JSON object representing the requested declaration. If the declaration isn’t present on the server, it needs to return a `404 Not Found` HTTP status response to the device. That causes the device to remove any corresponding declaration that is present on it.

- `status`: The client uses the `status` endpoint to send a status report to the server. The `Data` field needs to be present and set to a Base64-encoded JSON object conforming to the [StatusReport](statusreport.md) schema. A successful response to this request is a `200 OK` HTTP status, with an empty response body.

<a id="Check-in-availability"></a>

### Check-in availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | macOS, Shared iPad |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |

## Topics

### Requests

- [DeclarativeManagementRequest](declarativemanagementrequest.md): The declarative management request details.

## See Also

### Declarative management

- [Get Server Supported Declarations](declaration-items.md): Get a list of the declarations available on the server.
- [Get the Device Status](status.md): The request for getting the status of a device.
- [Get the Device Token](tokens.md): The request for sending the device token details.
