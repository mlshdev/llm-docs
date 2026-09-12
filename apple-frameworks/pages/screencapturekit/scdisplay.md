> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scdisplay](https://developer.apple.com/documentation/screencapturekit/scdisplay)

# SCDisplay (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents a display device.

## Declaration

```swift
class SCDisplay
```

<a id="overview"></a>

## Overview

A display object represents a physical display connected to a Mac. Query the display to retrieve its unique identifier and onscreen coordinates.

Retrieve the available displays from an instance of [SCShareableContent](scshareablecontent.md). Select a display to capture and use it to create an instance of [SCContentFilter](sccontentfilter.md). Apply the filter to an instance of [SCStream](scstream.md) to limit its output to content matching your criteria.

## Topics

### Identifying displays

- [displayID](scdisplay/displayid.md): The Core Graphics display identifier.

### Accessing dimensions

- [frame](scdisplay/frame.md): The frame of the display.
- [width](scdisplay/width.md): The width of the display in points.
- [height](scdisplay/height.md): The height of the display in points.

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
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.

# SCDisplay (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents a display device.

## Declaration

```objectivec
@interface SCDisplay : NSObject
```

<a id="overview"></a>

## Overview

A display object represents a physical display connected to a Mac. Query the display to retrieve its unique identifier and onscreen coordinates.

Retrieve the available displays from an instance of [SCShareableContent](scshareablecontent.md). Select a display to capture and use it to create an instance of [SCContentFilter](sccontentfilter.md). Apply the filter to an instance of [SCStream](scstream.md) to limit its output to content matching your criteria.

## Topics

### Identifying displays

- [displayID](scdisplay/displayid.md): The Core Graphics display identifier.

### Accessing dimensions

- [frame](scdisplay/frame.md): The frame of the display.
- [width](scdisplay/width.md): The width of the display in points.
- [height](scdisplay/height.md): The height of the display in points.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.
