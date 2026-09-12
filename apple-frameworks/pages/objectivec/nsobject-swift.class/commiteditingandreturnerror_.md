> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/commiteditingandreturnerror:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commiteditingandreturnerror:)

# commitEditingAndReturnError:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.7+ (deprecated in 11.0)

Attempt to commit pending edits, returning an error in the case of failure.

## Declaration

```objectivec
- (BOOL) commitEditingAndReturnError:(NSError **) error;
```

## Parameters

- `error`: If an error occurs during the commit operation, upon returns contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the commit is successful, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

During autosaving, commit editing may fail, due to a pending edit. Rather than interrupt the user with an unexpected alert, this method provides the caller with the option to either present the error or fail silently, leaving the pending edit in place and the user’s editing uninterrupted. In your implementation of this method, you should attempt to commit editing, but if there is a failure return [NO](../no.md) and in `error` an error object to be presented or ignored as appropriate.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
