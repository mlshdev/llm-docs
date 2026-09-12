> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributetype](https://developer.apple.com/documentation/coredata/nsattributetype)

# NSAttributeType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types of attribute that Core Data supports.

## Declaration

```swift
enum NSAttributeType
```

## Mentioned In

- [Configuring Attributes](configuring-attributes.md)

<a id="overview"></a>

## Overview

Core Data supports the following attribute types, which differentiate between bit sizes to enable data-store independence. For some types, a scalar option is available.

| **Attribute Type** | **Type** | **Scalar type** | **Scalar by default?** |
| --- | --- | --- | --- |
| Integer 16 | [NSNumber](../foundation/nsnumber.md) | [int16_t](https://developer.apple.com/documentation/kernel/int16_t) | yes |
| Integer 32 | [NSNumber](../foundation/nsnumber.md) | [int32_t](https://developer.apple.com/documentation/kernel/int32_t) | yes |
| Integer 64 | [NSNumber](../foundation/nsnumber.md) | [int64_t](https://developer.apple.com/documentation/kernel/int64_t) | yes |
| Double | [NSNumber](../foundation/nsnumber.md) | `double` | yes |
| Float | [NSNumber](../foundation/nsnumber.md) | `float` | yes |
| Boolean | [NSNumber](../foundation/nsnumber.md) | [BOOL](../objectivec/bool.md) | yes |
| Date | [NSDate](../foundation/nsdate.md) | [TimeInterval](../foundation/timeinterval.md) | no |
| Decimal | [NSDecimalNumber](../foundation/nsdecimalnumber.md) | [NSDecimalNumber](../foundation/nsdecimalnumber.md) | no |
| UUID | [NSUUID](../foundation/nsuuid.md) | [NSUUID](../foundation/nsuuid.md) | no |
| URI | [NSURL](../foundation/nsurl.md) | — | — |
| String | [NSString](../foundation/nsstring.md) | — | — |
| Binary data | [NSData](../foundation/nsdata.md) | — | — |
| Transformable | [NSObject](../objectivec/nsobject-swift.class.md) | — | — |
| Composite | — | — | — |
| Undefined | — | — | — |

> **Note**

>  If your application uses Binary Large Objects (BLOBs) like image and sound data, prefer to store its binary data outside of the Core Data store.

## Topics

### Attribute types

- [NSAttributeType.binaryDataAttributeType](nsattributetype/binarydataattributetype.md): An attribute that stores binary data.
- [NSAttributeType.booleanAttributeType](nsattributetype/booleanattributetype.md): An attribute that stores a Boolean value.
- [NSAttributeType.compositeAttributeType](nsattributetype/compositeattributetype.md): An attribute that derives its value by composing other attributes.
- [NSAttributeType.dateAttributeType](nsattributetype/dateattributetype.md): An attribute that stores a date.
- [NSAttributeType.decimalAttributeType](nsattributetype/decimalattributetype.md): An attribute that stores a decimal value.
- [NSAttributeType.doubleAttributeType](nsattributetype/doubleattributetype.md): An attribute that stores a double value.
- [NSAttributeType.floatAttributeType](nsattributetype/floatattributetype.md): An attribute that stores a float value.
- [NSAttributeType.integer16AttributeType](nsattributetype/integer16attributetype.md): An attribute that stores a 16-bit signed integer value.
- [NSAttributeType.integer32AttributeType](nsattributetype/integer32attributetype.md): An attribute that stores a 32-bit signed integer value.
- [NSAttributeType.integer64AttributeType](nsattributetype/integer64attributetype.md): An attribute that stores a 64-bit signed integer value.
- [NSAttributeType.objectIDAttributeType](nsattributetype/objectidattributetype.md): An attribute that stores a managed object’s ID.
- [NSAttributeType.stringAttributeType](nsattributetype/stringattributetype.md): An attribute that stores a string.
- [NSAttributeType.transformableAttributeType](nsattributetype/transformableattributetype.md): An attribute that uses a value transformer to derive its value.
- [NSAttributeType.undefinedAttributeType](nsattributetype/undefinedattributetype.md): An attribute that doesn’t have an explicit type.
- [NSAttributeType.URIAttributeType](nsattributetype/uriattributetype.md): An attribute that stores a uniform resource identifier.
- [NSAttributeType.UUIDAttributeType](nsattributetype/uuidattributetype.md): An attribute that stores a universally unique identifier.

### Initializers

- [init(rawValue:)](nsattributetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Standard attributes

- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeDescription](nsattributedescription.md): A description of a single attribute belonging to an entity.
- [NSRelationshipDescription](nsrelationshipdescription.md): A description of a relationship between two entities.

# NSAttributeType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types of attribute that Core Data supports.

## Declaration

```objectivec
enum NSAttributeType : NSUInteger;
```

## Mentioned In

- [Configuring Attributes](configuring-attributes.md)

<a id="overview"></a>

## Overview

Core Data supports the following attribute types, which differentiate between bit sizes to enable data-store independence. For some types, a scalar option is available.

| **Attribute Type** | **Type** | **Scalar type** | **Scalar by default?** |
| --- | --- | --- | --- |
| Integer 16 | [NSNumber](../foundation/nsnumber.md) | [int16_t](https://developer.apple.com/documentation/kernel/int16_t) | yes |
| Integer 32 | [NSNumber](../foundation/nsnumber.md) | [int32_t](https://developer.apple.com/documentation/kernel/int32_t) | yes |
| Integer 64 | [NSNumber](../foundation/nsnumber.md) | [int64_t](https://developer.apple.com/documentation/kernel/int64_t) | yes |
| Double | [NSNumber](../foundation/nsnumber.md) | `double` | yes |
| Float | [NSNumber](../foundation/nsnumber.md) | `float` | yes |
| Boolean | [NSNumber](../foundation/nsnumber.md) | [BOOL](../objectivec/bool.md) | yes |
| Date | [NSDate](../foundation/nsdate.md) | [NSTimeInterval](../foundation/timeinterval.md) | no |
| Decimal | [NSDecimalNumber](../foundation/nsdecimalnumber.md) | [NSDecimalNumber](../foundation/nsdecimalnumber.md) | no |
| UUID | [NSUUID](../foundation/nsuuid.md) | [NSUUID](../foundation/nsuuid.md) | no |
| URI | [NSURL](../foundation/nsurl.md) | — | — |
| String | [NSString](../foundation/nsstring.md) | — | — |
| Binary data | [NSData](../foundation/nsdata.md) | — | — |
| Transformable | [NSObject](../objectivec/nsobject-swift.class.md) | — | — |
| Composite | — | — | — |
| Undefined | — | — | — |

> **Note**

>  If your application uses Binary Large Objects (BLOBs) like image and sound data, prefer to store its binary data outside of the Core Data store.

## Topics

### Attribute types

- [NSBinaryDataAttributeType](nsattributetype/binarydataattributetype.md): An attribute that stores binary data.
- [NSBooleanAttributeType](nsattributetype/booleanattributetype.md): An attribute that stores a Boolean value.
- [NSCompositeAttributeType](nsattributetype/compositeattributetype.md): An attribute that derives its value by composing other attributes.
- [NSDateAttributeType](nsattributetype/dateattributetype.md): An attribute that stores a date.
- [NSDecimalAttributeType](nsattributetype/decimalattributetype.md): An attribute that stores a decimal value.
- [NSDoubleAttributeType](nsattributetype/doubleattributetype.md): An attribute that stores a double value.
- [NSFloatAttributeType](nsattributetype/floatattributetype.md): An attribute that stores a float value.
- [NSInteger16AttributeType](nsattributetype/integer16attributetype.md): An attribute that stores a 16-bit signed integer value.
- [NSInteger32AttributeType](nsattributetype/integer32attributetype.md): An attribute that stores a 32-bit signed integer value.
- [NSInteger64AttributeType](nsattributetype/integer64attributetype.md): An attribute that stores a 64-bit signed integer value.
- [NSObjectIDAttributeType](nsattributetype/objectidattributetype.md): An attribute that stores a managed object’s ID.
- [NSStringAttributeType](nsattributetype/stringattributetype.md): An attribute that stores a string.
- [NSTransformableAttributeType](nsattributetype/transformableattributetype.md): An attribute that uses a value transformer to derive its value.
- [NSUndefinedAttributeType](nsattributetype/undefinedattributetype.md): An attribute that doesn’t have an explicit type.
- [NSURIAttributeType](nsattributetype/uriattributetype.md): An attribute that stores a uniform resource identifier.
- [NSUUIDAttributeType](nsattributetype/uuidattributetype.md): An attribute that stores a universally unique identifier.

## See Also

### Standard attributes

- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeDescription](nsattributedescription.md): A description of a single attribute belonging to an entity.
- [NSRelationshipDescription](nsrelationshipdescription.md): A description of a relationship between two entities.
