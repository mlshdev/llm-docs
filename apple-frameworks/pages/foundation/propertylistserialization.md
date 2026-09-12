> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization](https://developer.apple.com/documentation/foundation/propertylistserialization)

# PropertyListSerialization (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that converts between a property list and one of several serialized representations.

## Declaration

```swift
class PropertyListSerialization
```

<a id="overview"></a>

## Overview

The [PropertyListSerialization](propertylistserialization.md) class provides methods that convert a property list to and from several serialized formats. A property list is itself an array or dictionary that contains only [NSData](nsdata.md), [NSString](nsstring.md), [NSArray](nsarray.md), [NSDictionary](nsdictionary.md), [NSDate](nsdate.md), and [NSNumber](nsnumber.md) objects.

Property list objects are toll-free bridged with their respective Core Foundation types ([CFData](../corefoundation/cfdata.md), [CFString](../corefoundation/cfstring.md), and so on). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2)  for more information on toll-free bridging.

## Topics

### Serializing a Property List

- [data(fromPropertyList:format:options:)](propertylistserialization/data%28frompropertylist_format_options_%29.md): Returns an `NSData` object containing a given property list in a specified format.
- [writePropertyList(\_:to:format:options:error:)](propertylistserialization/writepropertylist%28__to_format_options_error_%29.md): Writes a property list to the specified stream.
- [PropertyListSerialization.WriteOptions](propertylistserialization/writeoptions.md)

### Deserializing a Property List

- [propertyList(from:options:format:)](propertylistserialization/propertylist%28from_options_format_%29.md): Creates and returns a property list from the specified data.
- [propertyList(with:options:format:)](propertylistserialization/propertylist%28with_options_format_%29.md): Creates and returns a property list by reading from the specified stream.

### Validating a Property List

- [propertyList(\_:isValidFor:)](propertylistserialization/propertylist%28__isvalidfor_%29.md): Returns a Boolean value that indicates whether a given property list is valid for a given format.

### Obsolete Methods

- [dataFromPropertyList(\_:format:errorDescription:)](propertylistserialization/datafrompropertylist%28__format_errordescription_%29.md): Deprecated. This method is obsolete and will be deprecated soon.
- [propertyListFromData(\_:mutabilityOption:format:errorDescription:)](propertylistserialization/propertylistfromdata%28__mutabilityoption_format_errordescription_%29.md): Deprecated. This method is deprecated. Use [data(fromPropertyList:format:options:)](propertylistserialization/data%28frompropertylist_format_options_%29.md) instead.

### Constants

- [PropertyListSerialization.MutabilityOptions](propertylistserialization/mutabilityoptions.md): These constants specify mutability options in property lists.
- [PropertyListSerialization.PropertyListFormat](propertylistserialization/propertylistformat.md): These constants are used to specify a property list serialization format.
- [PropertyListSerialization.ReadOptions](propertylistserialization/readoptions.md): The only read options supported are described in [PropertyListSerialization.MutabilityOptions](propertylistserialization/mutabilityoptions.md).

### Error Codes

- [NSPropertyListReadCorruptError](nspropertylistreadcorrupterror-swift.var.md): Parsing of the property list failed.
- [NSPropertyListReadUnknownVersionError](nspropertylistreadunknownversionerror-swift.var.md): The version number of the property list cannot be determined.
- [NSPropertyListReadStreamError](nspropertylistreadstreamerror-swift.var.md): Reading of the property list failed.
- [NSPropertyListWriteStreamError](nspropertylistwritestreamerror-swift.var.md): Writing to the property list failed.
- [NSPropertyListWriteInvalidError](nspropertylistwriteinvaliderror-swift.var.md): Writing failed because of an invalid property list object, or an invalid property list type was specified.
- [NSPropertyListErrorMinimum](nspropertylisterrorminimum-swift.var.md): The start of the range of error codes reserved for property list errors.
- [NSPropertyListErrorMaximum](nspropertylisterrormaximum-swift.var.md): The end of the range of error codes reserved for property list errors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Property Lists

- [PropertyListEncoder](propertylistencoder.md): An object that encodes instances of data types to a property list.
- [PropertyListDecoder](propertylistdecoder.md): An object that decodes instances of data types from a property list.

# NSPropertyListSerialization (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that converts between a property list and one of several serialized representations.

## Declaration

```objectivec
@interface NSPropertyListSerialization : NSObject
```

<a id="overview"></a>

## Overview

The [NSPropertyListSerialization](propertylistserialization.md) class provides methods that convert a property list to and from several serialized formats. A property list is itself an array or dictionary that contains only [NSData](nsdata.md), [NSString](nsstring.md), [NSArray](nsarray.md), [NSDictionary](nsdictionary.md), [NSDate](nsdate.md), and [NSNumber](nsnumber.md) objects.

Property list objects are toll-free bridged with their respective Core Foundation types ([CFDataRef](../corefoundation/cfdata.md), [CFStringRef](../corefoundation/cfstring.md), and so on). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2)  for more information on toll-free bridging.

## Topics

### Serializing a Property List

- [dataWithPropertyList:format:options:error:](propertylistserialization/data%28frompropertylist_format_options_%29.md): Returns an `NSData` object containing a given property list in a specified format.
- [writePropertyList:toStream:format:options:error:](propertylistserialization/writepropertylist%28__to_format_options_error_%29.md): Writes a property list to the specified stream.
- [NSPropertyListWriteOptions](propertylistserialization/writeoptions.md)

### Deserializing a Property List

- [propertyListWithData:options:format:error:](propertylistserialization/propertylist%28from_options_format_%29.md): Creates and returns a property list from the specified data.
- [propertyListWithStream:options:format:error:](propertylistserialization/propertylist%28with_options_format_%29.md): Creates and returns a property list by reading from the specified stream.

### Validating a Property List

- [propertyList:isValidForFormat:](propertylistserialization/propertylist%28__isvalidfor_%29.md): Returns a Boolean value that indicates whether a given property list is valid for a given format.

### Obsolete Methods

- [dataFromPropertyList:format:errorDescription:](propertylistserialization/datafrompropertylist%28__format_errordescription_%29.md): Deprecated. This method is obsolete and will be deprecated soon.
- [propertyListFromData:mutabilityOption:format:errorDescription:](propertylistserialization/propertylistfromdata%28__mutabilityoption_format_errordescription_%29.md): Deprecated. This method is deprecated. Use [dataWithPropertyList:format:options:error:](propertylistserialization/data%28frompropertylist_format_options_%29.md) instead.

### Constants

- [NSPropertyListMutabilityOptions](propertylistserialization/mutabilityoptions.md): These constants specify mutability options in property lists.
- [NSPropertyListFormat](propertylistserialization/propertylistformat.md): These constants are used to specify a property list serialization format.
- [NSPropertyListReadOptions](propertylistserialization/readoptions.md): The only read options supported are described in [NSPropertyListMutabilityOptions](propertylistserialization/mutabilityoptions.md).

### Error Codes

- [NSPropertyListReadCorruptError](nspropertylistreadcorrupterror-c.enum.case.md): Parsing of the property list failed.
- [NSPropertyListReadUnknownVersionError](nspropertylistreadunknownversionerror-c.enum.case.md): The version number of the property list cannot be determined.
- [NSPropertyListReadStreamError](nspropertylistreadstreamerror-c.enum.case.md): Reading of the property list failed.
- [NSPropertyListWriteStreamError](nspropertylistwritestreamerror-c.enum.case.md): Writing to the property list failed.
- [NSPropertyListWriteInvalidError](nspropertylistwriteinvaliderror-c.enum.case.md): Writing failed because of an invalid property list object, or an invalid property list type was specified.
- [NSPropertyListErrorMinimum](nspropertylisterrorminimum-c.enum.case.md): The start of the range of error codes reserved for property list errors.
- [NSPropertyListErrorMaximum](nspropertylisterrormaximum-c.enum.case.md): The end of the range of error codes reserved for property list errors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
