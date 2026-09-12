> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkopenpanelparameters](https://developer.apple.com/documentation/webkit/wkopenpanelparameters)

# WKOpenPanelParameters (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.12+ · visionOS 2.4+

The configuration details of a file upload control in your web content.

## Declaration

```swift
@MainActor class WKOpenPanelParameters
```

<a id="overview"></a>

## Overview

Use a [WKOpenPanelParameters](wkopenpanelparameters.md) to determine the configuration of a file upload control. You don’t create this object directly. Instead, a web view creates one and passes it to the [webView(\_:runOpenPanelWith:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runopenpanelwith_initiatedbyframe_completionhandler_%29.md) method of its UI delegate object when it displays a file upload control.

## Topics

### Configuring the panel parameters

- [allowsMultipleSelection](wkopenpanelparameters/allowsmultipleselection.md): A Boolean value that indicates whether the file upload control supports multiple files.
- [allowsDirectories](wkopenpanelparameters/allowsdirectories.md): A Boolean value that indicates whether the file upload control supports the selection of directories.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Displaying an upload panel

- [webView(\_:runOpenPanelWith:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runopenpanelwith_initiatedbyframe_completionhandler_%29.md): Displays a file upload panel.

# WKOpenPanelParameters (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.12+ · visionOS 2.4+

The configuration details of a file upload control in your web content.

## Declaration

```objectivec
@interface WKOpenPanelParameters : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKOpenPanelParameters](wkopenpanelparameters.md) to determine the configuration of a file upload control. You don’t create this object directly. Instead, a web view creates one and passes it to the [webView:runOpenPanelWithParameters:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runopenpanelwith_initiatedbyframe_completionhandler_%29.md) method of its UI delegate object when it displays a file upload control.

## Topics

### Configuring the panel parameters

- [allowsMultipleSelection](wkopenpanelparameters/allowsmultipleselection.md): A Boolean value that indicates whether the file upload control supports multiple files.
- [allowsDirectories](wkopenpanelparameters/allowsdirectories.md): A Boolean value that indicates whether the file upload control supports the selection of directories.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Displaying an upload panel

- [webView:runOpenPanelWithParameters:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runopenpanelwith_initiatedbyframe_completionhandler_%29.md): Displays a file upload panel.
