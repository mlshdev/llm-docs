> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/draw(with:options:)](https://developer.apple.com/documentation/foundation/nsattributedstring/draw(with:options:))

# draw(with:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Draws the attributed string with the specified options within the specified rectangle in the current graphics context.

> Use [draw(with:options:context:)](draw%28with_options_context_%29.md) instead.

## Declaration

```swift
func draw(with rect: NSRect, options: NSString.DrawingOptions = [])
```

## Parameters

- `rect`: The rectangle specifies the rendering origin in the current graphics context.
- `options`: The string drawing options. See [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md) for the available options.

<a id="Discussion"></a>

## Discussion

The `rect` argument’s origin field specifies the rendering origin. The point is interpreted as the baseline origin by default. With `NSStringDrawingUsesLineFragmentOrigin`, it is interpreted as the upper left corner of the line fragment rect. The size field specifies the text container size. The width part of the size field specifies the maximum line fragment width if larger than `0.0`. The height defines the maximum size that can be occupied with text if larger than `0.0` and `NSStringDrawingUsesLineFragmentOrigin` is specified. If `NSStringDrawingUsesLineFragmentOrigin` is not specified, height is ignored and considered to be single-line rendering (`NSLineBreakByWordWrapping` and `NSLineBreakByCharWrapping` are treated as `NSLineBreakByClipping`).

You should only invoke this method when there is a current graphics context.

## See Also

### Deprecated Instance Methods

- [url(at:effectiveRange:)](url%28at_effectiverange_%29.md): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.
- [boundingRect(with:options:)](boundingrect%28with_options_%29.md): Deprecated. Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.

# drawWithRect:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Draws the attributed string with the specified options within the specified rectangle in the current graphics context.

> Use [drawWithRect:options:context:](draw%28with_options_context_%29.md) instead.

## Declaration

```objectivec
- (void) drawWithRect:(NSRect) rect options:(NSStringDrawingOptions) options;
```

## Parameters

- `rect`: The rectangle specifies the rendering origin in the current graphics context.
- `options`: The string drawing options. See [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md) for the available options.

<a id="Discussion"></a>

## Discussion

The `rect` argument’s origin field specifies the rendering origin. The point is interpreted as the baseline origin by default. With `NSStringDrawingUsesLineFragmentOrigin`, it is interpreted as the upper left corner of the line fragment rect. The size field specifies the text container size. The width part of the size field specifies the maximum line fragment width if larger than `0.0`. The height defines the maximum size that can be occupied with text if larger than `0.0` and `NSStringDrawingUsesLineFragmentOrigin` is specified. If `NSStringDrawingUsesLineFragmentOrigin` is not specified, height is ignored and considered to be single-line rendering (`NSLineBreakByWordWrapping` and `NSLineBreakByCharWrapping` are treated as `NSLineBreakByClipping`).

You should only invoke this method when there is a current graphics context.

## See Also

### Deprecated Instance Methods

- [URLAtIndex:effectiveRange:](url%28at_effectiverange_%29.md): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.
- [boundingRectWithSize:options:](boundingrect%28with_options_%29.md): Deprecated. Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.
