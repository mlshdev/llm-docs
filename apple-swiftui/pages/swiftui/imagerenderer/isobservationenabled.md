> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/imagerenderer/isobservationenabled

# isObservationEnabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.0+ · watchOS 10.2+

If observers of this observed object should be notified when the produced image changes.

## Declaration

```swift
@export(implementation) final var isObservationEnabled: Bool { get set }
```

## See Also

### Producing a stream of images

- [objectWillChange](objectwillchange.md): A publisher that informs subscribers of changes to the image.
