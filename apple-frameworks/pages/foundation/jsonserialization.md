> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization](https://developer.apple.com/documentation/foundation/jsonserialization)

# JSONSerialization (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that converts between JSON and the equivalent Foundation objects.

## Declaration

```swift
class JSONSerialization
```

<a id="overview"></a>

## Overview

You use the [JSONSerialization](jsonserialization.md) class to convert JSON to Foundation objects and convert Foundation objects to JSON.

To convert a Foundation object to JSON, the object must have the following properties:

- The top level object is an [NSArray](nsarray.md) or [NSDictionary](nsdictionary.md), unless you set the [fragmentsAllowed](jsonserialization/writingoptions/fragmentsallowed.md) option.
- All objects are instances of [NSString](nsstring.md), [NSNumber](nsnumber.md), [NSArray](nsarray.md), [NSDictionary](nsdictionary.md), or [NSNull](nsnull.md).
- All dictionary keys are instances of [NSString](nsstring.md).
- Numbers are neither `NaN` nor infinity.

Other rules may apply. Calling [isValidJSONObject(\_:)](jsonserialization/isvalidjsonobject%28__%29.md) or attempting a conversion are the definitive ways to tell if the [JSONSerialization](jsonserialization.md) class can convert given object to JSON data.

> **Note**

>  On iOS 7 and later and macOS 10.9 and later, [JSONSerialization](jsonserialization.md) is thread safe.

## Topics

### Creating a JSON Object

- [jsonObject(with:options:)](jsonserialization/jsonobject%28with_options_%29-8demi.md): Returns a Foundation object from given JSON data.
- [jsonObject(with:options:)](jsonserialization/jsonobject%28with_options_%29-3afap.md): Returns a Foundation object from JSON data in a given stream.
- [JSONSerialization.ReadingOptions](jsonserialization/readingoptions.md): Options used when creating Foundation objects from JSON data.

### Creating JSON Data

- [data(withJSONObject:options:)](jsonserialization/data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [writeJSONObject(\_:to:options:error:)](jsonserialization/writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [JSONSerialization.WritingOptions](jsonserialization/writingoptions.md): Options for writing JSON data.
- [isValidJSONObject(\_:)](jsonserialization/isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.

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

### JSON

- [Using JSON with custom types](using-json-with-custom-types.md): Encode and decode JSON data, regardless of its structure, using Swift’s JSON support.
- [JSONEncoder](jsonencoder.md): An object that encodes instances of a data type as JSON objects.
- [JSONDecoder](jsondecoder.md): An object that decodes instances of a data type from JSON objects.

# NSJSONSerialization (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that converts between JSON and the equivalent Foundation objects.

## Declaration

```objectivec
@interface NSJSONSerialization : NSObject
```

<a id="overview"></a>

## Overview

You use the [NSJSONSerialization](jsonserialization.md) class to convert JSON to Foundation objects and convert Foundation objects to JSON.

To convert a Foundation object to JSON, the object must have the following properties:

- The top level object is an [NSArray](nsarray.md) or [NSDictionary](nsdictionary.md), unless you set the [NSJSONWritingFragmentsAllowed](jsonserialization/writingoptions/fragmentsallowed.md) option.
- All objects are instances of [NSString](nsstring.md), [NSNumber](nsnumber.md), [NSArray](nsarray.md), [NSDictionary](nsdictionary.md), or [NSNull](nsnull.md).
- All dictionary keys are instances of [NSString](nsstring.md).
- Numbers are neither `NaN` nor infinity.

Other rules may apply. Calling [isValidJSONObject:](jsonserialization/isvalidjsonobject%28__%29.md) or attempting a conversion are the definitive ways to tell if the [NSJSONSerialization](jsonserialization.md) class can convert given object to JSON data.

> **Note**

>  On iOS 7 and later and macOS 10.9 and later, [NSJSONSerialization](jsonserialization.md) is thread safe.

## Topics

### Creating a JSON Object

- [JSONObjectWithData:options:error:](jsonserialization/jsonobject%28with_options_%29-8demi.md): Returns a Foundation object from given JSON data.
- [JSONObjectWithStream:options:error:](jsonserialization/jsonobject%28with_options_%29-3afap.md): Returns a Foundation object from JSON data in a given stream.
- [NSJSONReadingOptions](jsonserialization/readingoptions.md): Options used when creating Foundation objects from JSON data.

### Creating JSON Data

- [dataWithJSONObject:options:error:](jsonserialization/data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [writeJSONObject:toStream:options:error:](jsonserialization/writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [NSJSONWritingOptions](jsonserialization/writingoptions.md): Options for writing JSON data.
- [isValidJSONObject:](jsonserialization/isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
