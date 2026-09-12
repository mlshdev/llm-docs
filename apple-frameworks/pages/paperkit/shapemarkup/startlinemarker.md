> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/shapemarkup/startlinemarker](https://developer.apple.com/documentation/paperkit/shapemarkup/startlinemarker)

# startLineMarker

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The line marker used at the start of an open shape path.

## Declaration

```swift
var startLineMarker: ShapeMarkup.LineMarker { get set }
```

<a id="discussion"></a>

## Discussion

Line markers are only visible on open paths. Use `shape.supportsLineMarkers` to check whether the current shape supports line markers. Closed shapes like `.rectangle` and `.ellipse` ignore this property.

Default is `.none`.

## See Also

### Configuring line markers

- [endLineMarker](endlinemarker.md): The line marker used at the end of an open shape path.
- [ShapeMarkup.LineMarker](linemarker.md): A marker that can be attached to a line.
