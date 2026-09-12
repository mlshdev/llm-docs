> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/fetchedobjects](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/fetchedobjects)

# fetchedObjects (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The results of the fetch.

## Declaration

```swift
var fetchedObjects: [ResultType]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property is `nil` if [performFetch()](performfetch%28%29.md) hasn’t been called.

The results array only includes instances of the entity specified by the fetch request ([fetchRequest](fetchrequest.md)) and that match its predicate. (If the fetch request has no predicate, then the results array includes all instances of the entity specified by the fetch request.)

The results array reflects the in-memory state of managed objects in the controller’s managed object context, not their state in the persistent store. The returned array does not, however, update as managed objects are inserted, modified, or deleted.

## See Also

### Related Documentation

- [fetch(\_:)](../nsmanagedobjectcontext/fetch%28__%29-38ys1.md): Returns an array of objects that meet the criteria of the specified fetch request.

### Accessing Results

- [object(at:)](object%28at_%29.md): Returns the object at the given index path in the fetch results.
- [indexPath(forObject:)](indexpath%28forobject_%29.md): Returns the index path of a given object.

# fetchedObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The results of the fetch.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<id<NSFetchRequestResult>> * fetchedObjects;
```

<a id="Discussion"></a>

## Discussion

The value of the property is `nil` if [performFetch:](performfetch%28%29.md) hasn’t been called.

The results array only includes instances of the entity specified by the fetch request ([fetchRequest](fetchrequest.md)) and that match its predicate. (If the fetch request has no predicate, then the results array includes all instances of the entity specified by the fetch request.)

The results array reflects the in-memory state of managed objects in the controller’s managed object context, not their state in the persistent store. The returned array does not, however, update as managed objects are inserted, modified, or deleted.

## See Also

### Related Documentation

- [executeFetchRequest:error:](../nsmanagedobjectcontext/executefetchrequest_error_.md): Returns an array of objects that meet the criteria of the specified fetch request.

### Accessing Results

- [objectAtIndexPath:](object%28at_%29.md): Returns the object at the given index path in the fetch results.
- [indexPathForObject:](indexpath%28forobject_%29.md): Returns the index path of a given object.
