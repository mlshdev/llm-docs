> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/displaysizeimage](https://developer.apple.com/documentation/photos/phcontenteditinginput/displaysizeimage)

# displaySizeImage (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

An image of the asset’s contents, appropriately sized for display.

## Declaration

```swift
var displaySizeImage: UIImage? { get }
```

```swift
var displaySizeImage: NSImage? { get }
```

<a id="Discussion"></a>

## Discussion

This property does not provide the full-sized image for a photo asset but rather a scaled-down image appropriate for use in a photo editing user interface. To load the full-sized asset image, use the [fullSizeImageURL](fullsizeimageurl.md) property.

## See Also

### Working with Photo Assets

- [fullSizeImageOrientation](fullsizeimageorientation.md): The Exif display orientation of the full-size image file.
- [fullSizeImageURL](fullsizeimageurl.md): The URL to a file that contains the full-sized image data.

# displaySizeImage (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

An image of the asset’s contents, appropriately sized for display.

## Declaration

```objectivec
@property (strong, readonly, nullable) UIImage * displaySizeImage;
```

```objectivec
@property (strong, readonly, nullable) NSImage * displaySizeImage;
```

<a id="Discussion"></a>

## Discussion

This property does not provide the full-sized image for a photo asset but rather a scaled-down image appropriate for use in a photo editing user interface. To load the full-sized asset image, use the [fullSizeImageURL](fullsizeimageurl.md) property.

## See Also

### Working with Photo Assets

- [fullSizeImageOrientation](fullsizeimageorientation.md): The Exif display orientation of the full-size image file.
- [fullSizeImageURL](fullsizeimageurl.md): The URL to a file that contains the full-sized image data.
