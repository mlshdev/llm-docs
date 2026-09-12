> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinecreatetruncatedline(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctlinecreatetruncatedline(_:_:_:_:))

# CTLineCreateTruncatedLine(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a truncated line from an existing line.

## Declaration

```swift
func CTLineCreateTruncatedLine(_ line: CTLine, _ width: Double, _ truncationType: CTLineTruncationType, _ truncationToken: CTLine?) -> CTLine?
```

## Parameters

- `line`: The line from which to create a truncated line.
- `width`: The width at which truncation begins. The line is truncated if its width is greater than the width passed in this parameter.
- `truncationType`: The type of truncation to perform if needed. See [CTLineTruncationType](ctlinetruncationtype.md) for possible values.
- `truncationToken`: This token is added at the point where truncation took place, to indicate that the line was truncated. Usually, the truncation token is the ellipsis character (`U+2026`). If this parameter is set to `NULL`, then no truncation token is used and the line is simply cut off.

<a id="return-value"></a>

## Return Value

A reference to a truncated CTLine object if the call was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

The line specified in `truncationToken` should have a width less than the width specified by the `width` parameter. If the width of the line specified in `truncationToken` is greater than `width` and truncation is needed, the function returns `NULL`.

## See Also

### Creating Lines

- [CTLineCreateWithAttributedString(\_:)](ctlinecreatewithattributedstring%28__%29.md): Creates a single immutable line object from an attributed string.
- [CTLineCreateJustifiedLine(\_:\_:\_:)](ctlinecreatejustifiedline%28______%29.md): Creates a justified line from an existing line.

# CTLineCreateTruncatedLine (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a truncated line from an existing line.

## Declaration

```objectivec
extern CTLineRefCTLineCreateTruncatedLine(CTLineRef line, double width, CTLineTruncationType truncationType, CTLineRef truncationToken);
```

## Parameters

- `line`: The line from which to create a truncated line.
- `width`: The width at which truncation begins. The line is truncated if its width is greater than the width passed in this parameter.
- `truncationType`: The type of truncation to perform if needed. See [CTLineTruncationType](ctlinetruncationtype.md) for possible values.
- `truncationToken`: This token is added at the point where truncation took place, to indicate that the line was truncated. Usually, the truncation token is the ellipsis character (`U+2026`). If this parameter is set to `NULL`, then no truncation token is used and the line is simply cut off.

<a id="return-value"></a>

## Return Value

A reference to a truncated CTLine object if the call was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

The line specified in `truncationToken` should have a width less than the width specified by the `width` parameter. If the width of the line specified in `truncationToken` is greater than `width` and truncation is needed, the function returns `NULL`.

## See Also

### Creating Lines

- [CTLineCreateWithAttributedString](ctlinecreatewithattributedstring%28__%29.md): Creates a single immutable line object from an attributed string.
- [CTLineCreateJustifiedLine](ctlinecreatejustifiedline%28______%29.md): Creates a justified line from an existing line.
