> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/init(imagedata:)](https://developer.apple.com/documentation/intents/inimage/init(imagedata:))

# init(imageData:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an image object from the specified data.

## Declaration

```swift
convenience init(imageData: Data)
```

## Parameters

- `imageData`: The data that contains the image, which you can create programmatically or load from an image file. The image can be in any format that the system supports.

<a id="return-value"></a>

## Return Value

An image object that contains the specified image data, or `nil` if that image data is invalid.

## See Also

### Creating an Image Object

- [init(named:)](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [init(UIImage:)](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [init(CGImage:)](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [init(url:)](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [init(url:width:height:)](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.

# imageWithImageData: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an image object from the specified data.

## Declaration

```objectivec
+ (instancetype) imageWithImageData:(NSData *) imageData;
```

## Parameters

- `imageData`: The data that contains the image, which you can create programmatically or load from an image file. The image can be in any format that the system supports.

<a id="return-value"></a>

## Return Value

An image object that contains the specified image data, or `nil` if that image data is invalid.

## See Also

### Creating an Image Object

- [imageNamed:](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [imageWithUIImage:](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [imageWithCGImage:](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [imageWithURL:](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [imageWithURL:width:height:](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.
