> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchantmetadata](https://developer.apple.com/documentation/merchanttokennotificationservices/merchantmetadata)

# MerchantMetadata

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

The metadata of the merchant that updated on the server.

## Declaration

```
object MerchantMetadata
```

## Properties

- `tokenNotificationURL` — `string`: The URL for the token notification.
  **Maximum length:** `256`

<a id="Discussion"></a>

## Discussion

Apple Pay sends a notification with a unique event identifier to this URL for events that impact the associated MPAN.
