> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimage/init(imagedata:)](https://developer.apple.com/documentation/watchkit/wkimage/init(imagedata:))

# init(imageData:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+

Creates an image with the specified raw image data.

## Declaration

```swift
convenience init(imageData: Data)
```

## Parameters

- `imageData`: A data object containing the image data in its native format. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized `WKImage` object.

<a id="Discussion"></a>

## Discussion

Use this method when you already have raw PNG or JPG data and want to use it for an image. Using this method for raw image data is more efficient than creating an image object to encapsulate that data.

## See Also

### Creating Image Objects

- [init(image:)](init%28image_%29.md): Creates and returns an image object using the specified UIKit image.
- [init(imageName:)](init%28imagename_%29.md): Creates an image by loading an image file from the Watch app bundle.

# imageWithImageData: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+

Creates an image with the specified raw image data.

## Declaration

```objectivec
+ (instancetype) imageWithImageData:(NSData *) imageData;
```

## Parameters

- `imageData`: A data object containing the image data in its native format. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized `WKImage` object.

<a id="Discussion"></a>

## Discussion

Use this method when you already have raw PNG or JPG data and want to use it for an image. Using this method for raw image data is more efficient than creating an image object to encapsulate that data.

## See Also

### Creating Image Objects

- [imageWithImage:](init%28image_%29.md): Creates and returns an image object using the specified UIKit image.
- [imageWithImageName:](init%28imagename_%29.md): Creates an image by loading an image file from the Watch app bundle.
