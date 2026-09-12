> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintentresponse/modifiedtask](https://developer.apple.com/documentation/intents/insettaskattributeintentresponse/modifiedtask)

# modifiedTask (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The modified task.

> INSetTaskAttributeIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var modifiedTask: INTask? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the task. Start with the original task details and apply any attribute changes made at the request of the user.

# modifiedTask (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The modified task.

> INSetTaskAttributeIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INTask * modifiedTask;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INTask * modifiedTask;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the task. Start with the original task details and apply any attribute changes made at the request of the user.
