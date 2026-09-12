> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtdnode/notationname](https://developer.apple.com/documentation/foundation/xmldtdnode/notationname)

# notationName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the notation associated with the receiver.

## Declaration

```swift
var notationName: String? { get set }
```

<a id="return-value"></a>

## Return Value

The name of the notation associated with the receiver.

<a id="Discussion"></a>

## Discussion

Notations are applicable to unparsed external entities, processing instructions, and some attribute values.

## See Also

### Managing DTD Identifiers

- [isExternal](isexternal.md): True if the system id is set. Valid for entities and notations.
- [publicID](publicid.md): Returns the public identifier associated with the receiver.
- [systemID](systemid.md): Returns the system identifier associated with the receiver.

# notationName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the notation associated with the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * notationName;
```

<a id="return-value"></a>

## Return Value

The name of the notation associated with the receiver.

<a id="Discussion"></a>

## Discussion

Notations are applicable to unparsed external entities, processing instructions, and some attribute values.

## See Also

### Managing DTD Identifiers

- [external](isexternal.md): True if the system id is set. Valid for entities and notations.
- [publicID](publicid.md): Returns the public identifier associated with the receiver.
- [systemID](systemid.md): Returns the system identifier associated with the receiver.
