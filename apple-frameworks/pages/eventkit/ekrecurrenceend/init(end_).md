> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrenceend/init(end:)](https://developer.apple.com/documentation/eventkit/ekrecurrenceend/init(end:))

# init(end:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a date-based recurrence end with a given end date.

## Declaration

```swift
convenience init(end endDate: Date)
```

## Parameters

- `endDate`: The end date.

<a id="return-value"></a>

## Return Value

The initialized recurrence end.

<a id="Discussion"></a>

## Discussion

The end date argument must be a valid `NSDate` and not `nil`; otherwise an exception will be raised.

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating a Recurrence End

- [init(occurrenceCount:)](init%28occurrencecount_%29.md): Initializes and returns a count-based recurrence end with a given maximum occurrence count.

# recurrenceEndWithEndDate: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a date-based recurrence end with a given end date.

## Declaration

```objectivec
+ (instancetype) recurrenceEndWithEndDate:(NSDate *) endDate;
```

## Parameters

- `endDate`: The end date.

<a id="return-value"></a>

## Return Value

The initialized recurrence end.

<a id="Discussion"></a>

## Discussion

The end date argument must be a valid `NSDate` and not `nil`; otherwise an exception will be raised.

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating a Recurrence End

- [recurrenceEndWithOccurrenceCount:](init%28occurrencecount_%29.md): Initializes and returns a count-based recurrence end with a given maximum occurrence count.
