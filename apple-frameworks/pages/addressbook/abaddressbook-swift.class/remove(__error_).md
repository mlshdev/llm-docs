> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/remove(_:error:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/remove(_:error:))

# remove(\_:error:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes an `ABPerson` or `ABGroup` record from the Address Book database.

## Declaration

```swift
func remove(_ record: ABRecord!, error: ()) throws
```

## Parameters

- `record`: The record to be removed.
- `error`: A pointer to an error object that is set to an `NSError` instance if an error occurs.

<a id="Discussion"></a>

## Discussion

If `record` is `nil`, this method raises an exception. Your changes are not committed until you call the [save()](save%28%29.md) method.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Adding and Removing Records

- [add(\_:error:)](add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [add(\_:)](add%28__%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [remove(\_:)](remove%28__%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.

# removeRecord:error: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes an `ABPerson` or `ABGroup` record from the Address Book database.

## Declaration

```objectivec
- (BOOL) removeRecord:(ABRecord *) record error:(NSError **) error;
```

## Parameters

- `record`: The record to be removed.
- `error`: A pointer to an error object that is set to an `NSError` instance if an error occurs.

<a id="return-value"></a>

## Return Value

`true` if the record was removed successfully; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If `record` is `nil`, this method raises an exception. Your changes are not committed until you call the [save](save%28%29.md) method.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Adding and Removing Records

- [addRecord:error:](add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [addRecord:](add%28__%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [removeRecord:](remove%28__%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.
