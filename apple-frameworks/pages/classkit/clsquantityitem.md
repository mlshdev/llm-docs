> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsquantityitem](https://developer.apple.com/documentation/classkit/clsquantityitem)

# CLSQuantityItem (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Activity information that signifies a quantity.

## Declaration

```swift
class CLSQuantityItem
```

<a id="overview"></a>

## Overview

Use an activity item of this type to associate a discrete value with a task. For example, you might use it to indicate how many times the user requested a hint while taking a quiz.

## Topics

### Creating Quantity Activity Items

- [init(identifier:title:)](clsquantityitem/init%28identifier_title_%29.md): Initializes an activity item that records a discrete quantity.

### Managing the Quantity

- [quantity](clsquantityitem/quantity.md): A quantity associated with the task.

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
- [CLSBinaryItem](clsbinaryitem.md): Activity information that is true or false, pass or fail, yes or no.
- [CLSActivityItem](clsactivityitem.md): An abstract base class for gathering information about an activity.

# CLSQuantityItem (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Activity information that signifies a quantity.

## Declaration

```objectivec
@interface CLSQuantityItem : CLSActivityItem
```

<a id="overview"></a>

## Overview

Use an activity item of this type to associate a discrete value with a task. For example, you might use it to indicate how many times the user requested a hint while taking a quiz.

## Topics

### Creating Quantity Activity Items

- [initWithIdentifier:title:](clsquantityitem/init%28identifier_title_%29.md): Initializes an activity item that records a discrete quantity.

### Managing the Quantity

- [quantity](clsquantityitem/quantity.md): A quantity associated with the task.

## Relationships

### Inherits From

- [CLSActivityItem](clsactivityitem.md)

## See Also

### Activity items

- [Recording additional metrics about a completed task](recording-additional-metrics-about-a-completed-task.md): Add an activity item to an activity to record additional information about a student’s attempt to complete a task.
- [CLSScoreItem](clsscoreitem.md): Activity information that signifies a score out of a possible maximum.
- [CLSBinaryItem](clsbinaryitem.md): Activity information that is true or false, pass or fail, yes or no.
- [CLSActivityItem](clsactivityitem.md): An abstract base class for gathering information about an activity.
