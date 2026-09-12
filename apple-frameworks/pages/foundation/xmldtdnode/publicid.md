> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtdnode/publicid](https://developer.apple.com/documentation/foundation/xmldtdnode/publicid)

# publicID (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the public identifier associated with the receiver.

## Declaration

```swift
var publicID: String? { get set }
```

<a id="return-value"></a>

## Return Value

The public identifier associated with the receiver.

<a id="Discussion"></a>

## Discussion

The public ID is applicable to entities and notations.

## See Also

### Managing DTD Identifiers

- [isExternal](isexternal.md): True if the system id is set. Valid for entities and notations.
- [notationName](notationname.md): Returns the name of the notation associated with the receiver.
- [systemID](systemid.md): Returns the system identifier associated with the receiver.

# publicID (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the public identifier associated with the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * publicID;
```

<a id="return-value"></a>

## Return Value

The public identifier associated with the receiver.

<a id="Discussion"></a>

## Discussion

The public ID is applicable to entities and notations.

## See Also

### Managing DTD Identifiers

- [external](isexternal.md): True if the system id is set. Valid for entities and notations.
- [notationName](notationname.md): Returns the name of the notation associated with the receiver.
- [systemID](systemid.md): Returns the system identifier associated with the receiver.
