> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainereventrequest/fetchevents(matchingfetch:)](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest/fetchevents(matchingfetch:))

# fetchEvents(matchingFetch:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a fetch request for events that match a specified fetch request from a persistent CloudKit container.

## Declaration

```swift
class func fetchEvents(matchingFetch fetchRequest: NSFetchRequest<any NSFetchRequestResult>) -> Self
```

## Parameters

- `fetchRequest`: A fetch request to identify matching events.

<a id="return-value"></a>

## Return Value

A request object that fetches persistent CloudKit container events by executing in a managed object context.

## See Also

### Fetching Events

- [fetchEvents(after:)](fetchevents%28after_%29-5izg7.md): Creates a fetch request for events after a specified date from a persistent CloudKit container.
- [fetchEvents(after:)](fetchevents%28after_%29-3yfp.md): Creates a fetch request for events that occur after a specified event from a persistent CloudKit container.
- [fetchForEvents()](fetchforevents%28%29.md): Creates a fetch request for all events in a persistent CloudKit container.
- [resultType](resulttype.md): The type of result that the request returns.

# fetchEventsMatchingFetchRequest: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a fetch request for events that match a specified fetch request from a persistent CloudKit container.

## Declaration

```objectivec
+ (instancetype) fetchEventsMatchingFetchRequest:(NSFetchRequest *) fetchRequest;
```

## Parameters

- `fetchRequest`: A fetch request to identify matching events.

<a id="return-value"></a>

## Return Value

A request object that fetches persistent CloudKit container events by executing in a managed object context.

## See Also

### Fetching Events

- [fetchEventsAfterDate:](fetchevents%28after_%29-5izg7.md): Creates a fetch request for events after a specified date from a persistent CloudKit container.
- [fetchEventsAfterEvent:](fetchevents%28after_%29-3yfp.md): Creates a fetch request for events that occur after a specified event from a persistent CloudKit container.
- [fetchRequestForEvents](fetchforevents%28%29.md): Creates a fetch request for all events in a persistent CloudKit container.
- [resultType](resulttype.md): The type of result that the request returns.
