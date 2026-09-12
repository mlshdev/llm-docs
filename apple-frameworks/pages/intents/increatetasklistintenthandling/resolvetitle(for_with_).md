> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintenthandling/resolvetitle(for:with:)](https://developer.apple.com/documentation/intents/increatetasklistintenthandling/resolvetitle(for:with:))

# resolveTitle(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the title of the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTitle(for intent: INCreateTaskListIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveTitle(for intent: INCreateTaskListIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the title text that you intend to use for the task list.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the title for a task list. Use the intent object to obtain the title, if any, suggested by the user. The title represents the name of the task list.

If the intent doesn’t contain title information, choose a resolution that’s most appropriate for your app. If you can provide a default title, return a result of success with the default title string. If you don’t require a title for your task lists, you can return a result of not required.

## See Also

### Resolving the Intent Parameters

- [resolveTaskTitles(for:with:)](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the tasks in a task list.
- [resolveGroupName(for:with:)](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group for the task list.

# resolveTitleForCreateTaskList:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the title of the task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTitleForCreateTaskList:(INCreateTaskListIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the title text that you intend to use for the task list.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the title for a task list. Use the intent object to obtain the title, if any, suggested by the user. The title represents the name of the task list.

If the intent doesn’t contain title information, choose a resolution that’s most appropriate for your app. If you can provide a default title, return a result of success with the default title string. If you don’t require a title for your task lists, you can return a result of not required.

## See Also

### Resolving the Intent Parameters

- [resolveTaskTitlesForCreateTaskList:withCompletion:](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the tasks in a task list.
- [resolveGroupNameForCreateTaskList:withCompletion:](resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group for the task list.
