> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/subscribertimeout(_:)

# WAError.subscriberTimeout(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs due to subscriber timeout.

## Declaration

```swift
case subscriberTimeout(WAError.SubscriberTimeoutDetails)
```

## See Also

### Checking for timeouts

- [WAError.connectionIdleTimeout(\_:)](connectionidletimeout%28__%29.md): An error that occurs due to an idle or unused connection.
- [WAError.publisherTimeout(\_:)](publishertimeout%28__%29.md): An error that occurs due to publisher timeout.
- [WAError.ConnectionIdleTimeoutDetails](connectionidletimeoutdetails.md): The optional details describing the missing resources.
- [WAError.PublisherTimeoutDetails](publishertimeoutdetails.md): The optional details describing the timed out publisher.
- [WAError.SubscriberTimeoutDetails](subscribertimeoutdetails.md): The optional details describing the timed out subscriber.
