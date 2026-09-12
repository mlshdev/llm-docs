> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/thumbrect(forbounds:trackrect:value:)](https://developer.apple.com/documentation/uikit/uislider/thumbrect(forbounds:trackrect:value:))

# thumbRect(forBounds:trackRect:value:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the drawing rectangle for the slider’s thumb image.

## Declaration

```swift
func thumbRect(forBounds bounds: CGRect, trackRect rect: CGRect, value: Float) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the slider.
- `rect`: The drawing rectangle for the slider’s track, as returned by the [trackRect(forBounds:)](trackrect%28forbounds_%29.md) method.
- `value`: The current value of the slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the thumb image.

<a id="Discussion"></a>

## Discussion

You do not call this method directly. Instead, you override it when you want to customize the thumb image’s drawing rectangle, returning a different rectangle. The rectangle you return must reflect the size of your thumb image and its current position on the slider’s track.

## See Also

### Overrides for subclasses

- [maximumValueImageRect(forBounds:)](maximumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the maximum value image.
- [minimumValueImageRect(forBounds:)](minimumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the minimum value image.
- [trackRect(forBounds:)](trackrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.

# thumbRectForBounds:trackRect:value: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the drawing rectangle for the slider’s thumb image.

## Declaration

```objectivec
- (CGRect) thumbRectForBounds:(CGRect) bounds trackRect:(CGRect) rect value:(float) value;
```

## Parameters

- `bounds`: The bounding rectangle of the slider.
- `rect`: The drawing rectangle for the slider’s track, as returned by the [trackRectForBounds:](trackrect%28forbounds_%29.md) method.
- `value`: The current value of the slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the thumb image.

<a id="Discussion"></a>

## Discussion

You do not call this method directly. Instead, you override it when you want to customize the thumb image’s drawing rectangle, returning a different rectangle. The rectangle you return must reflect the size of your thumb image and its current position on the slider’s track.

## See Also

### Overrides for subclasses

- [maximumValueImageRectForBounds:](maximumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the maximum value image.
- [minimumValueImageRectForBounds:](minimumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the minimum value image.
- [trackRectForBounds:](trackrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
