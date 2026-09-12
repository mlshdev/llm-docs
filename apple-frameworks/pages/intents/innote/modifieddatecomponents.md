> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innote/modifieddatecomponents](https://developer.apple.com/documentation/intents/innote/modifieddatecomponents)

# modifiedDateComponents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The date on which the intent most recently modified the note.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var modifiedDateComponents: DateComponents? { get }
```

## See Also

### Getting the Modification Dates

- [createdDateComponents](createddatecomponents.md): Deprecated. The creation date of the note.

# modifiedDateComponents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The date on which the intent most recently modified the note.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDateComponents * modifiedDateComponents;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDateComponents * modifiedDateComponents;
```

## See Also

### Getting the Modification Dates

- [createdDateComponents](createddatecomponents.md): Deprecated. The creation date of the note.
