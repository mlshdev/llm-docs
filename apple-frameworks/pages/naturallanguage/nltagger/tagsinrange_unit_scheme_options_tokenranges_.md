> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tagsinrange:unit:scheme:options:tokenranges:](https://developer.apple.com/documentation/naturallanguage/nltagger/tagsinrange:unit:scheme:options:tokenranges:)

# tagsInRange:unit:scheme:options:tokenRanges:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds an array of linguistic tags and token ranges for a given string range and linguistic unit.

## Declaration

```objectivec
- (NSArray<NSString *> *) tagsInRange:(NSRange) range unit:(NLTokenUnit) unit scheme:(NLTagScheme) scheme options:(NLTaggerOptions) options tokenRanges:(NSArray<NSValue *> **) tokenRanges;
```

## Parameters

- `range`: The range from which to return tags.
- `unit`: The linguistic unit. See [NLTokenUnit](../nltokenunit.md) for possible values.
- `scheme`: The tag scheme. See [NLTagScheme](../nltagscheme.md) for possible values.
- `options`: The linguistic tagger options to use. See [NLTaggerOptions](options.md) for possible values.
- `tokenRanges`: Returns by reference an array of token ranges.

<a id="return-value"></a>

## Return Value

An array of the tags in the requested range.

<a id="Discussion"></a>

## Discussion

When the returned array contains an entry that doesn’t have a corresponding tag scheme, that entry is an empty string (””).

## See Also

### Getting linguistic tags

- [tagAtIndex:unit:scheme:tokenRange:](tagatindex_unit_scheme_tokenrange_.md): Finds a tag for a given linguistic unit, for a single scheme, at the specified character position.
- [tagHypothesesAtIndex:unit:scheme:maximumCount:tokenRange:](taghypothesesatindex_unit_scheme_maximumcount_tokenrange_.md): Finds multiple possible tags for a given linguistic unit, for a single scheme, at the specified character position.
