> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intasklist/init(title:tasks:groupname:createddatecomponents:modifieddatecomponents:identifier:)](https://developer.apple.com/documentation/intents/intasklist/init(title:tasks:groupname:createddatecomponents:modifieddatecomponents:identifier:))

# init(title:tasks:groupName:createdDateComponents:modifiedDateComponents:identifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes the task list object with the specified content.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
init(title: INSpeakableString, tasks: [INTask], groupName: INSpeakableString?, createdDateComponents: DateComponents?, modifiedDateComponents: DateComponents?, identifier: String?)
```

## Parameters

- `title`: The title text that describes the task list.
- `tasks`: The tasks to include in the task list.
- `groupName`: The name of the group that contains the task list.
- `createdDateComponents`: The date on which the task was initially created.
- `modifiedDateComponents`: The last date on which the task was updated.
- `identifier`: The unique identifier that your app uses to identify the task list.

<a id="return-value"></a>

## Return Value

An initialized task list object or `nil` if the object could not be created.

# initWithTitle:tasks:groupName:createdDateComponents:modifiedDateComponents:identifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes the task list object with the specified content.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (instancetype) initWithTitle:(INSpeakableString *) title tasks:(NSArray<INTask *> *) tasks groupName:(INSpeakableString *) groupName createdDateComponents:(NSDateComponents *) createdDateComponents modifiedDateComponents:(NSDateComponents *) modifiedDateComponents identifier:(NSString *) identifier;
```

## Parameters

- `title`: The title text that describes the task list.
- `tasks`: The tasks to include in the task list.
- `groupName`: The name of the group that contains the task list.
- `createdDateComponents`: The date on which the task was initially created.
- `modifiedDateComponents`: The last date on which the task was updated.
- `identifier`: The unique identifier that your app uses to identify the task list.

<a id="return-value"></a>

## Return Value

An initialized task list object or `nil` if the object could not be created.
