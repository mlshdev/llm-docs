> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/convertimagepoint(toviewpoint:)](https://developer.apple.com/documentation/quartz/ikimageview/convertimagepoint(toviewpoint:))

# convertImagePoint(toViewPoint:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image coordinate to an image view coordinate.

## Declaration

```swift
func convertImagePoint(toViewPoint imagePoint: NSPoint) -> NSPoint
```

## Parameters

- `imagePoint`: A point specified in coordinates relative to the image.

<a id="return-value"></a>

## Return Value

A point specified in coordinates relative to the image view.

## See Also

### Converting Points and Rectangles

- [convertPoint(toImagePoint:)](convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertRect(toImageRect:)](convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImageRect(toViewRect:)](convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.

# convertImagePointToViewPoint: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image coordinate to an image view coordinate.

## Declaration

```objectivec
- (NSPoint) convertImagePointToViewPoint:(NSPoint) imagePoint;
```

## Parameters

- `imagePoint`: A point specified in coordinates relative to the image.

<a id="return-value"></a>

## Return Value

A point specified in coordinates relative to the image view.

## See Also

### Converting Points and Rectangles

- [convertViewPointToImagePoint:](convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertViewRectToImageRect:](convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImageRectToViewRect:](convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.
