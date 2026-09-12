> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimage/init(imagename:)](https://developer.apple.com/documentation/watchkit/wkimage/init(imagename:))

# init(imageName:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+

Creates an image by loading an image file from the Watch app bundle.

## Declaration

```swift
convenience init(imageName: String)
```

## Parameters

- `imageName`: The name of the image to be loaded from the Watch app’s bundle. Specify the filename of the image and include the filename extension in the name. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized `WKImage` object.

<a id="Discussion"></a>

## Discussion

Use this method to specify an image by name. Only the image name is sent from your WatchKit extension to your Watch app, and the Watch app handles the loading of that image from its own bundle. If it cannot find the specified image, it displays no image.

## See Also

### Creating Image Objects

- [init(image:)](init%28image_%29.md): Creates and returns an image object using the specified UIKit image.
- [init(imageData:)](init%28imagedata_%29.md): Creates an image with the specified raw image data.

# imageWithImageName: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+

Creates an image by loading an image file from the Watch app bundle.

## Declaration

```objectivec
+ (instancetype) imageWithImageName:(NSString *) imageName;
```

## Parameters

- `imageName`: The name of the image to be loaded from the Watch app’s bundle. Specify the filename of the image and include the filename extension in the name. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized `WKImage` object.

<a id="Discussion"></a>

## Discussion

Use this method to specify an image by name. Only the image name is sent from your WatchKit extension to your Watch app, and the Watch app handles the loading of that image from its own bundle. If it cannot find the specified image, it displays no image.

## See Also

### Creating Image Objects

- [imageWithImage:](init%28image_%29.md): Creates and returns an image object using the specified UIKit image.
- [imageWithImageData:](init%28imagedata_%29.md): Creates an image with the specified raw image data.
