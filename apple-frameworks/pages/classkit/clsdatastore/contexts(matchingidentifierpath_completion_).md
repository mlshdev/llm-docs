> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/contexts(matchingidentifierpath:completion:)](https://developer.apple.com/documentation/classkit/clsdatastore/contexts(matchingidentifierpath:completion:))

# contexts(matchingIdentifierPath:completion:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Fetches all the contexts along a given identifier path.

## Declaration

```swift
func contexts(matchingIdentifierPath identifierPath: [String], completion: @escaping @Sendable ([CLSContext], (any Error)?) -> Void)
```

```swift
func contexts(matchingIdentifierPath identifierPath: [String]) async throws -> [CLSContext]
```

## Parameters

- `completion`: A closure that the method calls with the matching contexts and an optional error that indicates the reason for failure, if any.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func contexts(matchingIdentifierPath identifierPath: [String]) async throws -> [CLSContext]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to get all of the named contexts along the identifier path. For example:

```swift
let store = CLSDataStore.shared
store.contexts(matchingIdentifierPath: ["game", "level-1"]) { contexts, _ in
    for context in contexts {
        print(context.identifier)
    }
}
// Prints "game" and then "level-1"
```

The identifier path is taken starting from [mainAppContext](mainappcontext.md), which lies at the root of your app’s context hiearchy. For each context that doesn’t exist along the path, the data store calls its delegate’s [createContext(forIdentifier:parentContext:parentIdentifierPath:)](../clsdatastoredelegate/createcontext%28foridentifier_parentcontext_parentidentifierpath_%29.md) method to create the context. If contexts are missing and the data store has no delegate, the returned list of contexts is incomplete.

> **Important**

>  ClassKit calls your completion handler on an arbitrary thread. If you need to do work on a particular thread from inside the handler, dispatch that work to the appropriate queue.

## See Also

### Finding contexts that match criteria

- [contexts(matching:completion:)](contexts%28matching_completion_%29.md): Fetches all the contexts matching a predicate.
- [CLSPredicateKeyPath](../clspredicatekeypath.md): The set of possible key paths you use to search for contexts.

# contextsMatchingIdentifierPath:completion: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Fetches all the contexts along a given identifier path.

## Declaration

```objectivec
- (void) contextsMatchingIdentifierPath:(NSArray<NSString *> *) identifierPath completion:(void (^)(NSArray<CLSContext *> *contexts, NSError *error)) completion;
```

## Parameters

- `completion`: A closure that the method calls with the matching contexts and an optional error that indicates the reason for failure, if any.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func contexts(matchingIdentifierPath identifierPath: [String]) async throws -> [CLSContext]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to get all of the named contexts along the identifier path. For example:

```swift
let store = CLSDataStore.shared
store.contexts(matchingIdentifierPath: ["game", "level-1"]) { contexts, _ in
    for context in contexts {
        print(context.identifier)
    }
}
// Prints "game" and then "level-1"
```

The identifier path is taken starting from [mainAppContext](mainappcontext.md), which lies at the root of your app’s context hiearchy. For each context that doesn’t exist along the path, the data store calls its delegate’s [createContextForIdentifier:parentContext:parentIdentifierPath:](../clsdatastoredelegate/createcontext%28foridentifier_parentcontext_parentidentifierpath_%29.md) method to create the context. If contexts are missing and the data store has no delegate, the returned list of contexts is incomplete.

> **Important**

>  ClassKit calls your completion handler on an arbitrary thread. If you need to do work on a particular thread from inside the handler, dispatch that work to the appropriate queue.

## See Also

### Finding contexts that match criteria

- [contextsMatchingPredicate:completion:](contexts%28matching_completion_%29.md): Fetches all the contexts matching a predicate.
- [CLSPredicateKeyPath](../clspredicatekeypath.md): The set of possible key paths you use to search for contexts.
