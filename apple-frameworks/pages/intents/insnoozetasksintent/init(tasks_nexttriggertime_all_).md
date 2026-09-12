> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintent/init(tasks:nexttriggertime:all:)](https://developer.apple.com/documentation/intents/insnoozetasksintent/init(tasks:nexttriggertime:all:))

# init(tasks:nextTriggerTime:all:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · watchOS 6.0+

Initializes the intent object with information about the tasks to snooze and when to snooze them.

## Declaration

```swift
@nonobjc convenience init(tasks: [INTask]? = nil, nextTriggerTime: INDateComponentsRange? = nil, all: Bool? = nil)
```

## Parameters

- `tasks`: An array of tasks to snooze.
- `nextTriggerTime`: The next time to trigger a snooze.
- `all`: A Boolean value that indicates whether to snooze all of the tasks.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to set the attributes of a task. However, you can use this method during testing to create intent objects validate your intent handling code paths.
