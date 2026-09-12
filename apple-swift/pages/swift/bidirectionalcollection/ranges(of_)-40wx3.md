> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/ranges(of:)-40wx3](https://developer.apple.com/documentation/swift/bidirectionalcollection/ranges(of:)-40wx3)

# ranges(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Finds and returns the ranges of the all occurrences of a given sequence within the collection.

## Declaration

```swift
func ranges(of regex: some RegexComponent) -> [Range<Self.Index>]
```

## Parameters

- `regex`: The regex to search for.

<a id="return-value"></a>

## Return Value

A collection or ranges in the receiver of all occurrences of `regex`. Returns an empty collection if `regex` is not found.
