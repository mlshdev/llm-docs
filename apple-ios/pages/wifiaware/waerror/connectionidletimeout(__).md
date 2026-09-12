> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror/connectionidletimeout(_:)](https://developer.apple.com/documentation/wifiaware/waerror/connectionidletimeout(_:))

# WAError.connectionIdleTimeout(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs due to an idle or unused connection.

## Declaration

```swift
case connectionIdleTimeout(WAError.ConnectionIdleTimeoutDetails)
```

<a id="discussion"></a>

## Discussion

This error occurs when a connection is unused for an excessive duration and closed as a result.

## See Also

### Checking for timeouts

- [WAError.publisherTimeout(\_:)](publishertimeout%28__%29.md): An error that occurs due to publisher timeout.
- [WAError.subscriberTimeout(\_:)](subscribertimeout%28__%29.md): An error that occurs due to subscriber timeout.
- [WAError.ConnectionIdleTimeoutDetails](connectionidletimeoutdetails.md): The optional details describing the missing resources.
- [WAError.PublisherTimeoutDetails](publishertimeoutdetails.md): The optional details describing the timed out publisher.
- [WAError.SubscriberTimeoutDetails](subscribertimeoutdetails.md): The optional details describing the timed out subscriber.
