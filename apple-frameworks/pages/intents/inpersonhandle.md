> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonhandle](https://developer.apple.com/documentation/intents/inpersonhandle)

# INPersonHandle (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The identifying information for a user of your app.

## Declaration

```swift
class INPersonHandle
```

<a id="overview"></a>

## Overview

An [INPersonHandle](inpersonhandle.md) object contains information that you use to uniquely identify a user of your app. When resolving a person associated with an intent, you might create instances of this class and add them to an [INPerson](inperson.md) object when resolving an intent involving that person. Handles contain unique information such as an email address or phone number.

## Topics

### Initializing a Person Handle

- [init(value:type:label:)](inpersonhandle/init%28value_type_label_%29.md): Initializes and returns a person handle with the specified data.
- [init(value:type:)](inpersonhandle/init%28value_type_%29.md): Initializes and returns a person handle with the specified data.

### Getting the Handle Information

- [type](inpersonhandle/type.md): The type of information contained in the handle.
- [value](inpersonhandle/value.md): The data for the handle.
- [label](inpersonhandle/label.md): A standard label that describes the meaning of the information.

### Constants

- [INPersonHandleType](inpersonhandletype.md): Constants indicating the types of data that can be associated with a person handle.

### Initializers

- [init(coder:)](inpersonhandle/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contacts

- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
- [INPersonHandleLabel](inpersonhandlelabel.md): Constants describing how the person handle relates to the user.

# INPersonHandle (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The identifying information for a user of your app.

## Declaration

```objectivec
@interface INPersonHandle : NSObject
```

<a id="overview"></a>

## Overview

An [INPersonHandle](inpersonhandle.md) object contains information that you use to uniquely identify a user of your app. When resolving a person associated with an intent, you might create instances of this class and add them to an [INPerson](inperson.md) object when resolving an intent involving that person. Handles contain unique information such as an email address or phone number.

## Topics

### Initializing a Person Handle

- [initWithValue:type:label:](inpersonhandle/init%28value_type_label_%29.md): Initializes and returns a person handle with the specified data.
- [initWithValue:type:](inpersonhandle/init%28value_type_%29.md): Initializes and returns a person handle with the specified data.

### Getting the Handle Information

- [type](inpersonhandle/type.md): The type of information contained in the handle.
- [value](inpersonhandle/value.md): The data for the handle.
- [label](inpersonhandle/label.md): A standard label that describes the meaning of the information.

### Constants

- [INPersonHandleType](inpersonhandletype.md): Constants indicating the types of data that can be associated with a person handle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contacts

- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
- [INPersonHandleLabel](inpersonhandlelabel.md): Constants describing how the person handle relates to the user.
