> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource/nameofslideshowitem(at:)](https://developer.apple.com/documentation/quartz/ikslideshowdatasource/nameofslideshowitem(at:))

# nameOfSlideshowItem(at:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the display name for item at the specified index.

## Declaration

```swift
optional func nameOfSlideshowItem(at index: Int) -> String!
```

## Parameters

- `index`: The index for a slideshow item.

<a id="return-value"></a>

## Return Value

The display name. For the best user experience, you should provide the localized name, because this string appears in the user interface.

<a id="Discussion"></a>

## Discussion

This method is optional.

## See Also

### Providing Slideshow Information

- [numberOfSlideshowItems()](numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [slideshowItem(at:)](slideshowitem%28at_%29.md): Returns the item for a given index
- [canExportSlideshowItem(at:toApplication:)](canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.

# nameOfSlideshowItemAtIndex: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the display name for item at the specified index.

## Declaration

```objectivec
- (NSString *) nameOfSlideshowItemAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index for a slideshow item.

<a id="return-value"></a>

## Return Value

The display name. For the best user experience, you should provide the localized name, because this string appears in the user interface.

<a id="Discussion"></a>

## Discussion

This method is optional.

## See Also

### Providing Slideshow Information

- [numberOfSlideshowItems](numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [slideshowItemAtIndex:](slideshowitem%28at_%29.md): Returns the item for a given index
- [canExportSlideshowItemAtIndex:toApplication:](canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.
