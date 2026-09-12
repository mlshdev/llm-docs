> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/match/init(_:)](https://developer.apple.com/documentation/swift/regex/match/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regular expression match with a dynamic capture list from the given match.

## Declaration

```swift
init<OtherOutput>(_ match: Regex<OtherOutput>.Match)
```

## Parameters

- `match`: A regular expression match to convert to a match with type-erased captures.

<a id="discussion"></a>

## Discussion

You can use this initializer to convert a `Regex.Match` with strongly-typed captures into a match with the type-eraser `AnyRegexOutput` as its output type.
