> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intasklist](https://developer.apple.com/documentation/intents/intasklist)

# INTaskList (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A collection of individual tasks.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INTaskList
```

<a id="overview"></a>

## Overview

A task list stores tasks related that are in some way related to each other. For example, a user might create a “party prep” task list that contains the individual tasks to perform to get ready for a party. The title of a task list describes its purpose, and individual tasks within the list have their own descriptions and completion states. Tasks can also have triggers to indicate when the user receives reminders to complete the task.

## Topics

### Initializing a Task List Object

- [init(title:tasks:groupName:createdDateComponents:modifiedDateComponents:identifier:)](intasklist/init%28title_tasks_groupname_createddatecomponents_modifieddatecomponents_identifier_%29.md): Deprecated. Initializes the task list object with the specified content.

### Getting the Task Attributes

- [title](intasklist/title.md): Deprecated. The title text for the task list.
- [tasks](intasklist/tasks.md): Deprecated. The array of individual tasks to perform.

### Getting the Group Name

- [groupName](intasklist/groupname.md): Deprecated. The user-visible name of the group that contains the task list.

### Getting the Modification Dates

- [createdDateComponents](intasklist/createddatecomponents.md): Deprecated. The creation date of the task list.
- [modifiedDateComponents](intasklist/modifieddatecomponents.md): Deprecated. The date on which the intent most recently modified the task list.

### Identifying the Task List

- [identifier](intasklist/identifier.md): Deprecated. The unique identifier that you use to identify the task list internally.

### Initializers

- [init(coder:)](intasklist/init%28coder_%29.md): Deprecated.

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

### Task Objects

- [INTask](intask.md): Deprecated. An individual task the user needs to complete.

# INTaskList (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A collection of individual tasks.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INTaskList : NSObject
```

<a id="overview"></a>

## Overview

A task list stores tasks related that are in some way related to each other. For example, a user might create a “party prep” task list that contains the individual tasks to perform to get ready for a party. The title of a task list describes its purpose, and individual tasks within the list have their own descriptions and completion states. Tasks can also have triggers to indicate when the user receives reminders to complete the task.

## Topics

### Initializing a Task List Object

- [initWithTitle:tasks:groupName:createdDateComponents:modifiedDateComponents:identifier:](intasklist/init%28title_tasks_groupname_createddatecomponents_modifieddatecomponents_identifier_%29.md): Deprecated. Initializes the task list object with the specified content.

### Getting the Task Attributes

- [title](intasklist/title.md): Deprecated. The title text for the task list.
- [tasks](intasklist/tasks.md): Deprecated. The array of individual tasks to perform.

### Getting the Group Name

- [groupName](intasklist/groupname.md): Deprecated. The user-visible name of the group that contains the task list.

### Getting the Modification Dates

- [createdDateComponents](intasklist/createddatecomponents.md): Deprecated. The creation date of the task list.
- [modifiedDateComponents](intasklist/modifieddatecomponents.md): Deprecated. The date on which the intent most recently modified the task list.

### Identifying the Task List

- [identifier](intasklist/identifier.md): Deprecated. The unique identifier that you use to identify the task list internally.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Task Objects

- [INTask](intask.md): Deprecated. An individual task the user needs to complete.
