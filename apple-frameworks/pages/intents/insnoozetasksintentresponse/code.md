> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insnoozetasksintentresponse/code

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The code that indicates whether you successfully handled the intent.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var code: INSnoozeTasksIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INSnoozeTasksIntentResponseCode](../insnoozetasksintentresponsecode.md): Deprecated. Constants that indicate the response state.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The code that indicates whether you successfully handled the intent.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, readonly) INSnoozeTasksIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INSnoozeTasksIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INSnoozeTasksIntentResponseCode](../insnoozetasksintentresponsecode.md): Deprecated. Constants that indicate the response state.
