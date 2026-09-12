> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tags(in:unit:scheme:options:)](https://developer.apple.com/documentation/naturallanguage/nltagger/tags(in:unit:scheme:options:))

# tags(in:unit:scheme:options:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds an array of linguistic tags and token ranges for a given string range and linguistic unit.

## Declaration

```swift
@nonobjc func tags(in range: Range<String.Index>, unit: NLTokenUnit, scheme: NLTagScheme, options: NLTagger.Options = []) -> [(NLTag?, Range<String.Index>)]
```

## Parameters

- `range`: The range from which to return tags.
- `unit`: The linguistic unit. See [NLTokenUnit](../nltokenunit.md) for possible values.
- `scheme`: The tag scheme. See [NLTagScheme](../nltagscheme.md) for possible values.
- `options`: The linguistic tagger options to use. See [NLTagger.Options](options.md) for possible values.

<a id="return-value"></a>

## Return Value

An array of the tags in the requested range.

<a id="Discussion"></a>

## Discussion

When the returned array contains an entry that doesn’t have a corresponding tag scheme, that entry is an empty string (””).

## See Also

### Getting linguistic tags

- [tag(at:unit:scheme:)](tag%28at_unit_scheme_%29.md): Finds a tag for a given linguistic unit, for a single scheme, at the specified character position.
- [tagHypotheses(at:unit:scheme:maximumCount:)](taghypotheses%28at_unit_scheme_maximumcount_%29.md): Finds multiple possible tags for a given linguistic unit, for a single scheme, at the specified character position.
