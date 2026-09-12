> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/tokentype](https://developer.apple.com/documentation/appstoreservernotifications/tokentype)

# tokenType

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.17+

The type of an external purchase custom link token.

## Declaration

```
string tokenType
```

## Possible Values

- `ACQUISITION`: A token type that indicates an initial acquisition.
- `SERVICES`: A token type that indicates usage of App Store services.

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

### Discussion

The token type field is present only for custom link tokens. For more information on tokens, see [Receiving and decoding external purchase tokens](../storekit/receiving-and-decoding-external-purchase-tokens.md).

## See Also

### External purchase token fields

- [externalPurchaseId](externalpurchaseid.md): The field of an external purchase token that uniquely identifies the token.
- [tokenCreationDate](tokencreationdate.md): The field of an external purchase token that contains the UNIX date, in milliseconds, when the system created the token.
- [tokenExpirationDate](tokenexpirationdate.md): The field of a custom link token that contains the UNIX date, in milliseconds, when the token expires.
