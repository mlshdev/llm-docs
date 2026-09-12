> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uigesturerecognizerrepresentable/makecoordinator(converter:)](https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentable/makecoordinator(converter:))

# makeCoordinator(converter:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Creates the custom object that you use to communicate state changes from your gesture recognizer to other parts of your SwiftUI interface.

## Declaration

```swift
@MainActor @preconcurrency func makeCoordinator(converter: Self.CoordinateSpaceConverter) -> Self.Coordinator
```

## Parameters

- `converter`: A structure used to convert locations  to/from coordinate spaces in the hierarchy of the associated SwiftUI view.

<a id="discussion"></a>

## Discussion

You access the resulting coordinator via the `Context` passed into other methods in this protocol.

## Default Implementations

### UIGestureRecognizerRepresentable Implementations

- [makeCoordinator(converter:)](makecoordinator%28converter_%29-504ge.md): Conforms when `Coordinator` is `()`.
