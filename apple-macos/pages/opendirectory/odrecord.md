> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord](https://developer.apple.com/documentation/opendirectory/odrecord)

# ODRecord (Swift)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.

## Declaration

```swift
class ODRecord
```

## Topics

### Managing Authentication

- [changePassword(\_:toPassword:)](odrecord/changepassword%28__topassword_%29.md): Changes the record’s password.
- [setNodeCredentials(\_:password:)](odrecord/setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsWithRecordType(\_:authenticationType:authenticationItems:continueItems:context:)](odrecord/setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtended(withAuthenticationType:authenticationItems:continueItems:context:)](odrecord/verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword(\_:)](odrecord/verifypassword%28__%29.md): Verifies the password for interaction with the record.

### Managing Group Records

- [addMemberRecord(\_:)](odrecord/addmemberrecord%28__%29.md): Adds a member record to this group record.
- [isMemberRecord(\_:)](odrecord/ismemberrecord%28__%29.md): Determines whether a given record is a member of this group record.
- [removeMemberRecord(\_:)](odrecord/removememberrecord%28__%29.md): Removes a record as a member of this group record.

### Managing Record Attributes

- [addValue(\_:toAttribute:)](odrecord/addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetails(forAttributes:)](odrecord/recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](odrecord/recordname.md): The official name of the record.
- [recordType](odrecord/recordtype.md): The record’s type.
- [removeValues(forAttribute:)](odrecord/removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue(\_:fromAttribute:)](odrecord/removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue(\_:forAttribute:)](odrecord/setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronize()](odrecord/synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [values(forAttribute:)](odrecord/values%28forattribute_%29.md): Returns the values of an attribute of the record.

### Deleting a Record

- [delete()](odrecord/delete%28%29.md): Deletes the record from its node and invalidates it.

### Instance Properties

- [secondsUntilAuthenticationsExpire](odrecord/secondsuntilauthenticationsexpire.md)
- [secondsUntilPasswordExpires](odrecord/secondsuntilpasswordexpires.md)

### Instance Methods

- [accountPolicies()](odrecord/accountpolicies%28%29.md)
- [addAccountPolicy(\_:toCategory:)](odrecord/addaccountpolicy%28__tocategory_%29.md)
- [authenticationAllowed()](odrecord/authenticationallowed%28%29.md)
- [effectivePolicies()](odrecord/effectivepolicies%28%29.md): Deprecated.
- [passwordChangeAllowed(\_:)](odrecord/passwordchangeallowed%28__%29.md)
- [policies()](odrecord/policies%28%29.md): Deprecated.
- [removeAccountPolicy(\_:fromCategory:)](odrecord/removeaccountpolicy%28__fromcategory_%29.md)
- [removePolicy(\_:)](odrecord/removepolicy%28__%29.md): Deprecated.
- [setAccountPolicies(\_:)](odrecord/setaccountpolicies%28__%29.md)
- [setPolicies(\_:)](odrecord/setpolicies%28__%29.md): Deprecated.
- [setPolicy(\_:value:)](odrecord/setpolicy%28__value_%29.md): Deprecated.
- [supportedPolicies()](odrecord/supportedpolicies%28%29.md): Deprecated.
- [willAuthenticationsExpire(\_:)](odrecord/willauthenticationsexpire%28__%29.md)
- [willPasswordExpire(\_:)](odrecord/willpasswordexpire%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [ODAttributeMap](odattributemap.md)
- [ODConfiguration](odconfiguration.md)
- [ODContext](odcontext.md): An Open Directory context type.
- [ODMappings](odmappings.md)
- [ODModuleEntry](odmoduleentry.md)
- [ODNode](odnode.md): An `ODNode` object serves as a Cocoa wrapper for an Open Directory node.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQuery](odquery.md): An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.

# ODRecord (Objective-C)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.

## Declaration

```objectivec
@interface ODRecord : NSObject
```

## Topics

### Managing Authentication

- [changePassword:toPassword:error:](odrecord/changepassword%28__topassword_%29.md): Changes the record’s password.
- [passwordPolicyAndReturnError:](odrecord/passwordpolicyandreturnerror_.md): Deprecated. Returns a dictionary containing the password policy for the record.
- [setNodeCredentials:password:error:](odrecord/setnodecredentials%28__password_%29.md): Sets credentials for the record’s node.
- [setNodeCredentialsUsingKerberosCache:error:](odrecord/setnodecredentialsusingkerberoscache_error_.md): Deprecated. Sets the credentials for interaction with the record’s node using a Kerberos cache.
- [setNodeCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](odrecord/setnodecredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyExtendedWithAuthenticationType:authenticationItems:continueItems:context:error:](odrecord/verifyextended%28withauthenticationtype_authenticationitems_continueitems_context_%29.md): Verifies the credentials for interaction with the record’s node using other types of authentication available to Open Directory.
- [verifyPassword:error:](odrecord/verifypassword%28__%29.md): Verifies the password for interaction with the record.

### Managing Group Records

- [addMemberRecord:error:](odrecord/addmemberrecord%28__%29.md): Adds a member record to this group record.
- [isMemberRecord:error:](odrecord/ismemberrecord%28__%29.md): Determines whether a given record is a member of this group record.
- [removeMemberRecord:error:](odrecord/removememberrecord%28__%29.md): Removes a record as a member of this group record.

### Managing Record Attributes

- [addValue:toAttribute:error:](odrecord/addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetailsForAttributes:error:](odrecord/recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](odrecord/recordname.md): The official name of the record.
- [recordType](odrecord/recordtype.md): The record’s type.
- [removeValuesForAttribute:error:](odrecord/removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue:fromAttribute:error:](odrecord/removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue:forAttribute:error:](odrecord/setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronizeAndReturnError:](odrecord/synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [valuesForAttribute:error:](odrecord/values%28forattribute_%29.md): Returns the values of an attribute of the record.

### Deleting a Record

- [deleteRecordAndReturnError:](odrecord/delete%28%29.md): Deletes the record from its node and invalidates it.

### Instance Properties

- [secondsUntilAuthenticationsExpire](odrecord/secondsuntilauthenticationsexpire.md)
- [secondsUntilPasswordExpires](odrecord/secondsuntilpasswordexpires.md)

### Instance Methods

- [accountPoliciesAndReturnError:](odrecord/accountpolicies%28%29.md)
- [addAccountPolicy:toCategory:error:](odrecord/addaccountpolicy%28__tocategory_%29.md)
- [authenticationAllowedAndReturnError:](odrecord/authenticationallowed%28%29.md)
- [effectivePoliciesAndReturnError:](odrecord/effectivepolicies%28%29.md): Deprecated.
- [passwordChangeAllowed:error:](odrecord/passwordchangeallowed%28__%29.md)
- [policiesAndReturnError:](odrecord/policies%28%29.md): Deprecated.
- [removeAccountPolicy:fromCategory:error:](odrecord/removeaccountpolicy%28__fromcategory_%29.md)
- [removePolicy:error:](odrecord/removepolicy%28__%29.md): Deprecated.
- [setAccountPolicies:error:](odrecord/setaccountpolicies%28__%29.md)
- [setPolicies:error:](odrecord/setpolicies%28__%29.md): Deprecated.
- [setPolicy:value:error:](odrecord/setpolicy%28__value_%29.md): Deprecated.
- [supportedPoliciesAndReturnError:](odrecord/supportedpolicies%28%29.md): Deprecated.
- [willAuthenticationsExpire:](odrecord/willauthenticationsexpire%28__%29.md)
- [willPasswordExpire:](odrecord/willpasswordexpire%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [ODAttributeMap](odattributemap.md)
- [ODConfiguration](odconfiguration.md)
- [ODContext](odcontext.md): An Open Directory context type.
- [ODMappings](odmappings.md)
- [ODModuleEntry](odmoduleentry.md)
- [ODNode](odnode.md): An `ODNode` object serves as a Cocoa wrapper for an Open Directory node.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQuery](odquery.md): An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
