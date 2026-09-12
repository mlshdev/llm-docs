> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/convertrect(toimagerect:)](https://developer.apple.com/documentation/quartz/ikimageview/convertrect(toimagerect:))

# convertRect(toImageRect:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image view rectangle to an image rectangle.

## Declaration

```swift
func convertRect(toImageRect viewRect: NSRect) -> NSRect
```

## Parameters

- `viewRect`: An rectangle specified in coordinates relative to the image view.

<a id="return-value"></a>

## Return Value

The rectangle specified in coordinates relative to the image.

## See Also

### Converting Points and Rectangles

- [convertPoint(toImagePoint:)](convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertImagePoint(toViewPoint:)](convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.
- [convertImageRect(toViewRect:)](convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.

# convertViewRectToImageRect: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image view rectangle to an image rectangle.

## Declaration

```objectivec
- (NSRect) convertViewRectToImageRect:(NSRect) viewRect;
```

## Parameters

- `viewRect`: An rectangle specified in coordinates relative to the image view.

<a id="return-value"></a>

## Return Value

The rectangle specified in coordinates relative to the image.

## See Also

### Converting Points and Rectangles

- [convertViewPointToImagePoint:](convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertImagePointToViewPoint:](convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.
- [convertImageRectToViewRect:](convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.
