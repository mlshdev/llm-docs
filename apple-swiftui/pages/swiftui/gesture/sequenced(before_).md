> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/sequenced(before:)](https://developer.apple.com/documentation/swiftui/gesture/sequenced(before:))

# sequenced(before:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sequences a gesture with another one to create a new gesture, which results in the second gesture only receiving events after the first gesture succeeds.

## Declaration

```swift
@MainActor @preconcurrency func sequenced<Other>(before other: Other) -> SequenceGesture<Self, Other> where Other : Gesture
```

## Parameters

- `other`: A gesture you want to combine with another gesture to create a new, sequenced gesture.

<a id="return-value"></a>

## Return Value

A gesture that’s a sequence of two gestures.

## See Also

### Composing gestures

- [simultaneously(with:)](simultaneously%28with_%29.md): Combines a gesture with another gesture to create a new gesture that recognizes both gestures at the same time.
- [exclusively(before:)](exclusively%28before_%29.md): Combines two gestures exclusively to create a new gesture where only one gesture succeeds, giving precedence to the first gesture.
