> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshow/exportitem(_:toapplication:)](https://developer.apple.com/documentation/quartz/ikslideshow/exportitem(_:toapplication:))

# exportItem(\_:toApplication:) (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Exports a slideshow item to the application that has the provided bundle identifier.

## Declaration

```swift
class func exportItem(_ item: Any!, toApplication applicationBundleIdentifier: String!)
```

## Parameters

- `item`: The item to export
- `applicationBundleIdentifier`: The bundle identifier of the application that you want to export the item to.

## See Also

### Exporting Slideshow Items

- [canExport(toApplication:)](canexport%28toapplication_%29.md): Finds out whether the slideshow can export its contents to an application.

# exportSlideshowItem:toApplication: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Exports a slideshow item to the application that has the provided bundle identifier.

## Declaration

```objectivec
+ (void) exportSlideshowItem:(id) item toApplication:(NSString *) applicationBundleIdentifier;
```

## Parameters

- `item`: The item to export
- `applicationBundleIdentifier`: The bundle identifier of the application that you want to export the item to.

## See Also

### Exporting Slideshow Items

- [canExportToApplication:](canexport%28toapplication_%29.md): Finds out whether the slideshow can export its contents to an application.
