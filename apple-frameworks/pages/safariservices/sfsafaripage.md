> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaripage](https://developer.apple.com/documentation/safariservices/sfsafaripage)

# SFSafariPage (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a Safari webpage.

## Declaration

```swift
class SFSafariPage
```

<a id="overview"></a>

## Overview

Use an `SFSafariPage` object in your Safari app extension to send messages to injected content scripts, access page properties, and reload the page.

## Topics

### Messaging Injected Scripts

- [dispatchMessageToScript(withName:userInfo:)](sfsafaripage/dispatchmessagetoscript%28withname_userinfo_%29.md): Dispatches a message from the app extension to the content script injected in this page.

### Getting Page Information

- [getPropertiesWithCompletionHandler(\_:)](sfsafaripage/getpropertieswithcompletionhandler%28__%29.md): Retrieves the properties of the webpage.

### Reloading the Page

- [reload()](sfsafaripage/reload%28%29.md): Tells Safari to reload the webpage.

### Instance Methods

- [getContainingTab(completionHandler:)](sfsafaripage/getcontainingtab%28completionhandler_%29.md)
- [getScreenshotOfVisibleArea(completionHandler:)](sfsafaripage/getscreenshotofvisiblearea%28completionhandler_%29.md)

### Initializers

- [init(coder:)](sfsafaripage/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Safari app extensions

- [Safari app extensions](safari-app-extensions.md): Learn how Safari app extensions extend the web-browsing experience in Safari by leveraging web technologies and native code.
- [SFSafariExtension](sfsafariextension.md): A proxy for the Safari extension.
- [SFSafariApplication](sfsafariapplication.md): A proxy for the Safari app.
- [SFSafariWindow](sfsafariwindow.md): A proxy for a Safari window.
- [SFSafariTab](sfsafaritab.md): A proxy for a tab in a Safari window.

# SFSafariPage (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a Safari webpage.

## Declaration

```objectivec
@interface SFSafariPage : NSObject
```

<a id="overview"></a>

## Overview

Use an `SFSafariPage` object in your Safari app extension to send messages to injected content scripts, access page properties, and reload the page.

## Topics

### Messaging Injected Scripts

- [dispatchMessageToScriptWithName:userInfo:](sfsafaripage/dispatchmessagetoscript%28withname_userinfo_%29.md): Dispatches a message from the app extension to the content script injected in this page.

### Getting Page Information

- [getPagePropertiesWithCompletionHandler:](sfsafaripage/getpropertieswithcompletionhandler%28__%29.md): Retrieves the properties of the webpage.

### Reloading the Page

- [reload](sfsafaripage/reload%28%29.md): Tells Safari to reload the webpage.

### Instance Methods

- [getContainingTabWithCompletionHandler:](sfsafaripage/getcontainingtab%28completionhandler_%29.md)
- [getScreenshotOfVisibleAreaWithCompletionHandler:](sfsafaripage/getscreenshotofvisiblearea%28completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Safari app extensions

- [Safari app extensions](safari-app-extensions.md): Learn how Safari app extensions extend the web-browsing experience in Safari by leveraging web technologies and native code.
- [SFSafariExtension](sfsafariextension.md): A proxy for the Safari extension.
- [SFSafariApplication](sfsafariapplication.md): A proxy for the Safari app.
- [SFSafariWindow](sfsafariwindow.md): A proxy for a Safari window.
- [SFSafariTab](sfsafaritab.md): A proxy for a tab in a Safari window.
