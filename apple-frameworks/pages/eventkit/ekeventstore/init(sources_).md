> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkit/ekeventstore/init(sources:)

# init(sources:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 9.0+

Creates an event store that contains data for the specified sources.

## Declaration

```swift
init(sources: [EKSource])
```

## Parameters

- `sources`: An array of sources the event store should contain. This array may include delegate sources.

<a id="return-value"></a>

## Return Value

An event store that contains data for a specific collection of event sources.

## See Also

### Creating event stores

- [init()](init%28%29.md): Creates a new event store.
- [eventStoreIdentifier](eventstoreidentifier.md): The unique identifier for the event store.

# initWithSources: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 9.0+

Creates an event store that contains data for the specified sources.

## Declaration

```objectivec
- (instancetype) initWithSources:(NSArray<EKSource *> *) sources;
```

## Parameters

- `sources`: An array of sources the event store should contain. This array may include delegate sources.

<a id="return-value"></a>

## Return Value

An event store that contains data for a specific collection of event sources.

## See Also

### Creating event stores

- [init](init%28%29.md): Creates a new event store.
- [eventStoreIdentifier](eventstoreidentifier.md): The unique identifier for the event store.
- [initWithAccessToEntityTypes:](initwithaccesstoentitytypes_.md): Deprecated. Initializes access to the event store with support for the given entity type.
