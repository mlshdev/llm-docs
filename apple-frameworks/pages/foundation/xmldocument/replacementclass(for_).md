> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/replacementclass(for:)](https://developer.apple.com/documentation/foundation/xmldocument/replacementclass(for:))

# replacementClass(for:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.

## Declaration

```swift
class func replacementClass(for cls: AnyClass) -> AnyClass
```

## Parameters

- `cls`: A `Class` object identifying an NSXML class that is to be replaced by your custom class.

<a id="return-value"></a>

## Return Value

The substituted class.

<a id="Discussion"></a>

## Discussion

For example, if you have a custom subclass of [XMLElement](../xmlelement.md) that you want to be used in place of `NSXMLElement`, you would make the following override:

```objc
+ (Class)replacementClassForClass:(Class)currentClass {
    if ( currentClass == [NSXMLElement class] ) {
        return [MyCustomElementClass class];
    }
}
```

This method is invoked before a document is parsed. The substituted class must be a subclass of [XMLNode](../xmlnode.md), `NSXMLDocument`, `NSXMLElement`, [XMLDTD](../xmldtd.md), or [XMLDTDNode](../xmldtdnode.md).

## See Also

### Related Documentation

- [setRootElement(\_:)](setrootelement%28__%29.md): Set the root element of the receiver.

### Initializing NSXMLDocument Objects

- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [init(data:options:)](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [init(rootElement:)](init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [init(xmlString:options:)](init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.

# replacementClassForClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to substitute a custom class for an NSXML class that the parser uses to create node instances.

## Declaration

```objectivec
+ (Class) replacementClassForClass:(Class) cls;
```

## Parameters

- `cls`: A `Class` object identifying an NSXML class that is to be replaced by your custom class.

<a id="return-value"></a>

## Return Value

The substituted class.

<a id="Discussion"></a>

## Discussion

For example, if you have a custom subclass of [NSXMLElement](../xmlelement.md) that you want to be used in place of `NSXMLElement`, you would make the following override:

```objc
+ (Class)replacementClassForClass:(Class)currentClass {
    if ( currentClass == [NSXMLElement class] ) {
        return [MyCustomElementClass class];
    }
}
```

This method is invoked before a document is parsed. The substituted class must be a subclass of [NSXMLNode](../xmlnode.md), `NSXMLDocument`, `NSXMLElement`, [NSXMLDTD](../xmldtd.md), or [NSXMLDTDNode](../xmldtdnode.md).

## See Also

### Related Documentation

- [setRootElement:](setrootelement%28__%29.md): Set the root element of the receiver.

### Initializing NSXMLDocument Objects

- [initWithContentsOfURL:options:error:](init%28contentsof_options_%29.md): Initializes and returns an NSXMLDocument object created from the XML or HTML contents of a URL-referenced source
- [initWithData:options:error:](init%28data_options_%29.md): Initializes and returns an `NSXMLDocument` object created from an [NSData](../nsdata.md) object.
- [initWithRootElement:](init%28rootelement_%29.md): Returns an `NSXMLDocument` object initialized with a single child, the root element.
- [initWithXMLString:options:error:](init%28xmlstring_options_%29-65m2r.md): Initializes and returns an `NSXMLDocument` object created from a string containing XML markup text.
