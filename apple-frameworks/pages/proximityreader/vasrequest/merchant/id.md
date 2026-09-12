> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/vasrequest/merchant/id](https://developer.apple.com/documentation/proximityreader/vasrequest/merchant/id)

# id

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A unique identifier for the merchant.

## Declaration

```swift
let id: String
```

<a id="discussion"></a>

## Discussion

When reading a card, the system sends this identifier to the customer device, which uses the value to retrieve the matching loyalty or reward ID of the customer.
