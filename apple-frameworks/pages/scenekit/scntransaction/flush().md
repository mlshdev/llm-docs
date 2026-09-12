> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/flush()](https://developer.apple.com/documentation/scenekit/scntransaction/flush())

# flush() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Applies all changes from the current automatic transaction.

## Declaration

```swift
class func flush()
```

<a id="Discussion"></a>

## Discussion

SceneKit automatically calls this method at the end of each pass through the run loop, regardless of the run loop mode. If your app does not have a run loop, you must call this method explicitly.

If the current transaction has any nested transactions that are still animating, SceneKit waits to commit the current transaction’s changes until those transactions complete.

> **Note**

>  If possible, avoid calling [flush()](flush%28%29.md) explicitly. By allowing [flush()](flush%28%29.md) to execute during the run loop, your app achieves better performance, atomic screen updates are preserved, and transactions and animations that work from transaction to transaction continue to function.

## See Also

### Creating and Committing Transactions

- [begin()](begin%28%29.md): Begins a new transaction for the current thread.
- [commit()](commit%28%29.md): Commits all changes made during the current transaction.

# flush (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Applies all changes from the current automatic transaction.

## Declaration

```objectivec
+ (void) flush;
```

<a id="Discussion"></a>

## Discussion

SceneKit automatically calls this method at the end of each pass through the run loop, regardless of the run loop mode. If your app does not have a run loop, you must call this method explicitly.

If the current transaction has any nested transactions that are still animating, SceneKit waits to commit the current transaction’s changes until those transactions complete.

> **Note**

>  If possible, avoid calling [flush](flush%28%29.md) explicitly. By allowing [flush](flush%28%29.md) to execute during the run loop, your app achieves better performance, atomic screen updates are preserved, and transactions and animations that work from transaction to transaction continue to function.

## See Also

### Creating and Committing Transactions

- [begin](begin%28%29.md): Begins a new transaction for the current thread.
- [commit](commit%28%29.md): Commits all changes made during the current transaction.
