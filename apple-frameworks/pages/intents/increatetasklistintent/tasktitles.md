> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintent/tasktitles](https://developer.apple.com/documentation/intents/increatetasklistintent/tasktitles)

# taskTitles (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

An array of strings containing the titles for individual tasks to add to the new task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var taskTitles: [INSpeakableString]? { get }
```

<a id="Discussion"></a>

## Discussion

When creating a new task list, use the strings in this property to populate the task list with a set of initial tasks.

## See Also

### Getting the Task List Details

- [title](title.md): Deprecated. The title of the task list.
- [groupName](groupname.md): Deprecated. The group that contains the task list.

# taskTitles (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

An array of strings containing the titles for individual tasks to add to the new task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INSpeakableString *> * taskTitles;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INSpeakableString *> * taskTitles;
```

<a id="Discussion"></a>

## Discussion

When creating a new task list, use the strings in this property to populate the task list with a set of initial tasks.

## See Also

### Getting the Task List Details

- [title](title.md): Deprecated. The title of the task list.
- [groupName](groupname.md): Deprecated. The group that contains the task list.
