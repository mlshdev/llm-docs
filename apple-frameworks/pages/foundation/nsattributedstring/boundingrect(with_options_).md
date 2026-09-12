> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/boundingrect(with:options:)](https://developer.apple.com/documentation/foundation/nsattributedstring/boundingrect(with:options:))

# boundingRect(with:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.

> Use [boundingRect(with:options:context:)](boundingrect%28with_options_context_%29.md) instead.

## Declaration

```swift
func boundingRect(with size: NSSize, options: NSString.DrawingOptions = []) -> NSRect
```

## Parameters

- `size`: The size of the rectangle to draw in.
- `options`: The string drawing options. See [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md) for the possible values.

<a id="return-value"></a>

## Return Value

The bounding rectangle in the current graphics context.

<a id="Discussion"></a>

## Discussion

The origin of the rectangle returned from this method is the first glyph origin.

## See Also

### Deprecated Instance Methods

- [url(at:effectiveRange:)](url%28at_effectiverange_%29.md): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.
- [draw(with:options:)](draw%28with_options_%29.md): Deprecated. Draws the attributed string with the specified options within the specified rectangle in the current graphics context.

# boundingRectWithSize:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.

> Use [boundingRectWithSize:options:context:](boundingrect%28with_options_context_%29.md) instead.

## Declaration

```objectivec
- (NSRect) boundingRectWithSize:(NSSize) size options:(NSStringDrawingOptions) options;
```

## Parameters

- `size`: The size of the rectangle to draw in.
- `options`: The string drawing options. See [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md) for the possible values.

<a id="return-value"></a>

## Return Value

The bounding rectangle in the current graphics context.

<a id="Discussion"></a>

## Discussion

The origin of the rectangle returned from this method is the first glyph origin.

## See Also

### Deprecated Instance Methods

- [URLAtIndex:effectiveRange:](url%28at_effectiverange_%29.md): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.
- [drawWithRect:options:](draw%28with_options_%29.md): Deprecated. Draws the attributed string with the specified options within the specified rectangle in the current graphics context.
