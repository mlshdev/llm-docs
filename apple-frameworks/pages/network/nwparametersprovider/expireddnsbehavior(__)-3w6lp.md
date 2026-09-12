> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/expireddnsbehavior(_:)-3w6lp](https://developer.apple.com/documentation/network/nwparametersprovider/expireddnsbehavior(_:)-3w6lp)

# expiredDNSBehavior(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Allow or prohibit the use of expired DNS answers during connection establishment.

## Declaration

```swift
func expiredDNSBehavior(_ behavior: NWParameters.ExpiredDNSBehavior) -> Self
```

## Parameters

- `behavior`: The expired DNS behavior to use.

<a id="discussion"></a>

## Discussion

If allowed, a DNS answer that was previously returned may be re-used for new connections even after the answers are considered expired. A query for fresh answers will be sent in parallel, and the fresh answers will be used as alternate addresses in case the expired answers do not result in successful connections.

By default, this value is `.systemDefault`, which allows the system to determine if it is appropriate to use expired answers.
