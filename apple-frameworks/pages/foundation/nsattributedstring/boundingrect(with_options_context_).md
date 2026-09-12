> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/boundingrect(with:options:context:)](https://developer.apple.com/documentation/foundation/nsattributedstring/boundingrect(with:options:context:))

# boundingRect(with:options:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the bounding rectangle necessary to draw the string.

## Declaration

```swift
func boundingRect(with size: CGSize, options: NSStringDrawingOptions = [], context: NSStringDrawingContext?) -> CGRect
```

```swift
func boundingRect(with size: CGSize, options: NSString.DrawingOptions = [], context: NSStringDrawingContext?) -> CGRect
```

## Parameters

- `size`: The width and height constraints to apply when computing the string’s bounding rectangle.
- `options`: Additional drawing options to apply to the string during rendering. For a list of possible values, see [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md).
- `context`: A context object with information about how to adjust the font tracking and scaling information. On return, the specified object contains information about the actual values used to render the string. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

A rectangle whose size component indicates the width and height required to draw the entire contents of the string.

<a id="Discussion"></a>

## Discussion

You can use this method to compute the space required to draw the string. The constraints you specify in the size parameter are a guide for the renderer for how to size the string. However, the actual bounding rectangle returned by this method can be larger than the constraints if additional space is needed to render the entire string. Typically, the renderer preserves the width constraint and adjusts the height constraint as needed.

In iOS 7 and later, this method returns fractional sizes (in the `size` component of the returned rectangle); to use a returned size to size views, you must use raise its value to the nearest higher integer using the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function.

<a id="Special-Considerations"></a>

### Special Considerations

To calculate the bounding rectangle, this method uses the baseline origin by default, so it behaves as a single line. To render the string in multiple lines, specify [usesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) in `options`.

## See Also

### Getting metrics for the string

- [size()](size%28%29.md): Returns the size necessary to draw the string.
- [containsAttachments(in:)](containsattachments%28in_%29.md): Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.

# boundingRectWithSize:options:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the bounding rectangle necessary to draw the string.

## Declaration

```objectivec
- (CGRect) boundingRectWithSize:(CGSize) size options:(NSStringDrawingOptions) options context:(NSStringDrawingContext *) context;
```

## Parameters

- `size`: The width and height constraints to apply when computing the string’s bounding rectangle.
- `options`: Additional drawing options to apply to the string during rendering. For a list of possible values, see [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md).
- `context`: A context object with information about how to adjust the font tracking and scaling information. On return, the specified object contains information about the actual values used to render the string. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

A rectangle whose size component indicates the width and height required to draw the entire contents of the string.

<a id="Discussion"></a>

## Discussion

You can use this method to compute the space required to draw the string. The constraints you specify in the size parameter are a guide for the renderer for how to size the string. However, the actual bounding rectangle returned by this method can be larger than the constraints if additional space is needed to render the entire string. Typically, the renderer preserves the width constraint and adjusts the height constraint as needed.

In iOS 7 and later, this method returns fractional sizes (in the `size` component of the returned rectangle); to use a returned size to size views, you must use raise its value to the nearest higher integer using the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function.

<a id="Special-Considerations"></a>

### Special Considerations

To calculate the bounding rectangle, this method uses the baseline origin by default, so it behaves as a single line. To render the string in multiple lines, specify [NSStringDrawingUsesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) in `options`.

## See Also

### Getting metrics for the string

- [size](size%28%29.md): Returns the size necessary to draw the string.
- [containsAttachmentsInRange:](containsattachments%28in_%29.md): Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.
