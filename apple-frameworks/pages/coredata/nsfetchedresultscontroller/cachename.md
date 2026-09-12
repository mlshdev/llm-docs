> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/cachename](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/cachename)

# cacheName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the file used to cache section information.

## Declaration

```swift
var cacheName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The file itself is stored in a private directory; you can only access it by name using [deleteCache(withName:)](deletecache%28withname_%29.md)

## See Also

### Related Documentation

- [init(fetchRequest:managedObjectContext:sectionNameKeyPath:cacheName:)](init%28fetchrequest_managedobjectcontext_sectionnamekeypath_cachename_%29.md): Returns a fetch request controller initialized using the given arguments.

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCache(withName:)](deletecache%28withname_%29.md): Deletes the cached section information with the given name.

# cacheName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the file used to cache section information.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * cacheName;
```

<a id="Discussion"></a>

## Discussion

The file itself is stored in a private directory; you can only access it by name using [deleteCacheWithName:](deletecache%28withname_%29.md)

## See Also

### Related Documentation

- [initWithFetchRequest:managedObjectContext:sectionNameKeyPath:cacheName:](init%28fetchrequest_managedobjectcontext_sectionnamekeypath_cachename_%29.md): Returns a fetch request controller initialized using the given arguments.

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [sectionNameKeyPath](sectionnamekeypath.md): The key path of the attribute that determines which section the fetched entity belongs to.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCacheWithName:](deletecache%28withname_%29.md): Deletes the cached section information with the given name.
