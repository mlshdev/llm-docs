> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritab](https://developer.apple.com/documentation/safariservices/sfsafaritab)

# SFSafariTab (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a tab in a Safari window.

## Declaration

```swift
class SFSafariTab
```

## Topics

### Accessing Pages

- [getActivePage(completionHandler:)](sfsafaritab/getactivepage%28completionhandler_%29.md): Calls the completion handler passing the active page in the tab.
- [getPagesWithCompletionHandler(\_:)](sfsafaritab/getpageswithcompletionhandler%28__%29.md): Calls the completion handler with all of the tab’s active and preloading pages.

### Activating Tabs

- [activate(completionHandler:)](sfsafaritab/activate%28completionhandler_%29.md): Activates the tab.

### Instance Methods

- [close()](sfsafaritab/close%28%29.md)
- [getContainingWindow(completionHandler:)](sfsafaritab/getcontainingwindow%28completionhandler_%29.md)
- [navigate(to:)](sfsafaritab/navigate%28to_%29.md)

### Initializers

- [init(coder:)](sfsafaritab/init%28coder_%29.md)

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
- [SFSafariPage](sfsafaripage.md): A proxy for a Safari webpage.

# SFSafariTab (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a tab in a Safari window.

## Declaration

```objectivec
@interface SFSafariTab : NSObject
```

## Topics

### Accessing Pages

- [getActivePageWithCompletionHandler:](sfsafaritab/getactivepage%28completionhandler_%29.md): Calls the completion handler passing the active page in the tab.
- [getPagesWithCompletionHandler:](sfsafaritab/getpageswithcompletionhandler%28__%29.md): Calls the completion handler with all of the tab’s active and preloading pages.

### Activating Tabs

- [activateWithCompletionHandler:](sfsafaritab/activate%28completionhandler_%29.md): Activates the tab.

### Instance Methods

- [close](sfsafaritab/close%28%29.md)
- [getContainingWindowWithCompletionHandler:](sfsafaritab/getcontainingwindow%28completionhandler_%29.md)
- [navigateToURL:](sfsafaritab/navigate%28to_%29.md)

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
- [SFSafariPage](sfsafaripage.md): A proxy for a Safari webpage.
