> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgetcommand](https://developer.apple.com/documentation/foundation/nsgetcommand)

# NSGetCommand (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that retrieves a value or object from a scriptable object.

## Declaration

```swift
class NSGetCommand
```

<a id="overview"></a>

## Overview

An instance of `NSGetCommand` gets the specified value or object from the specified scriptable object: for example, the words from a paragraph or the name of a document.

When an instance of `NSGetCommand` is executed, it evaluates the specified receivers, gathers the specified data, if any, and packages it in a return Apple event.

`NSGetCommand` is part of Cocoa’s built-in scripting support. It works automatically to support the `get` command through key-value coding. Most applications don’t need to subclass `NSGetCommand` or call its methods.

For information on working with `get` commands, see [Getting and Setting Properties and Elements](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_get_set/SAppsGetSet.html#//apple_ref/doc/uid/TP40002164-CH18) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

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
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.

# NSGetCommand (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that retrieves a value or object from a scriptable object.

## Declaration

```objectivec
@interface NSGetCommand : NSScriptCommand
```

<a id="overview"></a>

## Overview

An instance of `NSGetCommand` gets the specified value or object from the specified scriptable object: for example, the words from a paragraph or the name of a document.

When an instance of `NSGetCommand` is executed, it evaluates the specified receivers, gathers the specified data, if any, and packages it in a return Apple event.

`NSGetCommand` is part of Cocoa’s built-in scripting support. It works automatically to support the `get` command through key-value coding. Most applications don’t need to subclass `NSGetCommand` or call its methods.

For information on working with `get` commands, see [Getting and Setting Properties and Elements](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_get_set/SAppsGetSet.html#//apple_ref/doc/uid/TP40002164-CH18) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

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
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.
