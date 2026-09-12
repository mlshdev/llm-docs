> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectiondifference/change/insert(offset:element:associatedwith:)](https://developer.apple.com/documentation/swift/collectiondifference/change/insert(offset:element:associatedwith:))

# CollectionDifference.Change.insert(offset:element:associatedWith:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An insertion.

## Declaration

```swift
case insert(offset: Int, element: ChangeElement, associatedWith: Int?)
```

<a id="discussion"></a>

## Discussion

The `offset` value is the offset of the inserted element in the final state of the collection after the difference is fully applied. A non-`nil` `associatedWith` value is the offset of the complementary change.
