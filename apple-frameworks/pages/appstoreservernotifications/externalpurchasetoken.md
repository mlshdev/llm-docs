> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/externalpurchasetoken](https://developer.apple.com/documentation/appstoreservernotifications/externalpurchasetoken)

# externalPurchaseToken

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Object  
**Availability:** App Store Server Notifications 2.10+

The payload data that contains an external purchase token.

## Declaration

```
object externalPurchaseToken
```

## Properties

- `externalPurchaseId` — `externalPurchaseId` (required): The unique identifier of the token. Use this value to report tokens and their associated transactions in the [Send External Purchase Report](../externalpurchaseserverapi/send-external-purchase-report.md) endpoint.
- `tokenCreationDate` — `tokenCreationDate` (required): The UNIX time, in milliseconds, when the system created the token.
- `appAppleId` — `appAppleId` (required): The app Apple ID for which the system generated the token.
- `bundleId` — `bundleId` (required): The bundle ID of the app for which the system generated the token.
- `tokenExpirationDate` — `tokenExpirationDate`: The UNIX time, in milliseconds, when a token expires. This field is present only for custom link tokens.
- `tokenType` — `tokenType`: The custom link token type, either `SERVICES` or `ACQUISITION`. This field is present only for custom link tokens.

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)
- [Receiving App Store Server Notifications](receiving-app-store-server-notifications.md)

<a id="Discussion"></a>

## Discussion

The `externalPurchaseToken` object is part of the [responseBodyV2DecodedPayload](responsebodyv2decodedpayload.md). It’s present in the payload when the [notificationType](notificationtype.md) is `EXTERNAL_PURCHASE_TOKEN`. This notification type applies to apps that use the [External Purchase](../storekit/external-purchase.md) API to offer alternative payment options.

The `externalPurchaseToken` object is the Base64URL-decoded JSON of the external purchase token your app or website receives when your customer initiates an external purchase. For more information on external purchase tokens, see [Receiving and decoding external purchase tokens](../storekit/receiving-and-decoding-external-purchase-tokens.md).

To report tokens with or without associated transactions, call the [Send External Purchase Report](../externalpurchaseserverapi/send-external-purchase-report.md) endpoint of the [External Purchase Server API](../externalpurchaseserverapi.md) from your server.

## Topics

### External purchase token fields

- [externalPurchaseId](externalpurchaseid.md): The field of an external purchase token that uniquely identifies the token.
- [tokenCreationDate](tokencreationdate.md): The field of an external purchase token that contains the UNIX date, in milliseconds, when the system created the token.
- [tokenExpirationDate](tokenexpirationdate.md): The field of a custom link token that contains the UNIX date, in milliseconds, when the token expires.
- [tokenType](tokentype.md): The type of an external purchase custom link token.
