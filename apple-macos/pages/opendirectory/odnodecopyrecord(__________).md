> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnodecopyrecord(_:_:_:_:_:)](https://developer.apple.com/documentation/opendirectory/odnodecopyrecord(_:_:_:_:_:))

# ODNodeCopyRecord(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a reference to a record of a node.

## Declaration

```swift
func ODNodeCopyRecord(_ node: ODNodeRef!, _ recordType: String!, _ recordName: CFString!, _ attributes: CFTypeRef!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<ODRecordRef>!
```

## Parameters

- `node`: The node.
- `recordType`: The type of the record.
- `recordName`: The name of the record.
- `attributes`: An array of directory attributes to be copied in addition to the record. Can be `NULL`.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

A reference to a specified record of `inNode`.

## See Also

### Related Documentation

- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.

### Working with Nodes

- [ODNodeCopyDetails(\_:\_:\_:)](odnodecopydetails%28______%29.md): Returns a dictionary containing details about a node.
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

# ODNodeCopyRecord (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a reference to a record of a node.

## Declaration

```objectivec
extern ODRecordRefODNodeCopyRecord(ODNodeRef node, ODRecordType recordType, CFStringRef recordName, CFTypeRef attributes, CFErrorRef*error);
```

## Parameters

- `node`: The node.
- `recordType`: The type of the record.
- `recordName`: The name of the record.
- `attributes`: An array of directory attributes to be copied in addition to the record. Can be `NULL`.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

A reference to a specified record of `inNode`.

## See Also

### Related Documentation

- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.

### Working with Nodes

- [ODNodeCopyDetails](odnodecopydetails%28______%29.md): Returns a dictionary containing details about a node.
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
