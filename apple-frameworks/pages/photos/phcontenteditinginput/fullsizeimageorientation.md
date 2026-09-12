> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/fullsizeimageorientation](https://developer.apple.com/documentation/photos/phcontenteditinginput/fullsizeimageorientation)

# fullSizeImageOrientation (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The Exif display orientation of the full-size image file.

## Declaration

```swift
var fullSizeImageOrientation: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is a raw numeric value describing the encoded image orientation according to the TIFF and Exif specifications. To more easily work with such values, convert this value to the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) type.

## See Also

### Related Documentation

- [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

### Working with Photo Assets

- [displaySizeImage](displaysizeimage.md): An image of the asset’s contents, appropriately sized for display.
- [fullSizeImageURL](fullsizeimageurl.md): The URL to a file that contains the full-sized image data.

# fullSizeImageOrientation (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The Exif display orientation of the full-size image file.

## Declaration

```objectivec
@property (assign, readonly) int fullSizeImageOrientation;
```

<a id="Discussion"></a>

## Discussion

This property’s value is a raw numeric value describing the encoded image orientation according to the TIFF and Exif specifications. To more easily work with such values, convert this value to the [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md) type.

## See Also

### Related Documentation

- [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

### Working with Photo Assets

- [displaySizeImage](displaysizeimage.md): An image of the asset’s contents, appropriately sized for display.
- [fullSizeImageURL](fullsizeimageurl.md): The URL to a file that contains the full-sized image data.
