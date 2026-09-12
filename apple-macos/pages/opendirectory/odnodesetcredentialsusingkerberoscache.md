> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnodesetcredentialsusingkerberoscache](https://developer.apple.com/documentation/opendirectory/odnodesetcredentialsusingkerberoscache)

# ODNodeSetCredentialsUsingKerberosCache

**Interface language:** Objective-C

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+ (deprecated in 10.7)

Sets credentials for interacting with a node with the Kerberos cache.

## Declaration

```objectivec
extern bool ODNodeSetCredentialsUsingKerberosCache(ODNodeRef node, CFStringRef cacheName, CFErrorRef*error);
```

## Parameters

- `node`: The node.
- `cacheName`: The name of the Kerberos cache to use. Can be `NULL`. By default, the currently active Kerberos cache is used.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

`true` if the credentials are successfully set; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If this function fails, the previous credentials for the node are used.

This function sets credentials for all references to the node. If you only want to set credentials for a single record referencing the node, use [ODRecordSetNodeCredentialsUsingKerberosCache](odrecordsetnodecredentialsusingkerberoscache.md) instead.

## See Also

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
