> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/trackrect(forbounds:)](https://developer.apple.com/documentation/uikit/uislider/trackrect(forbounds:))

# trackRect(forBounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the drawing rectangle for the slider’s track.

## Declaration

```swift
func trackRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the track. This rectangle corresponds to the entire length of the track between the minimum and maximum value images.

<a id="Discussion"></a>

## Discussion

You do not call this method directly. Instead, you override it when you want to customize the track rectangle, returning a different rectangle. The returned rectangle is used to scale the track and thumb images during drawing.

## See Also

### Overrides for subclasses

- [maximumValueImageRect(forBounds:)](maximumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the maximum value image.
- [minimumValueImageRect(forBounds:)](minimumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the minimum value image.
- [thumbRect(forBounds:trackRect:value:)](thumbrect%28forbounds_trackrect_value_%29.md): Returns the drawing rectangle for the slider’s thumb image.

# trackRectForBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the drawing rectangle for the slider’s track.

## Declaration

```objectivec
- (CGRect) trackRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the slider.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the track. This rectangle corresponds to the entire length of the track between the minimum and maximum value images.

<a id="Discussion"></a>

## Discussion

You do not call this method directly. Instead, you override it when you want to customize the track rectangle, returning a different rectangle. The returned rectangle is used to scale the track and thumb images during drawing.

## See Also

### Overrides for subclasses

- [maximumValueImageRectForBounds:](maximumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the maximum value image.
- [minimumValueImageRectForBounds:](minimumvalueimagerect%28forbounds_%29.md): Returns the drawing rectangle for the minimum value image.
- [thumbRectForBounds:trackRect:value:](thumbrect%28forbounds_trackrect_value_%29.md): Returns the drawing rectangle for the slider’s thumb image.
