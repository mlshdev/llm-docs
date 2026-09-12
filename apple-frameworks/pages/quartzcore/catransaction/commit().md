> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/commit()](https://developer.apple.com/documentation/quartzcore/catransaction/commit())

# commit() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Commit all changes made during the current transaction.

## Declaration

```swift
class func commit()
```

<a id="Discussion"></a>

## Discussion

Raises an exception if no current transaction exists.

## See Also

### Creating and Committing Transactions

- [begin()](begin%28%29.md): Begin a new transaction for the current thread.
- [flush()](flush%28%29.md): Flushes any extant implicit transaction.

# commit (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Commit all changes made during the current transaction.

## Declaration

```objectivec
+ (void) commit;
```

<a id="Discussion"></a>

## Discussion

Raises an exception if no current transaction exists.

## See Also

### Creating and Committing Transactions

- [begin](begin%28%29.md): Begin a new transaction for the current thread.
- [flush](flush%28%29.md): Flushes any extant implicit transaction.
