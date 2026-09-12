> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scwindow](https://developer.apple.com/documentation/screencapturekit/scwindow)

# SCWindow (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents an onscreen window.

## Declaration

```swift
class SCWindow
```

<a id="overview"></a>

## Overview

Retrieve the available windows from an instance of [SCShareableContent](scshareablecontent.md). Select one or more windows to capture and use them to create an instance of [SCContentFilter](sccontentfilter.md). Apply the filter to an instance of [SCStream](scstream.md) to limit its output to content matching your criteria.

## Topics

### Identifying windows

- [windowID](scwindow/windowid.md): The Core Graphics window identifier.
- [title](scwindow/title.md): The string that displays in a window’s title bar.
- [owningApplication](scwindow/owningapplication.md): The app that owns the window.
- [windowLayer](scwindow/windowlayer.md): The layer of the window relative to other windows.

### Accessing dimensions

- [frame](scwindow/frame.md): A rectangle the represents the frame of the window within a display.

### Determining visibility

- [isOnScreen](scwindow/isonscreen.md): A Boolean value that indicates whether the window is on screen.
- [isActive](scwindow/isactive.md): A Boolean value that indicates if the window is currently streaming.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.

# SCWindow (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents an onscreen window.

## Declaration

```objectivec
@interface SCWindow : NSObject
```

<a id="overview"></a>

## Overview

Retrieve the available windows from an instance of [SCShareableContent](scshareablecontent.md). Select one or more windows to capture and use them to create an instance of [SCContentFilter](sccontentfilter.md). Apply the filter to an instance of [SCStream](scstream.md) to limit its output to content matching your criteria.

## Topics

### Identifying windows

- [windowID](scwindow/windowid.md): The Core Graphics window identifier.
- [title](scwindow/title.md): The string that displays in a window’s title bar.
- [owningApplication](scwindow/owningapplication.md): The app that owns the window.
- [windowLayer](scwindow/windowlayer.md): The layer of the window relative to other windows.

### Accessing dimensions

- [frame](scwindow/frame.md): A rectangle the represents the frame of the window within a display.

### Determining visibility

- [onScreen](scwindow/isonscreen.md): A Boolean value that indicates whether the window is on screen.
- [active](scwindow/isactive.md): A Boolean value that indicates if the window is currently streaming.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
