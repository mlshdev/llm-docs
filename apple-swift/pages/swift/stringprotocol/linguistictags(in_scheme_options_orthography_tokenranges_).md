> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/linguistictags(in:scheme:options:orthography:tokenranges:)](https://developer.apple.com/documentation/swift/stringprotocol/linguistictags(in:scheme:options:orthography:tokenranges:))

# linguisticTags(in:scheme:options:orthography:tokenRanges:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of linguistic tags for the specified range and requested tags within the receiving string.

## Declaration

```swift
func linguisticTags<T, R>(in range: R, scheme tagScheme: T, options opts: NSLinguisticTagger.Options = [], orthography: NSOrthography? = nil, tokenRanges: UnsafeMutablePointer<[Range<Self.Index>]>? = nil) -> [String] where T : StringProtocol, R : RangeExpression, R.Bound == String.Index
```
