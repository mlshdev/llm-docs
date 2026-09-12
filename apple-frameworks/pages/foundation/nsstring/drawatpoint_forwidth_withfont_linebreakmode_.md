> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/drawatpoint:forwidth:withfont:linebreakmode:](https://developer.apple.com/documentation/foundation/nsstring/drawatpoint:forwidth:withfont:linebreakmode:)

# drawAtPoint:forWidth:withFont:lineBreakMode:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Draws the string in a single line at the specified point in the current graphics context using the specified font and attributes.

> Use [drawInRect:withAttributes:](draw%28in_withattributes_%29.md) instead.

## Declaration

```objectivec
- (CGSize) drawAtPoint:(CGPoint) point forWidth:(CGFloat) width withFont:(UIFont *) font lineBreakMode:(NSLineBreakMode) lineBreakMode;
```

## Parameters

- `point`: The location (in the coordinate system of the current graphics context) at which to draw the string. This point represents the top-left corner of the string’s bounding box.
- `width`: The maximum width of the string.
- `font`: The font to use for rendering.
- `lineBreakMode`: The line break options for computing the size of the string. For a list of possible values, see [NSLineBreakMode](https://developer.apple.com/documentation/appkit/nslinebreakmode).

<a id="return-value"></a>

## Return Value

The size of the rendered string. The returned values may be rounded up to the nearest whole number.

<a id="Discussion"></a>

## Discussion

This method draws only a single line of text, drawing as much of the string as possible using the given font and constraints. This method does not perform any line wrapping during drawing.

If the value in the `width` parameter is smaller than actual width of the string, truncation may occur. In that situation, the options in the `lineBreakMode` parameter determine where to end the text.

## See Also

### Deprecated

- [stringWithCString:](string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [stringWithCString:length:](string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [stringWithContentsOfFile:](string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.
- [stringWithContentsOfURL:](string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [writeToURL:atomically:](write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters:](getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString](cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString](lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength](cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString:](getcstring%28__%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:](getcstring%28__maxlength_%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md) with `maxLength` as the maximum length in char-sized units, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:range:remainingRange:](getcstring%28__maxlength_range_remaining_%29.md): Deprecated. Converts the receiver’s content to the default C-string encoding and stores them in a given buffer.
- [stringByAddingPercentEscapesUsingEncoding:](addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.
