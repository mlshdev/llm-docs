> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/xmlnode/description

# description (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

Used for debugging. May give more information than XMLString.

## See Also

### Emitting Node Content

- [xmlString](xmlstring.md): Returns the string representation of the receiver as it would appear in an XML document.
- [xmlString(options:)](xmlstring%28options_%29.md): Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.
- [canonicalXMLStringPreservingComments(\_:)](canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.

# description (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
@property (copy, readonly) NSString * description;
```

<a id="discussion"></a>

## Discussion

Used for debugging. May give more information than XMLString.

## See Also

### Emitting Node Content

- [XMLString](xmlstring.md): Returns the string representation of the receiver as it would appear in an XML document.
- [XMLStringWithOptions:](xmlstring%28options_%29.md): Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.
- [canonicalXMLStringPreservingComments:](canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.
