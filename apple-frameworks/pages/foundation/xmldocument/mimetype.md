> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/mimetype](https://developer.apple.com/documentation/foundation/xmldocument/mimetype)

# mimeType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the MIME type for the receiver.

## Declaration

```swift
var mimeType: String? { get set }
```

<a id="return-value"></a>

## Return Value

The MIME type for the receiver (for example, “text/xml”).

<a id="Discussion"></a>

## Discussion

MIME types are assigned by IANA (see [http://www.iana.org/assignments/media-types/index.html](http://www.iana.org/assignments/media-types/index.html)).

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [dtd](dtd.md): Returns an [XMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [isStandalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [version](version.md): Sets the version of the receiver’s XML.

# MIMEType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the MIME type for the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * MIMEType;
```

<a id="return-value"></a>

## Return Value

The MIME type for the receiver (for example, “text/xml”).

<a id="Discussion"></a>

## Discussion

MIME types are assigned by IANA (see [http://www.iana.org/assignments/media-types/index.html](http://www.iana.org/assignments/media-types/index.html)).

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [DTD](dtd.md): Returns an [NSXMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [standalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [version](version.md): Sets the version of the receiver’s XML.
