> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/sectionnamekeypath](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/sectionnamekeypath)

# sectionNameKeyPath (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The key path of the attribute that determines which section the fetched entity belongs to.

## Declaration

```swift
var sectionNameKeyPath: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the value you specify for the `sectionNameKeyPath` parameter when you initialize the fetched results controller.

If the controller generates sections, typically this property’s value matches the specified key path of the first sort descriptor in the controller’s fetch request. If the two key paths don’t match, then they must generate the same relative ordering. For example, the fetch request’s first sort descriptor might specify the key path of a persistent attribute, but [sectionNameKeyPath](sectionnamekeypath.md) might specify the key path of a transient attribute that derives its value from the persistent one.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCache(withName:)](deletecache%28withname_%29.md): Deletes the cached section information with the given name.

# sectionNameKeyPath (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The key path of the attribute that determines which section the fetched entity belongs to.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * sectionNameKeyPath;
```

<a id="Discussion"></a>

## Discussion

This property returns the value you specify for the `sectionNameKeyPath` parameter when you initialize the fetched results controller.

If the controller generates sections, typically this property’s value matches the specified key path of the first sort descriptor in the controller’s fetch request. If the two key paths don’t match, then they must generate the same relative ordering. For example, the fetch request’s first sort descriptor might specify the key path of a persistent attribute, but [sectionNameKeyPath](sectionnamekeypath.md) might specify the key path of a transient attribute that derives its value from the persistent one.

## See Also

### Getting Configuration Information

- [fetchRequest](fetchrequest.md): The fetch request used to do the fetching.
- [managedObjectContext](managedobjectcontext.md): The managed object context used to fetch objects.
- [cacheName](cachename.md): The name of the file used to cache section information.
- [delegate](delegate.md): The object that is notified when the fetched results changed.
- [deleteCacheWithName:](deletecache%28withname_%29.md): Deletes the cached section information with the given name.
