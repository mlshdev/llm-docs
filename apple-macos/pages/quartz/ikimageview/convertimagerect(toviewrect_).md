> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/convertimagerect(toviewrect:)](https://developer.apple.com/documentation/quartz/ikimageview/convertimagerect(toviewrect:))

# convertImageRect(toViewRect:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image rectangle to an image view rectangle.

## Declaration

```swift
func convertImageRect(toViewRect imageRect: NSRect) -> NSRect
```

## Parameters

- `imageRect`: An rectangle specified in coordinates relative to the image.

<a id="return-value"></a>

## Return Value

An rectangle specified in coordinates relative to the image view.

## See Also

### Converting Points and Rectangles

- [convertPoint(toImagePoint:)](convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertRect(toImageRect:)](convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImagePoint(toViewPoint:)](convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.

# convertImageRectToViewRect: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image rectangle to an image view rectangle.

## Declaration

```objectivec
- (NSRect) convertImageRectToViewRect:(NSRect) imageRect;
```

## Parameters

- `imageRect`: An rectangle specified in coordinates relative to the image.

<a id="return-value"></a>

## Return Value

An rectangle specified in coordinates relative to the image view.

## See Also

### Converting Points and Rectangles

- [convertViewPointToImagePoint:](convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertViewRectToImageRect:](convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImagePointToViewPoint:](convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.
