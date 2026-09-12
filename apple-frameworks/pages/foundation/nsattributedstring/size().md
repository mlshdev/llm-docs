> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/size()](https://developer.apple.com/documentation/foundation/nsattributedstring/size())

# size() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the size necessary to draw the string.

## Declaration

```swift
func size() -> CGSize
```

<a id="return-value"></a>

## Return Value

The minimum size required to draw the entire contents of the string.

<a id="Discussion"></a>

## Discussion

You can use this method prior to drawing to compute how much space is required to draw the string.

This method may return fractional sizes. When setting the size of your view, use the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function to round fractional values up to the nearest whole number.

## See Also

### Related Documentation

- [draw(at:)](draw%28at_%29.md): Draws the attributed string starting at the specified point in the current graphics context.
- [draw(in:)](draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.

### Getting metrics for the string

- [boundingRect(with:options:context:)](boundingrect%28with_options_context_%29.md): Returns the bounding rectangle necessary to draw the string.
- [containsAttachments(in:)](containsattachments%28in_%29.md): Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.

# size (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the size necessary to draw the string.

## Declaration

```objectivec
- (CGSize) size;
```

<a id="return-value"></a>

## Return Value

The minimum size required to draw the entire contents of the string.

<a id="Discussion"></a>

## Discussion

You can use this method prior to drawing to compute how much space is required to draw the string.

This method may return fractional sizes. When setting the size of your view, use the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function to round fractional values up to the nearest whole number.

## See Also

### Related Documentation

- [drawAtPoint:](draw%28at_%29.md): Draws the attributed string starting at the specified point in the current graphics context.
- [drawInRect:](draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.

### Getting metrics for the string

- [boundingRectWithSize:options:context:](boundingrect%28with_options_context_%29.md): Returns the bounding rectangle necessary to draw the string.
- [containsAttachmentsInRange:](containsattachments%28in_%29.md): Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.
