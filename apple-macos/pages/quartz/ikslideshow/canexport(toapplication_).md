> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshow/canexport(toapplication:)](https://developer.apple.com/documentation/quartz/ikslideshow/canexport(toapplication:))

# canExport(toApplication:) (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Finds out whether the slideshow can export its contents to an application.

## Declaration

```swift
class func canExport(toApplication applicationBundleIdentifier: String!) -> Bool
```

## Parameters

- `applicationBundleIdentifier`: The bundle identifier of the application that you want to export the slideshow to. See [Bundle Identifiers](../bundle-identifiers.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the slideshow can be exported to the specified application; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Exporting Slideshow Items

- [exportItem(\_:toApplication:)](exportitem%28__toapplication_%29.md): Exports a slideshow item to the application that has the provided bundle identifier.

# canExportToApplication: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Finds out whether the slideshow can export its contents to an application.

## Declaration

```objectivec
+ (BOOL) canExportToApplication:(NSString *) applicationBundleIdentifier;
```

## Parameters

- `applicationBundleIdentifier`: The bundle identifier of the application that you want to export the slideshow to. See [Bundle Identifiers](../bundle-identifiers.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the slideshow can be exported to the specified application; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Exporting Slideshow Items

- [exportSlideshowItem:toApplication:](exportitem%28__toapplication_%29.md): Exports a slideshow item to the application that has the provided bundle identifier.
