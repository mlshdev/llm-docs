> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/draggesture/value/translation](https://developer.apple.com/documentation/swiftui/draggesture/value/translation)

# translation

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The total translation from the start of the drag gesture to the current event of the drag gesture.

## Declaration

```swift
var translation: CGSize { get }
```

<a id="discussion"></a>

## Discussion

This is equivalent to `location.{x,y} - startLocation.{x,y}`.

## See Also

### Getting 2D position

- [startLocation](startlocation.md): The location of the drag gesture’s first event.
- [location](location.md): The location of the drag gesture’s current event.
- [predictedEndLocation](predictedendlocation.md): A prediction, based on the current drag velocity, of where the final location will be if dragging stopped now.
- [predictedEndTranslation](predictedendtranslation.md): A prediction, based on the current drag velocity, of what the final translation will be if dragging stopped now.
