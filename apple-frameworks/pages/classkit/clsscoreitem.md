> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsscoreitem](https://developer.apple.com/documentation/classkit/clsscoreitem)

# CLSScoreItem (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Activity information that signifies a score out of a possible maximum.

## Declaration

```swift
class CLSScoreItem
```

<a id="overview"></a>

## Overview

Use an activity item of this type to indicate the relative success in completing a task, like the number of correctly answered questions on a quiz.

## Topics

### Creating Score Activity Items

- [init(identifier:title:score:maxScore:)](clsscoreitem/init%28identifier_title_score_maxscore_%29.md): Initializes an activity item that holds a score value.

### Managing the Score

- [score](clsscoreitem/score.md): The score earned by a user in completing the task.
- [maxScore](clsscoreitem/maxscore.md): The maximum possible score that the user can earn on a given task.

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
- [CLSBinaryItem](clsbinaryitem.md): Activity information that is true or false, pass or fail, yes or no.
- [CLSQuantityItem](clsquantityitem.md): Activity information that signifies a quantity.
- [CLSActivityItem](clsactivityitem.md): An abstract base class for gathering information about an activity.

# CLSScoreItem (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Activity information that signifies a score out of a possible maximum.

## Declaration

```objectivec
@interface CLSScoreItem : CLSActivityItem
```

<a id="overview"></a>

## Overview

Use an activity item of this type to indicate the relative success in completing a task, like the number of correctly answered questions on a quiz.

## Topics

### Creating Score Activity Items

- [initWithIdentifier:title:score:maxScore:](clsscoreitem/init%28identifier_title_score_maxscore_%29.md): Initializes an activity item that holds a score value.

### Managing the Score

- [score](clsscoreitem/score.md): The score earned by a user in completing the task.
- [maxScore](clsscoreitem/maxscore.md): The maximum possible score that the user can earn on a given task.

## Relationships

### Inherits From

- [CLSActivityItem](clsactivityitem.md)

## See Also

### Activity items

- [Recording additional metrics about a completed task](recording-additional-metrics-about-a-completed-task.md): Add an activity item to an activity to record additional information about a student’s attempt to complete a task.
- [CLSBinaryItem](clsbinaryitem.md): Activity information that is true or false, pass or fail, yes or no.
- [CLSQuantityItem](clsquantityitem.md): Activity information that signifies a quantity.
- [CLSActivityItem](clsactivityitem.md): An abstract base class for gathering information about an activity.
