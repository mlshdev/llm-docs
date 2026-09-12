> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacehmcamera](https://developer.apple.com/documentation/watchkit/wkinterfacehmcamera)

# WKInterfaceHMCamera (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.

## Declaration

```swift
class WKInterfaceHMCamera
```

<a id="overview"></a>

## Overview

Do not subclass or create instances of this class yourself. Instead, define an outlet in your interface controller class and connect it to the corresponding object in your storyboard file. For example, to refer to a camera interface object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myCamera: WKInterfaceHMCamera!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceHMCamera* myCamera;
```

During the initialization of your interface controller, WatchKit creates the camera interface object and assigns it to its associated outlet. At that point, you can use the camera interface object to change to the onscreen content.

The camera interface object in your Watch app must be connected to a [WKInterfaceHMCamera](wkinterfacehmcamera.md) outlet in your WatchKit extension for the camera to be visible in your watchOS app’s user interface.

## Topics

### Setting the Camera Source

- [setCameraSource(\_:)](wkinterfacehmcamera/setcamerasource%28__%29.md): Set the HomeKit camera source displayed by this interface object.

### Initializing for SwiftUI

- [init()](wkinterfacehmcamera/init%28%29.md): Deprecated. Creates a camera for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.

# WKInterfaceHMCamera (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.

## Declaration

```objectivec
@interface WKInterfaceHMCamera : WKInterfaceObject
```

<a id="overview"></a>

## Overview

Do not subclass or create instances of this class yourself. Instead, define an outlet in your interface controller class and connect it to the corresponding object in your storyboard file. For example, to refer to a camera interface object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myCamera: WKInterfaceHMCamera!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceHMCamera* myCamera;
```

During the initialization of your interface controller, WatchKit creates the camera interface object and assigns it to its associated outlet. At that point, you can use the camera interface object to change to the onscreen content.

The camera interface object in your Watch app must be connected to a [WKInterfaceHMCamera](wkinterfacehmcamera.md) outlet in your WatchKit extension for the camera to be visible in your watchOS app’s user interface.

## Topics

### Setting the Camera Source

- [setCameraSource:](wkinterfacehmcamera/setcamerasource%28__%29.md): Set the HomeKit camera source displayed by this interface object.

### Initializing for SwiftUI

- [init](wkinterfacehmcamera/init%28%29.md): Deprecated. Creates a camera for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceMovie](wkinterfacemovie.md): An interface element that lets you play video and audio content in your watchOS app.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.
