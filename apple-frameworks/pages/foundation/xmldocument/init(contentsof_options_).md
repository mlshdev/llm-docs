> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/init(contentsof:options:)](https://developer.apple.com/documentation/foundation/xmldocument/init(contentsof:options:))

# init(contentsOf:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source

## Declaration

```swift
convenience init(contentsOf url: URL, options mask: XMLNode.Options = []) throws
```

## Parameters

- `url`: An [NSURL](../nsurl.md) object specifying a URL source.
- `mask`: A bit mask for input options. You can specify multiple options by bit-OR’ing them. See Constants for a list of valid input options.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDocument` object, or  `nil` if initialization fails because of parsing errors or other reasons.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Initializing NSXMLDocument Objects

- [init(data:options:)](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [init(rootElement:)](init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [init(xmlString:options:)](init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.
- [replacementClass(for:)](replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.

# initWithContentsOfURL:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url options:(NSXMLNodeOptions) mask error:(NSError **) error;
```

## Parameters

- `url`: An [NSURL](../nsurl.md) object specifying a URL source.
- `mask`: A bit mask for input options. You can specify multiple options by bit-OR’ing them. See Constants for a list of valid input options.
- `error`: An error object that, on return, identifies any parsing errors and warnings or connection problems.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDocument` object, or  `nil` if initialization fails because of parsing errors or other reasons.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [Tree-Based XML Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSXML_Concepts/NSXML.html#//apple_ref/doc/uid/TP40001269)

### Initializing NSXMLDocument Objects

- [initWithData:options:error:](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [initWithRootElement:](init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [initWithXMLString:options:error:](init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.
- [replacementClassForClass:](replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.
