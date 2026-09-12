> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/error](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/error)

# WKWebExtensionContext.Error

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used to indicate errors in the web extension context domain.

## Declaration

```swift
struct Error
```

## Topics

### Type Properties

- [alreadyLoaded](error/alreadyloaded.md): Indicates that the context is already loaded by a [WKWebExtensionController](../wkwebextensioncontroller.md).
- [backgroundContentFailedToLoad](error/backgroundcontentfailedtoload.md): Indicates that an error occurred loading the background content.
- [baseURLAlreadyInUse](error/baseurlalreadyinuse.md): Indicates that another context is already using the specified base URL.
- [errorDomain](error/errordomain.md): A string that identifies the error domain.
- [noBackgroundContent](error/nobackgroundcontent.md): Indicates that the extension does not have background content.
- [notLoaded](error/notloaded.md): Indicates that the context is not loaded by a [WKWebExtensionController](../wkwebextensioncontroller.md).
- [unknown](error/unknown.md): Indicates that an unknown error occurred.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [WKWebExtensionContext.NotificationUserInfoKey](notificationuserinfokey.md): Constants for specifying web extension context information in notifications.
