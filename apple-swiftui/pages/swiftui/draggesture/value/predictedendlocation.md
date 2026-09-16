> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/draggesture/value/predictedendlocation

# predictedEndLocation

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A prediction, based on the current drag velocity, of where the final location will be if dragging stopped now.

## Declaration

```swift
var predictedEndLocation: CGPoint { get }
```

## See Also

### Getting 2D position

- [startLocation](startlocation.md): The location of the drag gesture’s first event.
- [location](location.md): The location of the drag gesture’s current event.
- [translation](translation.md): The total translation from the start of the drag gesture to the current event of the drag gesture.
- [predictedEndTranslation](predictedendtranslation.md): A prediction, based on the current drag velocity, of what the final translation will be if dragging stopped now.
