> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssetcommand](https://developer.apple.com/documentation/foundation/nssetcommand)

# NSSetCommand (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that sets one or more attributes or relationships to one or more values.

## Declaration

```swift
class NSSetCommand
```

<a id="overview"></a>

## Overview

An instance of `NSSetCommand` sets one or more attributes or relationships to one or more values; for example, it may set the (x, y) coordinates for a window’s position or set the name of a document.

`NSSetCommand` is part of Cocoa’s built-in scripting support. It works automatically to support the `set` command through key-value coding. Most applications don’t need to subclass `NSSetCommand` or call its methods.

`NSSetCommand` uses available scripting class descriptions to determine whether it should set a value for an attribute (or property), or set a value for all elements (to-many objects). For the latter, it invokes [replaceValue(at:inPropertyWithKey:withValue:)](../objectivec/nsobject-swift.class/replacevalue%28at_inpropertywithkey_withvalue_%29.md); for the former, it invokes [setValue(\_:forKey:)](../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) (or, if the receiver overrides [takeValue(\_:forKey:)](../objectivec/nsobject-swift.class/takevalue%28__forkey_%29.md), it invokes that method, to support backward binary compatibility.)

For information on working with `set` commands, see [Getting and Setting Properties and Elements](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_get_set/SAppsGetSet.html#//apple_ref/doc/uid/TP40002164-CH18) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

## Topics

### Working with specifiers

- [keySpecifier](nssetcommand/keyspecifier.md): Returns a specifier that identifies the attribute or relationship that is to be set for the receiver of the `set` AppleScript command.
- [setReceiversSpecifier(\_:)](nssetcommand/setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.

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
- [NSMoveCommand](nsmovecommand.md): A command that moves one or more scriptable objects.
- [NSCreateCommand](nscreatecommand.md): A command that creates a scriptable object.
- [NSDeleteCommand](nsdeletecommand.md): A command that deletes a scriptable object.
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.

# NSSetCommand (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A command that sets one or more attributes or relationships to one or more values.

## Declaration

```objectivec
@interface NSSetCommand : NSScriptCommand
```

<a id="overview"></a>

## Overview

An instance of `NSSetCommand` sets one or more attributes or relationships to one or more values; for example, it may set the (x, y) coordinates for a window’s position or set the name of a document.

`NSSetCommand` is part of Cocoa’s built-in scripting support. It works automatically to support the `set` command through key-value coding. Most applications don’t need to subclass `NSSetCommand` or call its methods.

`NSSetCommand` uses available scripting class descriptions to determine whether it should set a value for an attribute (or property), or set a value for all elements (to-many objects). For the latter, it invokes [replaceValueAtIndex:inPropertyWithKey:withValue:](../objectivec/nsobject-swift.class/replacevalue%28at_inpropertywithkey_withvalue_%29.md); for the former, it invokes [setValue:forKey:](../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) (or, if the receiver overrides [takeValue:forKey:](../objectivec/nsobject-swift.class/takevalue%28__forkey_%29.md), it invokes that method, to support backward binary compatibility.)

For information on working with `set` commands, see [Getting and Setting Properties and Elements](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_get_set/SAppsGetSet.html#//apple_ref/doc/uid/TP40002164-CH18) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

## Topics

### Working with specifiers

- [keySpecifier](nssetcommand/keyspecifier.md): Returns a specifier that identifies the attribute or relationship that is to be set for the receiver of the `set` AppleScript command.
- [setReceiversSpecifier:](nssetcommand/setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.

## Relationships

### Inherits From

- [NSScriptCommand](nsscriptcommand.md)

## See Also

### Script Commands

- [NSScriptCommand](nsscriptcommand.md): A self-contained scripting statement.
- [NSQuitCommand](nsquitcommand.md): A command that quits the specified app.
- [NSMoveCommand](nsmovecommand.md): A command that moves one or more scriptable objects.
- [NSCreateCommand](nscreatecommand.md): A command that creates a scriptable object.
- [NSDeleteCommand](nsdeletecommand.md): A command that deletes a scriptable object.
- [NSExistsCommand](nsexistscommand.md): A command that determines whether a scriptable object exists.
- [NSGetCommand](nsgetcommand.md): A command that retrieves a value or object from a scriptable object.
- [NSCloneCommand](nsclonecommand.md): A command that clones one or more scriptable objects.
- [NSCountCommand](nscountcommand.md): A command that counts the number of objects of a specified class in the specified object container.
- [NSCloseCommand](nsclosecommand.md): A command that closes one or more scriptable objects.
