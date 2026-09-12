> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintent/groupname](https://developer.apple.com/documentation/intents/increatetasklistintent/groupname)

# groupName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The group that contains the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var groupName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

Use groups to organize task lists within your app. A group might correspond to a folder that contains related task lists. For example, the Reminders app uses groups to manage the task lists for different services. The group name should correspond to the user-visible name of the group in your app.

## See Also

### Getting the Task List Details

- [title](title.md): Deprecated. The title of the task list.
- [taskTitles](tasktitles.md): Deprecated. An array of strings containing the titles for individual tasks to add to the new task list.

# groupName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The group that contains the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * groupName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * groupName;
```

<a id="Discussion"></a>

## Discussion

Use groups to organize task lists within your app. A group might correspond to a folder that contains related task lists. For example, the Reminders app uses groups to manage the task lists for different services. The group name should correspond to the user-visible name of the group in your app.

## See Also

### Getting the Task List Details

- [title](title.md): Deprecated. The title of the task list.
- [taskTitles](tasktitles.md): Deprecated. An array of strings containing the titles for individual tasks to add to the new task list.
