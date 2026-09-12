> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/defaultfetchrequest()](https://developer.apple.com/documentation/appkit/nsobjectcontroller/defaultfetchrequest())

# defaultFetchRequest() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the default fetch request used by the receiver.

## Declaration

```swift
func defaultFetchRequest() -> NSFetchRequest<any NSFetchRequestResult>
```

<a id="return-value"></a>

## Return Value

The default NSFetchResult used by the receiver.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch(\_:)](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetch(with:merge:)](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

# defaultFetchRequest (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the default fetch request used by the receiver.

## Declaration

```objectivec
- (NSFetchRequest *) defaultFetchRequest;
```

<a id="return-value"></a>

## Return Value

The default NSFetchResult used by the receiver.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch:](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetchWithRequest:merge:error:](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.
