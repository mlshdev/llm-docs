> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/useslazyfetching](https://developer.apple.com/documentation/appkit/nsobjectcontroller/useslazyfetching)

# usesLazyFetching (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the receiver uses lazy fetching.

## Declaration

```swift
var usesLazyFetching: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When enabled the controller uses a number of techniques that typically make managing large data sets more efficient. As with all optimizations, you should use suitable performance analysis tools (such as Instruments) to determine the best solution.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch(\_:)](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [defaultFetchRequest()](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetch(with:merge:)](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

# usesLazyFetching (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the receiver uses lazy fetching.

## Declaration

```objectivec
@property BOOL usesLazyFetching;
```

<a id="Discussion"></a>

## Discussion

When enabled the controller uses a number of techniques that typically make managing large data sets more efficient. As with all optimizations, you should use suitable performance analysis tools (such as Instruments) to determine the best solution.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch:](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [defaultFetchRequest](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [fetchWithRequest:merge:error:](fetch%28with_merge_%29.md): Subclasses should override this method to customize a fetch request, for example to specify fetch limits.
