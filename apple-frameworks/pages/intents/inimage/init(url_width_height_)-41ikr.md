> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/init(url:width:height:)-41ikr](https://developer.apple.com/documentation/intents/inimage/init(url:width:height:)-41ikr)

# init(url:width:height:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an image object, of the specified size, from an image file in the local file system.

## Declaration

```swift
convenience init?(url URL: URL, width: Double, height: Double)
```

## Parameters

- `URL`: A URL to an image file on the local file system. The image can be in any format that the system supports.
- `width`: The required width, in points, of the image. If necessary, the system scales the image, horizontally, to match this value.
- `height`: The request height, in points, of the image. If necessary, the system scales the image, vertically, to match this value.

<a id="return-value"></a>

## Return Value

An image object that contains the local image file at the specified size, or `nil` if the system can’t load the image file or it doesn’t exist.

## See Also

### Creating an Image Object

- [init(named:)](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [init(UIImage:)](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [init(CGImage:)](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [init(imageData:)](init%28imagedata_%29.md): Creates an image object from the specified data.
- [init(url:)](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.

# imageWithURL:width:height: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an image object, of the specified size, from an image file in the local file system.

## Declaration

```objectivec
+ (instancetype) imageWithURL:(NSURL *) URL width:(double) width height:(double) height;
```

## Parameters

- `URL`: A URL to an image file on the local file system. The image can be in any format that the system supports.
- `width`: The required width, in points, of the image. If necessary, the system scales the image, horizontally, to match this value.
- `height`: The request height, in points, of the image. If necessary, the system scales the image, vertically, to match this value.

<a id="return-value"></a>

## Return Value

An image object that contains the local image file at the specified size, or `nil` if the system can’t load the image file or it doesn’t exist.

## See Also

### Creating an Image Object

- [imageNamed:](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [imageWithUIImage:](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [imageWithCGImage:](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [imageWithImageData:](init%28imagedata_%29.md): Creates an image object from the specified data.
- [imageWithURL:](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
