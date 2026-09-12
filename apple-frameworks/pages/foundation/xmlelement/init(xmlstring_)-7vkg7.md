> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlelement/init(xmlstring:)-7vkg7](https://developer.apple.com/documentation/foundation/xmlelement/init(xmlstring:)-7vkg7)

# init(xmlString:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object created from a specified string containing XML markup.

## Declaration

```swift
init(xmlString string: String) throws
```

## Parameters

- `string`: A string containing XML markup for an element.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Initializing NSXMLElement Objects

- [init(name:)](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [init(name:stringValue:)](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [init(name:uri:)](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [init(kind:options:)](init%28kind_options_%29.md)

# initWithXMLString:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLElement` object created from a specified string containing XML markup.

## Declaration

```objectivec
- (instancetype) initWithXMLString:(NSString *) string error:(NSError **) error;
```

## Parameters

- `string`: A string containing XML markup for an element.
- `error`: On return, an [NSError](../nserror.md) object that describes any errors or warnings resulting from the parsing of the markup.

<a id="return-value"></a>

## Return Value

The initialized `NSXMLElement` object or `nil` if initialization did not succeed.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Initializing NSXMLElement Objects

- [initWithName:](init%28name_%29.md): Returns an `NSXMLElement` object initialized with the specified name.
- [initWithName:stringValue:](init%28name_stringvalue_%29.md): Returns an `NSXMLElement` object initialized with a specified name and a single text-node child containing a specified value.
- [initWithName:URI:](init%28name_uri_%29-1r286.md): Returns an `NSXMLElement` object initialized with the specified name and URI.
- [initWithKind:options:](init%28kind_options_%29.md)
