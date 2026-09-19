> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/publishertimeout(_:)

# WAError.publisherTimeout(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs due to publisher timeout.

## Declaration

```swift
case publisherTimeout(WAError.PublisherTimeoutDetails)
```

## See Also

### Checking for timeouts

- [WAError.connectionIdleTimeout(\_:)](connectionidletimeout%28__%29.md): An error that occurs due to an idle or unused connection.
- [WAError.subscriberTimeout(\_:)](subscribertimeout%28__%29.md): An error that occurs due to subscriber timeout.
- [WAError.ConnectionIdleTimeoutDetails](connectionidletimeoutdetails.md): The optional details describing the missing resources.
- [WAError.PublisherTimeoutDetails](publishertimeoutdetails.md): The optional details describing the timed out publisher.
- [WAError.SubscriberTimeoutDetails](subscribertimeoutdetails.md): The optional details describing the timed out subscriber.
