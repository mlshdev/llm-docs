> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/ranges(of:)-9qfdo](https://developer.apple.com/documentation/swift/bidirectionalcollection/ranges(of:)-9qfdo)

# ranges(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the ranges of the all non-overlapping matches for the regex within this collection, where the regex is created by the given closure.

## Declaration

```swift
func ranges(@RegexComponentBuilder of content: () -> some RegexComponent) -> [Range<Self.Index>]
```

## Parameters

- `content`: A closure that returns a regex to search for.

<a id="return-value"></a>

## Return Value

A collection of ranges of all matches for the regex returned by `content`. Returns an empty collection if no match for the regex is found.
