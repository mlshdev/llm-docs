> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/objects(forxquery:)](https://developer.apple.com/documentation/foundation/xmlnode/objects(forxquery:))

# objects(forXQuery:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the objects resulting from executing an XQuery query upon the receiver.

## Declaration

```swift
func objects(forXQuery xquery: String) throws -> [Any]
```

## Parameters

- `xquery`: A string that expresses an XQuery query.

<a id="Discussion"></a>

## Discussion

The receiver acts as the context item for the query (”.”).  If the receiver has been changed after parsing to have multiple adjacent text nodes, you should invoke the `NSXMLElement` method [normalizeAdjacentTextNodesPreservingCDATA(\_:)](../xmlelement/normalizeadjacenttextnodespreservingcdata%28__%29.md) (with an argument of [false](https://developer.apple.com/documentation/swift/false)) to coalesce the text nodes before querying .This convenience method invokes [objects(forXQuery:constants:)](objects%28forxquery_constants_%29.md) with `nil` for the `constants` dictionary.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Executing Queries

- [nodes(forXPath:)](nodes%28forxpath_%29.md): Returns the nodes resulting from executing an XPath query upon the receiver.
- [objects(forXQuery:constants:)](objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [xPath](xpath.md): Returns the XPath expression identifying the receiver’s location in the document tree.

# objectsForXQuery:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the objects resulting from executing an XQuery query upon the receiver.

## Declaration

```objectivec
- (NSArray *) objectsForXQuery:(NSString *) xquery error:(NSError **) error;
```

## Parameters

- `xquery`: A string that expresses an XQuery query.
- `error`: If query errors occur, indirectly returns an [NSError](../nserror.md) object describing the errors.

<a id="Discussion"></a>

## Discussion

The receiver acts as the context item for the query (”.”).  If the receiver has been changed after parsing to have multiple adjacent text nodes, you should invoke the `NSXMLElement` method [normalizeAdjacentTextNodesPreservingCDATA:](../xmlelement/normalizeadjacenttextnodespreservingcdata%28__%29.md) (with an argument of [false](https://developer.apple.com/documentation/swift/false)) to coalesce the text nodes before querying .This convenience method invokes [objectsForXQuery:constants:error:](objects%28forxquery_constants_%29.md) with `nil` for the `constants` dictionary.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Executing Queries

- [nodesForXPath:error:](nodes%28forxpath_%29.md): Returns the nodes resulting from executing an XPath query upon the receiver.
- [objectsForXQuery:constants:error:](objects%28forxquery_constants_%29.md): Returns the objects resulting from executing an XQuery query upon the receiver.
- [XPath](xpath.md): Returns the XPath expression identifying the receiver’s location in the document tree.
