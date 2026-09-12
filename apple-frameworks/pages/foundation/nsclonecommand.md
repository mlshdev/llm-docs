> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclonecommand](https://developer.apple.com/documentation/foundation/nsclonecommand)

# NSCloneCommand (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that clones one or more scriptable objects.

## Declaration

```swift
class NSCloneCommand
```

<a id="overview"></a>

## Overview

An instance of `NSCloneCommand` clones the specified scriptable object or objects (such as words, paragraphs, images, and so on) and inserts them in the specified location, or the default location if no location is specified. The cloned scriptable objects typically correspond to objects in the application, but aren’t required to. This command corresponds to AppleScript’s `duplicate` command.

`NSCloneCommand` is part of Cocoa’s built-in scripting support. It works automatically to support the `duplicate` command through key-value coding. Most applications don’t need to subclass `NSCloneCommand` or invoke its methods.

When an instance of `NSCloneCommand` is executed, it clones the specified objects by sending them [copyWithZone:](../objectivec/nsobject-swift.class/copywithzone_.md) messages.

## Topics

### Working with specifiers

- [keySpecifier](nsclonecommand/keyspecifier.md): Returns a specifier for the object or objects to be cloned.
- [setReceiversSpecifier(\_:)](nsclonecommand/setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier;.

## Relationships

### Inherits From

- [NSScriptCommand](nsscriptcommand.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Script Commands

- [NSScriptCommand](nsscriptcommand.md): A self-contained scripting statement.
- [NSQuitCommand](nsquitcommand.md): A command that quits the specified app.
- [NSSetCommand](nssetcommand.md): A command that sets one or more attributes or relationships to one or more values.
- [NSMoveCommand](nsmovecommand.md): A command that moves one or more scriptable objects.
- [NSCreateCommand](nscreatecommand.md): A command that creates a scriptable object.
- [NSDeleteCommand](nsdeletecommand.md): A command that deletes a scriptable object.
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.

# NSCloneCommand (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that clones one or more scriptable objects.

## Declaration

```objectivec
@interface NSCloneCommand : NSScriptCommand
```

<a id="overview"></a>

## Overview

An instance of `NSCloneCommand` clones the specified scriptable object or objects (such as words, paragraphs, images, and so on) and inserts them in the specified location, or the default location if no location is specified. The cloned scriptable objects typically correspond to objects in the application, but aren’t required to. This command corresponds to AppleScript’s `duplicate` command.

`NSCloneCommand` is part of Cocoa’s built-in scripting support. It works automatically to support the `duplicate` command through key-value coding. Most applications don’t need to subclass `NSCloneCommand` or invoke its methods.

When an instance of `NSCloneCommand` is executed, it clones the specified objects by sending them [copyWithZone:](../objectivec/nsobject-swift.class/copywithzone_.md) messages.

## Topics

### Working with specifiers

- [keySpecifier](nsclonecommand/keyspecifier.md): Returns a specifier for the object or objects to be cloned.
- [setReceiversSpecifier:](nsclonecommand/setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier;.

## Relationships

### Inherits From

- [NSScriptCommand](nsscriptcommand.md)

## See Also

### Script Commands

- [NSScriptCommand](nsscriptcommand.md): A self-contained scripting statement.
- [NSQuitCommand](nsquitcommand.md): A command that quits the specified app.
- [NSSetCommand](nssetcommand.md): A command that sets one or more attributes or relationships to one or more values.
- [NSMoveCommand](nsmovecommand.md): A command that moves one or more scriptable objects.
- [NSCreateCommand](nscreatecommand.md): A command that creates a scriptable object.
- [NSDeleteCommand](nsdeletecommand.md): A command that deletes a scriptable object.
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.
