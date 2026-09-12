> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intask/createddatecomponents](https://developer.apple.com/documentation/intents/intask/createddatecomponents)

# createdDateComponents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The initial creation date of the task.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var createdDateComponents: DateComponents? { get }
```

## See Also

### Getting the Modification Dates

- [modifiedDateComponents](modifieddatecomponents.md): Deprecated. The date on which the intent updated the task.

# createdDateComponents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The initial creation date of the task.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDateComponents * createdDateComponents;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDateComponents * createdDateComponents;
```

## See Also

### Getting the Modification Dates

- [modifiedDateComponents](modifieddatecomponents.md): Deprecated. The date on which the intent updated the task.
