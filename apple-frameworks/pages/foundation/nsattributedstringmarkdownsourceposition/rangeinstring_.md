> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsattributedstringmarkdownsourceposition/rangeinstring:

# rangeInString:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a range indicating the source portion within a Markdown string.

## Declaration

```objectivec
- (NSRange) rangeInString:(NSString *) string;
```

## Parameters

- `string`: The Markdown source string that this source position object refers to.

<a id="return-value"></a>

## Return Value

A range that represents the source portion within a source Markdown string.

<a id="Discussion"></a>

## Discussion

Use this method to access the marked-up region of `string` with an NSRange, rather than making manual calculations based on row and column values.
