> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposttype](https://developer.apple.com/documentation/os/ossignposttype)

# OSSignpostType (Swift)

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The different kinds of signpost.

> Use [OSSignposter](ossignposter.md) instead.

## Declaration

```swift
struct OSSignpostType
```

## Topics

### Specifying Signpost Types

- [begin](ossignposttype/begin.md): A signpost that marks the start of a time interval of interest in your code.
- [end](ossignposttype/end.md): A signpost that marks the end of a time interval of interest in your code.
- [event](ossignposttype/event.md): A signpost that marks an event in your code.

### Creating Signpost Types

- [init(rawValue:)](ossignposttype/init%28rawvalue_%29.md): Creates a signpost from a raw integer value.
- [init(\_:)](ossignposttype/init%28__%29.md): Creates a signpost from a raw integer value.

### Inspecting Signpost Types

- [rawValue](ossignposttype/rawvalue.md): An integer value that represents the role of a signpost.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Measure Events

- [Recording Performance Data](recording-performance-data.md): Add signposts to record interesting time-based events.
- [OSSignposter](ossignposter.md): An object for measuring task performance using the unified logging system.
- [Legacy Signpost Symbols](legacy-signpost-symbols.md): Migrate your code away from using these legacy symbols.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.

# os_signpost_type_t (Objective-C)

**Framework:** os  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The different kinds of signpost.

> Use [OSSignposter](ossignposter.md) instead.

## Declaration

```objectivec
typedef enum { ... } os_signpost_type_t;
```

## Topics

### Enumeration Cases

- [OS_SIGNPOST_EVENT](os_signpost_type_t/os_signpost_event.md): A signpost that marks an event in your code.
- [OS_SIGNPOST_INTERVAL_BEGIN](os_signpost_type_t/os_signpost_interval_begin.md): A signpost that marks the start of a time interval of interest in your code.
- [OS_SIGNPOST_INTERVAL_END](os_signpost_type_t/os_signpost_interval_end.md): A signpost that marks the end of a time interval of interest in your code.

## See Also

### Measure Events

- [Recording Performance Data](recording-performance-data.md): Add signposts to record interesting time-based events.
- [Legacy Signpost Symbols](legacy-signpost-symbols.md): Migrate your code away from using these legacy symbols.
- [os_signpost_emit_with_type](os_signpost_emit_with_type.md): Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments.
- [os_signpost_interval_begin](os_signpost_interval_begin.md): Marks the start of a time interval in your code using a signpost.
- [os_signpost_interval_end](os_signpost_interval_end.md): Marks the end of a time interval in your code using a signpost.
- [os_signpost_event_emit](os_signpost_event_emit.md): Marks a point of interest in time.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.
