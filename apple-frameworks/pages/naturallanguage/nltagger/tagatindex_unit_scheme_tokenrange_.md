> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tagatindex:unit:scheme:tokenrange:](https://developer.apple.com/documentation/naturallanguage/nltagger/tagatindex:unit:scheme:tokenrange:)

# tagAtIndex:unit:scheme:tokenRange:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Finds a tag for a given linguistic unit, for a single scheme, at the specified character position.

## Declaration

```objectivec
- (NLTag) tagAtIndex:(NSUInteger) characterIndex unit:(NLTokenUnit) unit scheme:(NLTagScheme) scheme tokenRange:(NSRangePointer) tokenRange;
```

## Parameters

- `characterIndex`: The position of the initial character.
- `unit`: The linguistic unit. See [NLTokenUnit](../nltokenunit.md) for possible values.
- `scheme`: The tag scheme. See [NLTagScheme](../nltagscheme.md) for possible values.
- `tokenRange`: A pointer to the token range.

<a id="return-value"></a>

## Return Value

The tag for the requested tag scheme and linguistic unit, or `nil`. If a tag is returned, this function returns by reference the range of the token to `tokenRange`.

## See Also

### Getting linguistic tags

- [tagsInRange:unit:scheme:options:tokenRanges:](tagsinrange_unit_scheme_options_tokenranges_.md): Finds an array of linguistic tags and token ranges for a given string range and linguistic unit.
- [tagHypothesesAtIndex:unit:scheme:maximumCount:tokenRange:](taghypothesesatindex_unit_scheme_maximumcount_tokenrange_.md): Finds multiple possible tags for a given linguistic unit, for a single scheme, at the specified character position.
