> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tokenrangeatindex:unit:](https://developer.apple.com/documentation/naturallanguage/nltagger/tokenrangeatindex:unit:)

# tokenRangeAtIndex:unit:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the range of the linguistic unit containing the specified character index.

## Declaration

```objectivec
- (NSRange) tokenRangeAtIndex:(NSUInteger) characterIndex unit:(NLTokenUnit) unit;
```

## Parameters

- `characterIndex`: The character index to begin examination.
- `unit`: The linguistic unit. For possible values, see [NLTokenUnit](../nltokenunit.md).

<a id="return-value"></a>

## Return Value

The range of the substring for the linguistic unit.

## See Also

### Determining the range of a unit token

- [tokenRangeForRange:unit:](tokenrangeforrange_unit_.md): Finds the entire range of all tokens of the specified linguistic unit contained completely or partially within the specified range.
- [NLTokenUnit](../nltokenunit.md): Constants representing linguistic units.
