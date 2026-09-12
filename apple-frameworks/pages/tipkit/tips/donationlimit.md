> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/donationlimit](https://developer.apple.com/documentation/tipkit/tips/donationlimit)

# DonationLimit

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specify the maximum number of donations for an event.

## Declaration

```swift
struct DonationLimit
```

## Topics

### Initializers

- [init(maximumCount:maximumAge:)](donationlimit/init%28maximumcount_maximumage_%29.md): Passed to an `Event` to specify the maximum number and maximum age of donations the event will persist and query.

### Instance Properties

- [maximumAge](donationlimit/maximumage.md): Maximum age of donations this event will persist and query. By default events have no maximum age.
- [maximumCount](donationlimit/maximumcount.md): Maximum number of donations this event will persist and query.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Events

- [Event](event.md): A repeatable user-defined action.
- [DonationTimeRange](donationtimerange.md): A duration of time for filtering event donations.
- [EmptyDonation](emptydonation.md): An empty event donation.
