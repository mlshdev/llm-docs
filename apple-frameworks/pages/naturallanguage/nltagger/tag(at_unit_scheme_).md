> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tag(at:unit:scheme:)](https://developer.apple.com/documentation/naturallanguage/nltagger/tag(at:unit:scheme:))

# tag(at:unit:scheme:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds a tag for a given linguistic unit, for a single scheme, at the specified character position.

## Declaration

```swift
@nonobjc func tag(at index: String.Index, unit: NLTokenUnit, scheme: NLTagScheme) -> (NLTag?, Range<String.Index>)
```

## Parameters

- `unit`: The linguistic unit. See [NLTokenUnit](../nltokenunit.md) for possible values.
- `scheme`: The tag scheme. See [NLTagScheme](../nltagscheme.md) for possible values.

<a id="return-value"></a>

## Return Value

The tag for the requested tag scheme and linguistic unit, or `nil`. If a tag is returned, this function returns by reference the range of the token to `tokenRange`.

## See Also

### Getting linguistic tags

- [tags(in:unit:scheme:options:)](tags%28in_unit_scheme_options_%29.md): Finds an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tagHypotheses(at:unit:scheme:maximumCount:)](taghypotheses%28at_unit_scheme_maximumcount_%29.md): Finds multiple possible tags for a given linguistic unit, for a single scheme, at the specified character position.
