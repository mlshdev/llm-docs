> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquery/resultsallowingpartial(_:)](https://developer.apple.com/documentation/opendirectory/odquery/resultsallowingpartial(_:))

# resultsAllowingPartial(\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns results from a query synchronously.

## Declaration

```swift
func resultsAllowingPartial(_ inAllowPartialResults: Bool) throws -> [Any]
```

## Parameters

- `inAllowPartialResults`: If [true](https://developer.apple.com/documentation/swift/true), only immediately available results are returned; otherwise, the function waits until all results are available.

<a id="return-value"></a>

## Return Value

The results of the query in an array of `ODRecord` objects.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# resultsAllowingPartial:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns results from a query synchronously.

## Declaration

```objectivec
- (NSArray *) resultsAllowingPartial:(BOOL) inAllowPartialResults error:(NSError **) outError;
```

## Parameters

- `inAllowPartialResults`: If [true](https://developer.apple.com/documentation/swift/true), only immediately available results are returned; otherwise, the function waits until all results are available.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The results of the query in an array of `ODRecord` objects.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
