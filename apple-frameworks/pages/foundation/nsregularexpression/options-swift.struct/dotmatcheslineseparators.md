> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/options-swift.struct/dotmatcheslineseparators](https://developer.apple.com/documentation/foundation/nsregularexpression/options-swift.struct/dotmatcheslineseparators)

# dotMatchesLineSeparators (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allow `.` to match any character, including line separators.

## Declaration

```swift
static var dotMatchesLineSeparators: NSRegularExpression.Options { get }
```

## See Also

### Constants

- [caseInsensitive](caseinsensitive.md): Match letters in the pattern independent of case.
- [allowCommentsAndWhitespace](allowcommentsandwhitespace.md): Ignore whitespace and #-prefixed comments in the pattern.
- [ignoreMetacharacters](ignoremetacharacters.md): Treat the entire pattern as a literal string.
- [anchorsMatchLines](anchorsmatchlines.md): Allow `^` and `$` to match the start and end of lines.
- [useUnixLineSeparators](useunixlineseparators.md): Treat only `\n` as a line separator (otherwise, all standard line separators are used).
- [useUnicodeWordBoundaries](useunicodewordboundaries.md): Use Unicode `TR#29` to specify word boundaries (otherwise, traditional regular expression word boundaries are used).

# NSRegularExpressionDotMatchesLineSeparators (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allow `.` to match any character, including line separators.

## Declaration

```objectivec
NSRegularExpressionDotMatchesLineSeparators
```

## See Also

### Constants

- [NSRegularExpressionCaseInsensitive](caseinsensitive.md): Match letters in the pattern independent of case.
- [NSRegularExpressionAllowCommentsAndWhitespace](allowcommentsandwhitespace.md): Ignore whitespace and #-prefixed comments in the pattern.
- [NSRegularExpressionIgnoreMetacharacters](ignoremetacharacters.md): Treat the entire pattern as a literal string.
- [NSRegularExpressionAnchorsMatchLines](anchorsmatchlines.md): Allow `^` and `$` to match the start and end of lines.
- [NSRegularExpressionUseUnixLineSeparators](useunixlineseparators.md): Treat only `\n` as a line separator (otherwise, all standard line separators are used).
- [NSRegularExpressionUseUnicodeWordBoundaries](useunicodewordboundaries.md): Use Unicode `TR#29` to specify word boundaries (otherwise, traditional regular expression word boundaries are used).
