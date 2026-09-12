> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/init(url:)-8eo3q](https://developer.apple.com/documentation/intents/inimage/init(url:)-8eo3q)

# init(url:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an image object from an image file in the local file system.

## Declaration

```swift
convenience init?(url URL: URL)
```

## Parameters

- `URL`: A URL to an image file in the local file system. The image can be in any format that the system supports.

<a id="return-value"></a>

## Return Value

An image object that contains the local image file, or `nil` if the system can’t load the image file or it doesn’t exist.

## See Also

### Creating an Image Object

- [init(named:)](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [init(UIImage:)](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [init(CGImage:)](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [init(imageData:)](init%28imagedata_%29.md): Creates an image object from the specified data.
- [init(url:width:height:)](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.

# imageWithURL: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an image object from an image file in the local file system.

## Declaration

```objectivec
+ (instancetype) imageWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: A URL to an image file in the local file system. The image can be in any format that the system supports.

<a id="return-value"></a>

## Return Value

An image object that contains the local image file, or `nil` if the system can’t load the image file or it doesn’t exist.

## See Also

### Creating an Image Object

- [imageNamed:](init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [imageWithUIImage:](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [imageWithCGImage:](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [imageWithImageData:](init%28imagedata_%29.md): Creates an image object from the specified data.
- [imageWithURL:width:height:](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.
