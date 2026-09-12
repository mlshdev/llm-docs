> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/enumeratelinguistictags(in:scheme:options:orthography:invoking:)](https://developer.apple.com/documentation/swift/stringprotocol/enumeratelinguistictags(in:scheme:options:orthography:invoking:))

# enumerateLinguisticTags(in:scheme:options:orthography:invoking:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.

## Declaration

```swift
func enumerateLinguisticTags<T, R>(in range: R, scheme tagScheme: T, options opts: NSLinguisticTagger.Options = [], orthography: NSOrthography? = nil, invoking body: (String, Range<Self.Index>, Range<Self.Index>, inout Bool) -> Void) where T : StringProtocol, R : RangeExpression, R.Bound == String.Index
```
