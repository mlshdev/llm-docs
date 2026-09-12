> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexistscommand](https://developer.apple.com/documentation/foundation/nsexistscommand)

# NSExistsCommand (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that determines whether a scriptable object exists.

## Declaration

```swift
class NSExistsCommand
```

<a id="overview"></a>

## Overview

An instance of `NSExistsCommand` determines whether a specified scriptable object, such as a word, paragraph, or image, exists.

When an instance of `NSExistsCommand` is executed, it evaluates the receiver specifier for the command to determine if it specifies any objects.

`NSExistsCommand` is part of Cocoa’s built-in scripting support. Most applications don’t need to subclass `NSExistsCommand`.

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

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Script Commands

- [NSScriptCommand](nsscriptcommand.md): A self-contained scripting statement.
- [NSQuitCommand](nsquitcommand.md): A command that quits the specified app.
- [NSSetCommand](nssetcommand.md): A command that sets one or more attributes or relationships to one or more values.
- [NSMoveCommand](nsmovecommand.md): A command that moves one or more scriptable objects.
- [NSCreateCommand](nscreatecommand.md): A command that creates a scriptable object.
- [NSDeleteCommand](nsdeletecommand.md): A command that deletes a scriptable object.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.

# NSExistsCommand (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that determines whether a scriptable object exists.

## Declaration

```objectivec
@interface NSExistsCommand : NSScriptCommand
```

<a id="overview"></a>

## Overview

An instance of `NSExistsCommand` determines whether a specified scriptable object, such as a word, paragraph, or image, exists.

When an instance of `NSExistsCommand` is executed, it evaluates the receiver specifier for the command to determine if it specifies any objects.

`NSExistsCommand` is part of Cocoa’s built-in scripting support. Most applications don’t need to subclass `NSExistsCommand`.

## Relationships

### Inherits From

- [NSScriptCommand](nsscriptcommand.md)

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Script Commands

- [NSScriptCommand](nsscriptcommand.md): A self-contained scripting statement.
- [NSQuitCommand](nsquitcommand.md): A command that quits the specified app.
- [NSSetCommand](nssetcommand.md): A command that sets one or more attributes or relationships to one or more values.
- [NSMoveCommand](nsmovecommand.md): A command that moves one or more scriptable objects.
- [NSCreateCommand](nscreatecommand.md): A command that creates a scriptable object.
- [NSDeleteCommand](nsdeletecommand.md): A command that deletes a scriptable object.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.
