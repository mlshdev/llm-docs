> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/error/code](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/error/code)

# WKWebExtension.MessagePort.Error.Code (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension.MessagePort](../../messageport.md) domain.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [WKWebExtension.MessagePort.Error.Code.messageInvalid](code/messageinvalid.md): Indicates that the message is invalid.
- [WKWebExtension.MessagePort.Error.Code.notConnected](code/notconnected.md): Indicates that the message port is disconnected.
- [WKWebExtension.MessagePort.Error.Code.unknown](code/unknown.md): Indicates that an unknown error occurred.

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
- [WKWebExtension.DataRecord.Error.Code](../../datarecord/error/code.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../../datarecord.md) domain.
- [WKWebExtension.DataRecord.Error](../../datarecord/error.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../../datarecord.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](../../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](../../matchpattern.md) domain.
- [WKWebExtension.MessagePort.Error](../error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../../messageport.md) domain.

# WKWebExtensionMessagePortError (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtensionMessagePort](../../messageport.md) domain.

## Declaration

```objectivec
enum WKWebExtensionMessagePortError : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionMessagePortErrorMessageInvalid](code/messageinvalid.md): Indicates that the message is invalid.
- [WKWebExtensionMessagePortErrorNotConnected](code/notconnected.md): Indicates that the message port is disconnected.
- [WKWebExtensionMessagePortErrorUnknown](code/unknown.md): Indicates that an unknown error occurred.

## See Also

### Web extension errors

- [WKWebExtensionError](../../error/code.md): Constants that indicate errors in the [WKWebExtension](../../../wkwebextension.md) domain.
- [WKWebExtensionContextError](../../../wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../../../wkwebextensioncontext.md) domain.
- [WKWebExtensionDataRecordError](../../datarecord/error/code.md): Constants that indicate errors in the [WKWebExtensionDataRecord](../../datarecord.md) domain.
- [WKWebExtensionMatchPatternError](../../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtensionMatchPattern](../../matchpattern.md) domain.
