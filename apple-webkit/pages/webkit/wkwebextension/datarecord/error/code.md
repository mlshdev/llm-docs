> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/datarecord/error/code](https://developer.apple.com/documentation/webkit/wkwebextension/datarecord/error/code)

# WKWebExtension.DataRecord.Error.Code (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension.DataRecord](../../datarecord.md) domain.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [WKWebExtension.DataRecord.Error.Code.localStorageFailed](code/localstoragefailed.md): Indicates a failure occurred when either deleting or calculating local storage.
- [WKWebExtension.DataRecord.Error.Code.sessionStorageFailed](code/sessionstoragefailed.md): Indicates a failure occurred when either deleting or calculating session storage.
- [WKWebExtension.DataRecord.Error.Code.synchronizedStorageFailed](code/synchronizedstoragefailed.md): Indicates a failure occurred when either deleting or calculating synchronized storage.
- [WKWebExtension.DataRecord.Error.Code.unknown](code/unknown.md): Indicates that an unknown error occurred.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md): Creates an error code from a raw value you provide.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Web extension errors

- [WKWebExtension.Error.Code](../../error/code.md): Constants that indicate errors in the [WKWebExtension](../../../wkwebextension.md) domain.
- [WKWebExtensionContext.Error.Code](../../../wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../../../wkwebextensioncontext.md) domain.
- [WKWebExtension.DataRecord.Error](../error.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../../datarecord.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](../../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](../../matchpattern.md) domain.
- [WKWebExtension.MessagePort.Error.Code](../../messageport/error/code.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../../messageport.md) domain.
- [WKWebExtension.MessagePort.Error](../../messageport/error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../../messageport.md) domain.

# WKWebExtensionDataRecordError (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtensionDataRecord](../../datarecord.md) domain.

## Declaration

```objectivec
enum WKWebExtensionDataRecordError : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionDataRecordErrorLocalStorageFailed](code/localstoragefailed.md): Indicates a failure occurred when either deleting or calculating local storage.
- [WKWebExtensionDataRecordErrorSessionStorageFailed](code/sessionstoragefailed.md): Indicates a failure occurred when either deleting or calculating session storage.
- [WKWebExtensionDataRecordErrorSynchronizedStorageFailed](code/synchronizedstoragefailed.md): Indicates a failure occurred when either deleting or calculating synchronized storage.
- [WKWebExtensionDataRecordErrorUnknown](code/unknown.md): Indicates that an unknown error occurred.

## See Also

### Web extension errors

- [WKWebExtensionError](../../error/code.md): Constants that indicate errors in the [WKWebExtension](../../../wkwebextension.md) domain.
- [WKWebExtensionContextError](../../../wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../../../wkwebextensioncontext.md) domain.
- [WKWebExtensionMatchPatternError](../../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtensionMatchPattern](../../matchpattern.md) domain.
- [WKWebExtensionMessagePortError](../../messageport/error/code.md): Constants that indicate errors in the [WKWebExtensionMessagePort](../../messageport.md) domain.
