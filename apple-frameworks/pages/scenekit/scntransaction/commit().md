> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/commit()](https://developer.apple.com/documentation/scenekit/scntransaction/commit())

# commit() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Commits all changes made during the current transaction.

## Declaration

```swift
class func commit()
```

<a id="Discussion"></a>

## Discussion

If there is no current transaction, this method has no effect.

## See Also

### Creating and Committing Transactions

- [begin()](begin%28%29.md): Begins a new transaction for the current thread.
- [flush()](flush%28%29.md): Applies all changes from the current automatic transaction.

# commit (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Commits all changes made during the current transaction.

## Declaration

```objectivec
+ (void) commit;
```

<a id="Discussion"></a>

## Discussion

If there is no current transaction, this method has no effect.

## See Also

### Creating and Committing Transactions

- [begin](begin%28%29.md): Begins a new transaction for the current thread.
- [flush](flush%28%29.md): Applies all changes from the current automatic transaction.
