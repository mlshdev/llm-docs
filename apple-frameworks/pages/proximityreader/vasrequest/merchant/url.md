> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/vasrequest/merchant/url

# url

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The URL to display to the customer if the matching loyalty or reward ID isn’t found.

## Declaration

```swift
let url: URL?
```

## Mentioned In

- [Accepting loyalty passes from Wallet](../../accepting-loyalty-passes-from-wallet.md)

<a id="discussion"></a>

## Discussion

If the customer isn’t part of the merchant’s loyalty program, they can use the provided URL to get more information about that program.

## See Also

### Getting the merchant URL details

- [shouldSendURLOnly](shouldsendurlonly.md): Deprecated. A Boolean value that indicates whether to send only the merchant URL to the customer’s device without requesting data.
