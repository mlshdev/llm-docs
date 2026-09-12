> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectionofone/subscript(_:)-876qi](https://developer.apple.com/documentation/swift/collectionofone/subscript(_:)-876qi)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified position.

## Declaration

```swift
subscript(position: Int) -> Element { get set }
```

## Parameters

- `position`: The position of the element to access. The only valid position in a `CollectionOfOne` instance is `0`.
