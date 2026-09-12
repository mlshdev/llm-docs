> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/save(to:)](https://developer.apple.com/documentation/webkit/webhistory/save(to:))

# save(to:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Saves the web history to the specified file.

## Declaration

```swift
func save(to URL: URL!) throws
```

## Parameters

- `URL`: The URL of the file to contain the web history information. The file must be user-writable, but its format is private and should not be edited directly.

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistorySavedNotification](../webhistorysavednotification.md)).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading and Saving History Information

- [load(from:)](load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.

# saveToURL:error: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Saves the web history to the specified file.

## Declaration

```objectivec
- (BOOL) saveToURL:(NSURL *) URL error:(NSError **) error;
```

## Parameters

- `URL`: The URL of the file to contain the web history information. The file must be user-writable, but its format is private and should not be edited directly.
- `error`: On output, `nil` if the load was successful; otherwise, `error`, which contains details of the failure.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false)

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistorySavedNotification](../webhistorysavednotification.md)).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading and Saving History Information

- [loadFromURL:error:](load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.
