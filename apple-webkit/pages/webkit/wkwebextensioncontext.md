> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext](https://developer.apple.com/documentation/webkit/wkwebextensioncontext)

# WKWebExtensionContext (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that represents the runtime environment for a web extension.

## Declaration

```swift
@MainActor class WKWebExtensionContext
```

<a id="overview"></a>

## Overview

This class provides methods for managing the extension’s permissions, allowing it to inject content, run background logic, show popovers, and display other web-based UI to the user.

## Topics

### Enumerations

- [WKWebExtensionContext.PermissionStatus](wkwebextensioncontext/permissionstatus.md): Constants used to indicate permission status in web extension context.

### Structures

- [WKWebExtensionContext.Error](wkwebextensioncontext/error.md): Constants used to indicate errors in the web extension context domain.
- [WKWebExtensionContext.NotificationUserInfoKey](wkwebextensioncontext/notificationuserinfokey.md): Constants for specifying web extension context information in notifications.

### Initializers

- [init(for:)](wkwebextensioncontext/init%28for_%29.md): Returns a web extension context initialized with a specified extension.
- [init(forExtension:)](wkwebextensioncontext/init%28forextension_%29-5v7j1.md)
- [init(forExtension:)](wkwebextensioncontext/init%28forextension_%29-6gjca.md)

### Instance Properties

- [baseURL](wkwebextensioncontext/baseurl.md): The base URL the context uses for loading extension resources or injecting content into webpages.
- [commands](wkwebextensioncontext/commands.md): The commands associated with the extension.
- [currentPermissionMatchPatterns](wkwebextensioncontext/currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [currentPermissions](wkwebextensioncontext/currentpermissions.md): The currently granted permissions that have not expired.
- [deniedPermissionMatchPatterns](wkwebextensioncontext/deniedpermissionmatchpatterns.md): The currently denied permission match patterns and their expiration dates.
- [deniedPermissions](wkwebextensioncontext/deniedpermissions.md): The currently denied permissions and their expiration dates.
- [errors](wkwebextensioncontext/errors.md): All errors that occurred in the extension context.
- [focusedWindow](wkwebextensioncontext/focusedwindow.md): The window that currently has focus for this extension.
- [grantedPermissionMatchPatterns](wkwebextensioncontext/grantedpermissionmatchpatterns.md): The currently granted permission match patterns and their expiration dates.
- [grantedPermissions](wkwebextensioncontext/grantedpermissions.md): The currently granted permissions and their expiration dates.
- [hasAccessToAllHosts](wkwebextensioncontext/hasaccesstoallhosts.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern or any `*` host patterns.
- [hasAccessToAllURLs](wkwebextensioncontext/hasaccesstoallurls.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern.
- [hasAccessToPrivateData](wkwebextensioncontext/hasaccesstoprivatedata.md): A Boolean value indicating if the extension has access to private data.
- [hasContentModificationRules](wkwebextensioncontext/hascontentmodificationrules.md): A boolean value indicating whether the extension includes rules used for content modification or blocking.
- [hasInjectedContent](wkwebextensioncontext/hasinjectedcontent.md): A Boolean value indicating whether the extension has script or stylesheet content that can be injected into webpages.
- [hasRequestedOptionalAccessToAllHosts](wkwebextensioncontext/hasrequestedoptionalaccesstoallhosts.md): A Boolean value indicating if the extension has requested optional access to all hosts.
- [inspectionName](wkwebextensioncontext/inspectionname.md): The name shown when inspecting the background web view.
- [isInspectable](wkwebextensioncontext/isinspectable.md): Determines whether Web Inspector can inspect the [WKWebView](wkwebview.md) instances for this context.
- [isLoaded](wkwebextensioncontext/isloaded.md): A Boolean value indicating if this context is loaded in an extension controller.
- [openTabs](wkwebextensioncontext/opentabs.md): A set of open tabs in all open windows that are exposed to this extension.
- [openWindows](wkwebextensioncontext/openwindows.md): The open windows that are exposed to this extension.
- [optionsPageURL](wkwebextensioncontext/optionspageurl.md): The URL of the extension’s options page, if the extension has one.
- [overrideNewTabPageURL](wkwebextensioncontext/overridenewtabpageurl.md): The URL to use as an alternative to the default new tab page, if the extension has one.
- [uniqueIdentifier](wkwebextensioncontext/uniqueidentifier.md): A unique identifier used to distinguish the extension from other extensions and target it for messages.
- [unsupportedAPIs](wkwebextensioncontext/unsupportedapis.md): Specifies unsupported APIs for this extension, making them `undefined` in JavaScript.
- [webExtension](wkwebextensioncontext/webextension.md): The extension this context represents.
- [webExtensionController](wkwebextensioncontext/webextensioncontroller.md): The extension controller this context is loaded in, otherwise `nil` if it isn’t loaded.
- [webViewConfiguration](wkwebextensioncontext/webviewconfiguration.md): The web view configuration to use for web views that load pages from this extension.

### Instance Methods

- [action(for:)](wkwebextensioncontext/action%28for_%29.md): Retrieves the extension action for a given tab, or the default action if `nil` is passed.
- [clearUserGesture(in:)](wkwebextensioncontext/clearusergesture%28in_%29.md): Called by the app to clear a user gesture in a specific tab.
- [command(for:)](wkwebextensioncontext/command%28for_%29.md): Retrieves the command associated with the given event without performing it.
- [didActivateTab(\_:previousActiveTab:)](wkwebextensioncontext/didactivatetab%28__previousactivetab_%29.md): Called by the app when a tab is activated to notify only this specific extension.
- [didChangeTabProperties(\_:for:)](wkwebextensioncontext/didchangetabproperties%28__for_%29.md): Called by the app when the properties of a tab are changed to fire appropriate events with only this extension.
- [didCloseTab(\_:windowIsClosing:)](wkwebextensioncontext/didclosetab%28__windowisclosing_%29.md): Called by the app when a tab is closed to fire appropriate events with only this extension.
- [didCloseWindow(\_:)](wkwebextensioncontext/didclosewindow%28__%29.md): Called by the app when a window is closed to fire appropriate events with only this extension.
- [didDeselectTabs(\_:)](wkwebextensioncontext/diddeselecttabs%28__%29.md): Called by the app when tabs are deselected to fire appropriate events with only this extension.
- [didFocusWindow(\_:)](wkwebextensioncontext/didfocuswindow%28__%29.md): Called by the app when a window gains focus to fire appropriate events with only this extension.
- [didMoveTab(\_:from:in:)](wkwebextensioncontext/didmovetab%28__from_in_%29.md): Called by the app when a tab is moved to fire appropriate events with only this extension.
- [didOpenTab(\_:)](wkwebextensioncontext/didopentab%28__%29.md): Called by the app when a new tab is opened to fire appropriate events with only this extension.
- [didOpenWindow(\_:)](wkwebextensioncontext/didopenwindow%28__%29.md): Called by the app when a new window is opened to fire appropriate events with only this extension.
- [didReplaceTab(\_:with:)](wkwebextensioncontext/didreplacetab%28__with_%29.md): Called by the app when a tab is replaced by another tab to fire appropriate events with only this extension.
- [didSelectTabs(\_:)](wkwebextensioncontext/didselecttabs%28__%29.md): Called by the app when tabs are selected to fire appropriate events with only this extension.
- [hasAccess(to:)](wkwebextensioncontext/hasaccess%28to_%29.md): Checks the specified URL against the currently granted permission match patterns.
- [hasAccess(to:in:)](wkwebextensioncontext/hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.
- [hasActiveUserGesture(in:)](wkwebextensioncontext/hasactiveusergesture%28in_%29.md): Indicates if a user gesture is currently active in the specified tab.
- [hasInjectedContent(for:)](wkwebextensioncontext/hasinjectedcontent%28for_%29.md): Checks if the extension has script or stylesheet content that can be injected into the specified URL.
- [hasPermission(\_:)](wkwebextensioncontext/haspermission%28__%29.md): Checks the specified permission against the currently granted permissions.
- [hasPermission(\_:in:)](wkwebextensioncontext/haspermission%28__in_%29.md): Checks the specified permission against the currently granted permissions in a specific tab.
- [loadBackgroundContent(completionHandler:)](wkwebextensioncontext/loadbackgroundcontent%28completionhandler_%29.md): Loads the background content if needed for the extension.
- [menuItems(for:)](wkwebextensioncontext/menuitems%28for_%29.md): Retrieves the menu items for a given tab.
- [performAction(for:)](wkwebextensioncontext/performaction%28for_%29.md): Performs the extension action associated with the specified tab or performs the default action if `nil` is passed.
- [performCommand(\_:)](wkwebextensioncontext/performcommand%28__%29.md): Performs the specified command, triggering events specific to this extension.
- [performCommand(for:)](wkwebextensioncontext/performcommand%28for_%29-25rd1.md): Performs the command associated with the given key command.
- [performCommand(for:)](wkwebextensioncontext/performcommand%28for_%29-8btj0.md): Performs the command associated with the given event.
- [permissionStatus(for:)](wkwebextensioncontext/permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatus(for:)](wkwebextensioncontext/permissionstatus%28for_%29-7mu8.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [permissionStatus(for:)](wkwebextensioncontext/permissionstatus%28for_%29-7ojrb.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatus(for:in:)](wkwebextensioncontext/permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatus(for:in:)](wkwebextensioncontext/permissionstatus%28for_in_%29-96xaf.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatus(for:in:)](wkwebextensioncontext/permissionstatus%28for_in_%29-nqhm.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [setPermissionStatus(\_:for:)](wkwebextensioncontext/setpermissionstatus%28__for_%29-4u95f.md): Sets the status of a permission with a distant future expiration date.
- [setPermissionStatus(\_:for:)](wkwebextensioncontext/setpermissionstatus%28__for_%29-5xahd.md): Sets the permission status of a URL with a distant future expiration date.
- [setPermissionStatus(\_:for:)](wkwebextensioncontext/setpermissionstatus%28__for_%29-6auqv.md): Sets the status of a match pattern with a distant future expiration date.
- [setPermissionStatus(\_:for:expirationDate:)](wkwebextensioncontext/setpermissionstatus%28__for_expirationdate_%29-5q9id.md): Sets the permission status of a URL with a distant future expiration date.
- [setPermissionStatus(\_:for:expirationDate:)](wkwebextensioncontext/setpermissionstatus%28__for_expirationdate_%29-692ui.md): Sets the status of a permission with a specific expiration date.
- [setPermissionStatus(\_:for:expirationDate:)](wkwebextensioncontext/setpermissionstatus%28__for_expirationdate_%29-7038f.md): Sets the status of a match pattern with a specific expiration date.
- [userGesturePerformed(in:)](wkwebextensioncontext/usergestureperformed%28in_%29.md): Should be called by the app when a user gesture is performed in a specific tab.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionContext (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that represents the runtime environment for a web extension.

## Declaration

```objectivec
@interface WKWebExtensionContext : NSObject
```

<a id="overview"></a>

## Overview

This class provides methods for managing the extension’s permissions, allowing it to inject content, run background logic, show popovers, and display other web-based UI to the user.

## Topics

### Variables

- [WKWebExtensionContextDeniedPermissionMatchPatternsWereRemovedNotification](wkwebextensioncontext/deniedpermissionmatchpatternswereremovednotification.md): A notification the system sends whenever a web extension context has newly removed denied permission match patterns.
- [WKWebExtensionContextDeniedPermissionsWereRemovedNotification](wkwebextensioncontext/deniedpermissionswereremovednotification.md): A notification the system sends whenever a web extension context has newly removed denied permissions.
- [WKWebExtensionContextErrorDomain](wkwebextensioncontext/errordomain.md)
- [WKWebExtensionContextErrorsDidUpdateNotification](wkwebextensioncontext/errorsdidupdatenotification.md): This notification is sent whenever a web extension context has new errors or errors were cleared.
- [WKWebExtensionContextGrantedPermissionMatchPatternsWereRemovedNotification](wkwebextensioncontext/grantedpermissionmatchpatternswereremovednotification.md): This notification is sent whenever a web extension context has newly removed granted permission match patterns.
- [WKWebExtensionContextGrantedPermissionsWereRemovedNotification](wkwebextensioncontext/grantedpermissionswereremovednotification.md): This notification is sent whenever a web extension context has newly removed granted permissions.
- [WKWebExtensionContextPermissionMatchPatternsWereDeniedNotification](wkwebextensioncontext/permissionmatchpatternsweredeniednotification.md): This notification is sent whenever a web extension context has newly denied permission match patterns.
- [WKWebExtensionContextPermissionMatchPatternsWereGrantedNotification](wkwebextensioncontext/permissionmatchpatternsweregrantednotification.md): This notification is sent whenever a web extension context has newly granted permission match patterns.
- [WKWebExtensionContextPermissionsWereDeniedNotification](wkwebextensioncontext/permissionsweredeniednotification.md): This notification is sent whenever a web extension context has newly denied permissions.
- [WKWebExtensionContextPermissionsWereGrantedNotification](wkwebextensioncontext/permissionsweregrantednotification.md): This notification is sent whenever a web extension context has newly granted permissions.

### Type Aliases

- [WKWebExtensionContextNotificationUserInfoKey](wkwebextensioncontext/notificationuserinfokey.md): Constants for specifying web extension context information in notifications.

### Enumerations

- [WKWebExtensionContextError](wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](wkwebextensioncontext.md) domain.
- [WKWebExtensionContextPermissionStatus](wkwebextensioncontext/permissionstatus.md): Constants used to indicate permission status in web extension context.

### Instance Properties

- [baseURL](wkwebextensioncontext/baseurl.md): The base URL the context uses for loading extension resources or injecting content into webpages.
- [commands](wkwebextensioncontext/commands.md): The commands associated with the extension.
- [currentPermissionMatchPatterns](wkwebextensioncontext/currentpermissionmatchpatterns.md): The currently granted permission match patterns that have not expired.
- [currentPermissions](wkwebextensioncontext/currentpermissions.md): The currently granted permissions that have not expired.
- [deniedPermissionMatchPatterns](wkwebextensioncontext/deniedpermissionmatchpatterns.md): The currently denied permission match patterns and their expiration dates.
- [deniedPermissions](wkwebextensioncontext/deniedpermissions.md): The currently denied permissions and their expiration dates.
- [errors](wkwebextensioncontext/errors.md): All errors that occurred in the extension context.
- [focusedWindow](wkwebextensioncontext/focusedwindow.md): The window that currently has focus for this extension.
- [grantedPermissionMatchPatterns](wkwebextensioncontext/grantedpermissionmatchpatterns.md): The currently granted permission match patterns and their expiration dates.
- [grantedPermissions](wkwebextensioncontext/grantedpermissions.md): The currently granted permissions and their expiration dates.
- [hasAccessToAllHosts](wkwebextensioncontext/hasaccesstoallhosts.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern or any `*` host patterns.
- [hasAccessToAllURLs](wkwebextensioncontext/hasaccesstoallurls.md): A Boolean value indicating if the currently granted permission match patterns set contains the `<all_urls>` pattern.
- [hasAccessToPrivateData](wkwebextensioncontext/hasaccesstoprivatedata.md): A Boolean value indicating if the extension has access to private data.
- [hasContentModificationRules](wkwebextensioncontext/hascontentmodificationrules.md): A boolean value indicating whether the extension includes rules used for content modification or blocking.
- [hasInjectedContent](wkwebextensioncontext/hasinjectedcontent.md): A Boolean value indicating whether the extension has script or stylesheet content that can be injected into webpages.
- [hasRequestedOptionalAccessToAllHosts](wkwebextensioncontext/hasrequestedoptionalaccesstoallhosts.md): A Boolean value indicating if the extension has requested optional access to all hosts.
- [inspectionName](wkwebextensioncontext/inspectionname.md): The name shown when inspecting the background web view.
- [inspectable](wkwebextensioncontext/isinspectable.md): Determines whether Web Inspector can inspect the [WKWebView](wkwebview.md) instances for this context.
- [loaded](wkwebextensioncontext/isloaded.md): A Boolean value indicating if this context is loaded in an extension controller.
- [openTabs](wkwebextensioncontext/opentabs.md): A set of open tabs in all open windows that are exposed to this extension.
- [openWindows](wkwebextensioncontext/openwindows.md): The open windows that are exposed to this extension.
- [optionsPageURL](wkwebextensioncontext/optionspageurl.md): The URL of the extension’s options page, if the extension has one.
- [overrideNewTabPageURL](wkwebextensioncontext/overridenewtabpageurl.md): The URL to use as an alternative to the default new tab page, if the extension has one.
- [uniqueIdentifier](wkwebextensioncontext/uniqueidentifier.md): A unique identifier used to distinguish the extension from other extensions and target it for messages.
- [unsupportedAPIs](wkwebextensioncontext/unsupportedapis.md): Specifies unsupported APIs for this extension, making them `undefined` in JavaScript.
- [webExtension](wkwebextensioncontext/webextension.md): The extension this context represents.
- [webExtensionController](wkwebextensioncontext/webextensioncontroller.md): The extension controller this context is loaded in, otherwise `nil` if it isn’t loaded.
- [webViewConfiguration](wkwebextensioncontext/webviewconfiguration.md): The web view configuration to use for web views that load pages from this extension.

### Instance Methods

- [actionForTab:](wkwebextensioncontext/action%28for_%29.md): Retrieves the extension action for a given tab, or the default action if `nil` is passed.
- [clearUserGestureInTab:](wkwebextensioncontext/clearusergesture%28in_%29.md): Called by the app to clear a user gesture in a specific tab.
- [commandForEvent:](wkwebextensioncontext/command%28for_%29.md): Retrieves the command associated with the given event without performing it.
- [didActivateTab:previousActiveTab:](wkwebextensioncontext/didactivatetab_previousactivetab_.md): Called by the app when a tab is activated to notify only this specific extension.
- [didChangeTabProperties:forTab:](wkwebextensioncontext/didchangetabproperties%28__for_%29.md): Called by the app when the properties of a tab are changed to fire appropriate events with only this extension.
- [didCloseTab:windowIsClosing:](wkwebextensioncontext/didclosetab_windowisclosing_.md): Called by the app when a tab is closed to fire appropriate events with only this extension.
- [didCloseWindow:](wkwebextensioncontext/didclosewindow%28__%29.md): Called by the app when a window is closed to fire appropriate events with only this extension.
- [didDeselectTabs:](wkwebextensioncontext/diddeselecttabs%28__%29.md): Called by the app when tabs are deselected to fire appropriate events with only this extension.
- [didFocusWindow:](wkwebextensioncontext/didfocuswindow%28__%29.md): Called by the app when a window gains focus to fire appropriate events with only this extension.
- [didMoveTab:fromIndex:inWindow:](wkwebextensioncontext/didmovetab_fromindex_inwindow_.md): Called by the app when a tab is moved to fire appropriate events with only this extension.
- [didOpenTab:](wkwebextensioncontext/didopentab%28__%29.md): Called by the app when a new tab is opened to fire appropriate events with only this extension.
- [didOpenWindow:](wkwebextensioncontext/didopenwindow%28__%29.md): Called by the app when a new window is opened to fire appropriate events with only this extension.
- [didReplaceTab:withTab:](wkwebextensioncontext/didreplacetab%28__with_%29.md): Called by the app when a tab is replaced by another tab to fire appropriate events with only this extension.
- [didSelectTabs:](wkwebextensioncontext/didselecttabs%28__%29.md): Called by the app when tabs are selected to fire appropriate events with only this extension.
- [hasAccessToURL:](wkwebextensioncontext/hasaccess%28to_%29.md): Checks the specified URL against the currently granted permission match patterns.
- [hasAccessToURL:inTab:](wkwebextensioncontext/hasaccess%28to_in_%29.md): Checks the specified URL against the currently granted permission match patterns in a specific tab.
- [hasActiveUserGestureInTab:](wkwebextensioncontext/hasactiveusergesture%28in_%29.md): Indicates if a user gesture is currently active in the specified tab.
- [hasInjectedContentForURL:](wkwebextensioncontext/hasinjectedcontent%28for_%29.md): Checks if the extension has script or stylesheet content that can be injected into the specified URL.
- [hasPermission:](wkwebextensioncontext/haspermission%28__%29.md): Checks the specified permission against the currently granted permissions.
- [hasPermission:inTab:](wkwebextensioncontext/haspermission%28__in_%29.md): Checks the specified permission against the currently granted permissions in a specific tab.
- [initForExtension:](wkwebextensioncontext/init%28for_%29.md): Returns a web extension context initialized with a specified extension.
- [loadBackgroundContentWithCompletionHandler:](wkwebextensioncontext/loadbackgroundcontent%28completionhandler_%29.md): Loads the background content if needed for the extension.
- [menuItemsForTab:](wkwebextensioncontext/menuitems%28for_%29.md): Retrieves the menu items for a given tab.
- [performActionForTab:](wkwebextensioncontext/performaction%28for_%29.md): Performs the extension action associated with the specified tab or performs the default action if `nil` is passed.
- [performCommand:](wkwebextensioncontext/performcommand%28__%29.md): Performs the specified command, triggering events specific to this extension.
- [performCommandForKeyCommand:](wkwebextensioncontext/performcommand%28for_%29-25rd1.md): Performs the command associated with the given key command.
- [performCommandForEvent:](wkwebextensioncontext/performcommand%28for_%29-8btj0.md): Performs the command associated with the given event.
- [permissionStatusForPermission:](wkwebextensioncontext/permissionstatus%28for_%29-3qq2w.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatusForMatchPattern:](wkwebextensioncontext/permissionstatus%28for_%29-7mu8.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [permissionStatusForURL:](wkwebextensioncontext/permissionstatus%28for_%29-7ojrb.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatusForPermission:inTab:](wkwebextensioncontext/permissionstatus%28for_in_%29-4h82n.md): Checks the specified permission against the currently denied, granted, and requested permissions.
- [permissionStatusForURL:inTab:](wkwebextensioncontext/permissionstatus%28for_in_%29-96xaf.md): Checks the specified URL against the currently denied, granted, and requested permission match patterns.
- [permissionStatusForMatchPattern:inTab:](wkwebextensioncontext/permissionstatus%28for_in_%29-nqhm.md): Checks the specified match pattern against the currently denied, granted, and requested permission match patterns.
- [setPermissionStatus:forPermission:](wkwebextensioncontext/setpermissionstatus%28__for_%29-4u95f.md): Sets the status of a permission with a distant future expiration date.
- [setPermissionStatus:forURL:](wkwebextensioncontext/setpermissionstatus%28__for_%29-5xahd.md): Sets the permission status of a URL with a distant future expiration date.
- [setPermissionStatus:forMatchPattern:](wkwebextensioncontext/setpermissionstatus%28__for_%29-6auqv.md): Sets the status of a match pattern with a distant future expiration date.
- [setPermissionStatus:forURL:expirationDate:](wkwebextensioncontext/setpermissionstatus%28__for_expirationdate_%29-5q9id.md): Sets the permission status of a URL with a distant future expiration date.
- [setPermissionStatus:forPermission:expirationDate:](wkwebextensioncontext/setpermissionstatus%28__for_expirationdate_%29-692ui.md): Sets the status of a permission with a specific expiration date.
- [setPermissionStatus:forMatchPattern:expirationDate:](wkwebextensioncontext/setpermissionstatus%28__for_expirationdate_%29-7038f.md): Sets the status of a match pattern with a specific expiration date.
- [userGesturePerformedInTab:](wkwebextensioncontext/usergestureperformed%28in_%29.md): Should be called by the app when a user gesture is performed in a specific tab.

### Type Methods

- [contextForExtension:](wkwebextensioncontext/contextforextension_.md): Returns a web extension context initialized with the specified extension.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
