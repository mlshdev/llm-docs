> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/emptycollection/index(before:)](https://developer.apple.com/documentation/swift/emptycollection/index(before:))

# index(before:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Always traps.

## Declaration

```swift
func index(before i: EmptyCollection<Element>.Index) -> EmptyCollection<Element>.Index
```

<a id="discussion"></a>

## Discussion

`EmptyCollection` does not have any element indices, so it is not possible to advance indices.
