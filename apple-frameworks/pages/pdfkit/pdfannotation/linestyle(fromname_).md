> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfannotation/linestyle(fromname:)

# lineStyle(fromName:) (Swift)

**Framework:** PDFKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a line style that corresponds to the specified name.

## Declaration

```swift
class func lineStyle(fromName name: String) -> PDFLineStyle
```

## Parameters

- `name`: The name of a line style, which matches the definition in the Adobe PDF Specification.

## See Also

### Configuring Line Annotations

- [startPoint](startpoint.md): The point where a line begins, in annotation-space coordinates.
- [endPoint](endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [name(for:)](name%28for_%29.md): Returns the name of the line style, which matches the definition in the Adobe PDF Specification.

# lineStyleFromName: (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a line style that corresponds to the specified name.

## Declaration

```objectivec
+ (PDFLineStyle) lineStyleFromName:(NSString *) name;
```

## Parameters

- `name`: The name of a line style, which matches the definition in the Adobe PDF Specification.

## See Also

### Configuring Line Annotations

- [startPoint](startpoint.md): The point where a line begins, in annotation-space coordinates.
- [endPoint](endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [nameForLineStyle:](name%28for_%29.md): Returns the name of the line style, which matches the definition in the Adobe PDF Specification.
