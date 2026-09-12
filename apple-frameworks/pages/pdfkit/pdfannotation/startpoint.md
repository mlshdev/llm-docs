> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/startpoint](https://developer.apple.com/documentation/pdfkit/pdfannotation/startpoint)

# startPoint (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The point where a line begins, in annotation-space coordinates.

## Declaration

```swift
var startPoint: CGPoint { get set }
```

```swift
var startPoint: NSPoint { get set }
```

## See Also

### Configuring Line Annotations

- [endPoint](endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [lineStyle(fromName:)](linestyle%28fromname_%29.md): Returns a line style that corresponds to the specified name.
- [name(for:)](name%28for_%29.md): Returns the name of the line style, which matches the definition in the Adobe PDF Specification.

# startPoint (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The point where a line begins, in annotation-space coordinates.

## Declaration

```objectivec
@property (nonatomic) CGPoint startPoint;
```

```objectivec
@property (nonatomic) NSPoint startPoint;
```

## See Also

### Configuring Line Annotations

- [endPoint](endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [lineStyleFromName:](linestyle%28fromname_%29.md): Returns a line style that corresponds to the specified name.
- [nameForLineStyle:](name%28for_%29.md): Returns the name of the line style, which matches the definition in the Adobe PDF Specification.
