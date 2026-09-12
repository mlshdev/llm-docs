> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror/subscribertimeoutdetails](https://developer.apple.com/documentation/wifiaware/waerror/subscribertimeoutdetails)

# WAError.SubscriberTimeoutDetails

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The optional details describing the timed out subscriber.

## Declaration

```swift
struct SubscriberTimeoutDetails
```

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for timeouts

- [WAError.connectionIdleTimeout(\_:)](connectionidletimeout%28__%29.md): An error that occurs due to an idle or unused connection.
- [WAError.publisherTimeout(\_:)](publishertimeout%28__%29.md): An error that occurs due to publisher timeout.
- [WAError.subscriberTimeout(\_:)](subscribertimeout%28__%29.md): An error that occurs due to subscriber timeout.
- [WAError.ConnectionIdleTimeoutDetails](connectionidletimeoutdetails.md): The optional details describing the missing resources.
- [WAError.PublisherTimeoutDetails](publishertimeoutdetails.md): The optional details describing the timed out publisher.
