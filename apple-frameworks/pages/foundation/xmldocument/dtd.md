> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/dtd](https://developer.apple.com/documentation/foundation/xmldocument/dtd)

# dtd (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an [XMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.

## Declaration

```swift
@NSCopying var dtd: XMLDTD? { get set }
```

<a id="return-value"></a>

## Return Value

An [XMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver or `nil` if no DTD has been associated.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [isStandalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [mimeType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.

# DTD (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an [NSXMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSXMLDTD * DTD;
```

<a id="return-value"></a>

## Return Value

An [NSXMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver or `nil` if no DTD has been associated.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [standalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [MIMEType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.
