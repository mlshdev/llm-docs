> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/setnodecredentialsusingkerberoscache:error:](https://developer.apple.com/documentation/opendirectory/odrecord/setnodecredentialsusingkerberoscache:error:)

# setNodeCredentialsUsingKerberosCache:error:

**Interface language:** Objective-C

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+ (deprecated in 10.7)

Sets the credentials for interaction with the record’s node using a Kerberos cache.

## Declaration

```objectivec
- (BOOL) setNodeCredentialsUsingKerberosCache:(NSString *) inCacheName error:(NSError **) outError;
```

## Parameters

- `inCacheName`: The name of the Kerberos cache.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the credentials are successfully set; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

## See Also

### Managing Authentication

- [changePassword:toPassword:error:](changepassword%28__topassword_%29.md): Changes the record’s password.
- [passwordPolicyAndReturnError:](passwordpolicyandreturnerror_.md): Deprecated. Returns a dictionary containing the password policy for the record.
- [setNodeCredentials:password:error:](setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtendedWithAuthenticationType:authenticationItems:continueItems:context:error:](verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword:error:](verifypassword%28__%29.md): Verifies the password for interaction with the record.
