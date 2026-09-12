> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intasklist/title](https://developer.apple.com/documentation/intents/intasklist/title)

# title (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The title text for the task list.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var title: INSpeakableString { get }
```

<a id="Discussion"></a>

## Discussion

The title text describes the purpose of the tasks.

## See Also

### Getting the Task Attributes

- [tasks](tasks.md): Deprecated. The array of individual tasks to perform.

# title (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The title text for the task list.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INSpeakableString * title;
```

```objectivec
@property (atomic, copy, readonly) INSpeakableString * title;
```

<a id="Discussion"></a>

## Discussion

The title text describes the purpose of the tasks.

## See Also

### Getting the Task Attributes

- [tasks](tasks.md): Deprecated. The array of individual tasks to perform.
