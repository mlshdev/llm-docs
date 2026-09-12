> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/fullsizeimageurl](https://developer.apple.com/documentation/photos/phcontenteditinginput/fullsizeimageurl)

# fullSizeImageURL (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The URL to a file that contains the full-sized image data.

## Declaration

```swift
var fullSizeImageURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

Typically, your app or extension does not need to load a full-sized image for use in an editing UI. Instead, use the [displaySizeImage](displaysizeimage.md) property to retrieve an image suitable for screen display. You can then load the full-sized image on a background queue so that it will be ready by the time the user finishes editing the display-size image. At that time, apply the user’s adjustments to the full-sized image and then use the [PHContentEditingOutput](../phcontenteditingoutput.md) class to commit the edit to the photo library.

## See Also

### Working with Photo Assets

- [displaySizeImage](displaysizeimage.md): An image of the asset’s contents, appropriately sized for display.
- [fullSizeImageOrientation](fullsizeimageorientation.md): The Exif display orientation of the full-size image file.

# fullSizeImageURL (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The URL to a file that contains the full-sized image data.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * fullSizeImageURL;
```

<a id="Discussion"></a>

## Discussion

Typically, your app or extension does not need to load a full-sized image for use in an editing UI. Instead, use the [displaySizeImage](displaysizeimage.md) property to retrieve an image suitable for screen display. You can then load the full-sized image on a background queue so that it will be ready by the time the user finishes editing the display-size image. At that time, apply the user’s adjustments to the full-sized image and then use the [PHContentEditingOutput](../phcontenteditingoutput.md) class to commit the edit to the photo library.

## See Also

### Working with Photo Assets

- [displaySizeImage](displaysizeimage.md): An image of the asset’s contents, appropriately sized for display.
- [fullSizeImageOrientation](fullsizeimageorientation.md): The Exif display orientation of the full-size image file.
