> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/replacingcharacters(in:with:)](https://developer.apple.com/documentation/swift/stringprotocol/replacingcharacters(in:with:))

# replacingCharacters(in:with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string in which the characters in a specified range of the `String` are replaced by a given string.

## Declaration

```swift
func replacingCharacters<T, R>(in range: R, with replacement: T) -> String where T : StringProtocol, R : RangeExpression, R.Bound == String.Index
```
