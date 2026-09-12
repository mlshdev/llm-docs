> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/disassociate-subscriptions](https://developer.apple.com/documentation/devicemanagement/disassociate-subscriptions)

# Disassociate Subscriptions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

Disassociate subscriptions from client user IDs.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/v2/subscriptions/disassociate
```

## HTTP Body

Content type: `application/json`

Type: `ManageSubscriptionsRequest`

[ManageSubscriptionsRequest](managesubscriptionsrequest.md)

## Response Codes

- `200` OK — `EventResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```json
{
    "adamIds": [12345],
    "clientUserIds": ["vpp-user"],
    "deferred": true
}
```

**Response**

```json
{
    "eventId": "c3f990d3-d8c5-41c6-8394-edb1f759a9d2",
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "uId": "2049025000431439"
}
```

## Topics

### Request and Response

- [ManageSubscriptionsRequest](managesubscriptionsrequest.md): The request for subscription management.
- [EventResponse](eventresponse.md): The response that contains the event identifier.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

### Content Metadata

- [Managing subscriptions](managing-subscriptions.md): Administer auto-renewable subscription seats for your organization.

## See Also

### Subscription management

- [Enable Subscriptions](enable-subscriptions.md): Declare that your device management service supports subscription management.
- [Disable Subscriptions](disable-subscriptions.md): Declare that your device management service doesn’t support subscription management.
- [Get Subscriptions](get-subscriptions.md): Get the subscriptions that your organization manages.
- [Get Subscription Assignments](get-subscription-assignments.md): Get the subscription assignments for users in your organization.
- [Associate Subscriptions](associate-subscriptions.md): Associate subscriptions with client user IDs.
- [Get Subscription Administrators](get-subscription-administrators.md): Get the administrators for subscriptions that your organization manages.
- [Add Subscription Administrators](add-subscription-administrators.md): Add administrators for subscriptions.
- [Remove Subscription Administrators](remove-subscription-administrators.md): Remove administrators from subscriptions.
