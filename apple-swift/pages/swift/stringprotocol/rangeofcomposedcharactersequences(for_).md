> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/rangeofcomposedcharactersequences(for:)](https://developer.apple.com/documentation/swift/stringprotocol/rangeofcomposedcharactersequences(for:))

# rangeOfComposedCharacterSequences(for:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range in the string of the composed character sequences for a given range.

## Declaration

```swift
func rangeOfComposedCharacterSequences<R>(for range: R) -> Range<Self.Index> where R : RangeExpression, R.Bound == String.Index
```
