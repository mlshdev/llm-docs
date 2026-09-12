> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/nodewithsession:type:error:](https://developer.apple.com/documentation/opendirectory/odnode/nodewithsession:type:error:)

# nodeWithSession:type:error:

**Interface language:** Objective-C

**Framework:** Open Directory  
**Kind:** Type Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns an autoreleased node object with a specified session and type.

## Declaration

```objectivec
+ (instancetype) nodeWithSession:(ODSession *) inSession type:(ODNodeType) inType error:(NSError **) outError;
```

## Parameters

- `inSession`: The session.
- `inType`: The node type.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The created node object.

## See Also

### Creating and Initializing a Node

- [initWithSession:name:error:](init%28session_name_%29.md): Creates a node object with a specified session and name.
- [initWithSession:type:error:](init%28session_type_%29.md): Creates a node object with a specified session and type.
- [nodeWithSession:name:error:](nodewithsession_name_error_.md): Returns an autoreleased node object with a specified session and name.
