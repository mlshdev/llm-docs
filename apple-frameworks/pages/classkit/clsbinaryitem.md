> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsbinaryitem](https://developer.apple.com/documentation/classkit/clsbinaryitem)

# CLSBinaryItem (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Activity information that is true or false, pass or fail, yes or no.

## Declaration

```swift
class CLSBinaryItem
```

<a id="overview"></a>

## Overview

Use an activity item of this type to indicate a binary condition, such as whether a student passed a test or failed it. Set the [valueType](clsbinaryitem/valuetype.md) property to specify how the binary condition should be reported to a teacher.

## Topics

### Creating Binary Activity Items

- [init(identifier:title:type:)](clsbinaryitem/init%28identifier_title_type_%29.md): Initializes a new binary activity item of the given type.
- [CLSBinaryValueType](clsbinaryvaluetype.md): The kinds of outcomes that a binary activity item can represent.

### Managing the Value

- [value](clsbinaryitem/value.md): The value that the binary activity item takes.
- [valueType](clsbinaryitem/valuetype.md): The kind of outcome that the binary activity item represents.

## Relationships

### Inherits From

- [CLSActivityItem](clsactivityitem.md)

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

### Activity items

- [Recording additional metrics about a completed task](recording-additional-metrics-about-a-completed-task.md): Add an activity item to an activity to record additional information about a student’s attempt to complete a task.
- [CLSScoreItem](clsscoreitem.md): Activity information that signifies a score out of a possible maximum.
- [CLSQuantityItem](clsquantityitem.md): Activity information that signifies a quantity.
- [CLSActivityItem](clsactivityitem.md): An abstract base class for gathering information about an activity.

# CLSBinaryItem (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Activity information that is true or false, pass or fail, yes or no.

## Declaration

```objectivec
@interface CLSBinaryItem : CLSActivityItem
```

<a id="overview"></a>

## Overview

Use an activity item of this type to indicate a binary condition, such as whether a student passed a test or failed it. Set the [valueType](clsbinaryitem/valuetype.md) property to specify how the binary condition should be reported to a teacher.

## Topics

### Creating Binary Activity Items

- [initWithIdentifier:title:type:](clsbinaryitem/init%28identifier_title_type_%29.md): Initializes a new binary activity item of the given type.
- [CLSBinaryValueType](clsbinaryvaluetype.md): The kinds of outcomes that a binary activity item can represent.

### Managing the Value

- [value](clsbinaryitem/value.md): The value that the binary activity item takes.
- [valueType](clsbinaryitem/valuetype.md): The kind of outcome that the binary activity item represents.

## Relationships

### Inherits From

- [CLSActivityItem](clsactivityitem.md)

## See Also

### Activity items

- [Recording additional metrics about a completed task](recording-additional-metrics-about-a-completed-task.md): Add an activity item to an activity to record additional information about a student’s attempt to complete a task.
- [CLSScoreItem](clsscoreitem.md): Activity information that signifies a score out of a possible maximum.
- [CLSQuantityItem](clsquantityitem.md): Activity information that signifies a quantity.
- [CLSActivityItem](clsactivityitem.md): An abstract base class for gathering information about an activity.
