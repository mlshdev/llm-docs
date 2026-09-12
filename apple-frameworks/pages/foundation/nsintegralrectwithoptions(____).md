> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsintegralrectwithoptions(_:_:)](https://developer.apple.com/documentation/foundation/nsintegralrectwithoptions(_:_:))

# NSIntegralRectWithOptions(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+

Adjusts the sides of a rectangle to integral values using the specified options.

## Declaration

```swift
func NSIntegralRectWithOptions(_ aRect: NSRect, _ opts: AlignmentOptions) -> NSRect
```

<a id="return-value"></a>

## Return Value

A copy of `aRect`, modified based on the options. The options are defined in `NSAlignmentOptions`.

## See Also

### Managing Rectangles

- [NSContainsRect(\_:\_:)](nscontainsrect%28____%29.md): Returns a Boolean value that indicates whether one rectangle completely encloses another.
- [NSDivideRect(\_:\_:\_:\_:\_:)](nsdividerect%28__________%29.md): Divides a rectangle into two new rectangles.
- [NSEqualRects(\_:\_:)](nsequalrects%28____%29.md): Returns a Boolean value that indicates whether the two rectangles are equal.
- [NSIsEmptyRect(\_:)](nsisemptyrect%28__%29.md): Returns a Boolean value that indicates whether a given rectangle is empty.
- [NSHeight(\_:)](nsheight%28__%29.md): Returns the height of a given rectangle.
- [NSInsetRect(\_:\_:\_:)](nsinsetrect%28______%29.md): Insets a rectangle by a specified amount.
- [NSIntegralRect(\_:)](nsintegralrect%28__%29.md): Adjusts the sides of a rectangle to integer values.
- [NSIntersectionRect(\_:\_:)](nsintersectionrect%28____%29.md): Calculates the intersection of two rectangles.
- [NSIntersectsRect(\_:\_:)](nsintersectsrect%28____%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [NSMakeRect(\_:\_:\_:\_:)](nsmakerect%28________%29.md): Creates a new `NSRect` from the specified values.
- [NSMaxX(\_:)](nsmaxx%28__%29.md): Returns the largest x coordinate of a given rectangle.
- [NSMaxY(\_:)](nsmaxy%28__%29.md): Returns the largest y coordinate of a given rectangle.
- [NSMidX(\_:)](nsmidx%28__%29.md): Returns the x coordinate of a given rectangle’s midpoint.
- [NSMidY(\_:)](nsmidy%28__%29.md): Returns the y coordinate of a given rectangle’s midpoint.
- [NSMinX(\_:)](nsminx%28__%29.md): Returns the smallest x coordinate of a given rectangle.

# NSIntegralRectWithOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Adjusts the sides of a rectangle to integral values using the specified options.

## Declaration

```objectivec
extern NSRect NSIntegralRectWithOptions(NSRect aRect, NSAlignmentOptions opts);
```

<a id="return-value"></a>

## Return Value

A copy of `aRect`, modified based on the options. The options are defined in `NSAlignmentOptions`.

## See Also

### Managing Rectangles

- [NSContainsRect](nscontainsrect%28____%29.md): Returns a Boolean value that indicates whether one rectangle completely encloses another.
- [NSDivideRect](nsdividerect%28__________%29.md): Divides a rectangle into two new rectangles.
- [NSEqualRects](nsequalrects%28____%29.md): Returns a Boolean value that indicates whether the two rectangles are equal.
- [NSIsEmptyRect](nsisemptyrect%28__%29.md): Returns a Boolean value that indicates whether a given rectangle is empty.
- [NSHeight](nsheight%28__%29.md): Returns the height of a given rectangle.
- [NSInsetRect](nsinsetrect%28______%29.md): Insets a rectangle by a specified amount.
- [NSIntegralRect](nsintegralrect%28__%29.md): Adjusts the sides of a rectangle to integer values.
- [NSIntersectionRect](nsintersectionrect%28____%29.md): Calculates the intersection of two rectangles.
- [NSIntersectsRect](nsintersectsrect%28____%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [NSMakeRect](nsmakerect%28________%29.md): Creates a new `NSRect` from the specified values.
- [NSMaxX](nsmaxx%28__%29.md): Returns the largest x coordinate of a given rectangle.
- [NSMaxY](nsmaxy%28__%29.md): Returns the largest y coordinate of a given rectangle.
- [NSMidX](nsmidx%28__%29.md): Returns the x coordinate of a given rectangle’s midpoint.
- [NSMidY](nsmidy%28__%29.md): Returns the y coordinate of a given rectangle’s midpoint.
- [NSMinX](nsminx%28__%29.md): Returns the smallest x coordinate of a given rectangle.
