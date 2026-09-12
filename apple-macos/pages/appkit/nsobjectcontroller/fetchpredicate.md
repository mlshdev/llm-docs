> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/fetchpredicate](https://developer.apple.com/documentation/appkit/nsobjectcontroller/fetchpredicate)

# fetchPredicate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s fetch predicate.

## Declaration

```swift
var fetchPredicate: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

The receiver uses `predicate` when fetching its content, for example in [fetch(\_:)](fetch%28__%29.md). If you need to customize the fetching behavior further, you can override [fetch(with:merge:)](fetch%28with_merge_%29.md).

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch(\_:)](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest()](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetch(with:merge:)](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

# fetchPredicate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s fetch predicate.

## Declaration

```objectivec
@property (strong, nullable) NSPredicate * fetchPredicate;
```

<a id="Discussion"></a>

## Discussion

The receiver uses `predicate` when fetching its content, for example in [fetch:](fetch%28__%29.md). If you need to customize the fetching behavior further, you can override [fetchWithRequest:merge:error:](fetch%28with_merge_%29.md).

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch:](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetchWithRequest:merge:error:](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.
