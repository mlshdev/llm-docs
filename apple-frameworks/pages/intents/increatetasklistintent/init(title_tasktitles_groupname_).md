> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintent/init(title:tasktitles:groupname:)](https://developer.apple.com/documentation/intents/increatetasklistintent/init(title:tasktitles:groupname:))

# init(title:taskTitles:groupName:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with the specified task list details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(title: INSpeakableString?, taskTitles: [INSpeakableString]?, groupName: INSpeakableString?)
```

## Parameters

- `title`: The title of the task list.
- `taskTitles`: An array of strings containing the titles of any tasks to place in the task list.
- `groupName`: The name of the group in which to store the task list. Group names correspond to folders or other means of organizing task lists within your app.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to create a task list. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithTitle:taskTitles:groupName: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with the specified task list details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithTitle:(INSpeakableString *) title taskTitles:(NSArray<INSpeakableString *> *) taskTitles groupName:(INSpeakableString *) groupName;
```

## Parameters

- `title`: The title of the task list.
- `taskTitles`: An array of strings containing the titles of any tasks to place in the task list.
- `groupName`: The name of the group in which to store the task list. Group names correspond to folders or other means of organizing task lists within your app.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to create a task list. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
