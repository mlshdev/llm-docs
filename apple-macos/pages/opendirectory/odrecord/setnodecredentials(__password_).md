> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/setnodecredentials(_:password:)](https://developer.apple.com/documentation/opendirectory/odrecord/setnodecredentials(_:password:))

# setNodeCredentials(\_:password:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Sets credentials for the record’s node.

## Declaration

```swift
func setNodeCredentials(_ inUsername: String!, password inPassword: String!) throws
```

## Parameters

- `inUsername`: The username to use to authenticate with the node.
- `inPassword`: The password to use to authenticate with the node.

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Authentication

- [changePassword(\_:toPassword:)](changepassword%28__topassword_%29.md): Changes the record’s password.
- [setNodeCredentialsWithRecordType(\_:authenticationType:authenticationItems:continueItems:context:)](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtended(withAuthenticationType:authenticationItems:continueItems:context:)](verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword(\_:)](verifypassword%28__%29.md): Verifies the password for interaction with the record.

# setNodeCredentials:password:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Sets credentials for the record’s node.

## Declaration

```objectivec
- (BOOL) setNodeCredentials:(NSString *) inUsername password:(NSString *) inPassword error:(NSError **) outError;
```

## Parameters

- `inUsername`: The username to use to authenticate with the node.
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

### Managing Authentication

- [changePassword:toPassword:error:](changepassword%28__topassword_%29.md): Changes the record’s password.
- [passwordPolicyAndReturnError:](passwordpolicyandreturnerror_.md): Deprecated. Returns a dictionary containing the password policy for the record.
- [setNodeCredentialsUsingKerberosCache:error:](setnodecredentialsusingkerberoscache_error_.md): Deprecated. Sets the credentials for interaction with the record’s node using a Kerberos cache.
- [setNodeCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtendedWithAuthenticationType:authenticationItems:continueItems:context:error:](verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword:error:](verifypassword%28__%29.md): Verifies the password for interaction with the record.
