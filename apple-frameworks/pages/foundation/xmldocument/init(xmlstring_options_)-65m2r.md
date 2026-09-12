> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/init(xmlstring:options:)-65m2r](https://developer.apple.com/documentation/foundation/xmldocument/init(xmlstring:options:)-65m2r)

# init(xmlString:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.

## Declaration

```swift
convenience init(xmlString string: String, options mask: XMLNode.Options = []) throws
```

## Parameters

- `string`: A string object containing XML markup text.
- `mask`: A bit mask for input options. You can specify multiple options by bit-OR’ing them. See Constants for a list of valid input options.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDocument` object, or `nil` if initialization fails because of parsing errors or other reasons.

<a id="Discussion"></a>

## Discussion

The encoding of the document is set to UTF-8.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Initializing NSXMLDocument Objects

- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [init(data:options:)](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [init(rootElement:)](init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [replacementClass(for:)](replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.

# initWithXMLString:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.

## Declaration

```objectivec
- (instancetype) initWithXMLString:(NSString *) string options:(NSXMLNodeOptions) mask error:(NSError **) error;
```

## Parameters

- `string`: A string object containing XML markup text.
- `mask`: A bit mask for input options. You can specify multiple options by bit-OR’ing them. See Constants for a list of valid input options.
- `error`: An error object that, on return, identifies any parsing errors and warnings or connection problems.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDocument` object, or `nil` if initialization fails because of parsing errors or other reasons.

<a id="Discussion"></a>

## Discussion

The encoding of the document is set to UTF-8.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Initializing NSXMLDocument Objects

- [initWithContentsOfURL:options:error:](init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [initWithData:options:error:](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [initWithRootElement:](init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [replacementClassForClass:](replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.
