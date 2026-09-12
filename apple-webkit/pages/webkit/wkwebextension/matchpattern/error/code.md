> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/error/code](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/error/code)

# WKWebExtension.MatchPattern.Error.Code (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension.MatchPattern](../../matchpattern.md) domain.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [WKWebExtension.MatchPattern.Error.Code.invalidHost](code/invalidhost.md): Indicates that the host component was invalid.
- [WKWebExtension.MatchPattern.Error.Code.invalidPath](code/invalidpath.md): Indicates that the path component was invalid.
- [WKWebExtension.MatchPattern.Error.Code.invalidScheme](code/invalidscheme.md): Indicates that the scheme component was invalid.
- [WKWebExtension.MatchPattern.Error.Code.unknown](code/unknown.md): Indicates that an unknown error occurred.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

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
- [WKWebExtension.MessagePort.Error.Code](../../messageport/error/code.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../../messageport.md) domain.
- [WKWebExtension.MessagePort.Error](../../messageport/error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../../messageport.md) domain.

# WKWebExtensionMatchPatternError (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtensionMatchPattern](../../matchpattern.md) domain.

## Declaration

```objectivec
enum WKWebExtensionMatchPatternError : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionMatchPatternErrorInvalidHost](code/invalidhost.md): Indicates that the host component was invalid.
- [WKWebExtensionMatchPatternErrorInvalidPath](code/invalidpath.md): Indicates that the path component was invalid.
- [WKWebExtensionMatchPatternErrorInvalidScheme](code/invalidscheme.md): Indicates that the scheme component was invalid.
- [WKWebExtensionMatchPatternErrorUnknown](code/unknown.md): Indicates that an unknown error occurred.

## See Also

### Web extension errors

- [WKWebExtensionError](../../error/code.md): Constants that indicate errors in the [WKWebExtension](../../../wkwebextension.md) domain.
- [WKWebExtensionContextError](../../../wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../../../wkwebextensioncontext.md) domain.
- [WKWebExtensionDataRecordError](../../datarecord/error/code.md): Constants that indicate errors in the [WKWebExtensionDataRecord](../../datarecord.md) domain.
- [WKWebExtensionMessagePortError](../../messageport/error/code.md): Constants that indicate errors in the [WKWebExtensionMessagePort](../../messageport.md) domain.
