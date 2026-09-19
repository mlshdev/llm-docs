> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/vasrequest/vasmerchants

# vasMerchants

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The list of merchants to match against the user’s Wallet content or loyalty card.

## Declaration

```swift
final let vasMerchants: [VASRequest.Merchant]
```

## See Also

### Getting the loyalty card details

- [localizedVASType](localizedvastype.md): The localized name of the loyalty program.
- [VASRequest.Merchant](merchant.md): The identity of a merchant that offers a loyalty program.
