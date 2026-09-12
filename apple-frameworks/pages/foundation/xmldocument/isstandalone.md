> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/isstandalone](https://developer.apple.com/documentation/foundation/xmldocument/isstandalone)

# isStandalone (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets a Boolean value that specifies whether the receiver represents a standalone XML document.

## Declaration

```swift
var isStandalone: Bool { get set }
```

## Parameters

- `standalone`: [true](https://developer.apple.com/documentation/swift/true) if the receiver represents a standalone XML document, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

A standalone document does not have an external DTD associated with it.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [dtd](dtd.md): Returns an [XMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [mimeType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.

# standalone (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets a Boolean value that specifies whether the receiver represents a standalone XML document.

## Declaration

```objectivec
@property (getter=isStandalone) BOOL standalone;
```

## Parameters

- `standalone`: [true](https://developer.apple.com/documentation/swift/true) if the receiver represents a standalone XML document, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

A standalone document does not have an external DTD associated with it.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [DTD](dtd.md): Returns an [NSXMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [MIMEType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.
