> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/permission](https://developer.apple.com/documentation/webkit/wkwebextension/permission)

# WKWebExtension.Permission (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants for specifying permission in a [WKWebExtensionContext](../wkwebextensioncontext.md).

## Declaration

```swift
struct Permission
```

## Topics

### Constants

- [activeTab](permission/activetab.md): A request indicating that when a person interacts with the extension, the system grants extra permissions for the active tab only.
- [alarms](permission/alarms.md): A request for access to the `browser.alarms` APIs.
- [clipboardWrite](permission/clipboardwrite.md): A request for access to write to the clipboard.
- [contextMenus](permission/contextmenus.md): A request for access to the `browser.contextMenus` APIs.
- [cookies](permission/cookies.md): A request for access to the `browser.cookies` APIs.
- [declarativeNetRequest](permission/declarativenetrequest.md): A request for access to the `browser.declarativeNetRequest` APIs.
- [declarativeNetRequestFeedback](permission/declarativenetrequestfeedback.md): A request for access to the `browser.declarativeNetRequest` APIs with extra information on matched rules.
- [declarativeNetRequestWithHostAccess](permission/declarativenetrequestwithhostaccess.md): A request for access to the `browser.declarativeNetRequest` APIs with the ability to modify or redirect requests.
- [menus](permission/menus.md): A request for access to the `browser.menus` APIs.
- [nativeMessaging](permission/nativemessaging.md): A request for access to send messages to the app extension bundle.
- [scripting](permission/scripting.md): A request for access to the `browser.scripting` APIs.
- [storage](permission/storage.md): A request for access to the `browser.storage` APIs.
- [tabs](permission/tabs.md): A request for access to extra information on the `browser.tabs` APIs.
- [unlimitedStorage](permission/unlimitedstorage.md): A request for access to an unlimited quota on the `browser.storage.local` APIs.
- [webNavigation](permission/webnavigation.md): A request for access to the `browser.webNavigation` APIs.
- [webRequest](permission/webrequest.md): A request for access to the `browser.webRequest` APIs.

### Initializers

- [init(\_:)](permission/init%28__%29.md)
- [init(rawValue:)](permission/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [WKWebExtension.DataType](datatype.md): Constants for specifying data types for a [WKWebExtension.DataRecord](datarecord.md).
- [WKWebExtension.Error](error.md): Constants that indicate errors in the [WKWebExtension](../wkwebextension.md) domain.
- [WKWebExtension.TabChangedProperties](tabchangedproperties.md): Constants the web extension controller and web extension context use to indicate tab changes.

# WKWebExtensionPermission (Objective-C)

**Framework:** WebKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants for specifying permission in a [WKWebExtensionContext](../wkwebextensioncontext.md).

## Declaration

```objectivec
typedef NSString * WKWebExtensionPermission;
```

## Topics

### Constants

- [WKWebExtensionPermissionActiveTab](permission/activetab.md): A request indicating that when a person interacts with the extension, the system grants extra permissions for the active tab only.
- [WKWebExtensionPermissionAlarms](permission/alarms.md): A request for access to the `browser.alarms` APIs.
- [WKWebExtensionPermissionClipboardWrite](permission/clipboardwrite.md): A request for access to write to the clipboard.
- [WKWebExtensionPermissionContextMenus](permission/contextmenus.md): A request for access to the `browser.contextMenus` APIs.
- [WKWebExtensionPermissionCookies](permission/cookies.md): A request for access to the `browser.cookies` APIs.
- [WKWebExtensionPermissionDeclarativeNetRequest](permission/declarativenetrequest.md): A request for access to the `browser.declarativeNetRequest` APIs.
- [WKWebExtensionPermissionDeclarativeNetRequestFeedback](permission/declarativenetrequestfeedback.md): A request for access to the `browser.declarativeNetRequest` APIs with extra information on matched rules.
- [WKWebExtensionPermissionDeclarativeNetRequestWithHostAccess](permission/declarativenetrequestwithhostaccess.md): A request for access to the `browser.declarativeNetRequest` APIs with the ability to modify or redirect requests.
- [WKWebExtensionPermissionMenus](permission/menus.md): A request for access to the `browser.menus` APIs.
- [WKWebExtensionPermissionNativeMessaging](permission/nativemessaging.md): A request for access to send messages to the app extension bundle.
- [WKWebExtensionPermissionScripting](permission/scripting.md): A request for access to the `browser.scripting` APIs.
- [WKWebExtensionPermissionStorage](permission/storage.md): A request for access to the `browser.storage` APIs.
- [WKWebExtensionPermissionTabs](permission/tabs.md): A request for access to extra information on the `browser.tabs` APIs.
- [WKWebExtensionPermissionUnlimitedStorage](permission/unlimitedstorage.md): A request for access to an unlimited quota on the `browser.storage.local` APIs.
- [WKWebExtensionPermissionWebNavigation](permission/webnavigation.md): A request for access to the `browser.webNavigation` APIs.
- [WKWebExtensionPermissionWebRequest](permission/webrequest.md): A request for access to the `browser.webRequest` APIs.

## See Also

### Type Aliases

- [WKWebExtensionDataType](datatype.md): Constants for specifying data types for a [WKWebExtensionDataRecord](datarecord.md).
