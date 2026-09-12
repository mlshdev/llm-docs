> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/setcredentialswithrecordtype(_:authenticationtype:authenticationitems:continueitems:context:)](https://developer.apple.com/documentation/opendirectory/odnode/setcredentialswithrecordtype(_:authenticationtype:authenticationitems:continueitems:context:))

# setCredentialsWithRecordType(\_:authenticationType:authenticationItems:continueItems:context:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Sets the credentials for interaction with the node using other types of authentication available to Open Directory.

## Declaration

```swift
func setCredentialsWithRecordType(_ inRecordType: String!, authenticationType inType: String!, authenticationItems inItems: [Any]!, continueItems outItems: AutoreleasingUnsafeMutablePointer<NSArray?>!, context outContext: AutoreleasingUnsafeMutablePointer<AnyObject?>!) throws
```

## Parameters

- `inRecordType`: The record type that uses the credentials. Can be `nil`. The default value is `kODRecordTypeUsers`.
- `inType`: The authentication type.
- `inItems`: An array of `NSString` or `NSData` objects to be used in the authentication process.
- `outItems`: An array of `NSData` objects returned from the authentication process, if any are returned; `nil` otherwise.
- `outContext`: The proper context if the authentication attempt requires a context; `nil` otherwise. If not `nil`, then more calls must be made with the Context to continue the authentication.

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting Node Credentials

- [setCredentialsWithRecordType(\_:recordName:password:)](setcredentialswithrecordtype%28__recordname_password_%29.md): Sets credentials for interacting with the node.

# setCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Sets the credentials for interaction with the node using other types of authentication available to Open Directory.

## Declaration

```objectivec
- (BOOL) setCredentialsWithRecordType:(ODRecordType) inRecordType authenticationType:(ODAuthenticationType) inType authenticationItems:(NSArray *) inItems continueItems:(NSArray **) outItems context:(id*) outContext error:(NSError **) outError;
```

## Parameters

- `inRecordType`: The record type that uses the credentials. Can be `nil`. The default value is `kODRecordTypeUsers`.
- `inType`: The authentication type.
- `inItems`: An array of `NSString` or `NSData` objects to be used in the authentication process.
- `outItems`: An array of `NSData` objects returned from the authentication process, if any are returned; `nil` otherwise.
- `outContext`: The proper context if the authentication attempt requires a context; `nil` otherwise. If not `nil`, then more calls must be made with the Context to continue the authentication.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if no error occurs; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting Node Credentials

- [setCredentialsWithRecordType:recordName:password:error:](setcredentialswithrecordtype%28__recordname_password_%29.md): Sets credentials for interacting with the node.
