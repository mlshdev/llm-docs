> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/intask/modifieddatecomponents

# modifiedDateComponents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The date on which the intent updated the task.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var modifiedDateComponents: DateComponents? { get }
```

## See Also

### Getting the Modification Dates

- [createdDateComponents](createddatecomponents.md): Deprecated. The initial creation date of the task.

# modifiedDateComponents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The date on which the intent updated the task.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDateComponents * modifiedDateComponents;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDateComponents * modifiedDateComponents;
```

## See Also

### Getting the Modification Dates

- [createdDateComponents](createddatecomponents.md): Deprecated. The initial creation date of the task.
