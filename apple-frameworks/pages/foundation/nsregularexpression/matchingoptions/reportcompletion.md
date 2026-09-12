> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/matchingoptions/reportcompletion](https://developer.apple.com/documentation/foundation/nsregularexpression/matchingoptions/reportcompletion)

# reportCompletion (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Call the Block once after the completion of any matching. This option has no effect for methods other than [enumerateMatches(in:options:range:using:)](../enumeratematches%28in_options_range_using_%29.md). See [enumerateMatches(in:options:range:using:)](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.

## Declaration

```swift
static var reportCompletion: NSRegularExpression.MatchingOptions { get }
```

## See Also

### Constants

- [reportProgress](reportprogress.md): Call the Block periodically during long-running match operations. This option has no effect for methods other than [enumerateMatches(in:options:range:using:)](../enumeratematches%28in_options_range_using_%29.md). See [enumerateMatches(in:options:range:using:)](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [anchored](anchored.md): Specifies that matches are limited to those at the start of the search range. See [enumerateMatches(in:options:range:using:)](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [withTransparentBounds](withtransparentbounds.md): Specifies that matching may examine parts of the string beyond the bounds of the search range, for purposes such as word boundary detection, lookahead, etc. This constant has no effect if the search range contains the entire string. See [enumerateMatches(in:options:range:using:)](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [withoutAnchoringBounds](withoutanchoringbounds.md): Specifies that `^` and `$` will not automatically match the beginning and end of the search range, but will still match the beginning and end of the entire string. This constant has no effect if the search range contains the entire string. See [enumerateMatches(in:options:range:using:)](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.

# NSMatchingReportCompletion (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Call the Block once after the completion of any matching. This option has no effect for methods other than [enumerateMatchesInString:options:range:usingBlock:](../enumeratematches%28in_options_range_using_%29.md). See [enumerateMatchesInString:options:range:usingBlock:](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.

## Declaration

```objectivec
NSMatchingReportCompletion
```

## See Also

### Constants

- [NSMatchingReportProgress](reportprogress.md): Call the Block periodically during long-running match operations. This option has no effect for methods other than [enumerateMatchesInString:options:range:usingBlock:](../enumeratematches%28in_options_range_using_%29.md). See [enumerateMatchesInString:options:range:usingBlock:](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [NSMatchingAnchored](anchored.md): Specifies that matches are limited to those at the start of the search range. See [enumerateMatchesInString:options:range:usingBlock:](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [NSMatchingWithTransparentBounds](withtransparentbounds.md): Specifies that matching may examine parts of the string beyond the bounds of the search range, for purposes such as word boundary detection, lookahead, etc. This constant has no effect if the search range contains the entire string. See [enumerateMatchesInString:options:range:usingBlock:](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
- [NSMatchingWithoutAnchoringBounds](withoutanchoringbounds.md): Specifies that `^` and `$` will not automatically match the beginning and end of the search range, but will still match the beginning and end of the entire string. This constant has no effect if the search range contains the entire string. See [enumerateMatchesInString:options:range:usingBlock:](../enumeratematches%28in_options_range_using_%29.md) for a description of the constant in context.
