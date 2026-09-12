> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/error](https://developer.apple.com/documentation/webkit/wkwebextension/error)

# WKWebExtension.Error

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension](../wkwebextension.md) domain.

## Declaration

```swift
struct Error
```

## Topics

### Type Properties

- [errorDomain](error/errordomain.md)
- [invalidArchive](error/invalidarchive.md): Indicates that the archive file is invalid or corrupt.
- [invalidBackgroundPersistence](error/invalidbackgroundpersistence.md): Indicates that the extension specified background persistence that was not compatible with the platform or features requested.
- [invalidDeclarativeNetRequestEntry](error/invaliddeclarativenetrequestentry.md): Indicates that an invalid declarative net request entry was encountered.
- [invalidManifest](error/invalidmanifest.md): Indicates that an invalid `manifest.json` was encountered.
- [invalidManifestEntry](error/invalidmanifestentry.md): Indicates that an invalid manifest entry was encountered.
- [invalidResourceCodeSignature](error/invalidresourcecodesignature.md): Indicates that a resource failed the bundle’s code signature checks.
- [resourceNotFound](error/resourcenotfound.md): Indicates that a specified resource was not found on disk.
- [unknown](error/unknown.md): Indicates that an unknown error occurred.
- [unsupportedManifestVersion](error/unsupportedmanifestversion.md): Indicates that the manifest version is not supported.

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

- [WKWebExtension.DataType](datatype.md): Constants for specifying data types for a [WKWebExtension.DataRecord](datarecord.md).
- [WKWebExtension.Permission](permission.md): Constants for specifying permission in a [WKWebExtensionContext](../wkwebextensioncontext.md).
- [WKWebExtension.TabChangedProperties](tabchangedproperties.md): Constants the web extension controller and web extension context use to indicate tab changes.
