> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/init(rootelement:)](https://developer.apple.com/documentation/foundation/xmldocument/init(rootelement:))

# init(rootElement:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLDocument` object initialized with a single child, the root element.

## Declaration

```swift
init(rootElement element: XMLElement?)
```

## Parameters

- `element`: An [XMLElement](../xmlelement.md) object representing an XML element.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDocument` object, or  `nil` if initialization fails for any reason.

## See Also

### Initializing NSXMLDocument Objects

- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [init(data:options:)](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [init(xmlString:options:)](init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.
- [replacementClass(for:)](replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.

# initWithRootElement: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSXMLDocument` object initialized with a single child, the root element.

## Declaration

```objectivec
- (instancetype) initWithRootElement:(NSXMLElement *) element;
```

## Parameters

- `element`: An [NSXMLElement](../xmlelement.md) object representing an XML element.

<a id="return-value"></a>

## Return Value

An initialized `NSXMLDocument` object, or  `nil` if initialization fails for any reason.

## See Also

### Initializing NSXMLDocument Objects

- [initWithContentsOfURL:options:error:](init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [initWithData:options:error:](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [initWithXMLString:options:error:](init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.
- [replacementClassForClass:](replacementclass%28for_%29.md): Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.
