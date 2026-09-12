> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/name(for:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/name(for:))

# name(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the name of the line style, which matches the definition in the Adobe PDF Specification.

## Declaration

```swift
class func name(for style: PDFLineStyle) -> String
```

## Parameters

- `style`: A line style to get a name for.

## See Also

### Configuring Line Annotations

- [startPoint](startpoint.md): The point where a line begins, in annotation-space coordinates.
- [endPoint](endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [lineStyle(fromName:)](linestyle%28fromname_%29.md): Returns a line style that corresponds to the specified name.

# nameForLineStyle: (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the name of the line style, which matches the definition in the Adobe PDF Specification.

## Declaration

```objectivec
+ (NSString *) nameForLineStyle:(PDFLineStyle) style;
```

## Parameters

- `style`: A line style to get a name for.

## See Also

### Configuring Line Annotations

- [startPoint](startpoint.md): The point where a line begins, in annotation-space coordinates.
- [endPoint](endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [lineStyleFromName:](linestyle%28fromname_%29.md): Returns a line style that corresponds to the specified name.
