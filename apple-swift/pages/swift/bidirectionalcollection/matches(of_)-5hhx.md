> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/matches(of:)-5hhx](https://developer.apple.com/documentation/swift/bidirectionalcollection/matches(of:)-5hhx)

# matches(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a collection containing all matches of the specified regex.

## Declaration

```swift
func matches<Output>(of r: some RegexComponent) -> [Regex<Output>.Match]
```

<a id="return-value"></a>

## Return Value

A collection of matches of `regex`.
