> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odsession/nodenames()](https://developer.apple.com/documentation/opendirectory/odsession/nodenames())

# nodeNames() (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the node names that are registered with this session.

## Declaration

```swift
func nodeNames() throws -> [Any]
```

<a id="return-value"></a>

## Return Value

The node names registered with this session.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# nodeNamesAndReturnError: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the node names that are registered with this session.

## Declaration

```objectivec
- (NSArray *) nodeNamesAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The node names registered with this session.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
