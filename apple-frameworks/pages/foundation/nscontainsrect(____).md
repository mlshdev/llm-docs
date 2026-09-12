> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscontainsrect(_:_:)](https://developer.apple.com/documentation/foundation/nscontainsrect(_:_:))

# NSContainsRect(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value that indicates whether one rectangle completely encloses another.

## Declaration

```swift
func NSContainsRect(_ aRect: NSRect, _ bRect: NSRect) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aRect` completely encloses `bRect`. For this condition to be true, `bRect` cannot be empty, and must not extend beyond `aRect` in any direction.

## See Also

### Managing Rectangles

- [NSDivideRect(\_:\_:\_:\_:\_:)](nsdividerect%28__________%29.md): Divides a rectangle into two new rectangles.
- [NSEqualRects(\_:\_:)](nsequalrects%28____%29.md): Returns a Boolean value that indicates whether the two rectangles are equal.
- [NSIsEmptyRect(\_:)](nsisemptyrect%28__%29.md): Returns a Boolean value that indicates whether a given rectangle is empty.
- [NSHeight(\_:)](nsheight%28__%29.md): Returns the height of a given rectangle.
- [NSInsetRect(\_:\_:\_:)](nsinsetrect%28______%29.md): Insets a rectangle by a specified amount.
- [NSIntegralRect(\_:)](nsintegralrect%28__%29.md): Adjusts the sides of a rectangle to integer values.
- [NSIntegralRectWithOptions(\_:\_:)](nsintegralrectwithoptions%28____%29.md): Adjusts the sides of a rectangle to integral values using the specified options.
- [NSIntersectionRect(\_:\_:)](nsintersectionrect%28____%29.md): Calculates the intersection of two rectangles.
- [NSIntersectsRect(\_:\_:)](nsintersectsrect%28____%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [NSMakeRect(\_:\_:\_:\_:)](nsmakerect%28________%29.md): Creates a new `NSRect` from the specified values.
- [NSMaxX(\_:)](nsmaxx%28__%29.md): Returns the largest x coordinate of a given rectangle.
- [NSMaxY(\_:)](nsmaxy%28__%29.md): Returns the largest y coordinate of a given rectangle.
- [NSMidX(\_:)](nsmidx%28__%29.md): Returns the x coordinate of a given rectangle’s midpoint.
- [NSMidY(\_:)](nsmidy%28__%29.md): Returns the y coordinate of a given rectangle’s midpoint.
- [NSMinX(\_:)](nsminx%28__%29.md): Returns the smallest x coordinate of a given rectangle.

# NSContainsRect (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value that indicates whether one rectangle completely encloses another.

## Declaration

```objectivec
extern BOOL NSContainsRect(NSRect aRect, NSRect bRect);
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aRect` completely encloses `bRect`. For this condition to be true, `bRect` cannot be empty, and must not extend beyond `aRect` in any direction.

## See Also

### Managing Rectangles

- [NSDivideRect](nsdividerect%28__________%29.md): Divides a rectangle into two new rectangles.
- [NSEqualRects](nsequalrects%28____%29.md): Returns a Boolean value that indicates whether the two rectangles are equal.
- [NSIsEmptyRect](nsisemptyrect%28__%29.md): Returns a Boolean value that indicates whether a given rectangle is empty.
- [NSHeight](nsheight%28__%29.md): Returns the height of a given rectangle.
- [NSInsetRect](nsinsetrect%28______%29.md): Insets a rectangle by a specified amount.
- [NSIntegralRect](nsintegralrect%28__%29.md): Adjusts the sides of a rectangle to integer values.
- [NSIntegralRectWithOptions](nsintegralrectwithoptions%28____%29.md): Adjusts the sides of a rectangle to integral values using the specified options.
- [NSIntersectionRect](nsintersectionrect%28____%29.md): Calculates the intersection of two rectangles.
- [NSIntersectsRect](nsintersectsrect%28____%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [NSMakeRect](nsmakerect%28________%29.md): Creates a new `NSRect` from the specified values.
- [NSMaxX](nsmaxx%28__%29.md): Returns the largest x coordinate of a given rectangle.
- [NSMaxY](nsmaxy%28__%29.md): Returns the largest y coordinate of a given rectangle.
- [NSMidX](nsmidx%28__%29.md): Returns the x coordinate of a given rectangle’s midpoint.
- [NSMidY](nsmidy%28__%29.md): Returns the y coordinate of a given rectangle’s midpoint.
- [NSMinX](nsminx%28__%29.md): Returns the smallest x coordinate of a given rectangle.
