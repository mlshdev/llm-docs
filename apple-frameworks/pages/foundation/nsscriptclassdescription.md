> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription](https://developer.apple.com/documentation/foundation/nsscriptclassdescription)

# NSScriptClassDescription (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A scriptable class that a macOS app supports.

## Declaration

```swift
class NSScriptClassDescription
```

<a id="overview"></a>

## Overview

A scriptable application provides scriptability information that describes the commands and objects scripters can use in scripts that target the application. That includes information about the classes those scriptable objects are created from.

An application’s scriptability information is collected automatically by an instance of [NSScriptSuiteRegistry](nsscriptsuiteregistry.md). The registry object creates an `NSScriptClassDescription` for each class it finds and caches these objects in memory. Cocoa scripting uses registry information in handling scripting requests that target the application.

A class description instance stores the name, attributes, relationships, and supported commands for a class. For example, a scriptable `document` class for a drawing application might support attributes such as `file` and `file type`, relationships such as collections of `circles`, `rectangles`, and `lines`, and commands such as `align` and `rotate`.

As with many of the classes in Cocoa’s built-in scripting support, your application may never need to directly work with instances of `NSScriptClassDescription`. However, one case where you might need access to a class description is if you override `objectSpecifier` in a scriptable class. For information on how to do this, see [Object Specifiers](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_object_specifiers/SAppsObjectSpecifiers.html#//apple_ref/doc/uid/TP40002164-CH3) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

Another case where your application may need access to class description information is if you override `indicesOfObjectsByEvaluatingWithContainer:count:` in a specifier class.

Although you can subclass `NSScriptClassDescription`, it is unlikely that you would need to do so, or even to create instances of it.

## Topics

### Initializing a Script Class Description

- [init(suiteName:className:dictionary:)](nsscriptclassdescription/init%28suitename_classname_dictionary_%29.md): Initializes and returns a newly allocated instance of `NSScriptClassDescription`.

### Getting a Script Class Description

- [init(for:)](nsscriptclassdescription/init%28for_%29.md): Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.
- [forKey(\_:)](nsscriptclassdescription/forkey%28__%29.md): Returns the class description instance for the class type of the specified attribute or relationship.
- [superclass](nsscriptclassdescription/superclass.md): Returns the class description instance for the superclass of the receiver’s class.

### Getting basic information about the script class

- [className](nsscriptclassdescription/classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [defaultSubcontainerAttributeKey](nsscriptclassdescription/defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [implementationClassName](nsscriptclassdescription/implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [isLocationRequiredToCreate(forKey:)](nsscriptclassdescription/islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](nsscriptclassdescription/suitename.md): Returns the name of the receiver’s suite.

### Getting and comparing Apple event codes

- [appleEventCode](nsscriptclassdescription/appleeventcode.md): Returns the Apple event code associated with the receiver’s class.
- [appleEventCode(forKey:)](nsscriptclassdescription/appleeventcode%28forkey_%29.md): Returns the Apple event code for the specified attribute or relationship in the receiver.
- [matchesAppleEventCode(\_:)](nsscriptclassdescription/matchesappleeventcode%28__%29.md): Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.

### Getting attribute and relationship information

- [hasOrderedToManyRelationship(forKey:)](nsscriptclassdescription/hasorderedtomanyrelationship%28forkey_%29.md): Returns a Boolean value indicating whether the described class has an ordered to-many relationship identified by the specified key.
- [hasProperty(forKey:)](nsscriptclassdescription/hasproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a property identified by the specified key.
- [hasReadableProperty(forKey:)](nsscriptclassdescription/hasreadableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a readable property identified by the specified key.
- [hasWritableProperty(forKey:)](nsscriptclassdescription/haswritableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a writable property identified by the specified key.
- [key(withAppleEventCode:)](nsscriptclassdescription/key%28withappleeventcode_%29.md): Given an Apple event code that identifies a property or element class, returns the key for the corresponding attribute, one-to-one relationship, or one-to-many relationship.
- [type(forKey:)](nsscriptclassdescription/type%28forkey_%29.md): Returns the name of the declared type of the attribute or relationship identified by the passed key.

### Getting command information

- [selector(forCommand:)](nsscriptclassdescription/selector%28forcommand_%29.md): Returns the selector associated with the receiver for the specified command description.
- [supportsCommand(\_:)](nsscriptclassdescription/supportscommand%28__%29.md): Returns a Boolean value indicating whether the receiver or any superclass supports the specified command.

## Relationships

### Inherits From

- [NSClassDescription](nsclassdescription.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Script Dictionary Description

- [NSScriptSuiteRegistry](nsscriptsuiteregistry.md): The top-level repository of scriptability information for an app at runtime.
- [NSClassDescription](nsclassdescription.md): An abstract class that provides the interface for querying the relationships and properties of a class.
- [NSScriptCommandDescription](nsscriptcommanddescription.md): A script command that a macOS app supports.

# NSScriptClassDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A scriptable class that a macOS app supports.

## Declaration

```objectivec
@interface NSScriptClassDescription : NSClassDescription
```

<a id="overview"></a>

## Overview

A scriptable application provides scriptability information that describes the commands and objects scripters can use in scripts that target the application. That includes information about the classes those scriptable objects are created from.

An application’s scriptability information is collected automatically by an instance of [NSScriptSuiteRegistry](nsscriptsuiteregistry.md). The registry object creates an `NSScriptClassDescription` for each class it finds and caches these objects in memory. Cocoa scripting uses registry information in handling scripting requests that target the application.

A class description instance stores the name, attributes, relationships, and supported commands for a class. For example, a scriptable `document` class for a drawing application might support attributes such as `file` and `file type`, relationships such as collections of `circles`, `rectangles`, and `lines`, and commands such as `align` and `rotate`.

As with many of the classes in Cocoa’s built-in scripting support, your application may never need to directly work with instances of `NSScriptClassDescription`. However, one case where you might need access to a class description is if you override `objectSpecifier` in a scriptable class. For information on how to do this, see [Object Specifiers](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_object_specifiers/SAppsObjectSpecifiers.html#//apple_ref/doc/uid/TP40002164-CH3) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

Another case where your application may need access to class description information is if you override `indicesOfObjectsByEvaluatingWithContainer:count:` in a specifier class.

Although you can subclass `NSScriptClassDescription`, it is unlikely that you would need to do so, or even to create instances of it.

## Topics

### Initializing a Script Class Description

- [initWithSuiteName:className:dictionary:](nsscriptclassdescription/init%28suitename_classname_dictionary_%29.md): Initializes and returns a newly allocated instance of `NSScriptClassDescription`.

### Getting a Script Class Description

- [classDescriptionForClass:](nsscriptclassdescription/init%28for_%29.md): Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.
- [classDescriptionForKey:](nsscriptclassdescription/forkey%28__%29.md): Returns the class description instance for the class type of the specified attribute or relationship.
- [superclassDescription](nsscriptclassdescription/superclass.md): Returns the class description instance for the superclass of the receiver’s class.

### Getting basic information about the script class

- [className](nsscriptclassdescription/classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [defaultSubcontainerAttributeKey](nsscriptclassdescription/defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [implementationClassName](nsscriptclassdescription/implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [isLocationRequiredToCreateForKey:](nsscriptclassdescription/islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](nsscriptclassdescription/suitename.md): Returns the name of the receiver’s suite.

### Getting and comparing Apple event codes

- [appleEventCode](nsscriptclassdescription/appleeventcode.md): Returns the Apple event code associated with the receiver’s class.
- [appleEventCodeForKey:](nsscriptclassdescription/appleeventcode%28forkey_%29.md): Returns the Apple event code for the specified attribute or relationship in the receiver.
- [matchesAppleEventCode:](nsscriptclassdescription/matchesappleeventcode%28__%29.md): Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.

### Getting attribute and relationship information

- [hasOrderedToManyRelationshipForKey:](nsscriptclassdescription/hasorderedtomanyrelationship%28forkey_%29.md): Returns a Boolean value indicating whether the described class has an ordered to-many relationship identified by the specified key.
- [hasPropertyForKey:](nsscriptclassdescription/hasproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a property identified by the specified key.
- [hasReadablePropertyForKey:](nsscriptclassdescription/hasreadableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a readable property identified by the specified key.
- [hasWritablePropertyForKey:](nsscriptclassdescription/haswritableproperty%28forkey_%29.md): Returns a Boolean value indicating whether the described class has a writable property identified by the specified key.
- [isReadOnlyKey:](nsscriptclassdescription/isreadonlykey_.md): Deprecated. Returns a Boolean value indicating whether a specified property in the receiver is read-only.
- [keyWithAppleEventCode:](nsscriptclassdescription/key%28withappleeventcode_%29.md): Given an Apple event code that identifies a property or element class, returns the key for the corresponding attribute, one-to-one relationship, or one-to-many relationship.
- [typeForKey:](nsscriptclassdescription/type%28forkey_%29.md): Returns the name of the declared type of the attribute or relationship identified by the passed key.

### Getting command information

- [selectorForCommand:](nsscriptclassdescription/selector%28forcommand_%29.md): Returns the selector associated with the receiver for the specified command description.
- [supportsCommand:](nsscriptclassdescription/supportscommand%28__%29.md): Returns a Boolean value indicating whether the receiver or any superclass supports the specified command.

## Relationships

### Inherits From

- [NSClassDescription](nsclassdescription.md)

## See Also

### Script Dictionary Description

- [NSScriptSuiteRegistry](nsscriptsuiteregistry.md): The top-level repository of scriptability information for an app at runtime.
- [NSClassDescription](nsclassdescription.md): An abstract class that provides the interface for querying the relationships and properties of a class.
- [NSScriptCommandDescription](nsscriptcommanddescription.md): A script command that a macOS app supports.
