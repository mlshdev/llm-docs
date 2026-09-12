> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/write(to:)](https://developer.apple.com/documentation/automator/amworkflow/write(to:))

# write(to:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Writes the workflow to the specified file.

## Declaration

```swift
func write(to fileURL: URL) throws
```

## Parameters

- `fileURL`: URL that specifies the file location to write the workflow.

<a id="Discussion"></a>

## Discussion

You might want to save the workflow, for example, because you have made changes to a variable it contains.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# writeToURL:error: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Writes the workflow to the specified file.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) fileURL error:(NSError **) outError;
```

## Parameters

- `fileURL`: URL that specifies the file location to write the workflow.
- `outError`: If the workflow file can’t be written, upon return, contains an instance of [NSError](https://developer.apple.com/documentation/foundation/nserror) that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the workflow was successfully written; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You might want to save the workflow, for example, because you have made changes to a variable it contains.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
