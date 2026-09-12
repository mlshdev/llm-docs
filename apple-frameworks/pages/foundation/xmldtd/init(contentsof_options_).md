> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtd/init(contentsof:options:)](https://developer.apple.com/documentation/foundation/xmldtd/init(contentsof:options:))

# init(contentsOf:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns an `NSXMLDTD` object created from the DTD declarations in a URL-referenced source.

## Declaration

```swift
convenience init(contentsOf url: URL, options mask: XMLNode.Options = []) throws
```

## Parameters

- `url`: An [NSURL](../nsurl.md) object identifying a URL source.
- `mask`: A bit mask specifying input options; bit-OR multiple options. The current valid options are `NSXMLNodePreserveWhitespace` and `NSXMLNodePreserveEntities`; these constants are described in the “Constants” section of the [XMLNode](../xmlnode.md) reference.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDTD` object or `nil` if initialization fails because of parsing errors or other reasons.

<a id="Discussion"></a>

## Discussion

You use this method to create a stand-alone DTD which you can thereafter query and use for validation. You can associate the DTD created through this message with a document by setting the [dtd](../xmldocument/dtd.md) property on an [XMLDocument](../xmldocument.md) object.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [validate()](../xmldocument/validate%28%29.md): Validates the document against the governing schema and returns whether the document conforms to the schema.
- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Initializing an NSXMLDTD Object

- [init(data:options:)](init%28data_options_%29.md): Initializes and returns an `NSXMLDTD` object created from the DTD declarations encapsulated in an [NSData](../nsdata.md) object

# initWithContentsOfURL:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns an `NSXMLDTD` object created from the DTD declarations in a URL-referenced source.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url options:(NSXMLNodeOptions) mask error:(NSError **) error;
```

## Parameters

- `url`: An [NSURL](../nsurl.md) object identifying a URL source.
- `mask`: A bit mask specifying input options; bit-OR multiple options. The current valid options are `NSXMLNodePreserveWhitespace` and `NSXMLNodePreserveEntities`; these constants are described in the “Constants” section of the [NSXMLNode](../xmlnode.md) reference.
- `error`: On return, this parameter holds an [NSError](../nserror.md) object describing any errors and warnings related to parsing and remote connection.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDTD` object or `nil` if initialization fails because of parsing errors or other reasons.

<a id="Discussion"></a>

## Discussion

You use this method to create a stand-alone DTD which you can thereafter query and use for validation. You can associate the DTD created through this message with a document by setting the [DTD](../xmldocument/dtd.md) property on an [NSXMLDocument](../xmldocument.md) object.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [validateAndReturnError:](../xmldocument/validate%28%29.md): Validates the document against the governing schema and returns whether the document conforms to the schema.
- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Initializing an NSXMLDTD Object

- [initWithData:options:error:](init%28data_options_%29.md): Initializes and returns an `NSXMLDTD` object created from the DTD declarations encapsulated in an [NSData](../nsdata.md) object
