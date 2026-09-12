> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/permissionstatus](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/permissionstatus)

# WKWebExtensionContext.PermissionStatus (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used to indicate permission status in web extension context.

## Declaration

```swift
enum PermissionStatus
```

## Topics

### Enumeration Cases

- [WKWebExtensionContext.PermissionStatus.deniedExplicitly](permissionstatus/deniedexplicitly.md): Indicates that the permission was explicitly denied.
- [WKWebExtensionContext.PermissionStatus.deniedImplicitly](permissionstatus/deniedimplicitly.md): Indicates that the permission was implicitly denied because of another explicitly denied permission.
- [WKWebExtensionContext.PermissionStatus.grantedExplicitly](permissionstatus/grantedexplicitly.md): Indicates that the permission was explicitly granted permission.
- [WKWebExtensionContext.PermissionStatus.grantedImplicitly](permissionstatus/grantedimplicitly.md): Indicates that the permission was implicitly granted because of another explicitly granted permission.
- [WKWebExtensionContext.PermissionStatus.requestedExplicitly](permissionstatus/requestedexplicitly.md): Indicates that the permission was explicitly requested.
- [WKWebExtensionContext.PermissionStatus.requestedImplicitly](permissionstatus/requestedimplicitly.md): Indicates that the permission was implicitly requested because of another explicitly requested permission.
- [WKWebExtensionContext.PermissionStatus.unknown](permissionstatus/unknown.md): Indicates an unknown permission status.

### Initializers

- [init(rawValue:)](permissionstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# WKWebExtensionContextPermissionStatus (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants used to indicate permission status in web extension context.

## Declaration

```objectivec
enum WKWebExtensionContextPermissionStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionContextPermissionStatusDeniedExplicitly](permissionstatus/deniedexplicitly.md): Indicates that the permission was explicitly denied.
- [WKWebExtensionContextPermissionStatusDeniedImplicitly](permissionstatus/deniedimplicitly.md): Indicates that the permission was implicitly denied because of another explicitly denied permission.
- [WKWebExtensionContextPermissionStatusGrantedExplicitly](permissionstatus/grantedexplicitly.md): Indicates that the permission was explicitly granted permission.
- [WKWebExtensionContextPermissionStatusGrantedImplicitly](permissionstatus/grantedimplicitly.md): Indicates that the permission was implicitly granted because of another explicitly granted permission.
- [WKWebExtensionContextPermissionStatusRequestedExplicitly](permissionstatus/requestedexplicitly.md): Indicates that the permission was explicitly requested.
- [WKWebExtensionContextPermissionStatusRequestedImplicitly](permissionstatus/requestedimplicitly.md): Indicates that the permission was implicitly requested because of another explicitly requested permission.
- [WKWebExtensionContextPermissionStatusUnknown](permissionstatus/unknown.md): Indicates an unknown permission status.

## See Also

### Enumerations

- [WKWebExtensionContextError](error/code.md): Constants that indicate errors in the [WKWebExtensionContext](../wkwebextensioncontext.md) domain.
