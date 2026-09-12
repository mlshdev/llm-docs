> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionversion/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionversion/attributes-data.dictionary)

# SubscriptionVersion.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

Attributes that describe a SubscriptionVersion resource.

## Declaration

```
object SubscriptionVersion.Attributes
```

## Properties

- `version` — `integer`:
- `state` — `string`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `APPROVED`, `REPLACED_WITH_NEW_VERSION`, `REJECTED`, `DEVELOPER_REJECTED`

## See Also

### Objects and types

- [SubscriptionVersion.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
