> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/init(contentsof:)](https://developer.apple.com/documentation/automator/amworkflow/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Automator  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Creates and initializes a workflow based on the contents of the specified file.

## Declaration

```swift
convenience init(contentsOf fileURL: URL) throws
```

## Parameters

- `fileURL`: URL that specifies the location of a workflow file.

<a id="return-value"></a>

## Return Value

The initialized workflow object. On error, returns nil.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Workflow

- [init()](init%28%29.md): Creates and initializes a workflow.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Creates and initializes a workflow based on the contents of the specified file.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) fileURL error:(NSError **) outError;
```

## Parameters

- `fileURL`: URL that specifies the location of a workflow file.
- `outError`: If the workflow file can’t be found, or if an error occurs in initializing the workflow, upon return contains an instance of [NSError](https://developer.apple.com/documentation/foundation/nserror) that describes the problem.

<a id="return-value"></a>

## Return Value

The initialized workflow object. On error, returns nil.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Workflow

- [init](init%28%29.md): Creates and initializes a workflow.
