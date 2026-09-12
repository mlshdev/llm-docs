> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/xmldata](https://developer.apple.com/documentation/foundation/xmldocument/xmldata)

# xmlData (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

## Declaration

```swift
var xmlData: Data { get }
```

<a id="Discussion"></a>

## Discussion

This method invokes [xmlData(options:)](xmldata%28options_%29.md) with an option of `NSXMLNodeOptionsNone`. The encoding used is based on the value returned from [characterEncoding](characterencoding.md) or UTF-8 if no valid encoding is returned by that method.

## See Also

### Writing a Document as XML Data

- [xmlData(options:)](xmldata%28options_%29.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

# XMLData (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

## Declaration

```objectivec
@property (copy, readonly) NSData * XMLData;
```

<a id="Discussion"></a>

## Discussion

This method invokes [XMLDataWithOptions:](xmldata%28options_%29.md) with an option of `NSXMLNodeOptionsNone`. The encoding used is based on the value returned from [characterEncoding](characterencoding.md) or UTF-8 if no valid encoding is returned by that method.

## See Also

### Writing a Document as XML Data

- [XMLDataWithOptions:](xmldata%28options_%29.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.
