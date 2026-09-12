> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/begin()](https://developer.apple.com/documentation/quartzcore/catransaction/begin())

# begin() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Begin a new transaction for the current thread.

## Declaration

```swift
class func begin()
```

<a id="Discussion"></a>

## Discussion

The transaction is nested within the thread’s current transaction, if there is one.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Creating and Committing Transactions

- [commit()](commit%28%29.md): Commit all changes made during the current transaction.
- [flush()](flush%28%29.md): Flushes any extant implicit transaction.

# begin (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Begin a new transaction for the current thread.

## Declaration

```objectivec
+ (void) begin;
```

<a id="Discussion"></a>

## Discussion

The transaction is nested within the thread’s current transaction, if there is one.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Creating and Committing Transactions

- [commit](commit%28%29.md): Commit all changes made during the current transaction.
- [flush](flush%28%29.md): Flushes any extant implicit transaction.
