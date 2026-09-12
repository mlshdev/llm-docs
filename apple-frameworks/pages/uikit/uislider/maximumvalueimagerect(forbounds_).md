> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/maximumvalueimagerect(forbounds:)](https://developer.apple.com/documentation/uikit/uislider/maximumvalueimagerect(forbounds:))

# maximumValueImageRect(forBounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the drawing rectangle for the maximum value image.

## Declaration

```swift
func maximumValueImageRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the image.

<a id="Discussion"></a>

## Discussion

You do not call this method directly. Instead, you override it when you want to customize the rectangle in which the maximum value image is drawn, returning a different rectangle. If you make x-axis adjustments, be sure to take into account the automatic flipping of [maximumValueImage](maximumvalueimage.md) in a right-to-left user interface; the maximum image is always shown at the trailing end of the slider’s track. See the [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i) for further information about supporting right-to-left languages.

## See Also

### Overrides for subclasses

- [minimumValueImageRect(forBounds:)](minimumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the minimum value image.
- [trackRect(forBounds:)](trackrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [thumbRect(forBounds:trackRect:value:)](thumbrect%28forbounds_trackrect_value_%29.md): Returns the drawing rectangle for the slider’s thumb image.

# maximumValueImageRectForBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the drawing rectangle for the maximum value image.

## Declaration

```objectivec
- (CGRect) maximumValueImageRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the image.

<a id="Discussion"></a>

## Discussion

You do not call this method directly. Instead, you override it when you want to customize the rectangle in which the maximum value image is drawn, returning a different rectangle. If you make x-axis adjustments, be sure to take into account the automatic flipping of [maximumValueImage](maximumvalueimage.md) in a right-to-left user interface; the maximum image is always shown at the trailing end of the slider’s track. See the [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i) for further information about supporting right-to-left languages.

## See Also

### Overrides for subclasses

- [minimumValueImageRectForBounds:](minimumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the minimum value image.
- [trackRectForBounds:](trackrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [thumbRectForBounds:trackRect:value:](thumbrect%28forbounds_trackrect_value_%29.md): Returns the drawing rectangle for the slider’s thumb image.
