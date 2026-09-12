> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpdfconfiguration](https://developer.apple.com/documentation/webkit/wkpdfconfiguration)

# WKPDFConfiguration (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

The configuration data to use when generating a PDF representation of a web view’s contents.

## Declaration

```swift
@MainActor class WKPDFConfiguration
```

<a id="overview"></a>

## Overview

Create a [WKPDFConfiguration](wkpdfconfiguration.md) object when you want to generate a PDF version of your web view’s content. Use this object to specify the portion of the web view to capture. To generate the PDF content, pass the configuration object to the [createPDF(configuration:completionHandler:)](wkwebview/createpdf%28configuration_completionhandler_%29.md) method of [WKWebView](wkwebview.md), which returns the PDF data for you to use.

## Topics

### Specifying the snapshot dimensions

- [rect](wkpdfconfiguration/rect-2a0vp.md): The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.

### Specifying snapshot properties

- [allowTransparentBackground](wkpdfconfiguration/allowtransparentbackground.md): A Boolean value that indicates whether the PDF may have a transparent background.

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

- [WKSnapshotConfiguration](wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.

# WKPDFConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

The configuration data to use when generating a PDF representation of a web view’s contents.

## Declaration

```objectivec
@interface WKPDFConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Create a [WKPDFConfiguration](wkpdfconfiguration.md) object when you want to generate a PDF version of your web view’s content. Use this object to specify the portion of the web view to capture. To generate the PDF content, pass the configuration object to the [createPDF(configuration:completionHandler:)](wkwebview/createpdf%28configuration_completionhandler_%29.md) method of [WKWebView](wkwebview.md), which returns the PDF data for you to use.

## Topics

### Specifying the snapshot dimensions

- [rect](wkpdfconfiguration/rect-3xww9.md): The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.

### Specifying snapshot properties

- [allowTransparentBackground](wkpdfconfiguration/allowtransparentbackground.md): A Boolean value that indicates whether the PDF may have a transparent background.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Snapshots

- [WKSnapshotConfiguration](wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
