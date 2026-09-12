> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/descendant(matchingidentifierpath:completion:)](https://developer.apple.com/documentation/classkit/clscontext/descendant(matchingidentifierpath:completion:))

# descendant(matchingIdentifierPath:completion:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Finds the context with the given identifier path relative to this context.

## Declaration

```swift
func descendant(matchingIdentifierPath identifierPath: [String], completion: @escaping @Sendable (CLSContext?, (any Error)?) -> Void)
```

```swift
func descendant(matchingIdentifierPath identifierPath: [String]) async throws -> CLSContext
```

## Parameters

- `identifierPath`: The identifier path of the context to find, relative to the current context.
- `completion`: A closure the method calls with the found context, or `nil` if none could be found, and an error indicating the reason for failure, if any.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)
- [Building missing contexts](../building-missing-contexts.md)
- [Declaring your app’s context hierarchy](../declaring-your-app-s-context-hierarchy.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func descendant(matchingIdentifierPath identifierPath: [String]) async throws -> CLSContext
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  ClassKit calls your completion handler on an arbitrary thread. If you need to do work on a particular thread from inside the handler, dispatch that work to the appropriate queue.

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](parent.md): The direct ancestor of this context.
- [removeFromParent()](removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext(\_:)](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.

# descendantMatchingIdentifierPath:completion: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Finds the context with the given identifier path relative to this context.

## Declaration

```objectivec
- (void) descendantMatchingIdentifierPath:(NSArray<NSString *> *) identifierPath completion:(void (^)(CLSContext *context, NSError *error)) completion;
```

## Parameters

- `identifierPath`: The identifier path of the context to find, relative to the current context.
- `completion`: A closure the method calls with the found context, or `nil` if none could be found, and an error indicating the reason for failure, if any.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)
- [Building missing contexts](../building-missing-contexts.md)
- [Declaring your app’s context hierarchy](../declaring-your-app-s-context-hierarchy.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func descendant(matchingIdentifierPath identifierPath: [String]) async throws -> CLSContext
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  ClassKit calls your completion handler on an arbitrary thread. If you need to do work on a particular thread from inside the handler, dispatch that work to the appropriate queue.

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](parent.md): The direct ancestor of this context.
- [removeFromParent](removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext:](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
