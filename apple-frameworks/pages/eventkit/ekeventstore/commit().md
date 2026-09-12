> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/commit()](https://developer.apple.com/documentation/eventkit/ekeventstore/commit())

# commit() (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Commits all unsaved changes to the event store.

## Declaration

```swift
func commit() throws
```

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

This method allows you to save batched changes to the event store. For example, if you pass [false](https://developer.apple.com/documentation/swift/false) as the `commit` parameter to the [saveCalendar(\_:commit:)](savecalendar%28__commit_%29.md), [removeCalendar(\_:commit:)](removecalendar%28__commit_%29.md), [save(\_:span:commit:)](save%28__span_commit_%29.md), or [remove(\_:span:commit:)](remove%28__span_commit_%29.md) methods, the changes aren’t saved until [commit()](commit%28%29.md) is invoked. Likewise, if you pass [true](https://developer.apple.com/documentation/swift/true) as the `commit` parameter to the above methods, you don’t need to call [commit()](commit%28%29.md).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. Call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Saving and restoring state

- [reset()](reset%28%29.md): Reverts the event store to its saved state.
- [refreshSourcesIfNecessary()](refreshsourcesifnecessary%28%29.md): Pulls new data from remote sources, if necessary.

# commit: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Commits all unsaved changes to the event store.

## Declaration

```objectivec
- (BOOL) commit:(NSError **) error;
```

## Parameters

- `error`: A pointer to an [NSError](../../foundation/nserror.md) object. You don’t need to create an [NSError](../../foundation/nserror.md) object. The commit operation aborts after the first failure if you pass `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the commit operation succeeds or if there are no changes to commit; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

This method allows you to save batched changes to the event store. For example, if you pass [false](https://developer.apple.com/documentation/swift/false) as the `commit` parameter to the [saveCalendar:commit:error:](savecalendar%28__commit_%29.md), [removeCalendar:commit:error:](removecalendar%28__commit_%29.md), [saveEvent:span:commit:error:](save%28__span_commit_%29.md), or [removeEvent:span:commit:error:](remove%28__span_commit_%29.md) methods, the changes aren’t saved until [commit:](commit%28%29.md) is invoked. Likewise, if you pass [true](https://developer.apple.com/documentation/swift/true) as the `commit` parameter to the above methods, you don’t need to call [commit:](commit%28%29.md).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. Call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Saving and restoring state

- [reset](reset%28%29.md): Reverts the event store to its saved state.
- [refreshSourcesIfNecessary](refreshsourcesifnecessary%28%29.md): Pulls new data from remote sources, if necessary.
