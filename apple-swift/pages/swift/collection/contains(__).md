> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/contains(_:)](https://developer.apple.com/documentation/swift/collection/contains(_:))

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the collection contains the given sequence.

## Declaration

```swift
func contains<C>(_ other: C) -> Bool where C : Collection, Self.Element == C.Element
```

## Parameters

- `other`: A sequence to search for within this collection.

<a id="return-value"></a>

## Return Value

`true` if the collection contains the specified sequence, otherwise `false`.
