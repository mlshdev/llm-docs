> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/status](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/status)

# status (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The completion state to look for when searching for tasks.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var status: INTaskStatus { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [INTaskStatus.unknown](../intaskstatus/unknown.md), don’t consider the status of a task when performing your search. For other values, include tasks in your search results only when their status matches the specified value.

## See Also

### Searching for Tasks by Their Status

- [INTaskStatus](../intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

# status (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The completion state to look for when searching for tasks.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INTaskStatus status;
```

```objectivec
@property (atomic, assign, readonly) INTaskStatus status;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [INTaskStatusUnknown](../intaskstatus/unknown.md), don’t consider the status of a task when performing your search. For other values, include tasks in your search results only when their status matches the specified value.

## See Also

### Searching for Tasks by Their Status

- [INTaskStatus](../intaskstatus.md): Deprecated. Constants indicating the completion state of a task.
