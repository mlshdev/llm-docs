> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/saveandreturnerror()](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/saveandreturnerror())

# saveAndReturnError() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Saves all the changes made since the last save.

## Declaration

```swift
func saveAndReturnError() throws
```

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Saving and Detecting Changes

- [hasUnsavedChanges()](hasunsavedchanges%28%29.md): Indicates whether an address book has changes that have not been saved to the Address Book database.
- [save()](save%28%29.md): Saves all the changes made since the last save.

# saveAndReturnError: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Saves all the changes made since the last save.

## Declaration

```objectivec
- (BOOL) saveAndReturnError:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object that is set to an `NSError` instance if an error occurs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful or there were no changes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Saving and Detecting Changes

- [hasUnsavedChanges](hasunsavedchanges%28%29.md): Indicates whether an address book has changes that have not been saved to the Address Book database.
- [save](save%28%29.md): Saves all the changes made since the last save.
