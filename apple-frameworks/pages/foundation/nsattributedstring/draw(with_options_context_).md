> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/draw(with:options:context:)](https://developer.apple.com/documentation/foundation/nsattributedstring/draw(with:options:context:))

# draw(with:options:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the attributed string in the specified bounding rectangle using the provided options.

## Declaration

```swift
func draw(with rect: CGRect, options: NSStringDrawingOptions = [], context: NSStringDrawingContext?)
```

```swift
func draw(with rect: CGRect, options: NSString.DrawingOptions = [], context: NSStringDrawingContext?)
```

## Parameters

- `rect`: The bounding rectangle in which to draw the string.
- `options`: Additional drawing options to apply to the string during rendering. For a list of possible values, see [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md).
- `context`: A context object with information about how to adjust the font tracking and scaling information. On return, the specified object contains information about the actual values used to render the string. This parameter may be `nil`.

<a id="Discussion"></a>

## Discussion

If [usesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) is specified in `options`, it wraps the string text as needed to make it fit. If the string is too big to fit completely inside the rectangle, the method scales the font or adjusts the letter spacing to make the string fit within the given bounds.

If [usesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) is not specified in `options`, the origin of the rectangle is the baseline of the only line. The text will be displayed above the rectangle and not inside of it. For example, if you specify a rectangle starting at 0,0 and draw the string ‘juxtaposed’, only the descenders of the ‘j’ and ‘p’ will be seen. The rest of the text will be on the top edge of the rectangle.

This method draws the line using the attributes specified in the attributed string itself. If newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either an active graphics context when you call this method.

<a id="Special-Considerations"></a>

### Special Considerations

This method uses the baseline origin by default, so it renders the string as a single line. To render the string in multiple lines, specify [usesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) in `options`.

## See Also

### Drawing the attributed string

- [draw(at:)](draw%28at_%29.md): Draws the attributed string starting at the specified point in the current graphics context.
- [draw(in:)](draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.

# drawWithRect:options:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the attributed string in the specified bounding rectangle using the provided options.

## Declaration

```objectivec
- (void) drawWithRect:(CGRect) rect options:(NSStringDrawingOptions) options context:(NSStringDrawingContext *) context;
```

## Parameters

- `rect`: The bounding rectangle in which to draw the string.
- `options`: Additional drawing options to apply to the string during rendering. For a list of possible values, see [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md).
- `context`: A context object with information about how to adjust the font tracking and scaling information. On return, the specified object contains information about the actual values used to render the string. This parameter may be `nil`.

<a id="Discussion"></a>

## Discussion

If [NSStringDrawingUsesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) is specified in `options`, it wraps the string text as needed to make it fit. If the string is too big to fit completely inside the rectangle, the method scales the font or adjusts the letter spacing to make the string fit within the given bounds.

If [NSStringDrawingUsesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) is not specified in `options`, the origin of the rectangle is the baseline of the only line. The text will be displayed above the rectangle and not inside of it. For example, if you specify a rectangle starting at 0,0 and draw the string ‘juxtaposed’, only the descenders of the ‘j’ and ‘p’ will be seen. The rest of the text will be on the top edge of the rectangle.

This method draws the line using the attributes specified in the attributed string itself. If newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either an active graphics context when you call this method.

<a id="Special-Considerations"></a>

### Special Considerations

This method uses the baseline origin by default, so it renders the string as a single line. To render the string in multiple lines, specify [NSStringDrawingUsesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) in `options`.

## See Also

### Drawing the attributed string

- [drawAtPoint:](draw%28at_%29.md): Draws the attributed string starting at the specified point in the current graphics context.
- [drawInRect:](draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.
