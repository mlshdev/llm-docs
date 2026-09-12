> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject](https://developer.apple.com/documentation/scriptingbridge/sbobject)

# SBObject (Swift)

**Framework:** Scripting Bridge  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The `SBObject` class declares methods that can be invoked on any object in a scriptable application. It defines methods for getting elements and properties of an object, as well as setting a given object to a new value.

## Declaration

```swift
class SBObject
```

<a id="overview"></a>

## Overview

Each `SBObject` is built around an object specifier, which tells Scripting Bridge how to locate the object. Therefore, you can think of an `SBObject` as a reference to an object in an target application rather than an object itself. To bypass this reference-based approach and force evaluation, use the [get()](sbobject/get%28%29.md) method.

Typically, rather than create `SBObject` instances explictly, you receive `SBObject` objects by calling methods of an [SBApplication](sbapplication.md) subclass. For example, if you wanted to get an `SBObject` representing the current iTunes track, you would use code like this (where `iTunesTrack` is a subclass of `SBObject`):

```objc
iTunesApplication *iTunes = [SBApplication applicationWithBundleIdentifier:@"com.apple.iTunes"];
iTunesTrack *track = [iTunes currentTrack];
```

You can discover the names of dynamically generated classes such as `iTunesApplication` and `iTunesTrack` by examining the header file created by the `sdp` tool. Alternatively, you give these variables the dynamic Objective-C type `id`.

## Topics

### Initializing a Scripting Bridge Object

- [init()](sbobject/init%28%29.md): Initializes and returns an instance of an `SBObject` subclass.
- [init(data:)](sbobject/init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [init(properties:)](sbobject/init%28properties_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties.
- [init(elementCode:properties:data:)](sbobject/init%28elementcode_properties_data_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.

### Getting Referenced Data

- [get()](sbobject/get%28%29.md): Forces evaluation of the receiver, causing the real object to be returned immediately.

### Sending Apple Events

- [setTo(\_:)](sbobject/setto%28__%29.md): Sets the receiver to a specified value.

### Getting Properties and Elements

- [property(with:code:)](sbobject/property%28with_code_%29.md): Returns an object of the designated scripting class representing the specified property of the receiver
- [property(withCode:)](sbobject/property%28withcode_%29.md): Returns an object representing the specified property of the receiver.
- [elementArray(withCode:)](sbobject/elementarray%28withcode_%29.md): Returns an array containing every child of the receiver with the given class-type code.

### Initializers

- [init(coder:)](sbobject/init%28coder_%29.md)

### Instance Methods

- [lastError()](sbobject/lasterror%28%29.md): The error from the last event this object sent, or nil if it succeeded.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [SBApplication](sbapplication.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# SBObject (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The `SBObject` class declares methods that can be invoked on any object in a scriptable application. It defines methods for getting elements and properties of an object, as well as setting a given object to a new value.

## Declaration

```objectivec
@interface SBObject : NSObject
```

<a id="overview"></a>

## Overview

Each `SBObject` is built around an object specifier, which tells Scripting Bridge how to locate the object. Therefore, you can think of an `SBObject` as a reference to an object in an target application rather than an object itself. To bypass this reference-based approach and force evaluation, use the [get](sbobject/get%28%29.md) method.

Typically, rather than create `SBObject` instances explictly, you receive `SBObject` objects by calling methods of an [SBApplication](sbapplication.md) subclass. For example, if you wanted to get an `SBObject` representing the current iTunes track, you would use code like this (where `iTunesTrack` is a subclass of `SBObject`):

```objc
iTunesApplication *iTunes = [SBApplication applicationWithBundleIdentifier:@"com.apple.iTunes"];
iTunesTrack *track = [iTunes currentTrack];
```

You can discover the names of dynamically generated classes such as `iTunesApplication` and `iTunesTrack` by examining the header file created by the `sdp` tool. Alternatively, you give these variables the dynamic Objective-C type `id`.

## Topics

### Initializing a Scripting Bridge Object

- [init](sbobject/init%28%29.md): Initializes and returns an instance of an `SBObject` subclass.
- [initWithData:](sbobject/init%28data_%29.md): Returns an instance of an `SBObject` subclass initialized with the given data.
- [initWithProperties:](sbobject/init%28properties_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties.
- [initWithElementCode:properties:data:](sbobject/init%28elementcode_properties_data_%29.md): Returns an instance of an `SBObject` subclass initialized with the specified properties and data and added to the designated element array.

### Getting Referenced Data

- [get](sbobject/get%28%29.md): Forces evaluation of the receiver, causing the real object to be returned immediately.

### Sending Apple Events

- [sendEvent:id:parameters:](sbobject/sendevent_id_parameters_.md): Sends an Apple event with the given event class, event ID, and format to the target application.
- [setTo:](sbobject/setto%28__%29.md): Sets the receiver to a specified value.

### Getting Properties and Elements

- [propertyWithClass:code:](sbobject/property%28with_code_%29.md): Returns an object of the designated scripting class representing the specified property of the receiver
- [propertyWithCode:](sbobject/property%28withcode_%29.md): Returns an object representing the specified property of the receiver.
- [elementArrayWithCode:](sbobject/elementarray%28withcode_%29.md): Returns an array containing every child of the receiver with the given class-type code.

### Instance Methods

- [lastError](sbobject/lasterror%28%29.md): The error from the last event this object sent, or nil if it succeeded.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [SBApplication](sbapplication.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
