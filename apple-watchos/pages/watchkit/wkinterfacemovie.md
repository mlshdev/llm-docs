> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemovie](https://developer.apple.com/documentation/watchkit/wkinterfacemovie)

# WKInterfaceMovie (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface element that lets you play video and audio content in your watchOS app.

## Declaration

```swift
class WKInterfaceMovie
```

<a id="overview"></a>

## Overview

A movie object displays a poster image with a play button on top of it. When the user taps the play button, WatchKit plays the movie in a modal interface.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a movie object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myMovie: WKInterfaceMovie!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceMovie* myMovie;
```

During the initialization of your interface controller, WatchKit creates any needed movie objects and assigns them to their associated outlets. At that point, you can use those objects to make changes to the onscreen content.

Do not attempt to play audio or video content while gathering heart rate data using Health Kit. If you use this class to play media, WatchKit automatically disables the gathering of heart rate data.

<a id="Supported-Media-Formats"></a>

### Supported Media Formats

The following table lists the encoding information to use when creating media files to play on a user’s Apple Watch. For audio and video assets played directly from your app, keep your clips relatively short. Short clips consume less space on disk, use less power, and take less time to download.

| Media type | Recommended encoding |
| --- | --- |
| Video assets | Video codec: H.264 High Profile ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) Bit rate: 160 kpbs at up to 30 fps ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) Full screen resolution: 208 x 260 in portrait orientation ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) 16:9 resolution: 320 x 180 in landscape orientation ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) Audio bit rate: 32 kpbs stereo |
| Audio-only assets | Bit rate: 32 kbps stereo |

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your movie interface object in your storyboard file. The following table lists the attributes you can configure and their meaning.

| Attribute | Description |
| --- | --- |
| Video Gravity | The sizing behavior for the movie. Use this attribute to determine whether the movie maintains its aspect ratio and how it fills the available space. You can also configure this value programmatically using the [setVideoGravity(\_:)](wkinterfacemovie/setvideogravity%28__%29.md) method. |
| Poster Image | The placeholder image to display for your movie. When the user taps the poser image, the movie interface object presents a modal sheet with the actual movie contents. You can also configure this value programmatically using the [setPosterImage(\_:)](wkinterfacemovie/setposterimage%28__%29.md) method. |

## Topics

### Setting the Movie Attributes

- [setMovieURL(\_:)](wkinterfacemovie/setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setVideoGravity(\_:)](wkinterfacemovie/setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.
- [setPosterImage(\_:)](wkinterfacemovie/setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setLoops(\_:)](wkinterfacemovie/setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.

### Initializing for SwiftUI

- [init()](wkinterfacemovie/init%28%29.md): Deprecated. Creates a movie object for use in SwiftUI.

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
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.

# WKInterfaceMovie (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface element that lets you play video and audio content in your watchOS app.

## Declaration

```objectivec
@interface WKInterfaceMovie : WKInterfaceObject
```

<a id="overview"></a>

## Overview

A movie object displays a poster image with a play button on top of it. When the user taps the play button, WatchKit plays the movie in a modal interface.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a movie object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var myMovie: WKInterfaceMovie!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceMovie* myMovie;
```

During the initialization of your interface controller, WatchKit creates any needed movie objects and assigns them to their associated outlets. At that point, you can use those objects to make changes to the onscreen content.

Do not attempt to play audio or video content while gathering heart rate data using Health Kit. If you use this class to play media, WatchKit automatically disables the gathering of heart rate data.

<a id="Supported-Media-Formats"></a>

### Supported Media Formats

The following table lists the encoding information to use when creating media files to play on a user’s Apple Watch. For audio and video assets played directly from your app, keep your clips relatively short. Short clips consume less space on disk, use less power, and take less time to download.

| Media type | Recommended encoding |
| --- | --- |
| Video assets | Video codec: H.264 High Profile ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) Bit rate: 160 kpbs at up to 30 fps ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) Full screen resolution: 208 x 260 in portrait orientation ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) 16:9 resolution: 320 x 180 in landscape orientation ![](https://developer.apple.com/images/com.apple.watchkit/spacer.png) Audio bit rate: 32 kpbs stereo |
| Audio-only assets | Bit rate: 32 kbps stereo |

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your movie interface object in your storyboard file. The following table lists the attributes you can configure and their meaning.

| Attribute | Description |
| --- | --- |
| Video Gravity | The sizing behavior for the movie. Use this attribute to determine whether the movie maintains its aspect ratio and how it fills the available space. You can also configure this value programmatically using the [setVideoGravity:](wkinterfacemovie/setvideogravity%28__%29.md) method. |
| Poster Image | The placeholder image to display for your movie. When the user taps the poser image, the movie interface object presents a modal sheet with the actual movie contents. You can also configure this value programmatically using the [setPosterImage:](wkinterfacemovie/setposterimage%28__%29.md) method. |

## Topics

### Setting the Movie Attributes

- [setMovieURL:](wkinterfacemovie/setmovieurl%28__%29.md): Sets the URL of the movie to play.
- [setVideoGravity:](wkinterfacemovie/setvideogravity%28__%29.md): Sets the resizing behavior for the movie content.
- [setPosterImage:](wkinterfacemovie/setposterimage%28__%29.md): Sets the poster image to display for the movie.
- [setLoops:](wkinterfacemovie/setloops%28__%29.md): Sets a Boolean value indicating whether the movie plays in a continuous loop.

### Initializing for SwiftUI

- [init](wkinterfacemovie/init%28%29.md): Deprecated. Creates a movie object for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Images and movies

- [WKInterfaceImage](wkinterfaceimage.md): An image that can be displayed in the interface of your watchOS app.
- [WKImage](wkimage.md): A wrapper for images you use with a picker interface.
- [WKImageAnimatable](wkimageanimatable.md): A collection of methods you can use to control the playback of animated images.
- [WKInterfaceInlineMovie](wkinterfaceinlinemovie.md): An interface element that displays a video’s poster image and supports inline playing of the video.
- [WKInterfaceHMCamera](wkinterfacehmcamera.md): An interface element that displays either a video stream or a single snapshot from an IP camera connected to HomeKit.
- [WKVideoGravity](wkvideogravity.md): Constants indicating the appearance of video content.
