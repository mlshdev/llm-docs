> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tokenrange(at:unit:)](https://developer.apple.com/documentation/naturallanguage/nltagger/tokenrange(at:unit:))

# tokenRange(at:unit:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the range of the linguistic unit containing the specified character index.

## Declaration

```swift
@nonobjc func tokenRange(at index: String.Index, unit: NLTokenUnit) -> Range<String.Index>
```

## Parameters

- `unit`: The linguistic unit. For possible values, see [NLTokenUnit](../nltokenunit.md).

<a id="return-value"></a>

## Return Value

The range of the substring for the linguistic unit.

## See Also

### Determining the range of a unit token

- [tokenRange(for:unit:)](tokenrange%28for_unit_%29.md): Finds the entire range of all tokens of the specified linguistic unit contained completely or partially within the specified range.
- [NLTokenUnit](../nltokenunit.md): Constants representing linguistic units.
