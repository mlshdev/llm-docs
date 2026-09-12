> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/initwithaccesstoentitytypes:](https://developer.apple.com/documentation/eventkit/ekeventstore/initwithaccesstoentitytypes:)

# initWithAccessToEntityTypes:

**Interface language:** Objective-C

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.9)

Initializes access to the event store with support for the given entity type.

> Use [init](init%28%29.md) instead.

## Declaration

```objectivec
- (id) initWithAccessToEntityTypes:(EKEntityMask) entityTypes;
```

## Parameters

- `entityTypes`: The event or reminder entity mask.

<a id="return-value"></a>

## Return Value

The event store.

## See Also

### Creating event stores

- [init](init%28%29.md): Creates a new event store.
- [initWithSources:](init%28sources_%29.md): Creates an event store that contains data for the specified sources.
- [eventStoreIdentifier](eventstoreidentifier.md): The unique identifier for the event store.
