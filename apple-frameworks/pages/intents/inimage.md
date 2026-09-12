> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inimage](https://developer.apple.com/documentation/intents/inimage)

# INImage (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Image data inside an Intents extension or Intents UI extension.

## Declaration

```swift
class INImage
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="overview"></a>

## Overview

[INImage](inimage.md) is a wrapper for image data that you include in a response to an intent. When providing a response to an intent, you must specify any image parameters using instances of this class. [INImage](inimage.md) supports the same formats as the underlying platform.

When confirming or handling an intent, you provide a response object with details about how your app handles that intent. When that response contains an image, use the [imageSize(for:)](inimage/imagesize%28for_%29.md) method to determine the required image size and then create an instance of this class with the corresponding image data.

## Topics

### Creating an Image Object

- [init(named:)](inimage/init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [init(UIImage:)](inimage/init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [init(CGImage:)](inimage/init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [init(imageData:)](inimage/init%28imagedata_%29.md): Creates an image object from the specified data.
- [init(url:)](inimage/init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [init(url:width:height:)](inimage/init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.

### Getting the Image

- [fetchUIImage(completion:)](inimage/fetchuiimage%28completion_%29.md): Fetches the image and provides it to the specified completion handler.

### Getting the Preferred Image Size

- [imageSize(for:)](inimage/imagesize%28for_%29.md): Returns the preferred image size for the specified response object.

### Getting a System Symbol Image

- [systemImageNamed(\_:)](inimage/systemimagenamed%28__%29.md): Returns an image object that contains the specified system symbol image.

### Initializers

- [init(NSImage:)](inimage/init%28nsimage_%29.md)
- [init(URL:)](inimage/init%28url_%29-5po10.md)
- [init(URL:width:height:)](inimage/init%28url_width_height_%29-8snx6.md)
- [init(coder:)](inimage/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# INImage (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Image data inside an Intents extension or Intents UI extension.

## Declaration

```objectivec
@interface INImage : NSObject
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="overview"></a>

## Overview

[INImage](inimage.md) is a wrapper for image data that you include in a response to an intent. When providing a response to an intent, you must specify any image parameters using instances of this class. [INImage](inimage.md) supports the same formats as the underlying platform.

When confirming or handling an intent, you provide a response object with details about how your app handles that intent. When that response contains an image, use the [imageSizeForIntentResponse:](inimage/imagesize%28for_%29.md) method to determine the required image size and then create an instance of this class with the corresponding image data.

## Topics

### Creating an Image Object

- [imageNamed:](inimage/init%28named_%29.md): Creates an image object from an image file in the extension’s bundle.
- [imageWithUIImage:](inimage/init%28uiimage_%29.md): Creates an image object from the specified UIKit image.
- [imageWithCGImage:](inimage/init%28cgimage_%29.md): Creates an image object from the specified Core Graphics image.
- [imageWithImageData:](inimage/init%28imagedata_%29.md): Creates an image object from the specified data.
- [imageWithURL:](inimage/init%28url_%29-8eo3q.md): Creates an image object from an image file in the local file system.
- [imageWithURL:width:height:](inimage/init%28url_width_height_%29-41ikr.md): Creates an image object, of the specified size, from an image file in the local file system.

### Getting the Image

- [fetchUIImageWithCompletion:](inimage/fetchuiimage%28completion_%29.md): Fetches the image and provides it to the specified completion handler.

### Getting the Preferred Image Size

- [imageSizeForIntentResponse:](inimage/imagesize%28for_%29.md): Returns the preferred image size for the specified response object.

### Getting a System Symbol Image

- [systemImageNamed:](inimage/systemimagenamed%28__%29.md): Returns an image object that contains the specified system symbol image.

### Type Methods

- [imageWithNSImage:](inimage/init%28nsimage_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
