> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkvideogravity](https://developer.apple.com/documentation/watchkit/wkvideogravity)

# WKVideoGravity (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the appearance of video content.

## Declaration

```swift
enum WKVideoGravity
```

## Topics

### Constants

- [WKVideoGravity.resizeAspect](wkvideogravity/resizeaspect.md): Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.
- [WKVideoGravity.resizeAspectFill](wkvideogravity/resizeaspectfill.md): Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.
- [WKVideoGravity.resize](wkvideogravity/resize.md): Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.

### Initializers

- [init(rawValue:)](wkvideogravity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.

# WKVideoGravity (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the appearance of video content.

## Declaration

```objectivec
enum WKVideoGravity : NSInteger;
```

## Topics

### Constants

- [WKVideoGravityResizeAspect](wkvideogravity/resizeaspect.md): Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.
- [WKVideoGravityResizeAspectFill](wkvideogravity/resizeaspectfill.md): Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.
- [WKVideoGravityResize](wkvideogravity/resize.md): Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
