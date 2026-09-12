> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror/connectionidletimeoutdetails](https://developer.apple.com/documentation/wifiaware/waerror/connectionidletimeoutdetails)

# WAError.ConnectionIdleTimeoutDetails

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The optional details describing the missing resources.

## Declaration

```swift
struct ConnectionIdleTimeoutDetails
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
- [WAError.PublisherTimeoutDetails](publishertimeoutdetails.md): The optional details describing the timed out publisher.
- [WAError.SubscriberTimeoutDetails](subscribertimeoutdetails.md): The optional details describing the timed out subscriber.
