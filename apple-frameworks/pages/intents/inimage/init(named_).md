> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage/init(named:)](https://developer.apple.com/documentation/intents/inimage/init(named:))

# init(named:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an image object from an image file in the extension’s bundle.

## Declaration

```swift
convenience init(named name: String)
```

## Parameters

- `name`: The filename of the image that the system loads from the extension’s bundle. You can omit the file’s extension for PNG images. For all other image file formats, you must include the extension.

<a id="return-value"></a>

## Return Value

An image object that contains the bundled image file, or `nil` if the system can’t find an image with the specified filename.

## See Also

### Creating an Image Object

- [init(UIImage:)](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [init(CGImage:)](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [init(imageData:)](init%28imagedata_%29.md): Creates an image object from the specified data.
- [init(url:)](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [init(url:width:height:)](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.

# imageNamed: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an image object from an image file in the extension’s bundle.

## Declaration

```objectivec
+ (instancetype) imageNamed:(NSString *) name;
```

## Parameters

- `name`: The filename of the image that the system loads from the extension’s bundle. You can omit the file’s extension for PNG images. For all other image file formats, you must include the extension.

<a id="return-value"></a>

## Return Value

An image object that contains the bundled image file, or `nil` if the system can’t find an image with the specified filename.

## See Also

### Creating an Image Object

- [imageWithUIImage:](init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [imageWithCGImage:](init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [imageWithImageData:](init%28imagedata_%29.md): Creates an image object from the specified data.
- [imageWithURL:](init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [imageWithURL:width:height:](init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.
