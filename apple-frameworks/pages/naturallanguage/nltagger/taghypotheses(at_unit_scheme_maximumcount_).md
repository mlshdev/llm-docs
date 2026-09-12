> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/taghypotheses(at:unit:scheme:maximumcount:)](https://developer.apple.com/documentation/naturallanguage/nltagger/taghypotheses(at:unit:scheme:maximumcount:))

# tagHypotheses(at:unit:scheme:maximumCount:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Finds multiple possible tags for a given linguistic unit, for a single scheme, at the specified character position.

## Declaration

```swift
@nonobjc func tagHypotheses(at index: String.Index, unit: NLTokenUnit, scheme: NLTagScheme, maximumCount: Int) -> ([String : Double], Range<String.Index>)
```

## Parameters

- `index`: The position of the initial character.
- `unit`: The linguistic unit. See [NLTokenUnit](../nltokenunit.md) for possible values.
- `scheme`: The tag scheme. See [NLTagScheme](../nltagscheme.md) for possible values. Not all tag schemes produce more than one prediction.
- `maximumCount`: The maximum number of tag predictions to return.

<a id="return-value"></a>

## Return Value

A tuple containing a dictionary and a range.

<a id="discussion"></a>

## Discussion

Each dictionary entry is a predicted tag with its associated probability score. These tags are the top candidates proposed as possible tags for the token. The dictionary contains up to `maximumCount` entries.

The range contains the range of the individual token for which these tags were produced.

## See Also

### Getting linguistic tags

- [tags(in:unit:scheme:options:)](tags%28in_unit_scheme_options_%29.md): Finds an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tag(at:unit:scheme:)](tag%28at_unit_scheme_%29.md): Finds a tag for a given linguistic unit, for a single scheme, at the specified character position.
