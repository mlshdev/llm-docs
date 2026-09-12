> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/validate()](https://developer.apple.com/documentation/foundation/xmldocument/validate())

# validate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Validates the document against the governing schema and returns whether the document conforms to the schema.

## Declaration

```swift
func validate() throws
```

<a id="Discussion"></a>

## Discussion

The constants indicating the kind of validation errors are emitted by the underlying parser; see `NSXMLParser.h` for most of these constants. If the schema is defined with a DTD, this method uses the [XMLDTD](../xmldtd.md) object set for the receiver for validation. If the schema is based on XML Schema, the method uses the URL specified as the value of the `xsi:schemaLocation` attribute of the root element.

You can validate an XML document when it is first processed by specifying the `NSXMLDocumentValidate` option when you initialize an `NSXMLDocument` object with the [init(contentsOf:options:)](init%28contentsof_options_%29.md), [init(data:options:)](init%28data_options_%29.md), or [init(xmlString:options:)](init%28xmlstring_options_%29-65m2r.md) methods.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# validateAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Validates the document against the governing schema and returns whether the document conforms to the schema.

## Declaration

```objectivec
- (BOOL) validateAndReturnError:(NSError **) error;
```

## Parameters

- `error`: If validation fails, on return contains an [NSError](../nserror.md) object describing the reason or reasons for failure.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the validation operation succeeded, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The constants indicating the kind of validation errors are emitted by the underlying parser; see `NSXMLParser.h` for most of these constants. If the schema is defined with a DTD, this method uses the [NSXMLDTD](../xmldtd.md) object set for the receiver for validation. If the schema is based on XML Schema, the method uses the URL specified as the value of the `xsi:schemaLocation` attribute of the root element.

You can validate an XML document when it is first processed by specifying the `NSXMLDocumentValidate` option when you initialize an `NSXMLDocument` object with the [initWithContentsOfURL:options:error:](init%28contentsof_options_%29.md), [initWithData:options:error:](init%28data_options_%29.md), or [initWithXMLString:options:error:](init%28xmlstring_options_%29-65m2r.md) methods.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
