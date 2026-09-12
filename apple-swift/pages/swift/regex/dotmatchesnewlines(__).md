> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/dotmatchesnewlines(_:)](https://developer.apple.com/documentation/swift/regex/dotmatchesnewlines(_:))

# dotMatchesNewlines(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a regular expression where the “any” metacharacter (`.`) also matches against the start and end of a line.

## Declaration

```swift
func dotMatchesNewlines(_ dotMatchesNewlines: Bool = true) -> Regex<Regex<Output>.RegexOutput>
```

## Parameters

- `dotMatchesNewlines`: A Boolean value indicating whether `.` should match a newline character.

<a id="return-value"></a>

## Return Value

The modified regular expression.
