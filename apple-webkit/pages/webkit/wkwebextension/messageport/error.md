> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/error](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/error)

# WKWebExtension.MessagePort.Error

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension.MessagePort](../messageport.md) domain.

## Declaration

```swift
struct Error
```

## Topics

### Type Properties

- [errorDomain](error/errordomain.md): A string that identifies the error domain.
- [messageInvalid](error/messageinvalid.md): Indicates that the message is invalid.
- [notConnected](error/notconnected.md): Indicates that the message port is disconnected.
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

### Web extension errors

- [WKWebExtension.Error.Code](../error/code.md): Constants that indicate errors in the [WKWebExtension](../../wkwebextension.md) domain.
- [WKWebExtensionContext.Error.Code](../../wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../../wkwebextensioncontext.md) domain.
- [WKWebExtension.DataRecord.Error.Code](../datarecord/error/code.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../datarecord.md) domain.
- [WKWebExtension.DataRecord.Error](../datarecord/error.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../datarecord.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](../matchpattern.md) domain.
- [WKWebExtension.MessagePort.Error.Code](error/code.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../messageport.md) domain.
