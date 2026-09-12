> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/delegate](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/delegate)

# delegate (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object that is notified when the fetched results changed.

## Declaration

```swift
unowned(unsafe) var delegate: (any NSFetchedResultsControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

If you do not specify a delegate, the controller does not track changes to managed objects associated with its managed object context.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [deleteCache(withName:)](deletecache%28withname_%29.md): Deletes the cached section information with the given name.

# delegate (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The object that is notified when the fetched results changed.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<NSFetchedResultsControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

If you do not specify a delegate, the controller does not track changes to managed objects associated with its managed object context.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [deleteCacheWithName:](deletecache%28withname_%29.md): Deletes the cached section information with the given name.
