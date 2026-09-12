> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnodesetcredentialsextended(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/opendirectory/odnodesetcredentialsextended(_:_:_:_:_:_:_:))

# ODNodeSetCredentialsExtended(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Sets credentials for interacting with a node using a specified authentication method.

## Declaration

```swift
func ODNodeSetCredentialsExtended(_ node: ODNodeRef!, _ recordType: String!, _ authType: String!, _ authItems: CFArray!, _ outAuthItems: UnsafeMutablePointer<Unmanaged<CFArray>?>!, _ outContext: UnsafeMutablePointer<Unmanaged<ODContextRef>?>!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `node`: The node.
- `recordType`: The record type that uses the credentials. Can be `NULL`. The default value is `kODRecordTypeUsers`.
- `authType`: The type of authentication to use.
- `authItems`: An array of `CFString` or `CFData` objects to be used in the authentication process.
- `outAuthItems`: An array of `CFData` objects returned from the authentication process, if any are returned; `NULL` otherwise.
- `outContext`: The proper context if the authentication attempt requires a context; `NULL` otherwise. If not `NULL`, then more calls must be made with the Context to continue the authentication.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

`true` if no error occurs; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

This function sets credentials for all references to the node. If you only want to set credentials for a single record referencing the node, use [ODRecordSetNodeCredentialsExtended(\_:\_:\_:\_:\_:\_:\_:)](odrecordsetnodecredentialsextended%28______________%29.md) instead.

## See Also

### Related Documentation

- [Record Types](record-types.md): Types of Open Directory records.
- [Authentication Types](authentication-types.md): Types of authentication available in Open Directory.

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

# ODNodeSetCredentialsExtended (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Sets credentials for interacting with a node using a specified authentication method.

## Declaration

```objectivec
extern bool ODNodeSetCredentialsExtended(ODNodeRef node, ODRecordType recordType, ODAuthenticationType authType, CFArrayRef authItems, CFArrayRef*outAuthItems, ODContextRef*outContext, CFErrorRef*error);
```

## Parameters

- `node`: The node.
- `recordType`: The record type that uses the credentials. Can be `NULL`. The default value is `kODRecordTypeUsers`.
- `authType`: The type of authentication to use.
- `authItems`: An array of `CFString` or `CFData` objects to be used in the authentication process.
- `outAuthItems`: An array of `CFData` objects returned from the authentication process, if any are returned; `NULL` otherwise.
- `outContext`: The proper context if the authentication attempt requires a context; `NULL` otherwise. If not `NULL`, then more calls must be made with the Context to continue the authentication.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

`true` if no error occurs; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

This function sets credentials for all references to the node. If you only want to set credentials for a single record referencing the node, use [ODRecordSetNodeCredentialsExtended](odrecordsetnodecredentialsextended%28______________%29.md) instead.

## See Also

### Related Documentation

- [Record Types](record-types.md): Types of Open Directory records.
- [Authentication Types](authentication-types.md): Types of authentication available in Open Directory.

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
- [ODNodeSetCredentialsUsingKerberosCache](odnodesetcredentialsusingkerberoscache.md): Deprecated. Sets credentials for interacting with a node with the Kerberos cache.
