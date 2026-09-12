> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/xpath](https://developer.apple.com/documentation/foundation/xmlnode/xpath)

# xPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the XPath expression identifying the receiver’s location in the document tree.

## Declaration

```swift
var xPath: String? { get }
```

<a id="Discussion"></a>

## Discussion

For example, this method might return a string such as “foo/bar\[2\]/baz”. The result of this method can be used directly in the [nodes(forXPath:)](nodes%28forxpath_%29.md) and [objects(forXQuery:constants:)](objects%28forxquery_constants_%29.md) methods.

## See Also

### Executing Queries

- [nodes(forXPath:)](nodes%28forxpath_%29.md): Returns the nodes resulting from executing an XPath query upon the receiver.
- [objects(forXQuery:)](objects%28forxquery_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [objects(forXQuery:constants:)](objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.

# XPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the XPath expression identifying the receiver’s location in the document tree.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * XPath;
```

<a id="Discussion"></a>

## Discussion

For example, this method might return a string such as “foo/bar\[2\]/baz”. The result of this method can be used directly in the [nodesForXPath:error:](nodes%28forxpath_%29.md) and [objectsForXQuery:constants:error:](objects%28forxquery_constants_%29.md) methods.

## See Also

### Executing Queries

- [nodesForXPath:error:](nodes%28forxpath_%29.md): Returns the nodes resulting from executing an XPath query upon the receiver.
- [objectsForXQuery:error:](objects%28forxquery_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [objectsForXQuery:constants:error:](objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
