> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkit/ekrecurrenceend/occurrencecount

# occurrenceCount (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The occurrence count of the recurrence end, or `0` if the recurrence end is date-based.

## Declaration

```swift
var occurrenceCount: Int { get }
```

## See Also

### Accessing Recurrence End Properties

- [endDate](enddate.md): The end date of the recurrence end, or `nil` if the recurrence end is count-based.

# occurrenceCount (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The occurrence count of the recurrence end, or `0` if the recurrence end is date-based.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger occurrenceCount;
```

## See Also

### Accessing Recurrence End Properties

- [endDate](enddate.md): The end date of the recurrence end, or `nil` if the recurrence end is count-based.
