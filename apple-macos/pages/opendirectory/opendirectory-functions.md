> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/opendirectory-functions](https://developer.apple.com/documentation/opendirectory/opendirectory-functions)

# OpenDirectory Functions (Swift)

**Framework:** Open Directory  
**Kind:** API Collection

This document describes the functions, constants, and data types used to interact with Open Directory.

## Topics

### Working with the Open Directory Context

- [ODContextGetTypeID()](odcontextgettypeid%28%29.md): Returns the type ID for the Open Directory context.

### Working with Nodes

- [ODNodeCopyDetails(\_:\_:\_:)](odnodecopydetails%28______%29.md): Returns a dictionary containing details about a node.
- [ODNodeCopyRecord(\_:\_:\_:\_:\_:)](odnodecopyrecord%28__________%29.md): Returns a reference to a record of a node.
- [ODNodeCopySubnodeNames(\_:\_:)](odnodecopysubnodenames%28____%29.md): Returns the names of subnodes for a given node.
- [ODNodeCopySupportedAttributes(\_:\_:\_:)](odnodecopysupportedattributes%28______%29.md): Returns an array of attribute types supported by a given node.
- [ODNodeCopySupportedRecordTypes(\_:\_:)](odnodecopysupportedrecordtypes%28____%29.md): Returns an array of the record types supported by a given node.
- [ODNodeCopyUnreachableSubnodeNames(\_:\_:)](odnodecopyunreachablesubnodenames%28____%29.md): Returns an array of the subnodes of a given node that are currently unreachable.
- [ODNodeCreateCopy(\_:\_:\_:)](odnodecreatecopy%28______%29.md): Returns a copy of an existing node.
- [ODNodeCreateRecord(\_:\_:\_:\_:\_:)](odnodecreaterecord%28__________%29.md): Creates a record in a specified node with specified properties.
- [ODNodeCreateWithName(\_:\_:\_:\_:)](odnodecreatewithname%28________%29.md): Returns a new node created with a specified name.
- [ODNodeCreateWithNodeType(\_:\_:\_:\_:)](odnodecreatewithnodetype%28________%29.md): Returns a new node created with a specified type.
- [ODNodeCustomCall(\_:\_:\_:\_:)](odnodecustomcall%28________%29.md): Returns the result of a custom call to a node.
- [ODNodeGetName(\_:)](odnodegetname%28__%29.md): Returns the name of a node.
- [ODNodeGetTypeID()](odnodegettypeid%28%29.md): Returns the type ID for an Open Directory node.
- [ODNodeSetCredentials(\_:\_:\_:\_:\_:)](odnodesetcredentials%28__________%29.md): Sets credentials for interacting with a node.
- [ODNodeSetCredentialsExtended(\_:\_:\_:\_:\_:\_:\_:)](odnodesetcredentialsextended%28______________%29.md): Sets credentials for interacting with a node using a specified authentication method.

### Working with Queries

- [ODQueryCopyResults(\_:\_:\_:)](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID()](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop(\_:\_:\_:)](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback(\_:\_:\_:)](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue(\_:\_:)](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize(\_:)](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop(\_:\_:\_:)](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.

### Working with Records

- [ODRecordAddMember(\_:\_:\_:)](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue(\_:\_:\_:\_:)](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
- [ODRecordChangePassword(\_:\_:\_:\_:)](odrecordchangepassword%28________%29.md): Changes the password of a record.
- [ODRecordContainsMember(\_:\_:\_:)](odrecordcontainsmember%28______%29.md): Returns whether a group record contains a given record.
- [ODRecordCopyDetails(\_:\_:\_:)](odrecordcopydetails%28______%29.md): Returns the values of a record’s attributes.
- [ODRecordCopyValues(\_:\_:\_:)](odrecordcopyvalues%28______%29.md): Returns the value of a single attribute of a record.
- [ODRecordDelete(\_:\_:)](odrecorddelete%28____%29.md): Deletes a record from a node and invalidates the record.
- [ODRecordGetRecordName(\_:)](odrecordgetrecordname%28__%29.md): Returns the official name of a record.
- [ODRecordGetRecordType(\_:)](odrecordgetrecordtype%28__%29.md): Returns the type of a record.
- [ODRecordGetTypeID()](odrecordgettypeid%28%29.md): Returns the type ID for a record.
- [ODRecordRemoveMember(\_:\_:\_:)](odrecordremovemember%28______%29.md): Removes a record as a member from a specified group record.
- [ODRecordRemoveValue(\_:\_:\_:\_:)](odrecordremovevalue%28________%29.md): Removes a value from a record’s attribute.
- [ODRecordSetNodeCredentials(\_:\_:\_:\_:)](odrecordsetnodecredentials%28________%29.md): Sets node authentication credentials for a given record.
- [ODRecordSetNodeCredentialsExtended(\_:\_:\_:\_:\_:\_:\_:)](odrecordsetnodecredentialsextended%28______________%29.md): Sets node authentication credentials for a record using a specified authentication method.
- [ODRecordSetValue(\_:\_:\_:\_:)](odrecordsetvalue%28________%29.md): Sets one or more attribute values of a record.
- [ODRecordSynchronize(\_:\_:)](odrecordsynchronize%28____%29.md): Synchronizes a record with the directory to get current data and commit changes.
- [ODRecordVerifyPassword(\_:\_:\_:)](odrecordverifypassword%28______%29.md): Verifies a given password for a record.
- [ODRecordVerifyPasswordExtended(\_:\_:\_:\_:\_:\_:)](odrecordverifypasswordextended%28____________%29.md): Verifies a given password for a record given a specified authentication method.

### Working with Sessions

- [ODSessionCopyNodeNames(\_:\_:\_:)](odsessioncopynodenames%28______%29.md): Returns the names of nodes registered in a given session.
- [ODSessionCreate(\_:\_:\_:)](odsessioncreate%28______%29.md): Creates a session to be passed to node functions.
- [ODSessionGetTypeID()](odsessiongettypeid%28%29.md): Returns the type ID for a session.

### Data Types

- [ODAttributeType](odattributetype.md): An Open Directory attribute type.
- [ODAuthenticationType](odauthenticationtype.md): An Open Directory authentication type.
- [ODContext](odcontext.md): An Open Directory context type.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
- [ODMatchType](odmatchtype.md): An Open Directory match type.
- [ODNodeType](odnodetype.md): An Open Directory node type.
- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.
- [ODRecordType](odrecordtype.md): An Open Directory record type.

### Constants

- [Session Keys](session-keys.md): Keys used when specifying session information.
- [Node Types](1497602-node-types.md): Open Directory node types.
- [Match Types](match-types.md): Types of matches used for searches.
- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.
- [Configuration Attribute Types](configuration-attribute-types.md): Types of Open Directory attributes specifically for use with configure nodes.
- [Authentication Types](authentication-types.md): Types of authentication available in Open Directory.

### Functions

- [ODNodeAddAccountPolicy(\_:\_:\_:\_:)](odnodeaddaccountpolicy%28________%29.md)
- [ODNodeCopyAccountPolicies(\_:\_:)](odnodecopyaccountpolicies%28____%29.md)
- [ODNodeCopyPolicies(\_:\_:)](odnodecopypolicies%28____%29.md): Deprecated.
- [ODNodeCopySupportedPolicies(\_:\_:)](odnodecopysupportedpolicies%28____%29.md): Deprecated.
- [ODNodeCustomFunction(\_:\_:\_:\_:)](odnodecustomfunction%28________%29.md)
- [ODNodePasswordContentCheck(\_:\_:\_:\_:)](odnodepasswordcontentcheck%28________%29.md)
- [ODNodeRemoveAccountPolicy(\_:\_:\_:\_:)](odnoderemoveaccountpolicy%28________%29.md)
- [ODNodeRemovePolicy(\_:\_:\_:)](odnoderemovepolicy%28______%29.md): Deprecated.
- [ODNodeSetAccountPolicies(\_:\_:\_:)](odnodesetaccountpolicies%28______%29.md)
- [ODNodeSetPolicies(\_:\_:\_:)](odnodesetpolicies%28______%29.md): Deprecated.
- [ODNodeSetPolicy(\_:\_:\_:\_:)](odnodesetpolicy%28________%29.md): Deprecated.
- [ODRecordAddAccountPolicy(\_:\_:\_:\_:)](odrecordaddaccountpolicy%28________%29.md)
- [ODRecordAuthenticationAllowed(\_:\_:)](odrecordauthenticationallowed%28____%29.md)
- [ODRecordCopyAccountPolicies(\_:\_:)](odrecordcopyaccountpolicies%28____%29.md)
- [ODRecordCopyEffectivePolicies(\_:\_:)](odrecordcopyeffectivepolicies%28____%29.md): Deprecated.
- [ODRecordCopyPolicies(\_:\_:)](odrecordcopypolicies%28____%29.md): Deprecated.
- [ODRecordCopySupportedPolicies(\_:\_:)](odrecordcopysupportedpolicies%28____%29.md): Deprecated.
- [ODRecordPasswordChangeAllowed(\_:\_:\_:)](odrecordpasswordchangeallowed%28______%29.md)
- [ODRecordRemoveAccountPolicy(\_:\_:\_:\_:)](odrecordremoveaccountpolicy%28________%29.md)
- [ODRecordRemovePolicy(\_:\_:\_:)](odrecordremovepolicy%28______%29.md): Deprecated.
- [ODRecordSecondsUntilAuthenticationsExpire(\_:)](odrecordsecondsuntilauthenticationsexpire%28__%29.md)
- [ODRecordSecondsUntilPasswordExpires(\_:)](odrecordsecondsuntilpasswordexpires%28__%29.md)
- [ODRecordSetAccountPolicies(\_:\_:\_:)](odrecordsetaccountpolicies%28______%29.md)
- [ODRecordSetPolicies(\_:\_:\_:)](odrecordsetpolicies%28______%29.md): Deprecated.
- [ODRecordSetPolicy(\_:\_:\_:\_:)](odrecordsetpolicy%28________%29.md): Deprecated.
- [ODRecordWillAuthenticationsExpire(\_:\_:)](odrecordwillauthenticationsexpire%28____%29.md)
- [ODRecordWillPasswordExpire(\_:\_:)](odrecordwillpasswordexpire%28____%29.md)

## See Also

### Reference

- [OpenDirectory Enumerations](opendirectory-enumerations.md)
- [OpenDirectory Constants](opendirectory-constants.md)
- [OpenDirectory Data Types](opendirectory-data-types.md)

# OpenDirectory Functions (Objective-C)

**Framework:** Open Directory  
**Kind:** API Collection

This document describes the functions, constants, and data types used to interact with Open Directory.

## Topics

### Working with the Open Directory Context

- [ODContextGetTypeID](odcontextgettypeid%28%29.md): Returns the type ID for the Open Directory context.

### Working with Nodes

- [ODNodeCopyDetails](odnodecopydetails%28______%29.md): Returns a dictionary containing details about a node.
- [ODNodeCopyRecord](odnodecopyrecord%28__________%29.md): Returns a reference to a record of a node.
- [ODNodeCopySubnodeNames](odnodecopysubnodenames%28____%29.md): Returns the names of subnodes for a given node.
- [ODNodeCopySupportedAttributes](odnodecopysupportedattributes%28______%29.md): Returns an array of attribute types supported by a given node.
- [ODNodeCopySupportedRecordTypes](odnodecopysupportedrecordtypes%28____%29.md): Returns an array of the record types supported by a given node.
- [ODNodeCopyUnreachableSubnodeNames](odnodecopyunreachablesubnodenames%28____%29.md): Returns an array of the subnodes of a given node that are currently unreachable.
- [ODNodeCreateCopy](odnodecreatecopy%28______%29.md): Returns a copy of an existing node.
- [ODNodeCreateRecord](odnodecreaterecord%28__________%29.md): Creates a record in a specified node with specified properties.
- [ODNodeCreateWithName](odnodecreatewithname%28________%29.md): Returns a new node created with a specified name.
- [ODNodeCreateWithNodeType](odnodecreatewithnodetype%28________%29.md): Returns a new node created with a specified type.
- [ODNodeCustomCall](odnodecustomcall%28________%29.md): Returns the result of a custom call to a node.
- [ODNodeGetName](odnodegetname%28__%29.md): Returns the name of a node.
- [ODNodeGetTypeID](odnodegettypeid%28%29.md): Returns the type ID for an Open Directory node.
- [ODNodeSetCredentials](odnodesetcredentials%28__________%29.md): Sets credentials for interacting with a node.
- [ODNodeSetCredentialsExtended](odnodesetcredentialsextended%28______________%29.md): Sets credentials for interacting with a node using a specified authentication method.
- [ODNodeSetCredentialsUsingKerberosCache](odnodesetcredentialsusingkerberoscache.md): Deprecated. Sets credentials for interacting with a node with the Kerberos cache.

### Working with Queries

- [ODQueryCopyResults](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.

### Working with Records

- [ODRecordAddMember](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
- [ODRecordChangePassword](odrecordchangepassword%28________%29.md): Changes the password of a record.
- [ODRecordContainsMember](odrecordcontainsmember%28______%29.md): Returns whether a group record contains a given record.
- [ODRecordCopyDetails](odrecordcopydetails%28______%29.md): Returns the values of a record’s attributes.
- [ODRecordCopyPasswordPolicy](odrecordcopypasswordpolicy.md): Deprecated. Returns the password policies of a record.
- [ODRecordCopyValues](odrecordcopyvalues%28______%29.md): Returns the value of a single attribute of a record.
- [ODRecordDelete](odrecorddelete%28____%29.md): Deletes a record from a node and invalidates the record.
- [ODRecordGetRecordName](odrecordgetrecordname%28__%29.md): Returns the official name of a record.
- [ODRecordGetRecordType](odrecordgetrecordtype%28__%29.md): Returns the type of a record.
- [ODRecordGetTypeID](odrecordgettypeid%28%29.md): Returns the type ID for a record.
- [ODRecordRemoveMember](odrecordremovemember%28______%29.md): Removes a record as a member from a specified group record.
- [ODRecordRemoveValue](odrecordremovevalue%28________%29.md): Removes a value from a record’s attribute.
- [ODRecordSetNodeCredentials](odrecordsetnodecredentials%28________%29.md): Sets node authentication credentials for a given record.
- [ODRecordSetNodeCredentialsExtended](odrecordsetnodecredentialsextended%28______________%29.md): Sets node authentication credentials for a record using a specified authentication method.
- [ODRecordSetNodeCredentialsUsingKerberosCache](odrecordsetnodecredentialsusingkerberoscache.md): Deprecated. Sets credentials for interacting with a record’s node with the Kerberos cache.
- [ODRecordSetValue](odrecordsetvalue%28________%29.md): Sets one or more attribute values of a record.
- [ODRecordSynchronize](odrecordsynchronize%28____%29.md): Synchronizes a record with the directory to get current data and commit changes.
- [ODRecordVerifyPassword](odrecordverifypassword%28______%29.md): Verifies a given password for a record.
- [ODRecordVerifyPasswordExtended](odrecordverifypasswordextended%28____________%29.md): Verifies a given password for a record given a specified authentication method.

### Working with Sessions

- [ODSessionCopyNodeNames](odsessioncopynodenames%28______%29.md): Returns the names of nodes registered in a given session.
- [ODSessionCreate](odsessioncreate%28______%29.md): Creates a session to be passed to node functions.
- [ODSessionGetTypeID](odsessiongettypeid%28%29.md): Returns the type ID for a session.

### Data Types

- [ODAttributeType](odattributetype.md): An Open Directory attribute type.
- [ODAuthenticationType](odauthenticationtype.md): An Open Directory authentication type.
- [ODContext](odcontext.md): An Open Directory context type.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
- [ODMatchType](odmatchtype.md): An Open Directory match type.
- [ODNodeType](odnodetype.md): An Open Directory node type.
- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.
- [ODRecordType](odrecordtype.md): An Open Directory record type.

### Constants

- [Session Keys](session-keys.md): Keys used when specifying session information.
- [Node Types](1497602-node-types.md): Open Directory node types.
- [Match Types](match-types.md): Types of matches used for searches.
- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.
- [Configuration Attribute Types](configuration-attribute-types.md): Types of Open Directory attributes specifically for use with configure nodes.
- [Authentication Types](authentication-types.md): Types of authentication available in Open Directory.

### Functions

- [ODNodeAddAccountPolicy](odnodeaddaccountpolicy%28________%29.md)
- [ODNodeCopyAccountPolicies](odnodecopyaccountpolicies%28____%29.md)
- [ODNodeCopyPolicies](odnodecopypolicies%28____%29.md): Deprecated.
- [ODNodeCopySupportedPolicies](odnodecopysupportedpolicies%28____%29.md): Deprecated.
- [ODNodeCustomFunction](odnodecustomfunction%28________%29.md)
- [ODNodePasswordContentCheck](odnodepasswordcontentcheck%28________%29.md)
- [ODNodeRemoveAccountPolicy](odnoderemoveaccountpolicy%28________%29.md)
- [ODNodeRemovePolicy](odnoderemovepolicy%28______%29.md): Deprecated.
- [ODNodeSetAccountPolicies](odnodesetaccountpolicies%28______%29.md)
- [ODNodeSetPolicies](odnodesetpolicies%28______%29.md): Deprecated.
- [ODNodeSetPolicy](odnodesetpolicy%28________%29.md): Deprecated.
- [ODRecordAddAccountPolicy](odrecordaddaccountpolicy%28________%29.md)
- [ODRecordAuthenticationAllowed](odrecordauthenticationallowed%28____%29.md)
- [ODRecordCopyAccountPolicies](odrecordcopyaccountpolicies%28____%29.md)
- [ODRecordCopyEffectivePolicies](odrecordcopyeffectivepolicies%28____%29.md): Deprecated.
- [ODRecordCopyPolicies](odrecordcopypolicies%28____%29.md): Deprecated.
- [ODRecordCopySupportedPolicies](odrecordcopysupportedpolicies%28____%29.md): Deprecated.
- [ODRecordPasswordChangeAllowed](odrecordpasswordchangeallowed%28______%29.md)
- [ODRecordRemoveAccountPolicy](odrecordremoveaccountpolicy%28________%29.md)
- [ODRecordRemovePolicy](odrecordremovepolicy%28______%29.md): Deprecated.
- [ODRecordSecondsUntilAuthenticationsExpire](odrecordsecondsuntilauthenticationsexpire%28__%29.md)
- [ODRecordSecondsUntilPasswordExpires](odrecordsecondsuntilpasswordexpires%28__%29.md)
- [ODRecordSetAccountPolicies](odrecordsetaccountpolicies%28______%29.md)
- [ODRecordSetPolicies](odrecordsetpolicies%28______%29.md): Deprecated.
- [ODRecordSetPolicy](odrecordsetpolicy%28________%29.md): Deprecated.
- [ODRecordWillAuthenticationsExpire](odrecordwillauthenticationsexpire%28____%29.md)
- [ODRecordWillPasswordExpire](odrecordwillpasswordexpire%28____%29.md)

## See Also

### Reference

- [OpenDirectory Enumerations](opendirectory-enumerations.md)
- [OpenDirectory Constants](opendirectory-constants.md)
- [OpenDirectory Data Types](opendirectory-data-types.md)
