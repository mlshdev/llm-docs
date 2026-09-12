> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager](https://developer.apple.com/documentation/appkit/nshelpmanager)

# NSHelpManager (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object for displaying online help for an app.

## Declaration

```swift
@MainActor class NSHelpManager
```

<a id="overview"></a>

## Overview

The [NSHelpManager](nshelpmanager.md) class provides an approach to displaying online help. An app contains one [NSHelpManager](nshelpmanager.md) object.

## Topics

### Getting the Help Manager

- [shared](nshelpmanager/shared.md): Returns the shared [NSHelpManager](nshelpmanager.md) instance, creating it if it does not already exist.

### Displaying Help

- [find(\_:inBook:)](nshelpmanager/find%28__inbook_%29.md): Performs a search for the specified string in the specified book.
- [openHelpAnchor(\_:inBook:)](nshelpmanager/openhelpanchor%28__inbook_%29.md): Finds and displays the text at the given anchor location in the given book.
- [NSHelpManager.AnchorName](nshelpmanager/anchorname.md)
- [NSHelpManager.BookName](nshelpmanager/bookname.md)

### Dynamically Adding Help Books

- [registerBooks(in:)](nshelpmanager/registerbooks%28in_%29.md): Registers one or more help books in the given bundle.

### Configuring Context-Sensitive Help

- [setContextHelp(\_:for:)](nshelpmanager/setcontexthelp%28__for_%29.md): Associates help content with an object.
- [removeContextHelp(for:)](nshelpmanager/removecontexthelp%28for_%29.md): Removes the association between an object and its context-sensitive help.

### Displaying Context-Sensitive Help

- [contextHelp(for:)](nshelpmanager/contexthelp%28for_%29.md): Returns context-sensitive help for an object.
- [showContextHelp(for:locationHint:)](nshelpmanager/showcontexthelp%28for_locationhint_%29.md): Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.
- [NSHelpManager.ContextHelpKey](nshelpmanager/contexthelpkey.md)
- [isContextHelpModeActive](nshelpmanager/iscontexthelpmodeactive.md)

### Notifications

- [contextHelpModeDidActivateNotification](nshelpmanager/contexthelpmodedidactivatenotification.md): Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.
- [contextHelpModeDidDeactivateNotification](nshelpmanager/contexthelpmodediddeactivatenotification.md): Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.

### Structures

- [NSHelpManager.ContextHelpModeDidActivateMessage](nshelpmanager/contexthelpmodedidactivatemessage.md)
- [NSHelpManager.ContextHelpModeDidDeactivateMessage](nshelpmanager/contexthelpmodediddeactivatemessage.md)

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

### App Help

- [NSUserInterfaceItemSearching](nsuserinterfaceitemsearching.md): A set of methods an app can implement to provide Spotlight for Help for its own custom help data.

# NSHelpManager (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object for displaying online help for an app.

## Declaration

```objectivec
@interface NSHelpManager : NSObject
```

<a id="overview"></a>

## Overview

The [NSHelpManager](nshelpmanager.md) class provides an approach to displaying online help. An app contains one [NSHelpManager](nshelpmanager.md) object.

## Topics

### Getting the Help Manager

- [sharedHelpManager](nshelpmanager/shared.md): Returns the shared [NSHelpManager](nshelpmanager.md) instance, creating it if it does not already exist.

### Displaying Help

- [findString:inBook:](nshelpmanager/find%28__inbook_%29.md): Performs a search for the specified string in the specified book.
- [openHelpAnchor:inBook:](nshelpmanager/openhelpanchor%28__inbook_%29.md): Finds and displays the text at the given anchor location in the given book.
- [NSHelpAnchorName](nshelpmanager/anchorname.md)
- [NSHelpBookName](nshelpmanager/bookname.md)

### Dynamically Adding Help Books

- [registerBooksInBundle:](nshelpmanager/registerbooks%28in_%29.md): Registers one or more help books in the given bundle.

### Configuring Context-Sensitive Help

- [setContextHelp:forObject:](nshelpmanager/setcontexthelp%28__for_%29.md): Associates help content with an object.
- [removeContextHelpForObject:](nshelpmanager/removecontexthelp%28for_%29.md): Removes the association between an object and its context-sensitive help.

### Displaying Context-Sensitive Help

- [contextHelpForObject:](nshelpmanager/contexthelp%28for_%29.md): Returns context-sensitive help for an object.
- [showContextHelpForObject:locationHint:](nshelpmanager/showcontexthelp%28for_locationhint_%29.md): Displays the context-sensitive help for a given object at or near the point on the screen specified by a given point.
- [NSHelpManagerContextHelpKey](nshelpmanager/contexthelpkey.md)
- [contextHelpModeActive](nshelpmanager/iscontexthelpmodeactive.md)

### Notifications

- [NSContextHelpModeDidActivateNotification](nshelpmanager/contexthelpmodedidactivatenotification.md): Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.
- [NSContextHelpModeDidDeactivateNotification](nshelpmanager/contexthelpmodediddeactivatenotification.md): Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App Help

- [NSUserInterfaceItemSearching](nsuserinterfaceitemsearching.md): A set of methods an app can implement to provide Spotlight for Help for its own custom help data.
