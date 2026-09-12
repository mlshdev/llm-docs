> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/deletecache(withname:)](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/deletecache(withname:))

# deleteCache(withName:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Deletes the cached section information with the given name.

## Declaration

```swift
class func deleteCache(withName name: String?)
```

## Parameters

- `name`: The name of the cache file to delete.

  If `name` is `nil`, deletes all cache files.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.

# deleteCacheWithName: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Deletes the cached section information with the given name.

## Declaration

```objectivec
+ (void) deleteCacheWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the cache file to delete.

  If `name` is `nil`, deletes all cache files.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
