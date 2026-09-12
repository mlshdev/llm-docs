> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/sizewithfont:minfontsize:actualfontsize:forwidth:linebreakmode:](https://developer.apple.com/documentation/foundation/nsstring/sizewithfont:minfontsize:actualfontsize:forwidth:linebreakmode:)

# sizeWithFont:minFontSize:actualFontSize:forWidth:lineBreakMode:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the size of the string if it were rendered with the specified constraints, including a variable font size, on a single line.

> There is no exact alternative for this method. Human interface guidelines discourage changing the font size this way because it leads to an inconsistent user experience. See [UILabel](../../uikit/uilabel.md) as a possible alternative for some use cases.

## Declaration

```objectivec
- (CGSize) sizeWithFont:(UIFont *) font minFontSize:(CGFloat) minFontSize actualFontSize:(CGFloat *) actualFontSize forWidth:(CGFloat) width lineBreakMode:(NSLineBreakMode) lineBreakMode;
```

## Parameters

- `font`: The font to use for computing the string size.
- `minFontSize`: The minimum size to which the font may be reduced before resorting to truncation of the text.
- `actualFontSize`: On input, a pointer to a floating-point value. On return, this value contains the actual font size that was used to compute the size of the string.
- `width`: The maximum acceptable width for the string. This value is used to calculate where line breaks would be placed.
- `lineBreakMode`: The line break options for computing the size of the string. For a list of possible values, see [NSLineBreakMode](https://developer.apple.com/documentation/appkit/nslinebreakmode).

<a id="return-value"></a>

## Return Value

The width and height of the resulting string’s bounding box. These values may be rounded up to the nearest whole number.

<a id="Discussion"></a>

## Discussion

You can use this method to obtain the layout metrics you need to draw a string in your user interface. This method does not actually draw the string or alter the receiver’s text in any way.

Although it computes where line breaks would occur, this method does not actually wrap the text to additional lines. If the entire string does not fit within the given width using the initial font size, this method reduces the font size until the string does fit or until it reaches the specified minimum font size. If it reaches the minimum font size, the method begins truncating the text (for layout purposes only) until the resulting truncated string fits the width; it then returns the size of that truncated string.

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
