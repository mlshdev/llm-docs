> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/verifyextended(withauthenticationtype:authenticationitems:continueitems:context:)](https://developer.apple.com/documentation/opendirectory/odrecord/verifyextended(withauthenticationtype:authenticationitems:continueitems:context:))

# verifyExtended(withAuthenticationType:authenticationItems:continueItems:context:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.

## Declaration

```swift
func verifyExtended(withAuthenticationType inType: String!, authenticationItems inItems: [Any]!, continueItems outItems: AutoreleasingUnsafeMutablePointer<NSArray?>!, context outContext: AutoreleasingUnsafeMutablePointer<AnyObject?>!) throws
```

## Parameters

- `inType`: The authentication type.
- `inItems`: An array of `NSString` or `NSData` objects to be used in the authentication process.
- `outItems`: An array of `NSData` objects returned from the authentication process, if any are returned; `nil` otherwise.
- `outContext`: The proper context if the authentication attempt requires a context; `nil` otherwise. If not `nil`, then more calls must be made with the Context to continue the authentication.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Authentication

- [changePassword(\_:toPassword:)](changepassword%28__topassword_%29.md): Changes the record’s password.
- [setNodeCredentials(\_:password:)](setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsWithRecordType(\_:authenticationType:authenticationItems:continueItems:context:)](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword(\_:)](verifypassword%28__%29.md): Verifies the password for interaction with the record.

# verifyExtendedWithAuthenticationType:authenticationItems:continueItems:context:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.

## Declaration

```objectivec
- (BOOL) verifyExtendedWithAuthenticationType:(ODAuthenticationType) inType authenticationItems:(NSArray *) inItems continueItems:(NSArray **) outItems context:(id*) outContext error:(NSError **) outError;
```

## Parameters

- `inType`: The authentication type.
- `inItems`: An array of `NSString` or `NSData` objects to be used in the authentication process.
- `outItems`: An array of `NSData` objects returned from the authentication process, if any are returned; `nil` otherwise.
- `outContext`: The proper context if the authentication attempt requires a context; `nil` otherwise. If not `nil`, then more calls must be made with the Context to continue the authentication.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if verification succeeds; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Authentication

- [changePassword:toPassword:error:](changepassword%28__topassword_%29.md): Changes the record’s password.
- [passwordPolicyAndReturnError:](passwordpolicyandreturnerror_.md): Deprecated. Returns a dictionary containing the password policy for the record.
- [setNodeCredentials:password:error:](setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsUsingKerberosCache:error:](setnodecredentialsusingkerberoscache_error_.md): Deprecated. Sets the credentials for interaction with the record’s node using a Kerberos cache.
- [setNodeCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword:error:](verifypassword%28__%29.md): Verifies the password for interaction with the record.
