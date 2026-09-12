> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/vasrequest/localizedvastype](https://developer.apple.com/documentation/proximityreader/vasrequest/localizedvastype)

# localizedVASType

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The localized name of the loyalty program.

## Declaration

```swift
final let localizedVASType: String
```

<a id="discussion"></a>

## Discussion

Specify the loyalty program name, instead of a payment amount, when you request only a Value Added Services (VAS) read. The maximum length of this string is 22 characters.

## See Also

### Getting the loyalty card details

- [vasMerchants](vasmerchants.md): The list of merchants to match against the user’s Wallet content or loyalty card.
- [VASRequest.Merchant](merchant.md): The identity of a merchant that offers a loyalty program.
