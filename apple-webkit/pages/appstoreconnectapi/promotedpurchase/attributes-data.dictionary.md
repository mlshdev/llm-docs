> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/promotedpurchase/attributes-data.dictionary

# PromotedPurchase.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe a promoted purchase resource.

## Declaration

```
object PromotedPurchase.Attributes
```

## Properties

- `enabled` — `boolean`:
- `state` — `string`: **Allowed values:** `APPROVED`, `IN_REVIEW`, `PREPARE_FOR_SUBMISSION`, `REJECTED`
- `visibleForAllUsers` — `boolean`:

## See Also

### Objects and types

- [PromotedPurchase.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
