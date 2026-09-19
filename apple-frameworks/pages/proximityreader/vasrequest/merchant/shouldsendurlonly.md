> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/vasrequest/merchant/shouldsendurlonly

# shouldSendURLOnly

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ (deprecated in 16.4) · iPadOS 15.4+ (deprecated in 16.4) · Mac Catalyst 17.0+ (deprecated in 17.0)

A Boolean value that indicates whether to send only the merchant URL to the customer’s device without requesting data.

> Not supported

## Declaration

```swift
let shouldSendURLOnly: Bool
```

<a id="discussion"></a>

## Discussion

The customer’s device can use the URL for pass provisioning.

## See Also

### Getting the merchant URL details

- [url](url.md): The URL to display to the customer if the matching loyalty or reward ID isn’t found.
