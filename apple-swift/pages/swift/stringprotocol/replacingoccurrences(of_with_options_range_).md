> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/replacingoccurrences(of:with:options:range:)](https://developer.apple.com/documentation/swift/stringprotocol/replacingoccurrences(of:with:options:range:))

# replacingOccurrences(of:with:options:range:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string in which all occurrences of a target string in a specified range of the string are replaced by another given string.

## Declaration

```swift
func replacingOccurrences<Target, Replacement>(of target: Target, with replacement: Replacement, options: String.CompareOptions = [], range searchRange: Range<Self.Index>? = nil) -> String where Target : StringProtocol, Replacement : StringProtocol
```
