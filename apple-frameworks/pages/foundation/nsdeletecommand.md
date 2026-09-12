> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdeletecommand](https://developer.apple.com/documentation/foundation/nsdeletecommand)

# NSDeleteCommand (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that deletes a scriptable object.

## Declaration

```swift
class NSDeleteCommand
```

<a id="overview"></a>

## Overview

An instance of `NSDeleteCommand` deletes the specified scriptable object or objects (such as words, paragraphs, and so on).

Suppose, for example, a user executes a script that sends the command `delete the third rectangle in the first document` to the Sketch sample application (located in `/Developer/Examples/AppKit`). Cocoa creates an `NSDeleteCommand` object to perform the operation. When the command is executed, it uses the key-value coding mechanism (by invoking `removeValueAtIndex:fromPropertyWithKey:`) to remove the specified object or objects from their container. See the description for [removeValue(at:fromPropertyWithKey:)](../objectivec/nsobject-swift.class/removevalue%28at_frompropertywithkey_%29.md) for related information.

`NSDeleteCommand` is part of Cocoa’s built-in scripting support. Most applications don’t need to subclass `NSDeleteCommand` or call its methods.

## Topics

### Working with specifiers

- [keySpecifier](nsdeletecommand/keyspecifier.md): Returns a specifier for the object or objects to be deleted.
- [setReceiversSpecifier(\_:)](nsdeletecommand/setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.

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
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.

# NSDeleteCommand (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that deletes a scriptable object.

## Declaration

```objectivec
@interface NSDeleteCommand : NSScriptCommand
```

<a id="overview"></a>

## Overview

An instance of `NSDeleteCommand` deletes the specified scriptable object or objects (such as words, paragraphs, and so on).

Suppose, for example, a user executes a script that sends the command `delete the third rectangle in the first document` to the Sketch sample application (located in `/Developer/Examples/AppKit`). Cocoa creates an `NSDeleteCommand` object to perform the operation. When the command is executed, it uses the key-value coding mechanism (by invoking `removeValueAtIndex:fromPropertyWithKey:`) to remove the specified object or objects from their container. See the description for [removeValueAtIndex:fromPropertyWithKey:](../objectivec/nsobject-swift.class/removevalue%28at_frompropertywithkey_%29.md) for related information.

`NSDeleteCommand` is part of Cocoa’s built-in scripting support. Most applications don’t need to subclass `NSDeleteCommand` or call its methods.

## Topics

### Working with specifiers

- [keySpecifier](nsdeletecommand/keyspecifier.md): Returns a specifier for the object or objects to be deleted.
- [setReceiversSpecifier:](nsdeletecommand/setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.

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
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.
