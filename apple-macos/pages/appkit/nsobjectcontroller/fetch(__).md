> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/fetch(_:)](https://developer.apple.com/documentation/appkit/nsobjectcontroller/fetch(_:))

# fetch(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.

## Declaration

```swift
@IBAction func fetch(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest()](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetch(with:merge:)](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

# fetch: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.

## Declaration

```objectivec
- (void) fetch:(id) sender;
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetchWithRequest:merge:error:](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.
