> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/enable-subscriptions](https://developer.apple.com/documentation/devicemanagement/enable-subscriptions)

# Enable Subscriptions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

Declare that your device management service supports subscription management.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/v2/subscriptions/enable
```

## Response Codes

- `200` OK — `SubscriptionManagementResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

<a id="Discussion"></a>

## Discussion

Send a POST request to declare that your device management service supports subscription management. Until you enable subscription management for a token, content managers can’t purchase subscriptions into the organizational unit that the token represents.

This request takes no body. The server processes it synchronously and returns the resulting `subscriptionManagement` state.

> **Note**

>  You can reverse this declaration with [Disable Subscriptions](disable-subscriptions.md), but only while the organizational unit has no subscriptions. After content managers purchase subscriptions into it, disabling fails until no subscriptions remain.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
curl --location --request POST 'https://vpp.itunes.apple.com/mdm/v2/subscriptions/enable' \
--header 'Authorization: Bearer {sToken}'
```

**Response**

```json
{
    "mdmInfo": null,
    "subscriptionManagement": true,
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "uId": "2049025000431439"
}
```

To declare that an organizational unit doesn’t support subscriptions, use [Disable Subscriptions](disable-subscriptions.md).

## Topics

### Response

- [SubscriptionManagementResponse](subscriptionmanagementresponse.md): A confirmation response that reports your device management service’s subscription management support.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

### Content Metadata

- [Managing subscriptions](managing-subscriptions.md): Administer auto-renewable subscription seats for your organization.

## See Also

### Subscription management

- [Disable Subscriptions](disable-subscriptions.md): Declare that your device management service doesn’t support subscription management.
- [Get Subscriptions](get-subscriptions.md): Get the subscriptions that your organization manages.
- [Get Subscription Assignments](get-subscription-assignments.md): Get the subscription assignments for users in your organization.
- [Associate Subscriptions](associate-subscriptions.md): Associate subscriptions with client user IDs.
- [Disassociate Subscriptions](disassociate-subscriptions.md): Disassociate subscriptions from client user IDs.
- [Get Subscription Administrators](get-subscription-administrators.md): Get the administrators for subscriptions that your organization manages.
- [Add Subscription Administrators](add-subscription-administrators.md): Add administrators for subscriptions.
- [Remove Subscription Administrators](remove-subscription-administrators.md): Remove administrators from subscriptions.
