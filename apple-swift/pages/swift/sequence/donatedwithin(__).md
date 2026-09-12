> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/donatedwithin(_:)](https://developer.apple.com/documentation/swift/sequence/donatedwithin(_:))

# donatedWithin(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Filters donations to only those that occurred within the specified time range.

## Declaration

```swift
func donatedWithin<DonationInfo>(_ timeRange: Tips.DonationTimeRange) -> [Self.Element] where DonationInfo : Decodable, DonationInfo : Encodable, DonationInfo : Sendable, Self.Element == Tips.Event<DonationInfo>.Donation
```

## Parameters

- `timeRange`: The time range to filter donations by.

<a id="return-value"></a>

## Return Value

An array of donations that occurred within the given time range.

<a id="discussion"></a>

## Discussion

Use this method inside a `Tips/Rule` predicate to constrain which donations are considered when evaluating tip eligibility.

```swift
#Rule(AppEvents.didLogin) {
    $0.donations.donatedWithin(.week).count >= 3
}
```
