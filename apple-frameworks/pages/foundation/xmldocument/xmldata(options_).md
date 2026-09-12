> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/xmldata(options:)](https://developer.apple.com/documentation/foundation/xmldocument/xmldata(options:))

# xmlData(options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

## Declaration

```swift
func xmlData(options: XMLNode.Options = []) -> Data
```

## Parameters

- `options`: One or more options (bit-OR’d if multiple) to affect the output of the document; see Constants for the valid output options.

<a id="Discussion"></a>

## Discussion

The encoding used is based on the value returned from [characterEncoding](characterencoding.md).

## See Also

### Writing a Document as XML Data

- [xmlData](xmldata.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

# XMLDataWithOptions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.

## Declaration

```objectivec
- (NSData *) XMLDataWithOptions:(NSXMLNodeOptions) options;
```

## Parameters

- `options`: One or more options (bit-OR’d if multiple) to affect the output of the document; see Constants for the valid output options.

<a id="Discussion"></a>

## Discussion

The encoding used is based on the value returned from [characterEncoding](characterencoding.md).

## See Also

### Writing a Document as XML Data

- [XMLData](xmldata.md): Returns the XML string representation of the receiver—that is, the entire document—encapsulated in a data object.
