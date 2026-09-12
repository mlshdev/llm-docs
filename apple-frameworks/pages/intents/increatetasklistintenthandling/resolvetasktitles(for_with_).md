> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintenthandling/resolvetasktitles(for:with:)](https://developer.apple.com/documentation/intents/increatetasklistintenthandling/resolvetasktitles(for:with:))

# resolveTaskTitles(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the tasks in a task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTaskTitles(for intent: INCreateTaskListIntent, with completion: @escaping @Sendable ([INSpeakableStringResolutionResult]) -> Void)
```

```swift
optional func resolveTaskTitles(for intent: INCreateTaskListIntent) async -> [INSpeakableStringResolutionResult]
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResults**: The details of your proposed resolutions. For successful resolutions, create an array of resolution objects with the title strings to use for the tasks.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the tasks for a task list. Use the intent object to obtain the initial titles suggested by the user. If the user doesn’t supply any task titles and you don’t require an initial set of tasks, return a resolution of not required. Alternatively, you can supply a default task title and create a successful resolution.

## See Also

### Resolving the Intent Parameters

- [resolveTitle(for:with:)](resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the task list.
- [resolveGroupName(for:with:)](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group for the task list.

# resolveTaskTitlesForCreateTaskList:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the tasks in a task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTaskTitlesForCreateTaskList:(INCreateTaskListIntent *) intent withCompletion:(void (^)(NSArray<INSpeakableStringResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResults**: The details of your proposed resolutions. For successful resolutions, create an array of resolution objects with the title strings to use for the tasks.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the tasks for a task list. Use the intent object to obtain the initial titles suggested by the user. If the user doesn’t supply any task titles and you don’t require an initial set of tasks, return a resolution of not required. Alternatively, you can supply a default task title and create a successful resolution.

## See Also

### Resolving the Intent Parameters

- [resolveTitleForCreateTaskList:withCompletion:](resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the task list.
- [resolveGroupNameForCreateTaskList:withCompletion:](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group for the task list.
