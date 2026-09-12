> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/nodes(forxpath:)](https://developer.apple.com/documentation/foundation/xmlnode/nodes(forxpath:))

# nodes(forXPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the nodes resulting from executing an XPath query upon the receiver.

## Declaration

```swift
func nodes(forXPath xpath: String) throws -> [XMLNode]
```

## Parameters

- `xpath`: A string that expresses an XPath query.

<a id="return-value"></a>

## Return Value

An array of `NSXMLNode` objects that match the query, or an empty array if there are no matches.

<a id="Discussion"></a>

## Discussion

The receiver acts as the context item for the query (”.”).  If you have explicitly added adjacent text nodes as children of an element, you should invoke the `NSXMLElement` method [normalizeAdjacentTextNodesPreservingCDATA(\_:)](../xmlelement/normalizeadjacenttextnodespreservingcdata%28__%29.md) (with an argument of [false](https://developer.apple.com/documentation/swift/false)) on the element before applying any XPath queries to it; this method coalesces these text nodes. The same precaution applies if you have processed a document preserving CDATA sections and these sections are adjacent to text nodes.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Executing Queries

- [objects(forXQuery:)](objects%28forxquery_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [objects(forXQuery:constants:)](objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [xPath](xpath.md): Returns the XPath expression identifying the receiver’s location in the document tree.

# nodesForXPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the nodes resulting from executing an XPath query upon the receiver.

## Declaration

```objectivec
- (NSArray<__kindof NSXMLNode *> *) nodesForXPath:(NSString *) xpath error:(NSError **) error;
```

## Parameters

- `xpath`: A string that expresses an XPath query.
- `error`: If query errors occur, indirectly returns an [NSError](../nserror.md) object describing the errors.

<a id="return-value"></a>

## Return Value

An array of `NSXMLNode` objects that match the query, or an empty array if there are no matches. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

The receiver acts as the context item for the query (”.”).  If you have explicitly added adjacent text nodes as children of an element, you should invoke the `NSXMLElement` method [normalizeAdjacentTextNodesPreservingCDATA:](../xmlelement/normalizeadjacenttextnodespreservingcdata%28__%29.md) (with an argument of [false](https://developer.apple.com/documentation/swift/false)) on the element before applying any XPath queries to it; this method coalesces these text nodes. The same precaution applies if you have processed a document preserving CDATA sections and these sections are adjacent to text nodes.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Executing Queries

- [objectsForXQuery:error:](objects%28forxquery_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [objectsForXQuery:constants:error:](objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [XPath](xpath.md): Returns the XPath expression identifying the receiver’s location in the document tree.
