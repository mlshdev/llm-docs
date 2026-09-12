> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/convertpoint(toimagepoint:)](https://developer.apple.com/documentation/quartz/ikimageview/convertpoint(toimagepoint:))

# convertPoint(toImagePoint:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image view coordinate to an image coordinate.

## Declaration

```swift
func convertPoint(toImagePoint viewPoint: NSPoint) -> NSPoint
```

## Parameters

- `viewPoint`: A point specified in coordinates relative to the image view.

<a id="return-value"></a>

## Return Value

The point specified in coordinates relative to the image.

## See Also

### Converting Points and Rectangles

- [convertRect(toImageRect:)](convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImagePoint(toViewPoint:)](convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.
- [convertImageRect(toViewRect:)](convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.

# convertViewPointToImagePoint: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts an image view coordinate to an image coordinate.

## Declaration

```objectivec
- (NSPoint) convertViewPointToImagePoint:(NSPoint) viewPoint;
```

## Parameters

- `viewPoint`: A point specified in coordinates relative to the image view.

<a id="return-value"></a>

## Return Value

The point specified in coordinates relative to the image.

## See Also

### Converting Points and Rectangles

- [convertViewRectToImageRect:](convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImagePointToViewPoint:](convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.
- [convertImageRectToViewRect:](convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.
