> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/firstmatch(of:)-6v8ci](https://developer.apple.com/documentation/swift/bidirectionalcollection/firstmatch(of:)-6v8ci)

# firstMatch(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the first match for the regex within this collection, where the regex is created by the given closure.

## Declaration

```swift
func firstMatch<Output>(@RegexComponentBuilder of content: () -> some RegexComponent) -> Regex<Output>.Match?
```

## Parameters

- `content`: A closure that returns the regex to search for.

<a id="return-value"></a>

## Return Value

The first match for the regex created by `content` in this collection, or `nil` if no match is found.
