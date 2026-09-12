> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnodecreaterecord(_:_:_:_:_:)](https://developer.apple.com/documentation/opendirectory/odnodecreaterecord(_:_:_:_:_:))

# ODNodeCreateRecord(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a record in a specified node with specified properties.

## Declaration

```swift
func ODNodeCreateRecord(_ node: ODNodeRef!, _ recordType: String!, _ recordName: CFString!, _ attributeDict: CFDictionary!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<ODRecordRef>!
```

## Parameters

- `node`: The node.
- `recordType`: The record’s type.
- `recordName`: The record’s name.
- `attributeDict`: A dictionary of key-value pairs representing attributes for the record. Can be `NULL`.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created record.

<a id="Discussion"></a>

## Discussion

The keys in `inAttributes` can be of type `CFStringRef` or one of the `ODRecordType` constants. The values in `inAttributes` must be of type `CFArrayRef`, containing elements of type `CFStringRef` or `CFDataRef`.

If any of the attributes in `inAttributes` fails to be set, the record is deleted and `outError` is set.

## See Also

### Related Documentation

- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.

### Working with Nodes

- [ODNodeCopyDetails(\_:\_:\_:)](odnodecopydetails%28______%29.md): Returns a dictionary containing details about a node.
- [ODNodeCopyRecord(\_:\_:\_:\_:\_:)](odnodecopyrecord%28__________%29.md): Returns a reference to a record of a node.
- [ODNodeCopySubnodeNames(\_:\_:)](odnodecopysubnodenames%28____%29.md): Returns the names of subnodes for a given node.
- [ODNodeCopySupportedAttributes(\_:\_:\_:)](odnodecopysupportedattributes%28______%29.md): Returns an array of attribute types supported by a given node.
- [ODNodeCopySupportedRecordTypes(\_:\_:)](odnodecopysupportedrecordtypes%28____%29.md): Returns an array of the record types supported by a given node.
- [ODNodeCopyUnreachableSubnodeNames(\_:\_:)](odnodecopyunreachablesubnodenames%28____%29.md): Returns an array of the subnodes of a given node that are currently unreachable.
- [ODNodeCreateCopy(\_:\_:\_:)](odnodecreatecopy%28______%29.md): Returns a copy of an existing node.
- [ODNodeCreateWithName(\_:\_:\_:\_:)](odnodecreatewithname%28________%29.md): Returns a new node created with a specified name.
- [ODNodeCreateWithNodeType(\_:\_:\_:\_:)](odnodecreatewithnodetype%28________%29.md): Returns a new node created with a specified type.
- [ODNodeCustomCall(\_:\_:\_:\_:)](odnodecustomcall%28________%29.md): Returns the result of a custom call to a node.
- [ODNodeGetName(\_:)](odnodegetname%28__%29.md): Returns the name of a node.
- [ODNodeGetTypeID()](odnodegettypeid%28%29.md): Returns the type ID for an Open Directory node.
- [ODNodeSetCredentials(\_:\_:\_:\_:\_:)](odnodesetcredentials%28__________%29.md): Sets credentials for interacting with a node.
- [ODNodeSetCredentialsExtended(\_:\_:\_:\_:\_:\_:\_:)](odnodesetcredentialsextended%28______________%29.md): Sets credentials for interacting with a node using a specified authentication method.

# ODNodeCreateRecord (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a record in a specified node with specified properties.

## Declaration

```objectivec
extern ODRecordRefODNodeCreateRecord(ODNodeRef node, ODRecordType recordType, CFStringRef recordName, CFDictionaryRef attributeDict, CFErrorRef*error);
```

## Parameters

- `node`: The node.
- `recordType`: The record’s type.
- `recordName`: The record’s name.
- `attributeDict`: A dictionary of key-value pairs representing attributes for the record. Can be `NULL`.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created record.

<a id="Discussion"></a>

## Discussion

The keys in `inAttributes` can be of type `CFStringRef` or one of the `ODRecordType` constants. The values in `inAttributes` must be of type `CFArrayRef`, containing elements of type `CFStringRef` or `CFDataRef`.

If any of the attributes in `inAttributes` fails to be set, the record is deleted and `outError` is set.

## See Also

### Related Documentation

- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.

### Working with Nodes

- [ODNodeCopyDetails](odnodecopydetails%28______%29.md): Returns a dictionary containing details about a node.
- [ODNodeCopyRecord](odnodecopyrecord%28__________%29.md): Returns a reference to a record of a node.
- [ODNodeCopySubnodeNames](odnodecopysubnodenames%28____%29.md): Returns the names of subnodes for a given node.
- [ODNodeCopySupportedAttributes](odnodecopysupportedattributes%28______%29.md): Returns an array of attribute types supported by a given node.
- [ODNodeCopySupportedRecordTypes](odnodecopysupportedrecordtypes%28____%29.md): Returns an array of the record types supported by a given node.
- [ODNodeCopyUnreachableSubnodeNames](odnodecopyunreachablesubnodenames%28____%29.md): Returns an array of the subnodes of a given node that are currently unreachable.
- [ODNodeCreateCopy](odnodecreatecopy%28______%29.md): Returns a copy of an existing node.
- [ODNodeCreateWithName](odnodecreatewithname%28________%29.md): Returns a new node created with a specified name.
- [ODNodeCreateWithNodeType](odnodecreatewithnodetype%28________%29.md): Returns a new node created with a specified type.
- [ODNodeCustomCall](odnodecustomcall%28________%29.md): Returns the result of a custom call to a node.
- [ODNodeGetName](odnodegetname%28__%29.md): Returns the name of a node.
- [ODNodeGetTypeID](odnodegettypeid%28%29.md): Returns the type ID for an Open Directory node.
- [ODNodeSetCredentials](odnodesetcredentials%28__________%29.md): Sets credentials for interacting with a node.
- [ODNodeSetCredentialsExtended](odnodesetcredentialsextended%28______________%29.md): Sets credentials for interacting with a node using a specified authentication method.
- [ODNodeSetCredentialsUsingKerberosCache](odnodesetcredentialsusingkerberoscache.md): Deprecated. Sets credentials for interacting with a node with the Kerberos cache.
