> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/event/senddonation(_:)](https://developer.apple.com/documentation/tipkit/tips/event/senddonation(_:))

# sendDonation(\_:)

**Framework:** TipKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Asynchronously donates an event with no associated `Donation` value.

## Declaration

```swift
func sendDonation(_ completion: (@Sendable () -> Void)? = nil) where DonationInfo == Tips.EmptyDonation
```

## Parameters

- `completion`: Called upon completion of the event donation.

## See Also

### Add Donations

- [donate()](donate%28%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Donates an event with no associated `Donation` value.
- [donate(\_:)](donate%28__%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Donates an event along with its associated `Donation` value.
- [sendDonation(\_:\_:)](senddonation%28____%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Asynchronously donates an event along with its associated `Donation` value.
