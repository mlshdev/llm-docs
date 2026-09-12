> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchdeleterequest/init(objectids:)](https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/init(objectids:))

# init(objectIDs:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a request that deletes the managed objects with the specified identifiers.

## Declaration

```swift
convenience init(objectIDs objects: [NSManagedObjectID])
```

## Parameters

- `objects`: The array that contains the identifiers of the managed objects to delete.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The identifiers your provide must be from managed objects of the same entity type; mixing entity types results in an error when you execute the request.

## See Also

### Creating a Request

- [init(fetchRequest:)](init%28fetchrequest_%29.md): Creates a request that deletes the results of the specified fetch request.

# initWithObjectIDs: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a request that deletes the managed objects with the specified identifiers.

## Declaration

```objectivec
- (instancetype) initWithObjectIDs:(NSArray<NSManagedObjectID *> *) objects;
```

## Parameters

- `objects`: The array that contains the identifiers of the managed objects to delete.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The identifiers your provide must be from managed objects of the same entity type; mixing entity types results in an error when you execute the request.

## See Also

### Creating a Request

- [initWithFetchRequest:](init%28fetchrequest_%29.md): Creates a request that deletes the results of the specified fetch request.
