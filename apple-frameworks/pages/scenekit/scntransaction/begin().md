> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/begin()](https://developer.apple.com/documentation/scenekit/scntransaction/begin())

# begin() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Begins a new transaction for the current thread.

## Declaration

```swift
class func begin()
```

<a id="Discussion"></a>

## Discussion

The new transaction is nested within the thread’s current transaction, if there is one.

The first time you modify the scene graph during a pass through the run loop, SceneKit automatically creates a transaction and makes it the current transaction. (SceneKit commits that transaction when the next iteration of the run loops begins.) If you call this method to create a custom transaction before modifying the scene graph, your custom transaction becomes the current transaction.

## See Also

### Creating and Committing Transactions

- [commit()](commit%28%29.md): Commits all changes made during the current transaction.
- [flush()](flush%28%29.md): Applies all changes from the current automatic transaction.

# begin (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Begins a new transaction for the current thread.

## Declaration

```objectivec
+ (void) begin;
```

<a id="Discussion"></a>

## Discussion

The new transaction is nested within the thread’s current transaction, if there is one.

The first time you modify the scene graph during a pass through the run loop, SceneKit automatically creates a transaction and makes it the current transaction. (SceneKit commits that transaction when the next iteration of the run loops begins.) If you call this method to create a custom transaction before modifying the scene graph, your custom transaction becomes the current transaction.

## See Also

### Creating and Committing Transactions

- [commit](commit%28%29.md): Commits all changes made during the current transaction.
- [flush](flush%28%29.md): Applies all changes from the current automatic transaction.
