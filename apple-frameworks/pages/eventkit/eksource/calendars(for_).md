> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/eksource/calendars(for:)](https://developer.apple.com/documentation/eventkit/eksource/calendars(for:))

# calendars(for:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Returns the calendars that belong to this source object that support a particular entity type.

## Declaration

```swift
func calendars(for entityType: EKEntityType) -> Set<EKCalendar>
```

## Parameters

- `entityType`: The entity type of either an event or a reminder.

<a id="return-value"></a>

## Return Value

The calendars belonging to this source that support the entity type.

## See Also

### Related Documentation

- [EKEntityMask](../ekentitymask.md): A bitmask of `EKEntityType` for specifying multiple entities at once.

### Accessing Calendars

- [calendars](calendars.md): Deprecated. The calendars that belong to this source object.

# calendarsForEntityType: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Returns the calendars that belong to this source object that support a particular entity type.

## Declaration

```objectivec
- (NSSet<EKCalendar *> *) calendarsForEntityType:(EKEntityType) entityType;
```

## Parameters

- `entityType`: The entity type of either an event or a reminder.

<a id="return-value"></a>

## Return Value

The calendars belonging to this source that support the entity type.

## See Also

### Related Documentation

- [EKEntityMask](../ekentitymask.md): A bitmask of `EKEntityType` for specifying multiple entities at once.

### Accessing Calendars

- [calendars](calendars.md): Deprecated. The calendars that belong to this source object.
