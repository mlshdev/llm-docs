> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/passwordpolicyandreturnerror:](https://developer.apple.com/documentation/opendirectory/odrecord/passwordpolicyandreturnerror:)

# passwordPolicyAndReturnError:

**Interface language:** Objective-C

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+ (deprecated in 10.9)

Returns a dictionary containing the password policy for the record.

## Declaration

```objectivec
- (NSDictionary *) passwordPolicyAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The password policy for the record.

## See Also

### Managing Authentication

- [changePassword:toPassword:error:](changepassword%28__topassword_%29.md): Changes the record’s password.
- [setNodeCredentials:password:error:](setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsUsingKerberosCache:error:](setnodecredentialsusingkerberoscache_error_.md): Deprecated. Sets the credentials for interaction with the record’s node using a Kerberos cache.
- [setNodeCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtendedWithAuthenticationType:authenticationItems:continueItems:context:error:](verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword:error:](verifypassword%28__%29.md): Verifies the password for interaction with the record.
