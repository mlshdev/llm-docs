> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/changepassword(_:topassword:)](https://developer.apple.com/documentation/opendirectory/odrecord/changepassword(_:topassword:))

# changePassword(\_:toPassword:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Changes the record’s password.

## Declaration

```swift
func changePassword(_ oldPassword: String!, toPassword newPassword: String!) throws
```

## Parameters

- `oldPassword`: The record’s old password. Can be `nil` if the user has the proper permissions.
- `newPassword`: The new password.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Authentication

- [setNodeCredentials(\_:password:)](setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsWithRecordType(\_:authenticationType:authenticationItems:continueItems:context:)](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtended(withAuthenticationType:authenticationItems:continueItems:context:)](verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword(\_:)](verifypassword%28__%29.md): Verifies the password for interaction with the record.

# changePassword:toPassword:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Changes the record’s password.

## Declaration

```objectivec
- (BOOL) changePassword:(NSString *) oldPassword toPassword:(NSString *) newPassword error:(NSError **) outError;
```

## Parameters

- `oldPassword`: The record’s old password. Can be `nil` if the user has the proper permissions.
- `newPassword`: The new password.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the password is successfully changed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Authentication

- [passwordPolicyAndReturnError:](passwordpolicyandreturnerror_.md): Deprecated. Returns a dictionary containing the password policy for the record.
- [setNodeCredentials:password:error:](setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsUsingKerberosCache:error:](setnodecredentialsusingkerberoscache_error_.md): Deprecated. Sets the credentials for interaction with the record’s node using a Kerberos cache.
- [setNodeCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtendedWithAuthenticationType:authenticationItems:continueItems:context:error:](verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword:error:](verifypassword%28__%29.md): Verifies the password for interaction with the record.
