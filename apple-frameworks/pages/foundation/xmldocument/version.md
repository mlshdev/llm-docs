> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/version](https://developer.apple.com/documentation/foundation/xmldocument/version)

# version (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the version of the receiver’s XML.

## Declaration

```swift
var version: String? { get set }
```

## Parameters

- `version`: A string object identifying the version of the XML.

<a id="Discussion"></a>

## Discussion

Currently, the version should be either “1.0 “or “1.1”.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [dtd](dtd.md): Returns an [XMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [isStandalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [mimeType](mimetype.md): Returns the MIME type for the receiver.

# version (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the version of the receiver’s XML.

## Declaration

```objectivec
@property (copy, nullable) NSString * version;
```

## Parameters

- `version`: A string object identifying the version of the XML.

<a id="Discussion"></a>

## Discussion

Currently, the version should be either “1.0 “or “1.1”.

## See Also

### Managing Document Attributes

- [characterEncoding](characterencoding.md): Sets the character encoding of the receiver to `encoding`,
- [documentContentKind](documentcontentkind.md): Sets the kind of output content for the receiver.
- [DTD](dtd.md): Returns an [NSXMLDTD](../xmldtd.md) object representing the internal DTD associated with the receiver.
- [standalone](isstandalone.md): Sets a Boolean value that specifies whether the receiver represents a standalone XML document.
- [MIMEType](mimetype.md): Returns the MIME type for the receiver.
