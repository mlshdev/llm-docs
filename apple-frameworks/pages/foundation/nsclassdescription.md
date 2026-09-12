> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassdescription](https://developer.apple.com/documentation/foundation/nsclassdescription)

# NSClassDescription (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An abstract class that provides the interface for querying the relationships and properties of a class.

## Declaration

```swift
class NSClassDescription
```

<a id="overview"></a>

## Overview

Concrete subclasses of `NSClassDescription` provide the available attributes of objects of a particular class and the relationships between that class and other classes. Defining these relationships between classes allows for more intelligent and flexible manipulation of objects with key-value coding.

It is important to note that there are no class descriptions by default. To use `NSClassDescription` objects in your code you have to implement them for your model classes. For all concrete subclasses, you must provide implementations for all instance methods of `NSClassDescription`. (`NSClassDescription` provides only the implementation for the class methods that maintain the cache of registered class descriptions.) Once created, you must register a class description with the `NSClassDescription` method [register(\_:for:)](nsclassdescription/register%28__for_%29.md).

You can use the `NSString` objects in the arrays returned by methods such as [attributeKeys](nsclassdescription/attributekeys.md) and [toManyRelationshipKeys](nsclassdescription/tomanyrelationshipkeys.md)  to access—using key-value coding—the properties of an instance of the class to which a class description object corresponds. For more about attributes and relationships, see Cocoa Fundamentals Guide. For more about key-value coding, see [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

[NSScriptClassDescription](nsscriptclassdescription.md), which is used to map the relationships between scriptable classes, is the only concrete subclass of `NSClassDescription` provided as part of the Cocoa framework.

## Topics

### Working with class descriptions

- [init(for:)](nsclassdescription/init%28for_%29.md): Returns the class description for a given class.
- [invalidateClassDescriptionCache()](nsclassdescription/invalidateclassdescriptioncache%28%29.md): Removes all `NSClassDescription` objects from the cache.
- [register(\_:for:)](nsclassdescription/register%28__for_%29.md): Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.

### Attribute keys

- [attributeKeys](nsclassdescription/attributekeys.md): Overridden by subclasses to return the names of attributes of instances of the described class.

### Relationship keys

- [inverse(forRelationshipKey:)](nsclassdescription/inverse%28forrelationshipkey_%29.md): Overridden by subclasses to return the name of the inverse relationship from a relationship specified by a given key.
- [toManyRelationshipKeys](nsclassdescription/tomanyrelationshipkeys.md): Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.
- [toOneRelationshipKeys](nsclassdescription/toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.

### Notifications

- [NSClassDescriptionNeededForClass](nsnotification/name-swift.struct/nsclassdescriptionneededforclass.md): Posted by [init(for:)](nsclassdescription/init%28for_%29.md) when a class description cannot be found for a class.

### Initializers

- [init(forClass:)](nsclassdescription/init%28forclass_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSScriptClassDescription](nsscriptclassdescription.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Script Dictionary Description

- [NSScriptSuiteRegistry](nsscriptsuiteregistry.md): The top-level repository of scriptability information for an app at runtime.
- [NSScriptClassDescription](nsscriptclassdescription.md): A scriptable class that a macOS app supports.
- [NSScriptCommandDescription](nsscriptcommanddescription.md): A script command that a macOS app supports.

# NSClassDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An abstract class that provides the interface for querying the relationships and properties of a class.

## Declaration

```objectivec
@interface NSClassDescription : NSObject
```

<a id="overview"></a>

## Overview

Concrete subclasses of `NSClassDescription` provide the available attributes of objects of a particular class and the relationships between that class and other classes. Defining these relationships between classes allows for more intelligent and flexible manipulation of objects with key-value coding.

It is important to note that there are no class descriptions by default. To use `NSClassDescription` objects in your code you have to implement them for your model classes. For all concrete subclasses, you must provide implementations for all instance methods of `NSClassDescription`. (`NSClassDescription` provides only the implementation for the class methods that maintain the cache of registered class descriptions.) Once created, you must register a class description with the `NSClassDescription` method [registerClassDescription:forClass:](nsclassdescription/register%28__for_%29.md).

You can use the `NSString` objects in the arrays returned by methods such as [attributeKeys](nsclassdescription/attributekeys.md) and [toManyRelationshipKeys](nsclassdescription/tomanyrelationshipkeys.md)  to access—using key-value coding—the properties of an instance of the class to which a class description object corresponds. For more about attributes and relationships, see Cocoa Fundamentals Guide. For more about key-value coding, see [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

[NSScriptClassDescription](nsscriptclassdescription.md), which is used to map the relationships between scriptable classes, is the only concrete subclass of `NSClassDescription` provided as part of the Cocoa framework.

## Topics

### Working with class descriptions

- [classDescriptionForClass:](nsclassdescription/init%28for_%29.md): Returns the class description for a given class.
- [invalidateClassDescriptionCache](nsclassdescription/invalidateclassdescriptioncache%28%29.md): Removes all `NSClassDescription` objects from the cache.
- [registerClassDescription:forClass:](nsclassdescription/register%28__for_%29.md): Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.

### Attribute keys

- [attributeKeys](nsclassdescription/attributekeys.md): Overridden by subclasses to return the names of attributes of instances of the described class.

### Relationship keys

- [inverseForRelationshipKey:](nsclassdescription/inverse%28forrelationshipkey_%29.md): Overridden by subclasses to return the name of the inverse relationship from a relationship specified by a given key.
- [toManyRelationshipKeys](nsclassdescription/tomanyrelationshipkeys.md): Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.
- [toOneRelationshipKeys](nsclassdescription/toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.

### Notifications

- [NSClassDescriptionNeededForClassNotification](nsnotification/name-swift.struct/nsclassdescriptionneededforclass.md): Posted by [classDescriptionForClass:](nsclassdescription/init%28for_%29.md) when a class description cannot be found for a class.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSScriptClassDescription](nsscriptclassdescription.md)

## See Also

### Script Dictionary Description

- [NSScriptSuiteRegistry](nsscriptsuiteregistry.md): The top-level repository of scriptability information for an app at runtime.
- [NSScriptClassDescription](nsscriptclassdescription.md): A scriptable class that a macOS app supports.
- [NSScriptCommandDescription](nsscriptcommanddescription.md): A script command that a macOS app supports.
