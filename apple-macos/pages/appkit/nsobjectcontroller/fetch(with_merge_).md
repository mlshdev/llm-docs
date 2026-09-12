> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/fetch(with:merge:)](https://developer.apple.com/documentation/appkit/nsobjectcontroller/fetch(with:merge:))

# fetch(with:merge:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

## Declaration

```swift
func fetch(with fetchRequest: NSFetchRequest<any NSFetchRequestResult>?, merge: Bool) throws
```

## Parameters

- `fetchRequest`: The fetch request to use for the fetch. Pass `nil` to use the default fetch request.
- `merge`: If [true](https://developer.apple.com/documentation/swift/true), the receiver merges the existing content with the fetch result, otherwise the receiver replaces the entire content with the fetch result.

<a id="Discussion"></a>

## Discussion

This method performs a number of actions that you cannot reproduce. To customize this method, you should therefore create your own fetch request and then invoke `super`’s implementation with the new fetch request.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch(\_:)](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest()](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.

# fetchWithRequest:merge:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Subclasses should override this method to customize a fetch request, for example to specify fetch limits.

## Declaration

```objectivec
- (BOOL) fetchWithRequest:(NSFetchRequest *) fetchRequest merge:(BOOL) merge error:(NSError **) error;
```

## Parameters

- `fetchRequest`: The fetch request to use for the fetch. Pass `nil` to use the default fetch request.
- `merge`: If [true](https://developer.apple.com/documentation/swift/true), the receiver merges the existing content with the fetch result, otherwise the receiver replaces the entire content with the fetch result.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the fetch completed successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method performs a number of actions that you cannot reproduce. To customize this method, you should therefore create your own fetch request and then invoke `super`’s implementation with the new fetch request.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Core Data support

- [entityName](entityname.md): The entity name used by the receiver to create new objects.
- [fetch:](fetch%28__%29.md): Causes the receiver to fetch the data objects specified by the entity name and fetch predicate.
- [usesLazyFetching](useslazyfetching.md): A Boolean that indicates whether the receiver uses lazy fetching.
- [defaultFetchRequest](defaultfetchrequest%28%29.md): Returns the default fetch request used by the receiver.
- [fetchPredicate](fetchpredicate.md): The receiver’s fetch predicate.
- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
