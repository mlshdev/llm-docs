> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription](https://developer.apple.com/documentation/coredata/nsattributedescription)

# NSAttributeDescription (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A description of a single attribute belonging to an entity.

## Declaration

```swift
class NSAttributeDescription
```

<a id="overview"></a>

## Overview

`NSAttributeDescription` inherits from [NSPropertyDescription](nspropertydescription.md), which provides most of the basic behavior. Instances of `NSAttributeDescription` are used to describe attributes, as distinct from relationships. The class adds the ability to specify the attribute type, and to specify a default value. In a managed object model, you must specify the type of all attributes—you can only use the undefined attribute type (`NSUndefinedAttributeType`) for transient attributes.

<a id="Editing-Attribute-Descriptions"></a>

### Editing Attribute Descriptions

Attribute descriptions are editable until they are used by an object graph manager. This allows you to create or modify them dynamically. However, once a description is used (when the managed object model to which it belongs is associated with a persistent store coordinator), it *must not* (indeed cannot) be changed. This is enforced at runtime: any attempt to mutate a model or any of its sub-objects after the model is associated with a persistent store coordinator causes an exception to be thrown. If you need to modify a model that is in use, create a copy, modify the copy, and then discard the objects with the old model.

> **Note**

>  Default values set for attributes are retained by a managed object model, not copied. This means that attribute values do not have to implement the `NSCopying` protocol, however it also means that you should not modify any objects after they have been set as default values.

## Topics

### Managing the type

- [attributeValueClassName](nsattributedescription/attributevalueclassname.md): The class name that represents the attribute’s value.
- [type](nsattributedescription/type.md): The attribute’s type.
- [NSAttributeDescription.AttributeType](nsattributedescription/attributetype-swift.struct.md): The types of attributes that Core Data supports.
- [attributeType](nsattributedescription/attributetype-swift.property.md): Deprecated. The attribute’s type.
- [NSAttributeType](nsattributetype.md): The types of attribute that Core Data supports.

### Configuring the behavior

- [allowsCloudEncryption](nsattributedescription/allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](nsattributedescription/allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](nsattributedescription/defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](nsattributedescription/preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](nsattributedescription/valuetransformername.md): The name of the transformer to use for the attribute value.

### Getting version information

- [versionHash](nsattributedescription/versionhash.md): The version hash for the attribute.

### Deprecated

- [Deprecated symbols](nsattributedescription-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSPropertyDescription](nspropertydescription.md)

### Inherited By

- [NSCompositeAttributeDescription](nscompositeattributedescription.md)
- [NSDerivedAttributeDescription](nsderivedattributedescription.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Standard attributes

- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeType](nsattributetype.md): The types of attribute that Core Data supports.
- [NSRelationshipDescription](nsrelationshipdescription.md): A description of a relationship between two entities.

# NSAttributeDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A description of a single attribute belonging to an entity.

## Declaration

```objectivec
@interface NSAttributeDescription : NSPropertyDescription
```

<a id="overview"></a>

## Overview

`NSAttributeDescription` inherits from [NSPropertyDescription](nspropertydescription.md), which provides most of the basic behavior. Instances of `NSAttributeDescription` are used to describe attributes, as distinct from relationships. The class adds the ability to specify the attribute type, and to specify a default value. In a managed object model, you must specify the type of all attributes—you can only use the undefined attribute type (`NSUndefinedAttributeType`) for transient attributes.

<a id="Editing-Attribute-Descriptions"></a>

### Editing Attribute Descriptions

Attribute descriptions are editable until they are used by an object graph manager. This allows you to create or modify them dynamically. However, once a description is used (when the managed object model to which it belongs is associated with a persistent store coordinator), it *must not* (indeed cannot) be changed. This is enforced at runtime: any attempt to mutate a model or any of its sub-objects after the model is associated with a persistent store coordinator causes an exception to be thrown. If you need to modify a model that is in use, create a copy, modify the copy, and then discard the objects with the old model.

> **Note**

>  Default values set for attributes are retained by a managed object model, not copied. This means that attribute values do not have to implement the `NSCopying` protocol, however it also means that you should not modify any objects after they have been set as default values.

## Topics

### Managing the type

- [attributeValueClassName](nsattributedescription/attributevalueclassname.md): The class name that represents the attribute’s value.
- [attributeType](nsattributedescription/attributetype-swift.property.md): Deprecated. The attribute’s type.
- [NSAttributeType](nsattributetype.md): The types of attribute that Core Data supports.

### Configuring the behavior

- [allowsCloudEncryption](nsattributedescription/allowscloudencryption.md): A Boolean value that determines whether to encrypt the attribute’s value.
- [allowsExternalBinaryDataStorage](nsattributedescription/allowsexternalbinarydatastorage.md): A Boolean value that indicates whether the attribute allows external binary storage.
- [defaultValue](nsattributedescription/defaultvalue.md): The default value of the attribute.
- [preservesValueInHistoryOnDeletion](nsattributedescription/preservesvalueinhistoryondeletion.md): A Boolean value that indicates whether the attribute records its value in the persistent history transaction for a managed object’s deletion.
- [valueTransformerName](nsattributedescription/valuetransformername.md): The name of the transformer to use for the attribute value.

### Getting version information

- [versionHash](nsattributedescription/versionhash.md): The version hash for the attribute.

### Deprecated

- [Deprecated symbols](nsattributedescription-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSPropertyDescription](nspropertydescription.md)

### Inherited By

- [NSCompositeAttributeDescription](nscompositeattributedescription.md)
- [NSDerivedAttributeDescription](nsderivedattributedescription.md)

## See Also

### Standard attributes

- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeType](nsattributetype.md): The types of attribute that Core Data supports.
- [NSRelationshipDescription](nsrelationshipdescription.md): A description of a relationship between two entities.
