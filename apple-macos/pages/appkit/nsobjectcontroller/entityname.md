> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/entityname](https://developer.apple.com/documentation/appkit/nsobjectcontroller/entityname)

# entityName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The entity name used by the receiver to create new objects.

## Declaration

```swift
var entityName: String? { get set }
```

## See Also

### Core Data support

- [fetch(\_:)](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest()](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetch(with:merge:)](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

# entityName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The entity name used by the receiver to create new objects.

## Declaration

```objectivec
@property (copy, nullable) NSString * entityName;
```

## See Also

### Core Data support

- [fetch:](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetchWithRequest:merge:error:](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.
