> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/xmlstring(options:)](https://developer.apple.com/documentation/foundation/xmlnode/xmlstring(options:))

# xmlString(options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.

## Declaration

```swift
func xmlString(options: XMLNode.Options = []) -> String
```

## Parameters

- `options`: One or more `enum` constants identifying an output option; bit-OR multiple constants together.  See Constants for a list of valid constants for specifying output options.

<a id="Discussion"></a>

## Discussion

The returned string includes the string representations of all children.

## See Also

### Emitting Node Content

- [xmlString](xmlstring.md): Returns the string representation of the receiver as it would appear in an XML document.
- [canonicalXMLStringPreservingComments(\_:)](canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.
- [description](description.md)

# XMLStringWithOptions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the string representation of the receiver as it would appear in an XML document, with one or more output options specified.

## Declaration

```objectivec
- (NSString *) XMLStringWithOptions:(NSXMLNodeOptions) options;
```

## Parameters

- `options`: One or more `enum` constants identifying an output option; bit-OR multiple constants together.  See Constants for a list of valid constants for specifying output options.

<a id="Discussion"></a>

## Discussion

The returned string includes the string representations of all children.

## See Also

### Emitting Node Content

- [XMLString](xmlstring.md): Returns the string representation of the receiver as it would appear in an XML document.
- [canonicalXMLStringPreservingComments:](canonicalxmlstringpreservingcomments%28__%29.md): Returns a string object encapsulating the receiver’s XML in canonical form.
- [description](description.md)
