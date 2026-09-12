> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate/panel(_:validate:)](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel(_:validate:))

# panel(\_:validate:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to validate the URL for a file that the user selected.

## Declaration

```swift
@MainActor optional func panel(_ sender: Any, validate url: URL) throws
```

## Parameters

- `sender`: The panel that requests URL validation.
- `url`: The URL for you to validate.

<a id="Discussion"></a>

## Discussion

Save panels call this method when the user clicks the Save button. Open panels call it when the user clicks the Open button. An Open panel calls this method once for each selected filename or directory.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Validating the Panel Content

- [panel(\_:shouldEnable:)](panel%28__shouldenable_%29.md): Asks the delegate whether the specified URL should be enabled in the Open panel.

# panel:validateURL:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to validate the URL for a file that the user selected.

## Declaration

```objectivec
- (BOOL) panel:(id) sender validateURL:(NSURL *) url error:(NSError **) outError;
```

## Parameters

- `sender`: The panel that requests URL validation.
- `url`: The URL for you to validate.
- `outError`: If an error occurred during validation, the error that occurred.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your app can open or save the item at the specified URL. Return [false](https://developer.apple.com/documentation/swift/false) if you cannot open or save the item.

<a id="Discussion"></a>

## Discussion

Save panels call this method when the user clicks the Save button. Open panels call it when the user clicks the Open button. An Open panel calls this method once for each selected filename or directory.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Validating the Panel Content

- [panel:shouldEnableURL:](panel%28__shouldenable_%29.md): Asks the delegate whether the specified URL should be enabled in the Open panel.
