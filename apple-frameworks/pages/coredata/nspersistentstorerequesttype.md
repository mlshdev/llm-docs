> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorerequesttype](https://developer.apple.com/documentation/coredata/nspersistentstorerequesttype)

# NSPersistentStoreRequestType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the types of fetch requests.

## Declaration

```swift
enum NSPersistentStoreRequestType
```

<a id="overview"></a>

## Overview

[requestType](nspersistentstorerequest/requesttype.md) uses these constants.

## Topics

### Constants

- [NSPersistentStoreRequestType.fetchRequestType](nspersistentstorerequesttype/fetchrequesttype.md): Specifies that the request returns managed objects.
- [NSPersistentStoreRequestType.saveRequestType](nspersistentstorerequesttype/saverequesttype.md): Specifies that the request saves managed objects.
- [NSPersistentStoreRequestType.batchInsertRequestType](nspersistentstorerequesttype/batchinsertrequesttype.md): A request that inserts data into a persistent store using a batch of managed objects or dictionaries.
- [NSPersistentStoreRequestType.batchUpdateRequestType](nspersistentstorerequesttype/batchupdaterequesttype.md): A request that updates data for multiple managed objects in a persistent store.
- [NSPersistentStoreRequestType.batchDeleteRequestType](nspersistentstorerequesttype/batchdeleterequesttype.md): A request that deletes data for multiple managed objects from a persistent store.

### Initializers

- [init(rawValue:)](nspersistentstorerequesttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a Request

- [affectedStores](nspersistentstorerequest/affectedstores.md): The stores the request should be sent to.
- [requestType](nspersistentstorerequest/requesttype.md): The type of the fetch request.

# NSPersistentStoreRequestType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the types of fetch requests.

## Declaration

```objectivec
enum NSPersistentStoreRequestType : NSUInteger;
```

<a id="overview"></a>

## Overview

[requestType](nspersistentstorerequest/requesttype.md) uses these constants.

## Topics

### Constants

- [NSFetchRequestType](nspersistentstorerequesttype/fetchrequesttype.md): Specifies that the request returns managed objects.
- [NSSaveRequestType](nspersistentstorerequesttype/saverequesttype.md): Specifies that the request saves managed objects.
- [NSBatchInsertRequestType](nspersistentstorerequesttype/batchinsertrequesttype.md): A request that inserts data into a persistent store using a batch of managed objects or dictionaries.
- [NSBatchUpdateRequestType](nspersistentstorerequesttype/batchupdaterequesttype.md): A request that updates data for multiple managed objects in a persistent store.
- [NSBatchDeleteRequestType](nspersistentstorerequesttype/batchdeleterequesttype.md): A request that deletes data for multiple managed objects from a persistent store.

## See Also

### Configuring a Request

- [affectedStores](nspersistentstorerequest/affectedstores.md): The stores the request should be sent to.
- [requestType](nspersistentstorerequest/requesttype.md): The type of the fetch request.
