> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintent/title](https://developer.apple.com/documentation/intents/increatetasklistintent/title)

# title (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The title of the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var title: INSpeakableString? { get }
```

## See Also

### Getting the Task List Details

- [taskTitles](tasktitles.md): Deprecated. An array of strings containing the titles for individual tasks to add to the new task list.
- [groupName](groupname.md): Deprecated. The group that contains the task list.

# title (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The title of the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * title;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * title;
```

## See Also

### Getting the Task List Details

- [taskTitles](tasktitles.md): Deprecated. An array of strings containing the titles for individual tasks to add to the new task list.
- [groupName](groupname.md): Deprecated. The group that contains the task list.
