> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/intasklist/identifier

# identifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The unique identifier that you use to identify the task list internally.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this value internally to locate notes in your app’s data structures.

# identifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The unique identifier that you use to identify the task list internally.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Use this value internally to locate notes in your app’s data structures.
