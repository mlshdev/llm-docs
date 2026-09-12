> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/columnnumber](https://developer.apple.com/documentation/foundation/xmlparser/columnnumber)

# columnNumber (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The column number of the XML document being processed by the parser.

## Declaration

```swift
var columnNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

The column refers to the nesting level of the XML elements in the document. You may access this property once a parsing operation has begun or after an error occurs.

## See Also

### Obtaining Parser State

- [lineNumber](linenumber.md): The line number of the XML document being processed by the parser.
- [publicID](publicid.md): The public identifier of the external entity referenced in the XML document.
- [systemID](systemid.md): The system identifier of the external entity referenced in the XML document.

# columnNumber (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The column number of the XML document being processed by the parser.

## Declaration

```objectivec
@property (readonly) NSInteger columnNumber;
```

<a id="Discussion"></a>

## Discussion

The column refers to the nesting level of the XML elements in the document. You may access this property once a parsing operation has begun or after an error occurs.

## See Also

### Obtaining Parser State

- [lineNumber](linenumber.md): The line number of the XML document being processed by the parser.
- [publicID](publicid.md): The public identifier of the external entity referenced in the XML document.
- [systemID](systemid.md): The system identifier of the external entity referenced in the XML document.
