> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariapplication](https://developer.apple.com/documentation/safariservices/sfsafariapplication)

# SFSafariApplication (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for the Safari app.

## Declaration

```swift
class SFSafariApplication
```

<a id="overview"></a>

## Overview

The `SFSafariApplication` class is used by a Safari app extension to access the active Safari window, open a new window, and update the toolbar items on a window. An application that acts as a host container for a Safari app extension can use this class to send messages to the app extension. There is no object instance for this class.

## Topics

### Communicating With the App Extension

- [dispatchMessage(withName:toExtensionWithIdentifier:userInfo:completionHandler:)](sfsafariapplication/dispatchmessage%28withname_toextensionwithidentifier_userinfo_completionhandler_%29.md): Sends a message to a Safari app extension, launching Safari if necessary.

### Working with Windows

- [getActiveWindow(completionHandler:)](sfsafariapplication/getactivewindow%28completionhandler_%29.md): Calls the completion handler with the active browser window.
- [openWindow(with:completionHandler:)](sfsafariapplication/openwindow%28with_completionhandler_%29.md): Opens a new window with the desired webpage.
- [showPreferencesForExtension(withIdentifier:completionHandler:)](sfsafariapplication/showpreferencesforextension%28withidentifier_completionhandler_%29.md): Launches Safari and opens the preferences panel for a Safari app extension.

### Updating Toolbar Items

- [setToolbarItemsNeedUpdate()](sfsafariapplication/settoolbaritemsneedupdate%28%29.md): Updates the enabled states and badges of toolbar items.

### Type Methods

- [getAllWindows(completionHandler:)](sfsafariapplication/getallwindows%28completionhandler_%29.md)
- [getHostApplication(completionHandler:)](sfsafariapplication/gethostapplication%28completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Safari app extensions

- [Safari app extensions](safari-app-extensions.md): Learn how Safari app extensions extend the web-browsing experience in Safari by leveraging web technologies and native code.
- [SFSafariExtension](sfsafariextension.md): A proxy for the Safari extension.
- [SFSafariWindow](sfsafariwindow.md): A proxy for a Safari window.
- [SFSafariPage](sfsafaripage.md): A proxy for a Safari webpage.
- [SFSafariTab](sfsafaritab.md): A proxy for a tab in a Safari window.

# SFSafariApplication (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for the Safari app.

## Declaration

```objectivec
@interface SFSafariApplication : NSObject
```

<a id="overview"></a>

## Overview

The `SFSafariApplication` class is used by a Safari app extension to access the active Safari window, open a new window, and update the toolbar items on a window. An application that acts as a host container for a Safari app extension can use this class to send messages to the app extension. There is no object instance for this class.

## Topics

### Communicating With the App Extension

- [dispatchMessageWithName:toExtensionWithIdentifier:userInfo:completionHandler:](sfsafariapplication/dispatchmessage%28withname_toextensionwithidentifier_userinfo_completionhandler_%29.md): Sends a message to a Safari app extension, launching Safari if necessary.

### Working with Windows

- [getActiveWindowWithCompletionHandler:](sfsafariapplication/getactivewindow%28completionhandler_%29.md): Calls the completion handler with the active browser window.
- [openWindowWithURL:completionHandler:](sfsafariapplication/openwindow%28with_completionhandler_%29.md): Opens a new window with the desired webpage.
- [showPreferencesForExtensionWithIdentifier:completionHandler:](sfsafariapplication/showpreferencesforextension%28withidentifier_completionhandler_%29.md): Launches Safari and opens the preferences panel for a Safari app extension.

### Updating Toolbar Items

- [setToolbarItemsNeedUpdate](sfsafariapplication/settoolbaritemsneedupdate%28%29.md): Updates the enabled states and badges of toolbar items.

### Type Methods

- [getAllWindowsWithCompletionHandler:](sfsafariapplication/getallwindows%28completionhandler_%29.md)
- [getHostApplicationWithCompletionHandler:](sfsafariapplication/gethostapplication%28completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Safari app extensions

- [Safari app extensions](safari-app-extensions.md): Learn how Safari app extensions extend the web-browsing experience in Safari by leveraging web technologies and native code.
- [SFSafariExtension](sfsafariextension.md): A proxy for the Safari extension.
- [SFSafariWindow](sfsafariwindow.md): A proxy for a Safari window.
- [SFSafariPage](sfsafaripage.md): A proxy for a Safari webpage.
- [SFSafariTab](sfsafaritab.md): A proxy for a tab in a Safari window.
