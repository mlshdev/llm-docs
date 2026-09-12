> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintentresponse/createdtasklist](https://developer.apple.com/documentation/intents/increatetasklistintentresponse/createdtasklist)

# createdTaskList (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The details of the task list that your app created.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var createdTaskList: INTaskList? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the task list that you created.

# createdTaskList (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The details of the task list that your app created.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INTaskList * createdTaskList;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INTaskList * createdTaskList;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the task list that you created.
