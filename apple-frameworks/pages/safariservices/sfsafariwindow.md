> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariwindow](https://developer.apple.com/documentation/safariservices/sfsafariwindow)

# SFSafariWindow (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a Safari window.

## Declaration

```swift
class SFSafariWindow
```

## Mentioned In

- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md)

## Topics

### Working with Tabs

- [getActiveTab(completionHandler:)](sfsafariwindow/getactivetab%28completionhandler_%29.md): Calls the completion handler with the active tab in the target window.
- [openTab(with:makeActiveIfPossible:completionHandler:)](sfsafariwindow/opentab%28with_makeactiveifpossible_completionhandler_%29.md): Opens a tab at the end of the tab bar.

### Getting the Toolbar Item

- [getToolbarItem(completionHandler:)](sfsafariwindow/gettoolbaritem%28completionhandler_%29.md): Gets the extension’s toolbar item from the target window.

### Instance Methods

- [close()](sfsafariwindow/close%28%29.md)
- [getAllTabs(completionHandler:)](sfsafariwindow/getalltabs%28completionhandler_%29.md)

### Initializers

- [init(coder:)](sfsafariwindow/init%28coder_%29.md)

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
- [SFSafariPage](sfsafaripage.md): A proxy for a Safari webpage.
- [SFSafariTab](sfsafaritab.md): A proxy for a tab in a Safari window.

# SFSafariWindow (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a Safari window.

## Declaration

```objectivec
@interface SFSafariWindow : NSObject
```

## Mentioned In

- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md)

## Topics

### Working with Tabs

- [getActiveTabWithCompletionHandler:](sfsafariwindow/getactivetab%28completionhandler_%29.md): Calls the completion handler with the active tab in the target window.
- [openTabWithURL:makeActiveIfPossible:completionHandler:](sfsafariwindow/opentab%28with_makeactiveifpossible_completionhandler_%29.md): Opens a tab at the end of the tab bar.

### Getting the Toolbar Item

- [getToolbarItemWithCompletionHandler:](sfsafariwindow/gettoolbaritem%28completionhandler_%29.md): Gets the extension’s toolbar item from the target window.

### Instance Methods

- [close](sfsafariwindow/close%28%29.md)
- [getAllTabsWithCompletionHandler:](sfsafariwindow/getalltabs%28completionhandler_%29.md)

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
- [SFSafariPage](sfsafaripage.md): A proxy for a Safari webpage.
- [SFSafariTab](sfsafaritab.md): A proxy for a tab in a Safari window.
