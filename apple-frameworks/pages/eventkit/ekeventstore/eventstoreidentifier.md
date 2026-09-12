> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/eventstoreidentifier](https://developer.apple.com/documentation/eventkit/ekeventstore/eventstoreidentifier)

# eventStoreIdentifier (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the event store.

## Declaration

```swift
var eventStoreIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

If the store is damaged, it’s recreated and given a new identifier. If this value is different from a fetched value, you should take the appropriate action.

## See Also

### Creating event stores

- [init()](init%28%29.md): Creates a new event store.
- [init(sources:)](init%28sources_%29.md): Creates an event store that contains data for the specified sources.

# eventStoreIdentifier (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the event store.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * eventStoreIdentifier;
```

<a id="Discussion"></a>

## Discussion

If the store is damaged, it’s recreated and given a new identifier. If this value is different from a fetched value, you should take the appropriate action.

## See Also

### Creating event stores

- [init](init%28%29.md): Creates a new event store.
- [initWithSources:](init%28sources_%29.md): Creates an event store that contains data for the specified sources.
- [initWithAccessToEntityTypes:](initwithaccesstoentitytypes_.md): Deprecated. Initializes access to the event store with support for the given entity type.
