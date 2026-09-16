> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/imagerenderer/objectwillchange

# objectWillChange

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A publisher that informs subscribers of changes to the image.

## Declaration

```swift
final let objectWillChange: PassthroughSubject<Void, Never>
```

<a id="discussion"></a>

## Discussion

The renderer’s [ObjectWillChangePublisher](https://developer.apple.com/documentation/combine/observableobject/objectwillchangepublisher) publishes `Void` elements. Subscribers should interpret any event as indicating that the contents of the image may have changed.

## See Also

### Producing a stream of images

- [isObservationEnabled](isobservationenabled.md): If observers of this observed object should be notified when the produced image changes.
