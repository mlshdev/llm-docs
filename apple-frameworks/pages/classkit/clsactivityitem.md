> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivityitem](https://developer.apple.com/documentation/classkit/clsactivityitem)

# CLSActivityItem (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

An abstract base class for gathering information about an activity.

## Declaration

```swift
class CLSActivityItem
```

<a id="overview"></a>

## Overview

You don’t typically use an instance of this class directly. Instead, use one of its subclasses to represent a particular activity metric. For example, use a [CLSScoreItem](clsscoreitem.md) to add a score to a [CLSContextType.quiz](clscontexttype/quiz.md) activity.

## Topics

### Accessing Activity Item Information

- [identifier](clsactivityitem/identifier.md): An identifier for the activity item.
- [title](clsactivityitem/title.md): A human readable name for the activity item.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

### Inherited By

- [CLSBinaryItem](clsbinaryitem.md)
- [CLSQuantityItem](clsquantityitem.md)
- [CLSScoreItem](clsscoreitem.md)

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
- [CLSQuantityItem](clsquantityitem.md): Activity information that signifies a quantity.

# CLSActivityItem (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An abstract base class for gathering information about an activity.

## Declaration

```objectivec
@interface CLSActivityItem : CLSObject
```

<a id="overview"></a>

## Overview

You don’t typically use an instance of this class directly. Instead, use one of its subclasses to represent a particular activity metric. For example, use a [CLSScoreItem](clsscoreitem.md) to add a score to a [CLSContextTypeQuiz](clscontexttype/quiz.md) activity.

## Topics

### Accessing Activity Item Information

- [identifier](clsactivityitem/identifier.md): An identifier for the activity item.
- [title](clsactivityitem/title.md): A human readable name for the activity item.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

### Inherited By

- [CLSBinaryItem](clsbinaryitem.md)
- [CLSQuantityItem](clsquantityitem.md)
- [CLSScoreItem](clsscoreitem.md)

## See Also

### Activity items

- [Recording additional metrics about a completed task](recording-additional-metrics-about-a-completed-task.md): Add an activity item to an activity to record additional information about a student’s attempt to complete a task.
- [CLSScoreItem](clsscoreitem.md): Activity information that signifies a score out of a possible maximum.
- [CLSBinaryItem](clsbinaryitem.md): Activity information that is true or false, pass or fail, yes or no.
- [CLSQuantityItem](clsquantityitem.md): Activity information that signifies a quantity.
