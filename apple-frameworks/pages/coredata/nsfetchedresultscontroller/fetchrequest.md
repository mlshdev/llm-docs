> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/fetchrequest](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/fetchrequest)

# fetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The fetch request used to do the fetching.

## Declaration

```swift
var fetchRequest: NSFetchRequest<ResultType> { get }
```

<a id="Discussion"></a>

## Discussion

If you want to modify the fetch request, you must follow the steps described in [Modifying the fetch request](../nsfetchedresultscontroller.md#Modifying-the-fetch-request).

## See Also

### Related Documentation

- [init(fetchRequest:managedObjectContext:sectionNameKeyPath:cacheName:)](init%28fetchrequest_managedobjectcontext_sectionnamekeypath_cachename_%29.md): Returns a fetch request controller initialized using the given arguments.

### Getting Configuration Information

- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCache(withName:)](deletecache%28withname_%29.md): Deletes the cached section information with the given name.

# fetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The fetch request used to do the fetching.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFetchRequest<id<NSFetchRequestResult>> * fetchRequest;
```

<a id="Discussion"></a>

## Discussion

If you want to modify the fetch request, you must follow the steps described in [Modifying the fetch request](../nsfetchedresultscontroller.md#Modifying-the-fetch-request).

## See Also

### Related Documentation

- [initWithFetchRequest:managedObjectContext:sectionNameKeyPath:cacheName:](init%28fetchrequest_managedobjectcontext_sectionnamekeypath_cachename_%29.md): Returns a fetch request controller initialized using the given arguments.

### Getting Configuration Information

- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCacheWithName:](deletecache%28withname_%29.md): Deletes the cached section information with the given name.
