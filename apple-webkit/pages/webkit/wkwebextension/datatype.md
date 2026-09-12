> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/datatype](https://developer.apple.com/documentation/webkit/wkwebextension/datatype)

# WKWebExtension.DataType (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants for specifying data types for a [WKWebExtension.DataRecord](datarecord.md).

## Declaration

```swift
struct DataType
```

## Topics

### Constants

- [local](datatype/local.md): Specifies local storage, including `browser.storage.local`.
- [session](datatype/session.md): Specifies session storage, including `browser.storage.session`.
- [synchronized](datatype/synchronized.md): Specifies synchronized storage, including `browser.storage.sync`.

### Initializers

- [init(rawValue:)](datatype/init%28rawvalue_%29.md): Creates a data type from a raw value you provide.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [WKWebExtension.Error](error.md): Constants that indicate errors in the [WKWebExtension](../wkwebextension.md) domain.
- [WKWebExtension.Permission](permission.md): Constants for specifying permission in a [WKWebExtensionContext](../wkwebextensioncontext.md).
- [WKWebExtension.TabChangedProperties](tabchangedproperties.md): Constants the web extension controller and web extension context use to indicate tab changes.

# WKWebExtensionDataType (Objective-C)

**Framework:** WebKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants for specifying data types for a [WKWebExtensionDataRecord](datarecord.md).

## Declaration

```objectivec
typedef NSString * WKWebExtensionDataType;
```

## Topics

### Constants

- [WKWebExtensionDataTypeLocal](datatype/local.md): Specifies local storage, including `browser.storage.local`.
- [WKWebExtensionDataTypeSession](datatype/session.md): Specifies session storage, including `browser.storage.session`.
- [WKWebExtensionDataTypeSynchronized](datatype/synchronized.md): Specifies synchronized storage, including `browser.storage.sync`.

## See Also

### Type Aliases

- [WKWebExtensionPermission](permission.md): Constants for specifying permission in a [WKWebExtensionContext](../wkwebextensioncontext.md).
