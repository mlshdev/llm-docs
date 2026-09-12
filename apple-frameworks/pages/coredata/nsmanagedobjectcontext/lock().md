> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/lock()](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/lock())

# lock() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Attempts to acquire a lock on the context.

> Use a queue style context and -performBlockAndWait: instead

## Declaration

```swift
func lock()
```

<a id="Discussion"></a>

## Discussion

This method blocks a thread’s execution until the lock can be acquired. An application protects a critical section of code by requiring a thread to acquire a lock before executing the code. Once the critical section is past, the thread relinquishes the lock by invoking [unlock()](unlock%28%29.md).

Sending this message to a managed object context helps the framework to understand the scope of a transaction in a multi-threaded environment. It is preferable to use the `NSManagedObjectContext`’s implementation of `NSLocking` instead using of a separate mutex object.

If you lock (or successfully `tryLock`) a managed object context, the thread in which the lock call is made must keep a strong reference to the context until it invokes unlock, otherwise if the context is deallocated this will result in deadlock.

## See Also

### Deprecated instance methods

- [init(concurrencyType:)](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [init()](init%28%29.md): Deprecated.
- [tryLock()](trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [unlock()](unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.

# lock (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Attempts to acquire a lock on the context.

> Use a queue style context and -performBlockAndWait: instead

## Declaration

```objectivec
- (void) lock;
```

<a id="Discussion"></a>

## Discussion

This method blocks a thread’s execution until the lock can be acquired. An application protects a critical section of code by requiring a thread to acquire a lock before executing the code. Once the critical section is past, the thread relinquishes the lock by invoking [unlock](unlock%28%29.md).

Sending this message to a managed object context helps the framework to understand the scope of a transaction in a multi-threaded environment. It is preferable to use the `NSManagedObjectContext`’s implementation of `NSLocking` instead using of a separate mutex object.

If you lock (or successfully `tryLock`) a managed object context, the thread in which the lock call is made must keep a strong reference to the context until it invokes unlock, otherwise if the context is deallocated this will result in deadlock.

## See Also

### Deprecated instance methods

- [initWithConcurrencyType:](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [init](init%28%29.md): Deprecated.
- [tryLock](trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [unlock](unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.
