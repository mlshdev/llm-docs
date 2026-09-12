> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/error/code](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/error/code)

# WKWebExtensionContext.Error.Code (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtensionContext](../../wkwebextensioncontext.md) domain.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [WKWebExtensionContext.Error.Code.alreadyLoaded](code/alreadyloaded.md): Indicates that the context is already loaded by a [WKWebExtensionController](../../wkwebextensioncontroller.md).
- [WKWebExtensionContext.Error.Code.backgroundContentFailedToLoad](code/backgroundcontentfailedtoload.md): Indicates that an error occurred loading the background content.
- [WKWebExtensionContext.Error.Code.baseURLAlreadyInUse](code/baseurlalreadyinuse.md): Indicates that another context is already using the specified base URL.
- [WKWebExtensionContext.Error.Code.noBackgroundContent](code/nobackgroundcontent.md): Indicates that the extension does not have background content.
- [WKWebExtensionContext.Error.Code.notLoaded](code/notloaded.md): Indicates that the context is not loaded by a [WKWebExtensionController](../../wkwebextensioncontroller.md).
- [WKWebExtensionContext.Error.Code.unknown](code/unknown.md): Indicates that an unknown error occurred.

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

- [WKWebExtension.Error.Code](../../wkwebextension/error/code.md): Constants that indicate errors in the [WKWebExtension](../../wkwebextension.md) domain.
- [WKWebExtension.DataRecord.Error.Code](../../wkwebextension/datarecord/error/code.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../../wkwebextension/datarecord.md) domain.
- [WKWebExtension.DataRecord.Error](../../wkwebextension/datarecord/error.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../../wkwebextension/datarecord.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](../../wkwebextension/matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](../../wkwebextension/matchpattern.md) domain.
- [WKWebExtension.MessagePort.Error.Code](../../wkwebextension/messageport/error/code.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../../wkwebextension/messageport.md) domain.
- [WKWebExtension.MessagePort.Error](../../wkwebextension/messageport/error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../../wkwebextension/messageport.md) domain.

# WKWebExtensionContextError (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtensionContext](../../wkwebextensioncontext.md) domain.

## Declaration

```objectivec
enum WKWebExtensionContextError : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionContextErrorAlreadyLoaded](code/alreadyloaded.md): Indicates that the context is already loaded by a [WKWebExtensionController](../../wkwebextensioncontroller.md).
- [WKWebExtensionContextErrorBackgroundContentFailedToLoad](code/backgroundcontentfailedtoload.md): Indicates that an error occurred loading the background content.
- [WKWebExtensionContextErrorBaseURLAlreadyInUse](code/baseurlalreadyinuse.md): Indicates that another context is already using the specified base URL.
- [WKWebExtensionContextErrorNoBackgroundContent](code/nobackgroundcontent.md): Indicates that the extension does not have background content.
- [WKWebExtensionContextErrorNotLoaded](code/notloaded.md): Indicates that the context is not loaded by a [WKWebExtensionController](../../wkwebextensioncontroller.md).
- [WKWebExtensionContextErrorUnknown](code/unknown.md): Indicates that an unknown error occurred.

## See Also

### Web extension errors

- [WKWebExtensionError](../../wkwebextension/error/code.md): Constants that indicate errors in the [WKWebExtension](../../wkwebextension.md) domain.
- [WKWebExtensionDataRecordError](../../wkwebextension/datarecord/error/code.md): Constants that indicate errors in the [WKWebExtensionDataRecord](../../wkwebextension/datarecord.md) domain.
- [WKWebExtensionMatchPatternError](../../wkwebextension/matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtensionMatchPattern](../../wkwebextension/matchpattern.md) domain.
- [WKWebExtensionMessagePortError](../../wkwebextension/messageport/error/code.md): Constants that indicate errors in the [WKWebExtensionMessagePort](../../wkwebextension/messageport.md) domain.
