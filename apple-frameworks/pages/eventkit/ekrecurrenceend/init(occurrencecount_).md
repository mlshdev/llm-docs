> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrenceend/init(occurrencecount:)](https://developer.apple.com/documentation/eventkit/ekrecurrenceend/init(occurrencecount:))

# init(occurrenceCount:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a count-based recurrence end with a given maximum occurrence count.

## Declaration

```swift
convenience init(occurrenceCount: Int)
```

## Parameters

- `occurrenceCount`: The maximum occurrence count.

<a id="return-value"></a>

## Return Value

The initialized recurrence end.

<a id="Discussion"></a>

## Discussion

The maximum occurrence count argument must be a positive integer and not `0`; otherwise an exception will be raised.

## See Also

### Creating a Recurrence End

- [init(end:)](init%28end_%29.md): Initializes and returns a date-based recurrence end with a given end date.

# recurrenceEndWithOccurrenceCount: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a count-based recurrence end with a given maximum occurrence count.

## Declaration

```objectivec
+ (instancetype) recurrenceEndWithOccurrenceCount:(NSUInteger) occurrenceCount;
```

## Parameters

- `occurrenceCount`: The maximum occurrence count.

<a id="return-value"></a>

## Return Value

The initialized recurrence end.

<a id="Discussion"></a>

## Discussion

The maximum occurrence count argument must be a positive integer and not `0`; otherwise an exception will be raised.

## See Also

### Creating a Recurrence End

- [recurrenceEndWithEndDate:](init%28end_%29.md): Initializes and returns a date-based recurrence end with a given end date.
