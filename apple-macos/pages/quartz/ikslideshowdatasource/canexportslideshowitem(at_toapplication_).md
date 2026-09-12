> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource/canexportslideshowitem(at:toapplication:)](https://developer.apple.com/documentation/quartz/ikslideshowdatasource/canexportslideshowitem(at:toapplication:))

# canExportSlideshowItem(at:toApplication:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Reports whether the export button should be enabled for a slideshow item.

## Declaration

```swift
optional func canExportSlideshowItem(at index: Int, toApplication applicationBundleIdentifier: String!) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the export button should be enabled for an item; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Providing Slideshow Information

- [numberOfSlideshowItems()](numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [slideshowItem(at:)](slideshowitem%28at_%29.md): Returns the item for a given index
- [nameOfSlideshowItem(at:)](nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.

# canExportSlideshowItemAtIndex:toApplication: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Reports whether the export button should be enabled for a slideshow item.

## Declaration

```objectivec
- (BOOL) canExportSlideshowItemAtIndex:(NSUInteger) index toApplication:(NSString *) applicationBundleIdentifier;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the export button should be enabled for an item; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Providing Slideshow Information

- [numberOfSlideshowItems](numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [slideshowItemAtIndex:](slideshowitem%28at_%29.md): Returns the item for a given index
- [nameOfSlideshowItemAtIndex:](nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.
