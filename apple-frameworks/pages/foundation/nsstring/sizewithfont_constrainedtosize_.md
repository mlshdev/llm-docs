> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/sizewithfont:constrainedtosize:](https://developer.apple.com/documentation/foundation/nsstring/sizewithfont:constrainedtosize:)

# sizeWithFont:constrainedToSize:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the size of the string if it were rendered and constrained to the specified size.

> Use [boundingRectWithSize:options:attributes:context:](boundingrect%28with_options_attributes_context_%29.md) instead. See also [UILabel](../../uikit/uilabel.md) as a possible alternative for some use cases.

## Declaration

```objectivec
- (CGSize) sizeWithFont:(UIFont *) font constrainedToSize:(CGSize) size;
```

## Parameters

- `font`: The font to use for computing the string size.
- `size`: The maximum acceptable size for the string. This value is used to calculate where line breaks and wrapping would occur.

<a id="return-value"></a>

## Return Value

The width and height of the resulting string’s bounding box. These values may be rounded up to the nearest whole number.

<a id="Discussion"></a>

## Discussion

You can use this method to obtain the layout metrics you need to draw a string in your user interface. This method does not actually draw the string or alter the receiver’s text in any way.

This method computes the metrics needed to draw the specified string. This method lays out the receiver’s text and attempts to make it fit the specified size using the specified font and the [NSLineBreakByWordWrapping](https://developer.apple.com/documentation/appkit/nslinebreakmode/bywordwrapping) line break option. During layout, the method may break the text onto multiple lines to make it fit better. If the receiver’s text does not completely fit in the specified size, it lays out as much of the text as possible and truncates it (for layout purposes only) according to the specified line break mode. It then returns the size of the resulting truncated string. If the height specified in the `size` parameter is less than a single line of text, this method may return a height value that is bigger than the one specified.

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
