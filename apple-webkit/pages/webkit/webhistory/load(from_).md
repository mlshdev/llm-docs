> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/load(from:)](https://developer.apple.com/documentation/webkit/webhistory/load(from:))

# load(from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads the contents of the specified web history file.

## Declaration

```swift
func load(from URL: URL!) throws
```

## Parameters

- `URL`: The URL of the file to load. The file should have been created previously by a web history object. Note that the file’s format is private and should not be edited directly.

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryLoadedNotification](../webhistoryloadednotification.md)).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [setOptionalShared(\_:)](setoptionalshared%28__%29.md): Deprecated. Sets the web history object to share.
- [optionalShared()](optionalshared%28%29.md): Deprecated. Returns a shared web history object, if one exists.

### Loading and Saving History Information

- [save(to:)](save%28to_%29.md): Deprecated. Saves the web history to the specified file.

# loadFromURL:error: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads the contents of the specified web history file.

## Declaration

```objectivec
- (BOOL) loadFromURL:(NSURL *) URL error:(NSError **) error;
```

## Parameters

- `URL`: The URL of the file to load. The file should have been created previously by a web history object. Note that the file’s format is private and should not be edited directly.
- `error`: On output, `nil` if the load was successful; otherwise, `error`, contains details of the failure.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryLoadedNotification](../webhistoryloadednotification.md)).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [setOptionalSharedHistory:](setoptionalshared%28__%29.md): Deprecated. Sets the web history object to share.
- [optionalSharedHistory](optionalshared%28%29.md): Deprecated. Returns a shared web history object, if one exists.

### Loading and Saving History Information

- [saveToURL:error:](save%28to_%29.md): Deprecated. Saves the web history to the specified file.
