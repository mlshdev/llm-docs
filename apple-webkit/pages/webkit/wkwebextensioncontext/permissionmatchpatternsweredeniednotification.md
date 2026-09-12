> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/permissionmatchpatternsweredeniednotification](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/permissionmatchpatternsweredeniednotification)

# permissionMatchPatternsWereDeniedNotification (Swift)

**Framework:** WebKit  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

This notification is sent whenever a web extension context has newly denied permission match patterns.

## Declaration

```swift
nonisolated class let permissionMatchPatternsWereDeniedNotification: NSNotification.Name
```

# WKWebExtensionContextPermissionMatchPatternsWereDeniedNotification (Objective-C)

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

This notification is sent whenever a web extension context has newly denied permission match patterns.

## Declaration

```objectivec
extern NSNotificationName const WKWebExtensionContextPermissionMatchPatternsWereDeniedNotification;
```

## See Also

### Variables

- [WKWebExtensionContextDeniedPermissionMatchPatternsWereRemovedNotification](deniedpermissionmatchpatternswereremovednotification.md): A notification the system sends whenever a web extension context has newly removed denied permission match patterns.
- [WKWebExtensionContextDeniedPermissionsWereRemovedNotification](deniedpermissionswereremovednotification.md): A notification the system sends whenever a web extension context has newly removed denied permissions.
- [WKWebExtensionContextErrorDomain](errordomain.md)
- [WKWebExtensionContextErrorsDidUpdateNotification](errorsdidupdatenotification.md): This notification is sent whenever a web extension context has new errors or errors were cleared.
- [WKWebExtensionContextGrantedPermissionMatchPatternsWereRemovedNotification](grantedpermissionmatchpatternswereremovednotification.md): This notification is sent whenever a web extension context has newly removed granted permission match patterns.
- [WKWebExtensionContextGrantedPermissionsWereRemovedNotification](grantedpermissionswereremovednotification.md): This notification is sent whenever a web extension context has newly removed granted permissions.
- [WKWebExtensionContextPermissionMatchPatternsWereGrantedNotification](permissionmatchpatternsweregrantednotification.md): This notification is sent whenever a web extension context has newly granted permission match patterns.
- [WKWebExtensionContextPermissionsWereDeniedNotification](permissionsweredeniednotification.md): This notification is sent whenever a web extension context has newly denied permissions.
- [WKWebExtensionContextPermissionsWereGrantedNotification](permissionsweregrantednotification.md): This notification is sent whenever a web extension context has newly granted permissions.
