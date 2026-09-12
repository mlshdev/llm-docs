> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/contentrect(forbounds:)](https://developer.apple.com/documentation/uikit/uibutton/contentrect(forbounds:))

# contentRect(forBounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the rectangle in which the receiver draws its entire content.

> Use [layoutSubviews()](../uiview/layoutsubviews%28%29.md) instead.

## Declaration

```swift
func contentRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle for the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its entire content.

<a id="Discussion"></a>

## Discussion

The content rectangle is the area needed to display the image and title including any padding and adjustments for alignment and other settings.

## See Also

### Related Documentation

- [contentEdgeInsets](contentedgeinsets.md): Deprecated. The inset or outset margins for the rectangle surrounding all of the button’s content.

### Dimensions

- [backgroundRect(forBounds:)](backgroundrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its background.
- [titleRect(forContentRect:)](titlerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its title.
- [imageRect(forContentRect:)](imagerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its image.

# contentRectForBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the rectangle in which the receiver draws its entire content.

> Use [layoutSubviews](../uiview/layoutsubviews%28%29.md) instead.

## Declaration

```objectivec
- (CGRect) contentRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle for the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its entire content.

<a id="Discussion"></a>

## Discussion

The content rectangle is the area needed to display the image and title including any padding and adjustments for alignment and other settings.

## See Also

### Related Documentation

- [contentEdgeInsets](contentedgeinsets.md): Deprecated. The inset or outset margins for the rectangle surrounding all of the button’s content.

### Dimensions

- [backgroundRectForBounds:](backgroundrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its background.
- [titleRectForContentRect:](titlerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its title.
- [imageRectForContentRect:](imagerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its image.
