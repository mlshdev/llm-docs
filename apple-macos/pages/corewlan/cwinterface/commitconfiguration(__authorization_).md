> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/commitconfiguration(_:authorization:)](https://developer.apple.com/documentation/corewlan/cwinterface/commitconfiguration(_:authorization:))

# commitConfiguration(\_:authorization:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Commit a configuration for the given WLAN interface.

## Declaration

```swift
func commitConfiguration(_ configuration: CWConfiguration, authorization: SFAuthorization?) throws
```

## Parameters

- `configuration`: The configuration to commit.
- `authorization`: An SFAuthorization object to use for authorizing the commit. This parameter is optional and can be passed as *nil*.

<a id="Discussion"></a>

## Discussion

This method requires the caller have root privileges or obtain administrator privileges with the *authorization* parameter.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# commitConfiguration:authorization:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Commit a configuration for the given WLAN interface.

## Declaration

```objectivec
- (BOOL) commitConfiguration:(CWConfiguration *) configuration authorization:(SFAuthorization *) authorization error:(NSError **) error;
```

## Parameters

- `configuration`: The configuration to commit.
- `authorization`: An SFAuthorization object to use for authorizing the commit. This parameter is optional and can be passed as *nil*.
- `error`: An NSError object passed by reference, which will be populated with the error code and the error description if an error occurs during the execution of this method. This parameter is optional and can be passed as *nil*.

<a id="return-value"></a>

## Return Value

A Boolean value which will indicate whether or not a failure occurred during execution. *YES* indicates no error occurred.

<a id="Discussion"></a>

## Discussion

This method requires the caller have root privileges or obtain administrator privileges with the *authorization* parameter.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
