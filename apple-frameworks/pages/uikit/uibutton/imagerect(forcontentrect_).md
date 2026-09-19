> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibutton/imagerect(forcontentrect:)

# imageRect(forContentRect:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the rectangle in which the receiver draws its image.

> Use [layoutSubviews()](../uiview/layoutsubviews%28%29.md) instead.

## Declaration

```swift
func imageRect(forContentRect contentRect: CGRect) -> CGRect
```

## Parameters

- `contentRect`: The content rectangle for the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its image.

## See Also

### Dimensions

- [backgroundRect(forBounds:)](backgroundrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its background.
- [contentRect(forBounds:)](contentrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its entire content.
- [titleRect(forContentRect:)](titlerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its title.

# imageRectForContentRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the rectangle in which the receiver draws its image.

> Use [layoutSubviews](../uiview/layoutsubviews%28%29.md) instead.

## Declaration

```objectivec
- (CGRect) imageRectForContentRect:(CGRect) contentRect;
```

## Parameters

- `contentRect`: The content rectangle for the receiver.

<a id="return-value"></a>

## Return Value

The rectangle in which the receiver draws its image.

## See Also

### Dimensions

- [backgroundRectForBounds:](backgroundrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its background.
- [contentRectForBounds:](contentrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its entire content.
- [titleRectForContentRect:](titlerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its title.
