> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/setcredentialswithrecordtype(_:recordname:password:)](https://developer.apple.com/documentation/opendirectory/odnode/setcredentialswithrecordtype(_:recordname:password:))

# setCredentialsWithRecordType(\_:recordName:password:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Sets credentials for interacting with the node.

## Declaration

```swift
func setCredentialsWithRecordType(_ inRecordType: String!, recordName inRecordName: String!, password inPassword: String!) throws
```

## Parameters

- `inRecordType`: The record type that uses the credentials. Can be `nil`. The default value is `kODRecordTypeUsers`.
- `inRecordName`: The username to use to authenticate with the node.
- `inPassword`: The password to use to authenticate with the node.

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting Node Credentials

- [setCredentialsWithRecordType(\_:authenticationType:authenticationItems:continueItems:context:)](setcredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the node using other types of authentication available to Open Directory.

# setCredentialsWithRecordType:recordName:password:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Sets credentials for interacting with the node.

## Declaration

```objectivec
- (BOOL) setCredentialsWithRecordType:(ODRecordType) inRecordType recordName:(NSString *) inRecordName password:(NSString *) inPassword error:(NSError **) outError;
```

## Parameters

- `inRecordType`: The record type that uses the credentials. Can be `nil`. The default value is `kODRecordTypeUsers`.
- `inRecordName`: The username to use to authenticate with the node.
- `inPassword`: The password to use to authenticate with the node.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the credentials are successfully set; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting Node Credentials

- [setCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](setcredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the node using other types of authentication available to Open Directory.
