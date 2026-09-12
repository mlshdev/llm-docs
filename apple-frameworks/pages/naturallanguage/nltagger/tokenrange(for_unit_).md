> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tokenrange(for:unit:)](https://developer.apple.com/documentation/naturallanguage/nltagger/tokenrange(for:unit:))

# tokenRange(for:unit:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Finds the entire range of all tokens of the specified linguistic unit contained completely or partially within the specified range.

## Declaration

```swift
@nonobjc func tokenRange(for range: Range<String.Index>, unit: NLTokenUnit) -> Range<String.Index>
```

## Parameters

- `range`: The range within the string to search for tokens.
- `unit`: The linguistic unit. For possible values, see [NLTokenUnit](../nltokenunit.md).

<a id="return-value"></a>

## Return Value

The smallest possible range that contains all of the tokens of the specified linguistic unit within the range specified in `range`. This result includes a token’s entire range if any part of that token is included within `range`. If the length of `range` is 0, this return value is equivalent to [tokenRangeAtIndex:unit:](tokenrangeatindex_unit_.md).

## See Also

### Determining the range of a unit token

- [tokenRange(at:unit:)](tokenrange%28at_unit_%29.md): Returns the range of the linguistic unit containing the specified character index.
- [NLTokenUnit](../nltokenunit.md): Constants representing linguistic units.
