> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/performfetch()](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/performfetch())

# performFetch() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the controller’s fetch request.

## Declaration

```swift
func performFetch() throws
```

<a id="Discussion"></a>

## Discussion

After you execute this method, access the controller’s fetched objects using the [fetchedObjects](fetchedobjects.md) property.

> **Important**

>  If you specify a value for the `sectionNameKeyPath` parameter when you initialize the fetched results controller, the fetch request must include a sort descriptor for the corresponding key path; otherwise, the fetch fails.

## See Also

### Initializing a Fetched Results Controller

- [init(fetchRequest:managedObjectContext:sectionNameKeyPath:cacheName:)](init%28fetchrequest_managedobjectcontext_sectionnamekeypath_cachename_%29.md): Returns a fetch request controller initialized using the given arguments.

# performFetch: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the controller’s fetch request.

## Declaration

```objectivec
- (BOOL) performFetch:(NSError **) error;
```

## Parameters

- `error`: An error object that includes a description of the problem if the fetch is unsuccessful.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the fetch completes successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

After you execute this method, access the controller’s fetched objects using the [fetchedObjects](fetchedobjects.md) property.

> **Important**

>  If you specify a value for the `sectionNameKeyPath` parameter when you initialize the fetched results controller, the fetch request must include a sort descriptor for the corresponding key path; otherwise, the fetch fails.

## See Also

### Initializing a Fetched Results Controller

- [initWithFetchRequest:managedObjectContext:sectionNameKeyPath:cacheName:](init%28fetchrequest_managedobjectcontext_sectionnamekeypath_cachename_%29.md): Returns a fetch request controller initialized using the given arguments.
