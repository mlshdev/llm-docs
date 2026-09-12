> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/xmlstring](https://developer.apple.com/documentation/foundation/xmlnode/xmlstring)

# xmlString (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the string representation of the receiver as it would appear in an XML document.

## Declaration

```swift
var xmlString: String { get }
```

<a id="Discussion"></a>

## Discussion

The returned string includes the string representations of all children. This method invokes [xmlString(options:)](xmlstring%28options_%29.md) with an `options` argument of `NSXMLNodeOptionsNone`.

## See Also

### Emitting Node Content

- [xmlString(options:)](xmlstring%28options_%29.md): Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.
- [canonicalXMLStringPreservingComments(\_:)](canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.
- [description](description.md)

# XMLString (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the string representation of the receiver as it would appear in an XML document.

## Declaration

```objectivec
@property (copy, readonly) NSString * XMLString;
```

<a id="Discussion"></a>

## Discussion

The returned string includes the string representations of all children. This method invokes [XMLStringWithOptions:](xmlstring%28options_%29.md) with an `options` argument of `NSXMLNodeOptionsNone`.

## See Also

### Emitting Node Content

- [XMLStringWithOptions:](xmlstring%28options_%29.md): Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.
- [canonicalXMLStringPreservingComments:](canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.
- [description](description.md)
