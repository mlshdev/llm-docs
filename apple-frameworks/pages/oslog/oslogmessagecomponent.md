> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogmessagecomponent](https://developer.apple.com/documentation/oslog/oslogmessagecomponent)

# OSLogMessageComponent (Swift)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The message arguments for a particular entry.

## Declaration

```swift
class OSLogMessageComponent
```

<a id="overview"></a>

## Overview

There is one component for each placeholder in the formatString plus one component for any text after the last placeholder.

## Topics

### Reading the Argument

- [argument](oslogmessagecomponent/argument-swift.property.md): The argument passed into the message component.
- [OSLogMessageComponent.Argument](oslogmessagecomponent/argument-swift.enum.md): An object representing data that corresponds to an argument in a message payload.
- [argumentCategory](oslogmessagecomponent/argumentcategory-swift.property.md): The type of argument that corresponds to the placeholder.
- [OSLogMessageComponent.ArgumentCategory](oslogmessagecomponent/argumentcategory-swift.enum.md): The data type corresponding to the argument provided in a message payload.

### Reading the Message Component

- [formatSubstring](oslogmessagecomponent/formatsubstring.md): The text immediately preceding a placeholder.
- [placeholder](oslogmessagecomponent/placeholder.md): The placeholder text for the message component.

### Accessing the Argument

- [argumentDataValue](oslogmessagecomponent/argumentdatavalue.md): The argument formatted as a sequence of bytes.
- [argumentDoubleValue](oslogmessagecomponent/argumentdoublevalue.md): The argument formatted as a double.
- [argumentInt64Value](oslogmessagecomponent/argumentint64value.md): The argument formatted as a signed 64-bit integer.
- [argumentNumberValue](oslogmessagecomponent/argumentnumbervalue.md): The argument formatted as a number.
- [argumentStringValue](oslogmessagecomponent/argumentstringvalue.md): The argument formatted as a string.
- [argumentUInt64Value](oslogmessagecomponent/argumentuint64value.md): The argument formatted as an unsigned 64-bit integer.

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Entry Data

- [OSLogPosition](oslogposition.md): A representation of a point in a sequence of entries in the unified logging system.

# OSLogMessageComponent (Objective-C)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The message arguments for a particular entry.

## Declaration

```objectivec
@interface OSLogMessageComponent : NSObject
```

<a id="overview"></a>

## Overview

There is one component for each placeholder in the formatString plus one component for any text after the last placeholder.

## Topics

### Reading the Argument

- [argumentCategory](oslogmessagecomponent/argumentcategory-swift.property.md): The type of argument that corresponds to the placeholder.
- [OSLogMessageComponentArgumentCategory](oslogmessagecomponent/argumentcategory-swift.enum.md): The data type corresponding to the argument provided in a message payload.

### Reading the Message Component

- [formatSubstring](oslogmessagecomponent/formatsubstring.md): The text immediately preceding a placeholder.
- [placeholder](oslogmessagecomponent/placeholder.md): The placeholder text for the message component.

### Accessing the Argument

- [argumentDataValue](oslogmessagecomponent/argumentdatavalue.md): The argument formatted as a sequence of bytes.
- [argumentDoubleValue](oslogmessagecomponent/argumentdoublevalue.md): The argument formatted as a double.
- [argumentInt64Value](oslogmessagecomponent/argumentint64value.md): The argument formatted as a signed 64-bit integer.
- [argumentNumberValue](oslogmessagecomponent/argumentnumbervalue.md): The argument formatted as a number.
- [argumentStringValue](oslogmessagecomponent/argumentstringvalue.md): The argument formatted as a string.
- [argumentUInt64Value](oslogmessagecomponent/argumentuint64value.md): The argument formatted as an unsigned 64-bit integer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Entry Data

- [OSLogPosition](oslogposition.md): A representation of a point in a sequence of entries in the unified logging system.
