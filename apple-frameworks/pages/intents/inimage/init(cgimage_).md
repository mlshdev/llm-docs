> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/init(cgimage:)](https://developer.apple.com/documentation/intents/inimage/init(cgimage:))

# init(CGImage:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates an image object from the specified Core Graphics image.

## Declaration

```swift
convenience init(CGImage imageRef: CGImage)
```

```swift
convenience init(cgImage imageRef: CGImage)
```

## Parameters

- `imageRef`: A Core Graphics image that contains the image data to use.

<a id="return-value"></a>

## Return Value

An image object that contains the specified Core Graphics image, or `nil` if that image is invalid.

## See Also

### Creating an Image Object

- [init(named:)](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [init(UIImage:)](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [init(imageData:)](init%28imagedata_%29.md): Creates an image object from the specified data.
- [init(url:)](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [init(url:width:height:)](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.

# imageWithCGImage: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates an image object from the specified Core Graphics image.

## Declaration

```objectivec
+ (instancetype) imageWithCGImage:(CGImageRef) imageRef;
```

## Parameters

- `imageRef`: A Core Graphics image that contains the image data to use.

<a id="return-value"></a>

## Return Value

An image object that contains the specified Core Graphics image, or `nil` if that image is invalid.

## See Also

### Creating an Image Object

- [imageNamed:](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [imageWithUIImage:](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [imageWithImageData:](init%28imagedata_%29.md): Creates an image object from the specified data.
- [imageWithURL:](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [imageWithURL:width:height:](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.
