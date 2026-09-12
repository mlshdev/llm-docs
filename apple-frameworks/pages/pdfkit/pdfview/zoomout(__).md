> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/zoomout(_:)](https://developer.apple.com/documentation/pdfkit/pdfview/zoomout(_:))

# zoomOut(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Zooms out by decreasing the scaling factor.

## Declaration

```swift
@IBAction func zoomOut(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

Each invocation of `zoomOut` divides the scaling factor by the square root of 2.

## See Also

### Zooming in a PDF View

- [zoomIn(\_:)](zoomin%28__%29.md): Zooms in by increasing the scaling factor.
- [canZoomIn](canzoomin.md): Returns a Boolean value indicating whether the user can magnify the view and zoom in.
- [canZoomOut](canzoomout.md): Returns a Boolean value indicating whether the user can view an expanded area and zoom out.

# zoomOut: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Zooms out by decreasing the scaling factor.

## Declaration

```objectivec
- (void) zoomOut:(id) sender;
```

<a id="Discussion"></a>

## Discussion

Each invocation of `zoomOut` divides the scaling factor by the square root of 2.

## See Also

### Zooming in a PDF View

- [zoomIn:](zoomin%28__%29.md): Zooms in by increasing the scaling factor.
- [canZoomIn](canzoomin.md): Returns a Boolean value indicating whether the user can magnify the view and zoom in.
- [canZoomOut](canzoomout.md): Returns a Boolean value indicating whether the user can view an expanded area and zoom out.
