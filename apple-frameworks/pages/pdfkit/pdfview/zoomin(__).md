> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/zoomin(_:)](https://developer.apple.com/documentation/pdfkit/pdfview/zoomin(_:))

# zoomIn(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Zooms in by increasing the scaling factor.

## Declaration

```swift
@IBAction func zoomIn(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

Each invocation of `zoomIn` muliplies the scaling factor by the square root of 2.

## See Also

### Zooming in a PDF View

- [canZoomIn](canzoomin.md): Returns a Boolean value indicating whether the user can magnify the view and zoom in.
- [zoomOut(\_:)](zoomout%28__%29.md): Zooms out by decreasing the scaling factor.
- [canZoomOut](canzoomout.md): Returns a Boolean value indicating whether the user can view an expanded area and zoom out.

# zoomIn: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Zooms in by increasing the scaling factor.

## Declaration

```objectivec
- (void) zoomIn:(id) sender;
```

<a id="Discussion"></a>

## Discussion

Each invocation of `zoomIn` muliplies the scaling factor by the square root of 2.

## See Also

### Zooming in a PDF View

- [canZoomIn](canzoomin.md): Returns a Boolean value indicating whether the user can magnify the view and zoom in.
- [zoomOut:](zoomout%28__%29.md): Zooms out by decreasing the scaling factor.
- [canZoomOut](canzoomout.md): Returns a Boolean value indicating whether the user can view an expanded area and zoom out.
