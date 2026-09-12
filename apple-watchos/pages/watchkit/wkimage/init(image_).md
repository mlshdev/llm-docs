> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimage/init(image:)](https://developer.apple.com/documentation/watchkit/wkimage/init(image:))

# init(image:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+

Creates and returns an image object using the specified UIKit image.

## Declaration

```swift
convenience init(image: UIImage)
```

## Parameters

- `image`: The image object. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized `WKImage` object.

<a id="Discussion"></a>

## Discussion

Use this method when you already have a UIKit image object and want to use it in your picker.

## See Also

### Creating Image Objects

- [init(imageData:)](init%28imagedata_%29.md): Creates an image with the specified raw image data.
- [init(imageName:)](init%28imagename_%29.md): Creates an image by loading an image file from the Watch app bundle.

# imageWithImage: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+

Creates and returns an image object using the specified UIKit image.

## Declaration

```objectivec
+ (instancetype) imageWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image object. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized `WKImage` object.

<a id="Discussion"></a>

## Discussion

Use this method when you already have a UIKit image object and want to use it in your picker.

## See Also

### Creating Image Objects

- [imageWithImageData:](init%28imagedata_%29.md): Creates an image with the specified raw image data.
- [imageWithImageName:](init%28imagename_%29.md): Creates an image by loading an image file from the Watch app bundle.
