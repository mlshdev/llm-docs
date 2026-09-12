> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode](https://developer.apple.com/documentation/opendirectory/odnode)

# ODNode (Swift)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODNode` object serves as a Cocoa wrapper for an Open Directory node.

## Declaration

```swift
class ODNode
```

## Topics

### Creating and Initializing a Node

- [init(session:name:)](odnode/init%28session_name_%29.md): Creates a node object with a specified session and name.
- [init(session:type:)](odnode/init%28session_type_%29.md): Creates a node object with a specified session and type.

### Querying a Node

- [customCall(\_:send:)](odnode/customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeDetails(forKeys:)](odnode/nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [nodeName](odnode/nodename.md): The node’s name.
- [subnodeNames()](odnode/subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNames()](odnode/unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.

### Setting Node Credentials

- [setCredentialsWithRecordType(\_:recordName:password:)](odnode/setcredentialswithrecordtype%28__recordname_password_%29.md): Sets credentials for interacting with the node.
- [setCredentialsWithRecordType(\_:authenticationType:authenticationItems:continueItems:context:)](odnode/setcredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the node using other types of authentication available to Open Directory.

### Managing Node Records

- [createRecord(withRecordType:name:attributes:)](odnode/createrecord%28withrecordtype_name_attributes_%29.md): Creates a record in a specified node with specified properties.
- [record(withRecordType:name:attributes:)](odnode/record%28withrecordtype_name_attributes_%29.md): Returns a record from the node with a specified type and name.
- [supportedAttributes(forRecordType:)](odnode/supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.
- [supportedRecordTypes()](odnode/supportedrecordtypes%28%29.md): Returns an array of the record types supported by the node.

### Instance Properties

- [configuration](odnode/configuration.md)

### Instance Methods

- [accountPolicies()](odnode/accountpolicies%28%29.md)
- [addAccountPolicy(\_:toCategory:)](odnode/addaccountpolicy%28__tocategory_%29.md)
- [customFunction(\_:payload:)](odnode/customfunction%28__payload_%29.md)
- [passwordContentCheck(\_:forRecordName:)](odnode/passwordcontentcheck%28__forrecordname_%29.md)
- [policies()](odnode/policies%28%29.md): Deprecated.
- [removeAccountPolicy(\_:fromCategory:)](odnode/removeaccountpolicy%28__fromcategory_%29.md)
- [removePolicy(\_:)](odnode/removepolicy%28__%29.md): Deprecated.
- [setAccountPolicies(\_:)](odnode/setaccountpolicies%28__%29.md)
- [setPolicies(\_:)](odnode/setpolicies%28__%29.md): Deprecated.
- [setPolicy(\_:value:)](odnode/setpolicy%28__value_%29.md): Deprecated.
- [supportedPolicies()](odnode/supportedpolicies%28%29.md): Deprecated.

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
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQuery](odquery.md): An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecord](odrecord.md): An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.

# ODNode (Objective-C)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODNode` object serves as a Cocoa wrapper for an Open Directory node.

## Declaration

```objectivec
@interface ODNode : NSObject
```

## Topics

### Creating and Initializing a Node

- [initWithSession:name:error:](odnode/init%28session_name_%29.md): Creates a node object with a specified session and name.
- [initWithSession:type:error:](odnode/init%28session_type_%29.md): Creates a node object with a specified session and type.
- [nodeWithSession:name:error:](odnode/nodewithsession_name_error_.md): Returns an autoreleased node object with a specified session and name.
- [nodeWithSession:type:error:](odnode/nodewithsession_type_error_.md): Returns an autoreleased node object with a specified session and type.

### Querying a Node

- [customCall:sendData:error:](odnode/customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeDetailsForKeys:error:](odnode/nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [nodeName](odnode/nodename.md): The node’s name.
- [subnodeNamesAndReturnError:](odnode/subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNamesAndReturnError:](odnode/unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.

### Setting Node Credentials

- [setCredentialsWithRecordType:recordName:password:error:](odnode/setcredentialswithrecordtype%28__recordname_password_%29.md): Sets credentials for interacting with the node.
- [setCredentialsWithRecordType:authenticationType:authenticationItems:continueItems:context:error:](odnode/setcredentialswithrecordtype%28__authenticationtype_authenticationitems_continueitems_context_%29.md): Sets the credentials for interaction with the node using other types of authentication available to Open Directory.

### Managing Node Records

- [createRecordWithRecordType:name:attributes:error:](odnode/createrecord%28withrecordtype_name_attributes_%29.md): Creates a record in a specified node with specified properties.
- [recordWithRecordType:name:attributes:error:](odnode/record%28withrecordtype_name_attributes_%29.md): Returns a record from the node with a specified type and name.
- [supportedAttributesForRecordType:error:](odnode/supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.
- [supportedRecordTypesAndReturnError:](odnode/supportedrecordtypes%28%29.md): Returns an array of the record types supported by the node.

### Instance Properties

- [configuration](odnode/configuration.md)

### Instance Methods

- [accountPoliciesAndReturnError:](odnode/accountpolicies%28%29.md)
- [addAccountPolicy:toCategory:error:](odnode/addaccountpolicy%28__tocategory_%29.md)
- [customFunction:payload:error:](odnode/customfunction%28__payload_%29.md)
- [passwordContentCheck:forRecordName:error:](odnode/passwordcontentcheck%28__forrecordname_%29.md)
- [policiesAndReturnError:](odnode/policies%28%29.md): Deprecated.
- [removeAccountPolicy:fromCategory:error:](odnode/removeaccountpolicy%28__fromcategory_%29.md)
- [removePolicy:error:](odnode/removepolicy%28__%29.md): Deprecated.
- [setAccountPolicies:error:](odnode/setaccountpolicies%28__%29.md)
- [setCredentialsUsingKerberosCache:error:](odnode/setcredentialsusingkerberoscache_error_.md): Deprecated.
- [setPolicies:error:](odnode/setpolicies%28__%29.md): Deprecated.
- [setPolicy:value:error:](odnode/setpolicy%28__value_%29.md): Deprecated.
- [supportedPoliciesAndReturnError:](odnode/supportedpolicies%28%29.md): Deprecated.

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
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQuery](odquery.md): An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecord](odrecord.md): An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
