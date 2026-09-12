> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssecureunarchivefromdatatransformer](https://developer.apple.com/documentation/foundation/nssecureunarchivefromdatatransformer)

# NSSecureUnarchiveFromDataTransformer (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A value transformer that converts data to and from classes that support secure coding.

## Declaration

```swift
class NSSecureUnarchiveFromDataTransformer
```

<a id="overview"></a>

## Overview

This class provides a default [ValueTransformer](valuetransformer.md) implementation for secure decoding. This class attempts to decode data into the classes listed within [allowedTopLevelClasses](nssecureunarchivefromdatatransformer/allowedtoplevelclasses.md), which includes [NSArray](nsarray.md), [NSDictionary](nsdictionary.md), [NSSet](nsset.md), [NSString](nsstring.md), [NSNumber](nsnumber.md), [NSDate](nsdate.md), [NSData](nsdata.md), [NSURL](nsurl.md), [NSUUID](nsuuid.md), and [NSNull](nsnull.md).

To archive or unarchive other classes that support [NSSecureCoding](nssecurecoding.md), create a subclass and override [allowedTopLevelClasses](nssecureunarchivefromdatatransformer/allowedtoplevelclasses.md) to list the classes to transform.

To use [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md) with [Core Data](../coredata.md), use the name of this class, or the name of a subclass you implement, as the name of the transformer for an entity’s attribute within a Core Data Model. If you use your own transformer subclass, register it with your app before intializing your persistent container with Core Data.

For an example of subclassing [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md), see [Handling Different Data Types in Core Data](../coredata/handling-different-data-types-in-core-data.md), which has a `ColorToDataTransformer` class that transforms [UIColor](../uikit/uicolor.md) to [NSData](nsdata.md) and the reverse, to support archiving instances of [UIColor](../uikit/uicolor.md).

## Topics

### Getting Information About a Transformer

- [allowedTopLevelClasses](nssecureunarchivefromdatatransformer/allowedtoplevelclasses.md): A list of allowed classes the top-level object in an archive must conform to, for encoding and decoding.

## Relationships

### Inherits From

- [ValueTransformer](valuetransformer.md)

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

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.

# NSSecureUnarchiveFromDataTransformer (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A value transformer that converts data to and from classes that support secure coding.

## Declaration

```objectivec
@interface NSSecureUnarchiveFromDataTransformer : NSValueTransformer
```

<a id="overview"></a>

## Overview

This class provides a default [NSValueTransformer](valuetransformer.md) implementation for secure decoding. This class attempts to decode data into the classes listed within [allowedTopLevelClasses](nssecureunarchivefromdatatransformer/allowedtoplevelclasses.md), which includes [NSArray](nsarray.md), [NSDictionary](nsdictionary.md), [NSSet](nsset.md), [NSString](nsstring.md), [NSNumber](nsnumber.md), [NSDate](nsdate.md), [NSData](nsdata.md), [NSURL](nsurl.md), [NSUUID](nsuuid.md), and [NSNull](nsnull.md).

To archive or unarchive other classes that support [NSSecureCoding](nssecurecoding.md), create a subclass and override [allowedTopLevelClasses](nssecureunarchivefromdatatransformer/allowedtoplevelclasses.md) to list the classes to transform.

To use [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md) with [Core Data](../coredata.md), use the name of this class, or the name of a subclass you implement, as the name of the transformer for an entity’s attribute within a Core Data Model. If you use your own transformer subclass, register it with your app before intializing your persistent container with Core Data.

For an example of subclassing [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md), see [Handling Different Data Types in Core Data](../coredata/handling-different-data-types-in-core-data.md), which has a `ColorToDataTransformer` class that transforms [UIColor](../uikit/uicolor.md) to [NSData](nsdata.md) and the reverse, to support archiving instances of [UIColor](../uikit/uicolor.md).

## Topics

### Getting Information About a Transformer

- [allowedTopLevelClasses](nssecureunarchivefromdatatransformer/allowedtoplevelclasses.md): A list of allowed classes the top-level object in an archive must conform to, for encoding and decoding.

## Relationships

### Inherits From

- [NSValueTransformer](valuetransformer.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
