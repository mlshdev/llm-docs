> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/init()](https://developer.apple.com/documentation/eventkit/ekeventstore/init())

# init() (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Creates a new event store.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized event store.

## See Also

### Creating event stores

- [init(sources:)](init%28sources_%29.md): Creates an event store that contains data for the specified sources.
- [eventStoreIdentifier](eventstoreidentifier.md): The unique identifier for the event store.

# init (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Creates a new event store.

## Declaration

```objectivec
- (id) init;
```

<a id="return-value"></a>

## Return Value

An initialized event store.

## See Also

### Creating event stores

- [initWithSources:](init%28sources_%29.md): Creates an event store that contains data for the specified sources.
- [eventStoreIdentifier](eventstoreidentifier.md): The unique identifier for the event store.
- [initWithAccessToEntityTypes:](initwithaccesstoentitytypes_.md): Deprecated. Initializes access to the event store with support for the given entity type.
