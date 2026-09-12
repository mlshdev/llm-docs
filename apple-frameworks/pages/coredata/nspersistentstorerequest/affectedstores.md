> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorerequest/affectedstores](https://developer.apple.com/documentation/coredata/nspersistentstorerequest/affectedstores)

# affectedStores (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The stores the request should be sent to.

## Declaration

```swift
var affectedStores: [NSPersistentStore]? { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [NSPersistentStore](../nspersistentstore.md).

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

### Configuring a Request

- [requestType](requesttype.md): The type of the fetch request.
- [NSPersistentStoreRequestType](../nspersistentstorerequesttype.md): Constants that specify the types of fetch requests.

# affectedStores (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The stores the request should be sent to.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<NSPersistentStore *> * affectedStores;
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [NSPersistentStore](../nspersistentstore.md).

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

### Configuring a Request

- [requestType](requesttype.md): The type of the fetch request.
- [NSPersistentStoreRequestType](../nspersistentstorerequesttype.md): Constants that specify the types of fetch requests.
