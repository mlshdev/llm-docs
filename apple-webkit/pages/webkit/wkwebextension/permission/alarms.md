> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/permission/alarms](https://developer.apple.com/documentation/webkit/wkwebextension/permission/alarms)

# alarms (Swift)

**Framework:** WebKit  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A request for access to the `browser.alarms` APIs.

## Declaration

```swift
nonisolated static let alarms: WKWebExtension.Permission
```

## See Also

### Constants

- [activeTab](activetab.md): A request indicating that when a person interacts with the extension, the system grants extra permissions for the active tab only.
- [clipboardWrite](clipboardwrite.md): A request for access to write to the clipboard.
- [contextMenus](contextmenus.md): A request for access to the `browser.contextMenus` APIs.
- [cookies](cookies.md): A request for access to the `browser.cookies` APIs.
- [declarativeNetRequest](declarativenetrequest.md): A request for access to the `browser.declarativeNetRequest` APIs.
- [declarativeNetRequestFeedback](declarativenetrequestfeedback.md): A request for access to the `browser.declarativeNetRequest` APIs with extra information on matched rules.
- [declarativeNetRequestWithHostAccess](declarativenetrequestwithhostaccess.md): A request for access to the `browser.declarativeNetRequest` APIs with the ability to modify or redirect requests.
- [menus](menus.md): A request for access to the `browser.menus` APIs.
- [nativeMessaging](nativemessaging.md): A request for access to send messages to the app extension bundle.
- [scripting](scripting.md): A request for access to the `browser.scripting` APIs.
- [storage](storage.md): A request for access to the `browser.storage` APIs.
- [tabs](tabs.md): A request for access to extra information on the `browser.tabs` APIs.
- [unlimitedStorage](unlimitedstorage.md): A request for access to an unlimited quota on the `browser.storage.local` APIs.
- [webNavigation](webnavigation.md): A request for access to the `browser.webNavigation` APIs.
- [webRequest](webrequest.md): A request for access to the `browser.webRequest` APIs.

# WKWebExtensionPermissionAlarms (Objective-C)

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A request for access to the `browser.alarms` APIs.

## Declaration

```objectivec
extern WKWebExtensionPermission const WKWebExtensionPermissionAlarms;
```

## See Also

### Constants

- [WKWebExtensionPermissionActiveTab](activetab.md): A request indicating that when a person interacts with the extension, the system grants extra permissions for the active tab only.
- [WKWebExtensionPermissionClipboardWrite](clipboardwrite.md): A request for access to write to the clipboard.
- [WKWebExtensionPermissionContextMenus](contextmenus.md): A request for access to the `browser.contextMenus` APIs.
- [WKWebExtensionPermissionCookies](cookies.md): A request for access to the `browser.cookies` APIs.
- [WKWebExtensionPermissionDeclarativeNetRequest](declarativenetrequest.md): A request for access to the `browser.declarativeNetRequest` APIs.
- [WKWebExtensionPermissionDeclarativeNetRequestFeedback](declarativenetrequestfeedback.md): A request for access to the `browser.declarativeNetRequest` APIs with extra information on matched rules.
- [WKWebExtensionPermissionDeclarativeNetRequestWithHostAccess](declarativenetrequestwithhostaccess.md): A request for access to the `browser.declarativeNetRequest` APIs with the ability to modify or redirect requests.
- [WKWebExtensionPermissionMenus](menus.md): A request for access to the `browser.menus` APIs.
- [WKWebExtensionPermissionNativeMessaging](nativemessaging.md): A request for access to send messages to the app extension bundle.
- [WKWebExtensionPermissionScripting](scripting.md): A request for access to the `browser.scripting` APIs.
- [WKWebExtensionPermissionStorage](storage.md): A request for access to the `browser.storage` APIs.
- [WKWebExtensionPermissionTabs](tabs.md): A request for access to extra information on the `browser.tabs` APIs.
- [WKWebExtensionPermissionUnlimitedStorage](unlimitedstorage.md): A request for access to an unlimited quota on the `browser.storage.local` APIs.
- [WKWebExtensionPermissionWebNavigation](webnavigation.md): A request for access to the `browser.webNavigation` APIs.
- [WKWebExtensionPermissionWebRequest](webrequest.md): A request for access to the `browser.webRequest` APIs.
