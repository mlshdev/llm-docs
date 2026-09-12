> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionimage/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionimage/attributes-data.dictionary)

# SubscriptionImage.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+ (deprecated in 4.4.1)

Attributes that describe a subscription image resource.

> This object is deprecated. Use [SubscriptionImageV2](../subscriptionimagev2.md) instead.

## Declaration

```
object SubscriptionImage.Attributes
```

## Properties

- `assetToken` — `string`:
- `fileName` — `string`:
- `fileSize` — `integer`:
- `imageAsset` — `ImageAsset`:
- `sourceFileChecksum` — `string`:
- `state` — `string`: **Allowed values:** `AWAITING_UPLOAD`, `UPLOAD_COMPLETE`, `FAILED`, `PREPARE_FOR_SUBMISSION`, `WAITING_FOR_REVIEW`, `APPROVED`, `REJECTED`
- `uploadOperations` — `[UploadOperation]`:

## See Also

### Objects

- [SubscriptionImage.Relationships](relationships-data.dictionary.md): Deprecated. The relationships for a subscription image, linking it to its associated subscription.
