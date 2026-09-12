> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource/numberofslideshowitems()](https://developer.apple.com/documentation/quartz/ikslideshowdatasource/numberofslideshowitems())

# numberOfSlideshowItems() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the number of items in a slideshow.

## Declaration

```swift
func numberOfSlideshowItems() -> Int
```

<a id="return-value"></a>

## Return Value

The number of items in the slideshow.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Providing Slideshow Information

- [slideshowItem(at:)](slideshowitem%28at_%29.md): Returns the item for a given index
- [nameOfSlideshowItem(at:)](nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.
- [canExportSlideshowItem(at:toApplication:)](canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.

# numberOfSlideshowItems (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the number of items in a slideshow.

## Declaration

```objectivec
- (NSUInteger) numberOfSlideshowItems;
```

<a id="return-value"></a>

## Return Value

The number of items in the slideshow.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Providing Slideshow Information

- [slideshowItemAtIndex:](slideshowitem%28at_%29.md): Returns the item for a given index
- [nameOfSlideshowItemAtIndex:](nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.
- [canExportSlideshowItemAtIndex:toApplication:](canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.
