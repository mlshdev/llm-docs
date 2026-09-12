> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/commonprefix(with:options:)](https://developer.apple.com/documentation/swift/stringprotocol/commonprefix(with:options:))

# commonPrefix(with:options:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing characters this string and the given string have in common, starting from the beginning of each up to the first characters that aren’t equivalent.

## Declaration

```swift
func commonPrefix<T>(with aString: T, options: String.CompareOptions = []) -> String where T : StringProtocol
```
