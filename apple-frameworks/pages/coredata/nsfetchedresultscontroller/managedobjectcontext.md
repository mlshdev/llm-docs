> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/managedobjectcontext](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/managedobjectcontext)

# managedObjectContext (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context used to fetch objects.

## Declaration

```swift
var managedObjectContext: NSManagedObjectContext { get }
```

<a id="Discussion"></a>

## Discussion

The controller registers to listen to change notifications on this context and properly update its result set and section information.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCache(withName:)](deletecache%28withname_%29.md): Deletes the cached section information with the given name.

# managedObjectContext (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context used to fetch objects.

## Declaration

```objectivec
@property (nonatomic, readonly) NSManagedObjectContext * managedObjectContext;
```

<a id="Discussion"></a>

## Discussion

The controller registers to listen to change notifications on this context and properly update its result set and section information.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCacheWithName:](deletecache%28withname_%29.md): Deletes the cached section information with the given name.
