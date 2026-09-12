> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scrunningapplication](https://developer.apple.com/documentation/screencapturekit/scrunningapplication)

# SCRunningApplication (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents an app running on a device.

## Declaration

```swift
class SCRunningApplication
```

<a id="overview"></a>

## Overview

Retrieve the available apps from an instance of [SCShareableContent](scshareablecontent.md). Select one or more apps to capture and use them to create an instance of [SCContentFilter](sccontentfilter.md). Apply the filter to an instance of [SCStream](scstream.md) to limit its output to content matching your criteria.

## Topics

### Inspecting an app

- [processID](scrunningapplication/processid.md): The system process identifier of the app.
- [bundleIdentifier](scrunningapplication/bundleidentifier.md): The unique bundle identifier of the app.
- [applicationName](scrunningapplication/applicationname.md): The display name of the app.

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
- [SCWindow](scwindow.md): An instance that represents an onscreen window.

# SCRunningApplication (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

An instance that represents an app running on a device.

## Declaration

```objectivec
@interface SCRunningApplication : NSObject
```

<a id="overview"></a>

## Overview

Retrieve the available apps from an instance of [SCShareableContent](scshareablecontent.md). Select one or more apps to capture and use them to create an instance of [SCContentFilter](sccontentfilter.md). Apply the filter to an instance of [SCStream](scstream.md) to limit its output to content matching your criteria.

## Topics

### Inspecting an app

- [processID](scrunningapplication/processid.md): The system process identifier of the app.
- [bundleIdentifier](scrunningapplication/bundleidentifier.md): The unique bundle identifier of the app.
- [applicationName](scrunningapplication/applicationname.md): The display name of the app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.
