> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/characterencoding](https://developer.apple.com/documentation/foundation/xmldocument/characterencoding)

# characterEncoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the character encoding of the receiver to `encoding`,

## Declaration

```swift
var characterEncoding: String? { get set }
```

## Parameters

- `encoding`: A string that specifies an encoding; it must match the name of an IANA character set. See [http://www.iana.org/assignments/character-sets](http://www.iana.org/assignments/character-sets) for a list of valid encoding specifiers.

<a id="Discussion"></a>

## Discussion

Typically the encoding is specified in the XML declaration of a document that is processed, but it can be set at any time. If the specified encoding does not match the actual encoding, parsing of the document might fail.

## See Also

### Managing Document Attributes

- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [dtd](dtd.md): Returns an [XMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [isStandalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [mimeType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.

# characterEncoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the character encoding of the receiver to `encoding`,

## Declaration

```objectivec
@property (copy, nullable) NSString * characterEncoding;
```

## Parameters

- `encoding`: A string that specifies an encoding; it must match the name of an IANA character set. See [http://www.iana.org/assignments/character-sets](http://www.iana.org/assignments/character-sets) for a list of valid encoding specifiers.

<a id="Discussion"></a>

## Discussion

Typically the encoding is specified in the XML declaration of a document that is processed, but it can be set at any time. If the specified encoding does not match the actual encoding, parsing of the document might fail.

## See Also

### Managing Document Attributes

- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [DTD](dtd.md): Returns an [NSXMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [standalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [MIMEType](mimetype.md): Returns the MIME type for the receiver.
- [version](version.md): Sets the version of the receiver’s XML.
