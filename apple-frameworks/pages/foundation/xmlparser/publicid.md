> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlparser/publicid](https://developer.apple.com/documentation/foundation/xmlparser/publicid)

# publicID (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The public identifier of the external entity referenced in the XML document.

## Declaration

```swift
var publicID: String? { get }
```

<a id="Discussion"></a>

## Discussion

You may access this property once a parsing operation has begun or after an error occurs.

## See Also

### Obtaining Parser State

- [columnNumber](columnnumber.md): The column number of the XML document being processed by the parser.
- [lineNumber](linenumber.md): The line number of the XML document being processed by the parser.
- [systemID](systemid.md): The system identifier of the external entity referenced in the XML document.

# publicID (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The public identifier of the external entity referenced in the XML document.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * publicID;
```

<a id="Discussion"></a>

## Discussion

You may access this property once a parsing operation has begun or after an error occurs.

## See Also

### Obtaining Parser State

- [columnNumber](columnnumber.md): The column number of the XML document being processed by the parser.
- [lineNumber](linenumber.md): The line number of the XML document being processed by the parser.
- [systemID](systemid.md): The system identifier of the external entity referenced in the XML document.
