> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/backgroundrect(forbounds:)](https://developer.apple.com/documentation/uikit/uibutton/backgroundrect(forbounds:))

# backgroundRect(forBounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the rectangle in which the receiver draws its background.

> Use [layoutSubviews()](../uiview/layoutsubviews%28%29.md) instead.

## Declaration

```swift
func backgroundRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The bounds rectangle in which to draw any standard button content.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the value in the `bounds` parameter. This rectangle represents the area in which the button draws its standard background content. Subclasses that provide custom background adornments can override this method and return a modified bounds rectangle to prevent the button from drawing over any custom content.

## See Also

### Dimensions

- [contentRect(forBounds:)](contentrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its entire content.
- [titleRect(forContentRect:)](titlerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its title.
- [imageRect(forContentRect:)](imagerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its image.

# backgroundRectForBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 2.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the rectangle in which the receiver draws its background.

> Use [layoutSubviews](../uiview/layoutsubviews%28%29.md) instead.

## Declaration

```objectivec
- (CGRect) backgroundRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The bounds rectangle in which to draw any standard button content.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the value in the `bounds` parameter. This rectangle represents the area in which the button draws its standard background content. Subclasses that provide custom background adornments can override this method and return a modified bounds rectangle to prevent the button from drawing over any custom content.

## See Also

### Dimensions

- [contentRectForBounds:](contentrect%28forbounds_%29.md): Deprecated. Returns the rectangle in which the receiver draws its entire content.
- [titleRectForContentRect:](titlerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its title.
- [imageRectForContentRect:](imagerect%28forcontentrect_%29.md): Deprecated. Returns the rectangle in which the receiver draws its image.
