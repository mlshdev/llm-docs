> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/init(uiimage:)](https://developer.apple.com/documentation/intents/inimage/init(uiimage:))

# init(UIImage:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates an image object from the specified UIKit image.

## Declaration

```swift
convenience init(UIImage image: UIImage)
```

```swift
convenience init(uiImage image: UIImage)
```

## Parameters

- `image`: A UIKit image that contains the image data to use.

<a id="return-value"></a>

## Return Value

An image object that contains the specified UIKit image, or `nil` if that image is invalid.

## See Also

### Creating an Image Object

- [init(named:)](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [init(CGImage:)](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [init(imageData:)](init%28imagedata_%29.md): Creates an image object from the specified data.
- [init(url:)](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [init(url:width:height:)](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.

# imageWithUIImage: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates an image object from the specified UIKit image.

## Declaration

```objectivec
+ (instancetype) imageWithUIImage:(UIImage *) image;
```

## Parameters

- `image`: A UIKit image that contains the image data to use.

<a id="return-value"></a>

## Return Value

An image object that contains the specified UIKit image, or `nil` if that image is invalid.

## See Also

### Creating an Image Object

- [imageNamed:](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [imageWithCGImage:](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [imageWithImageData:](init%28imagedata_%29.md): Creates an image object from the specified data.
- [imageWithURL:](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [imageWithURL:width:height:](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.
