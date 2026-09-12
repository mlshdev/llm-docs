> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/smallestsubset(groupedby:)](https://developer.apple.com/documentation/swift/sequence/smallestsubset(groupedby:))

# smallestSubset(groupedBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the smallest group of donations when grouped by the specified key path.

## Declaration

```swift
func smallestSubset<DonationInfo, Value>(groupedBy keyPath: KeyPath<DonationInfo, Value>) -> [Self.Element] where DonationInfo : Decodable, DonationInfo : Encodable, DonationInfo : Sendable, Value : Hashable, Self.Element == Tips.Event<DonationInfo>.Donation
```

## Parameters

- `keyPath`: A key path to a `Hashable` property on the donation value to group by.

<a id="return-value"></a>

## Return Value

An array of donations belonging to the smallest group.

<a id="discussion"></a>

## Discussion

Use this method inside a `Tips/Rule` predicate to find the least frequently donated value for a given property.

```swift
#Rule(LandmarkDetail.didViewLandmarkDetail) {
    $0.donations.smallestSubset(groupedBy: \.landmarkID).count >= 2
}
```
