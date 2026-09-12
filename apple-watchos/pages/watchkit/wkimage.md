> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimage](https://developer.apple.com/documentation/watchkit/wkimage)

# WKImage (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A wrapper for images you use with a picker interface.

## Declaration

```swift
class WKImage
```

<a id="overview"></a>

## Overview

To create instances of this class, use one of the defined creation methods. Choose the method that best suits the image data you have. After creating the object, you can use associate it with a [WKPickerItem](wkpickeritem.md) object and use it in your picker interface.

## Topics

### Creating Image Objects

- [init(image:)](wkimage/init%28image_%29.md): Creates and returns an image object using the specified UIKit image.
- [init(imageData:)](wkimage/init%28imagedata_%29.md): Creates an image with the specified raw image data.
- [init(imageName:)](wkimage/init%28imagename_%29.md): Creates an image by loading an image file from the Watch app bundle.

### Getting the Image Data

- [image](wkimage/image.md): The UIKit image object
- [imageData](wkimage/imagedata.md): The data object containing the raw image data.
- [imageName](wkimage/imagename.md): The name of the image to load from the Watch app’s bundle.

### Initializers

- [init(coder:)](wkimage/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.

# WKImage (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

A wrapper for images you use with a picker interface.

## Declaration

```objectivec
@interface WKImage : NSObject
```

<a id="overview"></a>

## Overview

To create instances of this class, use one of the defined creation methods. Choose the method that best suits the image data you have. After creating the object, you can use associate it with a [WKPickerItem](wkpickeritem.md) object and use it in your picker interface.

## Topics

### Creating Image Objects

- [imageWithImage:](wkimage/init%28image_%29.md): Creates and returns an image object using the specified UIKit image.
- [imageWithImageData:](wkimage/init%28imagedata_%29.md): Creates an image with the specified raw image data.
- [imageWithImageName:](wkimage/init%28imagename_%29.md): Creates an image by loading an image file from the Watch app bundle.

### Getting the Image Data

- [image](wkimage/image.md): The UIKit image object
- [imageData](wkimage/imagedata.md): The data object containing the raw image data.
- [imageName](wkimage/imagename.md): The name of the image to load from the Watch app’s bundle.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.
