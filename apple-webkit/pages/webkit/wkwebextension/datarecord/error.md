> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/datarecord/error](https://developer.apple.com/documentation/webkit/wkwebextension/datarecord/error)

# WKWebExtension.DataRecord.Error

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension.DataRecord](../datarecord.md) domain.

## Declaration

```swift
struct Error
```

## Topics

### Type Properties

- [errorDomain](error/errordomain.md): Indicates a [WKWebExtension.DataRecord](../datarecord.md) error.
- [localStorageFailed](error/localstoragefailed.md): Indicates a failure occurred when either deleting or calculating local storage.
- [sessionStorageFailed](error/sessionstoragefailed.md): Indicates a failure occurred when either deleting or calculating session storage.
- [synchronizedStorageFailed](error/synchronizedstoragefailed.md): Indicates a failure occurred when either deleting or calculating synchronized storage.
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
- [WKWebExtension.DataRecord.Error.Code](error/code.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../datarecord.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](../matchpattern.md) domain.
- [WKWebExtension.MessagePort.Error.Code](../messageport/error/code.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../messageport.md) domain.
- [WKWebExtension.MessagePort.Error](../messageport/error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../messageport.md) domain.
