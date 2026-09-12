> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchanttokenunlinkrequest](https://developer.apple.com/documentation/merchanttokennotificationservices/merchanttokenunlinkrequest)

# MerchantTokenUnlinkRequest

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+ · Apple Pay Merchant Token Management API 1.0.12+

The request body you use to invalidate a merchant token.

## Declaration

```
object MerchantTokenUnlinkRequest
```

## Properties

- `merchantTokenIdentifier` — `string` (required): The merchant token identifier to invalidate.
  **Maximum length:** `64`

## See Also

### Merchant token invalidation

- [Invalidate a Merchant Token](unlinking-merchanttoken.md): Invalidate a merchant token associated with your merchant identifier, making it invalid for future transaction authorizations.
