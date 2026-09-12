> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/error/code](https://developer.apple.com/documentation/webkit/wkwebextension/error/code)

# WKWebExtension.Error.Code (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension](../../wkwebextension.md) domain.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [WKWebExtension.Error.Code.invalidArchive](code/invalidarchive.md): Indicates that the archive file is invalid or corrupt.
- [WKWebExtension.Error.Code.invalidBackgroundPersistence](code/invalidbackgroundpersistence.md): Indicates that the extension specified background persistence that was not compatible with the platform or features requested.
- [WKWebExtension.Error.Code.invalidDeclarativeNetRequestEntry](code/invaliddeclarativenetrequestentry.md): Indicates that an invalid declarative net request entry was encountered.
- [WKWebExtension.Error.Code.invalidManifest](code/invalidmanifest.md): Indicates that an invalid `manifest.json` was encountered.
- [WKWebExtension.Error.Code.invalidManifestEntry](code/invalidmanifestentry.md): Indicates that an invalid manifest entry was encountered.
- [WKWebExtension.Error.Code.invalidResourceCodeSignature](code/invalidresourcecodesignature.md): Indicates that a resource failed the bundle’s code signature checks.
- [WKWebExtension.Error.Code.resourceNotFound](code/resourcenotfound.md): Indicates that a specified resource was not found on disk.
- [WKWebExtension.Error.Code.unknown](code/unknown.md): Indicates that an unknown error occurred.
- [WKWebExtension.Error.Code.unsupportedManifestVersion](code/unsupportedmanifestversion.md): Indicates that the manifest version is not supported.

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

- [WKWebExtensionContext.Error.Code](../../wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../../wkwebextensioncontext.md) domain.
- [WKWebExtension.DataRecord.Error.Code](../datarecord/error/code.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../datarecord.md) domain.
- [WKWebExtension.DataRecord.Error](../datarecord/error.md): Constants that indicate errors in the [WKWebExtension.DataRecord](../datarecord.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](../matchpattern.md) domain.
- [WKWebExtension.MessagePort.Error.Code](../messageport/error/code.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../messageport.md) domain.
- [WKWebExtension.MessagePort.Error](../messageport/error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](../messageport.md) domain.

# WKWebExtensionError (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension](../../wkwebextension.md) domain.

## Declaration

```objectivec
enum WKWebExtensionError : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionErrorInvalidArchive](code/invalidarchive.md): Indicates that the archive file is invalid or corrupt.
- [WKWebExtensionErrorInvalidBackgroundPersistence](code/invalidbackgroundpersistence.md): Indicates that the extension specified background persistence that was not compatible with the platform or features requested.
- [WKWebExtensionErrorInvalidDeclarativeNetRequestEntry](code/invaliddeclarativenetrequestentry.md): Indicates that an invalid declarative net request entry was encountered.
- [WKWebExtensionErrorInvalidManifest](code/invalidmanifest.md): Indicates that an invalid `manifest.json` was encountered.
- [WKWebExtensionErrorInvalidManifestEntry](code/invalidmanifestentry.md): Indicates that an invalid manifest entry was encountered.
- [WKWebExtensionErrorInvalidResourceCodeSignature](code/invalidresourcecodesignature.md): Indicates that a resource failed the bundle’s code signature checks.
- [WKWebExtensionErrorResourceNotFound](code/resourcenotfound.md): Indicates that a specified resource was not found on disk.
- [WKWebExtensionErrorUnknown](code/unknown.md): Indicates that an unknown error occurred.
- [WKWebExtensionErrorUnsupportedManifestVersion](code/unsupportedmanifestversion.md): Indicates that the manifest version is not supported.

## See Also

### Web extension errors

- [WKWebExtensionContextError](../../wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../../wkwebextensioncontext.md) domain.
- [WKWebExtensionDataRecordError](../datarecord/error/code.md): Constants that indicate errors in the [WKWebExtensionDataRecord](../datarecord.md) domain.
- [WKWebExtensionMatchPatternError](../matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtensionMatchPattern](../matchpattern.md) domain.
- [WKWebExtensionMessagePortError](../messageport/error/code.md): Constants that indicate errors in the [WKWebExtensionMessagePort](../messageport.md) domain.
