> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/anchorsmatchlineendings(_:)](https://developer.apple.com/documentation/swift/regex/anchorsmatchlineendings(_:))

# anchorsMatchLineEndings(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a regular expression where the start and end of input anchors (`^` and `$`) also match against the start and end of a line.

## Declaration

```swift
func anchorsMatchLineEndings(_ matchLineEndings: Bool = true) -> Regex<Regex<Output>.RegexOutput>
```

## Parameters

- `matchLineEndings`: A Boolean value indicating whether `^` and `$` should match the start and end of lines, respectively.

<a id="return-value"></a>

## Return Value

The modified regular expression.

<a id="discussion"></a>

## Discussion

This method corresponds to applying the `m` option in regex syntax. For this behavior in the `RegexBuilder` syntax, see `Anchor.startOfLine`, `Anchor.endOfLine`, `Anchor.startOfSubject`, and `Anchor.endOfSubject`.
