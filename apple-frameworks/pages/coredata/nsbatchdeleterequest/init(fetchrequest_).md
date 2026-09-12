> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchdeleterequest/init(fetchrequest:)](https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/init(fetchrequest:))

# init(fetchRequest:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a request that deletes the results of the specified fetch request.

## Declaration

```swift
init(fetchRequest fetch: NSFetchRequest<any NSFetchRequestResult>)
```

## Parameters

- `fetch`: The fetch request that identifies the managed objects to delete.

## See Also

### Creating a Request

- [init(objectIDs:)](init%28objectids_%29.md): Creates a request that deletes the managed objects with the specified identifiers.

# initWithFetchRequest: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a request that deletes the results of the specified fetch request.

## Declaration

```objectivec
- (instancetype) initWithFetchRequest:(NSFetchRequest *) fetch;
```

## Parameters

- `fetch`: The fetch request that identifies the managed objects to delete.

## See Also

### Creating a Request

- [initWithObjectIDs:](init%28objectids_%29.md): Creates a request that deletes the managed objects with the specified identifiers.
