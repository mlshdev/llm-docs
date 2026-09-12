> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/delegatesources](https://developer.apple.com/documentation/eventkit/ekeventstore/delegatesources)

# delegateSources (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 5.0+

The event sources delegated to the person using your app.

## Declaration

```swift
var delegateSources: [EKSource] { get }
```

<a id="Discussion"></a>

## Discussion

By default, delegate event sources aren’t included in an event store’s [sources](sources.md). To access events and reminders in a delegate source:

1. Use [init()](init%28%29.md) to initialize an [EKEventStore](../ekeventstore.md).
2. Use [requestAccess(to:completion:)](requestaccess%28to_completion_%29.md) to request access to the desired entity types.
3. Get the delegate sources from the event store using [delegateSources](delegatesources.md).
4. After the request is granted, initialize another [EKEventStore](../ekeventstore.md) using [init(sources:)](init%28sources_%29.md), passing the delegate stores.

## See Also

### Accessing account sources

- [sources](sources.md): An unordered array of objects that represent accounts that contain calendars.
- [source(withIdentifier:)](source%28withidentifier_%29.md): Locates an event source with the specified identifier.

# delegateSources (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 5.0+

The event sources delegated to the person using your app.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<EKSource *> * delegateSources;
```

<a id="Discussion"></a>

## Discussion

By default, delegate event sources aren’t included in an event store’s [sources](sources.md). To access events and reminders in a delegate source:

1. Use [init](init%28%29.md) to initialize an [EKEventStore](../ekeventstore.md).
2. Use [requestAccessToEntityType:completion:](requestaccess%28to_completion_%29.md) to request access to the desired entity types.
3. Get the delegate sources from the event store using [delegateSources](delegatesources.md).
4. After the request is granted, initialize another [EKEventStore](../ekeventstore.md) using [initWithSources:](init%28sources_%29.md), passing the delegate stores.

## See Also

### Accessing account sources

- [sources](sources.md): An unordered array of objects that represent accounts that contain calendars.
- [sourceWithIdentifier:](source%28withidentifier_%29.md): Locates an event source with the specified identifier.
