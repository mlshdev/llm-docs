> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/prefixmatch(of:)-2fwv6](https://developer.apple.com/documentation/swift/bidirectionalcollection/prefixmatch(of:)-2fwv6)

# prefixMatch(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Matches part of the regex, starting at the beginning, where the regex is created by the given closure.

## Declaration

```swift
func prefixMatch<Output>(@RegexComponentBuilder of content: () -> some RegexComponent) -> Regex<Output>.Match?
```

## Parameters

- `content`: A closure that returns a regex to match against.

<a id="return-value"></a>

## Return Value

The match if there is one, or `nil` if none.
