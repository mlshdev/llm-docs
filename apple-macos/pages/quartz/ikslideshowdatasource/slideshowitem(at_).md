> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource/slideshowitem(at:)](https://developer.apple.com/documentation/quartz/ikslideshowdatasource/slideshowitem(at:))

# slideshowItem(at:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the item for a given index

## Declaration

```swift
func slideshowItem(at index: Int) -> Any!
```

## Parameters

- `index`: An index of an item in the slideshow.

<a id="return-value"></a>

## Return Value

The object that corresponds to the item at the specified index. The item can be any of the following objects: [NSImage](../../appkit/nsimage.md), [NSString](https://developer.apple.com/documentation/foundation/nsstring) (to specify a path name), [NSURL](https://developer.apple.com/documentation/foundation/nsurl), [FileWrapper](https://developer.apple.com/documentation/foundation/filewrapper), [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage), or [PDFPage](https://developer.apple.com/documentation/pdfkit/pdfpage).

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Providing Slideshow Information

- [numberOfSlideshowItems()](numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [nameOfSlideshowItem(at:)](nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.
- [canExportSlideshowItem(at:toApplication:)](canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.

# slideshowItemAtIndex: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the item for a given index

## Declaration

```objectivec
- (id) slideshowItemAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An index of an item in the slideshow.

<a id="return-value"></a>

## Return Value

The object that corresponds to the item at the specified index. The item can be any of the following objects: [NSImage](../../appkit/nsimage.md), [NSString](https://developer.apple.com/documentation/foundation/nsstring) (to specify a path name), [NSURL](https://developer.apple.com/documentation/foundation/nsurl), [NSFileWrapper](https://developer.apple.com/documentation/foundation/filewrapper), [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage), or [PDFPage](https://developer.apple.com/documentation/pdfkit/pdfpage).

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Providing Slideshow Information

- [numberOfSlideshowItems](numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [nameOfSlideshowItemAtIndex:](nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.
- [canExportSlideshowItemAtIndex:toApplication:](canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.
