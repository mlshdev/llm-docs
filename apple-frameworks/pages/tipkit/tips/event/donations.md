> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/event/donations](https://developer.apple.com/documentation/tipkit/tips/event/donations)

# donations

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns an events existing donations.

## Declaration

```swift
var donations: [Tips.Event<DonationInfo>.Donation] { get }
```

## See Also

### Donations

- [Donation](donation.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. A repeatable user-defined action.
