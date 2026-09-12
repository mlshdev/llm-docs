> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtdnode/isexternal](https://developer.apple.com/documentation/foundation/xmldtdnode/isexternal)

# isExternal (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

True if the system id is set. Valid for entities and notations.

## Declaration

```swift
var isExternal: Bool { get }
```

## See Also

### Managing DTD Identifiers

- [notationName](notationname.md): Returns the name of the notation associated with the receiver.
- [publicID](publicid.md): Returns the public identifier associated with the receiver.
- [systemID](systemid.md): Returns the system identifier associated with the receiver.

# external (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

True if the system id is set. Valid for entities and notations.

## Declaration

```objectivec
@property (readonly, getter=isExternal) BOOL external;
```

## See Also

### Managing DTD Identifiers

- [notationName](notationname.md): Returns the name of the notation associated with the receiver.
- [publicID](publicid.md): Returns the public identifier associated with the receiver.
- [systemID](systemid.md): Returns the system identifier associated with the receiver.
