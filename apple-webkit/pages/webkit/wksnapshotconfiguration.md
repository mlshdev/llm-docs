> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wksnapshotconfiguration](https://developer.apple.com/documentation/webkit/wksnapshotconfiguration)

# WKSnapshotConfiguration (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The configuration data to use when generating an image from a web view’s contents.

## Declaration

```swift
@MainActor class WKSnapshotConfiguration
```

<a id="overview"></a>

## Overview

Create a [WKSnapshotConfiguration](wksnapshotconfiguration.md) object when you want to generate an image based on your web view’s content. Use this object to specify the portion of the web view to capture and the capture behavior. To generate the snapshot, pass the configuration object to the [takeSnapshot(with:completionHandler:)](wkwebview/takesnapshot%28with_completionhandler_%29.md) method of [WKWebView](wkwebview.md), which returns a platform-native image for you to use.

## Topics

### Specifying the snapshot dimensions

- [rect](wksnapshotconfiguration/rect.md): The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.
- [snapshotWidth](wksnapshotconfiguration/snapshotwidth.md): The width of the captured image, in points.

### Configuring the capture behavior

- [afterScreenUpdates](wksnapshotconfiguration/afterscreenupdates.md): A Boolean value that indicates whether to take the snapshot after incorporating any pending screen updates.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Snapshots

- [WKPDFConfiguration](wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

# WKSnapshotConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The configuration data to use when generating an image from a web view’s contents.

## Declaration

```objectivec
@interface WKSnapshotConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Create a [WKSnapshotConfiguration](wksnapshotconfiguration.md) object when you want to generate an image based on your web view’s content. Use this object to specify the portion of the web view to capture and the capture behavior. To generate the snapshot, pass the configuration object to the [takeSnapshotWithConfiguration:completionHandler:](wkwebview/takesnapshot%28with_completionhandler_%29.md) method of [WKWebView](wkwebview.md), which returns a platform-native image for you to use.

## Topics

### Specifying the snapshot dimensions

- [rect](wksnapshotconfiguration/rect.md): The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.
- [snapshotWidth](wksnapshotconfiguration/snapshotwidth.md): The width of the captured image, in points.

### Configuring the capture behavior

- [afterScreenUpdates](wksnapshotconfiguration/afterscreenupdates.md): A Boolean value that indicates whether to take the snapshot after incorporating any pending screen updates.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Snapshots

- [WKPDFConfiguration](wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.
