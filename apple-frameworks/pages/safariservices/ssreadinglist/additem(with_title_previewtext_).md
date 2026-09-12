> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/ssreadinglist/additem(with:title:previewtext:)](https://developer.apple.com/documentation/safariservices/ssreadinglist/additem(with:title:previewtext:))

# addItem(with:title:previewText:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds an item to the Reading List.

## Declaration

```swift
func addItem(with URL: URL, title: String?, previewText: String?) throws
```

## Parameters

- `URL`: The URL of the item.
- `title`: The title of the item, or `nil`.
- `previewText`: A string shown as detail text for the item, or `nil`.

<a id="Discussion"></a>

## Discussion

Call this method when the user chooses to add to the Reading List.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# addReadingListItemWithURL:title:previewText:error: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds an item to the Reading List.

## Declaration

```objectivec
- (BOOL) addReadingListItemWithURL:(NSURL *) URL title:(NSString *) title previewText:(NSString *) previewText error:(NSError **) error;
```

## Parameters

- `URL`: The URL of the item.
- `title`: The title of the item, or `nil`.
- `previewText`: A string shown as detail text for the item, or `nil`.
- `error`: On return, an error object that describes the problem, or `nil` if the operation succeeded.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item was added; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Call this method when the user chooses to add to the Reading List.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
