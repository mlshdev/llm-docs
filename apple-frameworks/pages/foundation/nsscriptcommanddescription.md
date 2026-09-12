> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription)

# NSScriptCommandDescription (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A script command that a macOS app supports.

## Declaration

```swift
class NSScriptCommandDescription
```

<a id="overview"></a>

## Overview

A scriptable application provides scriptability information that describes the commands and objects scripters can use in scripts that target the application. An application’s scripting information is collected automatically by an instance of [NSScriptSuiteRegistry](nsscriptsuiteregistry.md), which creates an `NSScriptCommandDescription` for each command it finds, caches these objects in memory, and installs a command handler for each command.

A script command instance stores the name, class, argument types, and return type of a command. For example, commands in AppleScript’s Core suite include `clone`, `count`, `create`, `delete`, `exists`, and `move`.

The public methods of `NSScriptCommandDescription` are used primarily by Cocoa’s built-in scripting support in responding to Apple events that target the application. Although you can subclass the `NSScriptCommandDescription` class, it is unlikely that you would need to do so, or to create instances of it.

## Topics

### Initializing a Script Command Description

- [init(suiteName:commandName:dictionary:)](nsscriptcommanddescription/init%28suitename_commandname_dictionary_%29.md): Initializes and returns a newly allocated instance of `NSScriptCommandDescription`.

### Getting Basic Information About the Command

- [appleEventClassCode](nsscriptcommanddescription/appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](nsscriptcommanddescription/appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](nsscriptcommanddescription/commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](nsscriptcommanddescription/commandname.md): Returns the name of the command.
- [suiteName](nsscriptcommanddescription/suitename.md): Returns the name of the suite that contains the command described by the receiver.

### Getting Command Argument Information

- [appleEventCodeForArgument(withName:)](nsscriptcommanddescription/appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [argumentNames](nsscriptcommanddescription/argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [isOptionalArgument(withName:)](nsscriptcommanddescription/isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.
- [typeForArgument(withName:)](nsscriptcommanddescription/typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.

### Getting Command Return-Type Information

- [appleEventCodeForReturnType](nsscriptcommanddescription/appleeventcodeforreturntype.md): Returns the Apple event code that identifies the command’s return type.
- [returnType](nsscriptcommanddescription/returntype.md): Returns the return type of the command.

### Creating Commands

- [createCommandInstance()](nsscriptcommanddescription/createcommandinstance%28%29.md): Creates and returns an instance of the command object described by the receiver.
- [createCommandInstance(with:)](nsscriptcommanddescription/createcommandinstance%28with_%29.md): Creates and returns an instance of the command object described by the receiver in the specified memory zone.

### Initializers

- [init(coder:)](nsscriptcommanddescription/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Script Dictionary Description

- [NSScriptSuiteRegistry](nsscriptsuiteregistry.md): The top-level repository of scriptability information for an app at runtime.
- [NSScriptClassDescription](nsscriptclassdescription.md): A scriptable class that a macOS app supports.
- [NSClassDescription](nsclassdescription.md): An abstract class that provides the interface for querying the relationships and properties of a class.

# NSScriptCommandDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A script command that a macOS app supports.

## Declaration

```objectivec
@interface NSScriptCommandDescription : NSObject
```

<a id="overview"></a>

## Overview

A scriptable application provides scriptability information that describes the commands and objects scripters can use in scripts that target the application. An application’s scripting information is collected automatically by an instance of [NSScriptSuiteRegistry](nsscriptsuiteregistry.md), which creates an `NSScriptCommandDescription` for each command it finds, caches these objects in memory, and installs a command handler for each command.

A script command instance stores the name, class, argument types, and return type of a command. For example, commands in AppleScript’s Core suite include `clone`, `count`, `create`, `delete`, `exists`, and `move`.

The public methods of `NSScriptCommandDescription` are used primarily by Cocoa’s built-in scripting support in responding to Apple events that target the application. Although you can subclass the `NSScriptCommandDescription` class, it is unlikely that you would need to do so, or to create instances of it.

## Topics

### Initializing a Script Command Description

- [initWithSuiteName:commandName:dictionary:](nsscriptcommanddescription/init%28suitename_commandname_dictionary_%29.md): Initializes and returns a newly allocated instance of `NSScriptCommandDescription`.

### Getting Basic Information About the Command

- [appleEventClassCode](nsscriptcommanddescription/appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](nsscriptcommanddescription/appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](nsscriptcommanddescription/commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](nsscriptcommanddescription/commandname.md): Returns the name of the command.
- [suiteName](nsscriptcommanddescription/suitename.md): Returns the name of the suite that contains the command described by the receiver.

### Getting Command Argument Information

- [appleEventCodeForArgumentWithName:](nsscriptcommanddescription/appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [argumentNames](nsscriptcommanddescription/argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [isOptionalArgumentWithName:](nsscriptcommanddescription/isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.
- [typeForArgumentWithName:](nsscriptcommanddescription/typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.

### Getting Command Return-Type Information

- [appleEventCodeForReturnType](nsscriptcommanddescription/appleeventcodeforreturntype.md): Returns the Apple event code that identifies the command’s return type.
- [returnType](nsscriptcommanddescription/returntype.md): Returns the return type of the command.

### Creating Commands

- [createCommandInstance](nsscriptcommanddescription/createcommandinstance%28%29.md): Creates and returns an instance of the command object described by the receiver.
- [createCommandInstanceWithZone:](nsscriptcommanddescription/createcommandinstance%28with_%29.md): Creates and returns an instance of the command object described by the receiver in the specified memory zone.

### Instance Methods

- [initWithCoder:](nsscriptcommanddescription/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](nscoding.md)

## See Also

### Script Dictionary Description

- [NSScriptSuiteRegistry](nsscriptsuiteregistry.md): The top-level repository of scriptability information for an app at runtime.
- [NSScriptClassDescription](nsscriptclassdescription.md): A scriptable class that a macOS app supports.
- [NSClassDescription](nsclassdescription.md): An abstract class that provides the interface for querying the relationships and properties of a class.
