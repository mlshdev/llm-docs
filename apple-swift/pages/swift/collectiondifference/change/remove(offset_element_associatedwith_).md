> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/collectiondifference/change/remove(offset:element:associatedwith:)

# CollectionDifference.Change.remove(offset:element:associatedWith:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A removal.

## Declaration

```swift
case remove(offset: Int, element: ChangeElement, associatedWith: Int?)
```

<a id="discussion"></a>

## Discussion

The `offset` value is the offset of the element to be removed in the original state of the collection. A non-`nil` `associatedWith` value is the offset of the complementary change.
