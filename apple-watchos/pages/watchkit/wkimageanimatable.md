> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimageanimatable](https://developer.apple.com/documentation/watchkit/wkimageanimatable)

# WKImageAnimatable (Swift)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS

A collection of methods you can use to control the playback of animated images.

## Declaration

```swift
protocol WKImageAnimatable : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Existing classes adopt this protocol and you use the methods to control the animation of those images. Do not adopt this protocol in your own classes.

## Topics

### Animating an Image Sequence

- [startAnimating()](wkimageanimatable/startanimating%28%29.md): Begins animating the current sequence of images.
- [startAnimatingWithImages(in:duration:repeatCount:)](wkimageanimatable/startanimatingwithimages%28in_duration_repeatcount_%29.md): Animates the specified images with the given duration and repeat information.
- [stopAnimating()](wkimageanimatable/stopanimating%28%29.md): Stops any in-progress animations.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [WKInterfaceGroup](wkinterfacegroup.md)
- [WKInterfaceImage](wkinterfaceimage.md)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.

# WKImageAnimatable (Objective-C)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS

A collection of methods you can use to control the playback of animated images.

## Declaration

```objectivec
@protocol WKImageAnimatable <NSObject>
```

<a id="overview"></a>

## Overview

Existing classes adopt this protocol and you use the methods to control the animation of those images. Do not adopt this protocol in your own classes.

## Topics

### Animating an Image Sequence

- [startAnimating](wkimageanimatable/startanimating%28%29.md): Begins animating the current sequence of images.
- [startAnimatingWithImagesInRange:duration:repeatCount:](wkimageanimatable/startanimatingwithimages%28in_duration_repeatcount_%29.md): Animates the specified images with the given duration and repeat information.
- [stopAnimating](wkimageanimatable/stopanimating%28%29.md): Stops any in-progress animations.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [WKInterfaceGroup](wkinterfacegroup.md)
- [WKInterfaceImage](wkinterfaceimage.md)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.
