> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/contexts(matching:completion:)](https://developer.apple.com/documentation/classkit/clsdatastore/contexts(matching:completion:))

# contexts(matching:completion:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Fetches all the contexts matching a predicate.

## Declaration

```swift
func contexts(matching predicate: NSPredicate, completion: @escaping @Sendable ([CLSContext], (any Error)?) -> Void)
```

```swift
func contexts(matching predicate: NSPredicate) async throws -> [CLSContext]
```

## Parameters

- `predicate`: A predicate that the method uses to search for contexts.
- `completion`: A closure that the method calls with the array of contexts that match the predicate and an optional error that indicates the reason for failure, if any.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func contexts(matching predicate: NSPredicate) async throws -> [CLSContext]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use the predicate keys defined in [CLSPredicateKeyPath](../clspredicatekeypath.md) to create a predicate that you pass to this method to search for contexts matching certain criteria.

For example, to print the titles of all the children of the main app context:

```swift
let store = CLSDataStore.shared
let predicate = NSPredicate(format: "%K = %@", CLSPredicateKeyPath.parent as CVarArg,
                                               store.mainAppContext)
store.contexts(matching: predicate) { contexts, _ in
    for context in contexts {
        print(context.title)
    }
}
```

> **Important**

>  ClassKit calls your completion handler on an arbitrary thread. If you need to do work on a particular thread from inside the handler, dispatch that work to the appropriate queue.

## See Also

### Finding contexts that match criteria

- [contexts(matchingIdentifierPath:completion:)](contexts%28matchingidentifierpath_completion_%29.md): Fetches all the contexts along a given identifier path.
- [CLSPredicateKeyPath](../clspredicatekeypath.md): The set of possible key paths you use to search for contexts.

# contextsMatchingPredicate:completion: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Fetches all the contexts matching a predicate.

## Declaration

```objectivec
- (void) contextsMatchingPredicate:(NSPredicate *) predicate completion:(void (^)(NSArray<CLSContext *> *contexts, NSError *error)) completion;
```

## Parameters

- `predicate`: A predicate that the method uses to search for contexts.
- `completion`: A closure that the method calls with the array of contexts that match the predicate and an optional error that indicates the reason for failure, if any.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func contexts(matching predicate: NSPredicate) async throws -> [CLSContext]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use the predicate keys defined in [CLSPredicateKeyPath](../clspredicatekeypath.md) to create a predicate that you pass to this method to search for contexts matching certain criteria.

For example, to print the titles of all the children of the main app context:

```swift
let store = CLSDataStore.shared
let predicate = NSPredicate(format: "%K = %@", CLSPredicateKeyPath.parent as CVarArg,
                                               store.mainAppContext)
store.contexts(matching: predicate) { contexts, _ in
    for context in contexts {
        print(context.title)
    }
}
```

> **Important**

>  ClassKit calls your completion handler on an arbitrary thread. If you need to do work on a particular thread from inside the handler, dispatch that work to the appropriate queue.

## See Also

### Finding contexts that match criteria

- [contextsMatchingIdentifierPath:completion:](contexts%28matchingidentifierpath_completion_%29.md): Fetches all the contexts along a given identifier path.
- [CLSPredicateKeyPath](../clspredicatekeypath.md): The set of possible key paths you use to search for contexts.
